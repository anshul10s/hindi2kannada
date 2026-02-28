React project to create a webapp for learning kannada from hindi

[![Pages](https://github.com/anshul10s/hindi2kannada/actions/workflows/deploy.yml/badge.svg)](https://anshul10s.github.io/hindi2kannada/)

## Prerequisites

To run this project, especially the local backend emulators, you need the following system-level dependencies installed:

*   **Node.js**: (v18 or v20 recommended) to run the frontend Vite server and Firebase Cloud Functions.
*   **Java Runtime Environment (JRE)**: (v21 or higher) **Required exclusively for Firebase.** The Firebase emulator suite requires Java to run its local Firestore database instance. If you run `firebase emulators:start` without Java installed, you will encounter a `Could not spawn java -version` error. Alternatively, use the `.devcontainer` to automate this.

## Development Server with Local Firebase Backend

To run the application locally while testing the Firebase Cloud Function proxy for the Gemini API, you need to start both the Vite development server and the Firebase Local Emulator Suite.

1. **Start the Firebase emulators (in one terminal window):**
   ```bash
   firebase emulators:start --only functions,firestore
   ```
   This will spin up both the local Gemini API proxy function at `http://127.0.0.1:5001/kannada-setu/us-central1/geminiProxy` and the local Firestore database which the proxy relies on to cache results.

2. **Start the Vite dev server (in another terminal window):**
   ```bash
   npm run dev
   ```
   The Vite config (`vite.config.cjs`) is automatically set up to detect when it's running in `dev` mode and injects `__firebase_ai_proxy` variable pointing to the local emulator, so the frontend UI seamlessly connects to your local proxy instead of the production one.

3. **To Stop the Servers:**
   - For Vite (`npm run dev`), press `Ctrl + C` in the terminal where it's running. (Note: `npm stop` is not configured by default in Vite).
   - For the Firebase emulator, press `Ctrl + C` in its respective terminal window.
