/* eslint-disable max-len */
const functions = require("firebase-functions");
const https = require("https");
const admin = require("firebase-admin");
const crypto = require("crypto");
const cors = require("cors")({ origin: true });

if (admin.apps.length === 0) {
  admin.initializeApp();
}

exports.geminiProxy = functions
  .runWith({ secrets: ["GEMINI_API_KEY"] })
  .https.onRequest(async (clientRequest, clientResponse) => {
    // 1. Handle CORS via Promise
    await new Promise((resolve) => cors(clientRequest, clientResponse, resolve));

    try {
      const db = admin.firestore();
      if (!process.env.GEMINI_API_KEY) {
        functions.logger.error("GEMINI_API_KEY secret not set.");
        clientResponse.status(500).send("API key not configured.");
        return;
      }

      const geminiApiKey = process.env.GEMINI_API_KEY;
      const geminiApiHost = "generativelanguage.googleapis.com";
      let forwardPath = clientRequest.originalUrl.replace(/^\/api/, "");

      // 2. Extract useCache flag
      const useCache = forwardPath.includes("useCache=true");
      if (useCache) {
        forwardPath = forwardPath.replace(/([?&])useCache=true(&|$)/, (match, p1, p2) => (p1 === "?" && p2 === "&" ? "?" : p2 === "&" ? "&" : ""));
      }

      const fullGeminiUrl = `https://${geminiApiHost}${forwardPath}${forwardPath.includes("?") ? "&" : "?"}key=${geminiApiKey}`;

      // 3. Prepare Request Data
      let requestData = "";
      if (clientRequest.method !== "GET" && clientRequest.body) {
        if (typeof clientRequest.body === "string") {
          requestData = clientRequest.body;
        } else if (Buffer.isBuffer(clientRequest.body)) {
          requestData = clientRequest.body.toString("utf8");
        } else {
          requestData = JSON.stringify(clientRequest.body);
        }
      }

      // 4. Cache Check (for POST requests only)
      let cacheKey = null;
      let cacheDocRef = null;

      if (useCache && clientRequest.method === "POST") {
        try {
          const hash = crypto.createHash("sha256");
          hash.update(forwardPath.split("?")[0]);
          hash.update(requestData);
          cacheKey = hash.digest("hex");
          cacheDocRef = db.collection("gemini_cache").doc(cacheKey);

          const cacheDoc = await cacheDocRef.get();
          if (cacheDoc.exists) {
            functions.logger.info(`Serving from cache: ${cacheKey}`);
            const cachedData = cacheDoc.data();
            clientResponse.writeHead(cachedData.statusCode || 200, cachedData.headers || { "Content-Type": "application/json" });
            clientResponse.end(cachedData.body);
            return;
          }
        } catch (error) {
          functions.logger.error("Error checking cache:", error);
        }
      }

      // 5. Proxy Forwarding
      const parsedUrl = new URL(fullGeminiUrl);
      const options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.pathname + parsedUrl.search,
        method: clientRequest.method,
        headers: { "Content-Type": "application/json" },
      };

      if (requestData) {
        options.headers["Content-Length"] = Buffer.byteLength(requestData);
      }

      const proxyRequest = https.request(options, (geminiResponse) => {
        // Direct pipe for non-cached requests
        if (!useCache) {
          clientResponse.writeHead(geminiResponse.statusCode, geminiResponse.headers);
          geminiResponse.pipe(clientResponse, { end: true });
          return;
        }

        let responseBody = "";
        geminiResponse.on("data", (chunk) => { responseBody += chunk; });

        geminiResponse.on("end", async () => {
          const responseHeaders = { ...geminiResponse.headers };
          if (responseHeaders["transfer-encoding"]) {
            delete responseHeaders["transfer-encoding"];
          }
          responseHeaders["content-length"] = Buffer.byteLength(responseBody);

          clientResponse.writeHead(geminiResponse.statusCode, responseHeaders);
          clientResponse.end(responseBody);

          // 6. Save to Cache if valid
          if (geminiResponse.statusCode === 200 && cacheDocRef) {
            try {
              if (forwardPath.includes("tts")) {
                const result = JSON.parse(responseBody);
                const hasAudio = result?.candidates?.[0]?.content?.parts?.some((p) => p.inlineData && p.inlineData.data);
                if (!hasAudio) {
                  functions.logger.warn(`TTS response for ${cacheKey} did not contain valid audio. Skipping cache.`);
                  return;
                }
              }

              await cacheDocRef.set({
                statusCode: geminiResponse.statusCode,
                headers: responseHeaders,
                body: responseBody,
                createdAt: Date.now(),
              });
              functions.logger.info(`Saved to cache: ${cacheKey}`);
            } catch (error) {
              functions.logger.error("Error saving to cache:", error);
            }
          }
        });
      });

      proxyRequest.on("error", (error) => {
        functions.logger.error("Proxy request error:", error);
        clientResponse.status(500).send(`Proxy error: ${error.message}`);
      });

      if (requestData) {
        proxyRequest.write(requestData);
      }
      proxyRequest.end();

    } catch (globalError) {
      functions.logger.error("Global proxy error:", globalError);
      clientResponse.status(500).send("Internal Proxy Error");
    }
  });
