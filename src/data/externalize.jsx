// --- GEMINI API UTILS ---
// Read API key from Vite env or window/global
const apiKey = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY
  || (typeof window !== 'undefined' && window.__gemini_api_key)
  || (typeof __gemini_api_key !== 'undefined' && __gemini_api_key)
  || '';