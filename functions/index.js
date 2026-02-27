const functions = require("firebase-functions");
const https = require("https");

exports.geminiProxy = functions
    .runWith({secrets: ["GEMINI_API_KEY"]})
    .https.onRequest((clientRequest, clientResponse) => {
      if (!process.env.GEMINI_API_KEY) {
        functions.logger.error("GEMINI_API_KEY secret not set.");
        clientResponse.status(500).send("API key not configured.");
        return;
      }

      const geminiApiKey = process.env.GEMINI_API_KEY;
      const geminiApiHost = "generativelanguage.googleapis.com";
      const forwardPath = clientRequest.originalUrl.replace(/^\/api/, "");
      const fullGeminiUrl =
      `https://${geminiApiHost}${forwardPath}${forwardPath.includes("?") ? "&" : "?"}key=${geminiApiKey}`;

      let requestData = "";
      if (clientRequest.method !== "GET" && clientRequest.body) {
        requestData = JSON.stringify(clientRequest.body);
      }

      const options = {
        method: clientRequest.method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (requestData) {
        options.headers["Content-Length"] = Buffer.byteLength(requestData);
      }

      const proxyRequest = https.request(
          fullGeminiUrl,
          options,
          (geminiResponse) => {
            clientResponse.writeHead(
                geminiResponse.statusCode,
                geminiResponse.headers,
            );
            geminiResponse.pipe(clientResponse, {
              end: true,
            });
          },
      );

      proxyRequest.on("error", (error) => {
        functions.logger.error("Proxy request error:", error);
        clientResponse.status(500).send(`Proxy error: ${error.message}`);
      });

      if (requestData) {
        proxyRequest.write(requestData);
      }
      proxyRequest.end();
    });
