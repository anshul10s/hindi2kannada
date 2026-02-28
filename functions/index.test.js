/* eslint-disable max-len */
const admin = require("firebase-admin");
const test = require("firebase-functions-test")();
const nock = require("nock"); // Need to mock https

// Initialize admin app for testing
if (!admin.apps.length) {
  admin.initializeApp();
}

const myFunctions = require("./index.js");

describe("geminiProxy Caching functionality", () => {
  let req; let res;
  let db;
  const mockGeminiApiKey = "test-api-key";

  beforeAll(() => {
    process.env.GEMINI_API_KEY = mockGeminiApiKey;
    db = admin.firestore();
  });

  afterAll(() => {
    delete process.env.GEMINI_API_KEY;
    test.cleanup();
  });

  beforeEach(() => {
    // Reset mocks
    req = {
      method: "POST",
      originalUrl: "/test-endpoint?useCache=true",
      body: {test: "data"},
      headers: {origin: "http://localhost:5173"},
    };
    res = {
      set: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      writeHead: jest.fn(),
      end: jest.fn(),
      setHeader: jest.fn(),
      getHeader: jest.fn(),
    };
    nock.cleanAll();
  });

  it("should fetch from external API and cache if not in cache", async () => {
    // Mock the external Gemini API response
    const mockResponseBody = JSON.stringify({success: true, fromApi: true});
    nock("https://generativelanguage.googleapis.com")
        .post("/test-endpoint?key=" + mockGeminiApiKey)
        .reply(200, mockResponseBody, {"content-type": "application/json"});

    // Create a mock doc ref to intercept firestore sets
    let capturedSetData = null;
    const mockDocRef = {
      get: jest.fn().mockResolvedValue({exists: false}),
      set: jest.fn().mockImplementation((data) => {
        capturedSetData = data;
        return Promise.resolve();
      }),
    };
    const mockCollection = jest.spyOn(db, "collection").mockReturnValue({
      doc: jest.fn().mockReturnValue(mockDocRef),
    });

    await myFunctions.geminiProxy(req, res);

    // Wait for the asynchronous Firestore set to complete
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (mockDocRef.set.mock.calls.length > 0) {
          clearInterval(interval);
          resolve();
        }
      }, 10);

      // Timeout gracefully just in case
      setTimeout(() => {
        clearInterval(interval);
        resolve();
      }, 500);
    });

    expect(mockDocRef.get).toHaveBeenCalled();
    expect(res.writeHead).toHaveBeenCalledWith(200, expect.any(Object));
    expect(res.end).toHaveBeenCalledWith(mockResponseBody);

    // Check if it attempted to set the cache
    expect(mockDocRef.set).toHaveBeenCalled();
    expect(capturedSetData).toBeDefined();
    expect(capturedSetData.statusCode).toBe(200);
    expect(capturedSetData.body).toBe(mockResponseBody);

    mockCollection.mockRestore();
  });

  it("should serve from cache if cache hit", async () => {
    const cachedBody = JSON.stringify({success: true, fromCache: true});

    const mockDocRef = {
      get: jest.fn().mockResolvedValue({
        exists: true,
        data: () => ({
          statusCode: 200,
          headers: {"content-type": "application/json"},
          body: cachedBody,
        }),
      }),
      set: jest.fn(),
    };
    const mockCollection = jest.spyOn(db, "collection").mockReturnValue({
      doc: jest.fn().mockReturnValue(mockDocRef),
    });

    await myFunctions.geminiProxy(req, res);

    expect(mockDocRef.get).toHaveBeenCalled();
    expect(res.writeHead).toHaveBeenCalledWith(200, expect.any(Object));
    expect(res.end).toHaveBeenCalledWith(cachedBody);

    // External API should not have been called (no nock interceptors set)
    // and Set should not have been called
    expect(mockDocRef.set).not.toHaveBeenCalled();

    mockCollection.mockRestore();
  });

  it("should stream response and NOT cache if useCache param is absent", async () => {
    req = {
      method: "POST",
      originalUrl: "/test-endpoint",
      body: {stream: true},
      headers: {origin: "http://localhost:5173"},
    };

    // Mock the external Gemini API response
    const mockResponseBody = JSON.stringify({streamed: true});
    nock("https://generativelanguage.googleapis.com")
        .post("/test-endpoint?key=" + mockGeminiApiKey)
        .reply(200, mockResponseBody);

    // Mock pipe
    const mockPipe = jest.fn();
    const mockOnMessage = jest.spyOn(require("https"), "request").mockImplementation((options, cb) => {
      const mockRes = new (require("events").EventEmitter)();
      mockRes.statusCode = 200;
      mockRes.headers = {};
      mockRes.pipe = mockPipe;
      cb(mockRes);

      const reqEmitter = new (require("events").EventEmitter)();
      reqEmitter.end = jest.fn();
      reqEmitter.write = jest.fn();
      return reqEmitter;
    });

    const mockCollection = jest.spyOn(db, "collection");

    await myFunctions.geminiProxy(req, res);

    // Shouldn't even touch firestore
    expect(mockCollection).not.toHaveBeenCalled();
    expect(mockPipe).toHaveBeenCalledWith(res, {end: true});

    mockOnMessage.mockRestore();
  });
});
