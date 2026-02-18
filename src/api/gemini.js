const apiKey = ""; // Set your API key via environment or replace here

const fetchGemini = async (promptParts, includeImage = null) => {
  const contents = [{ parts: promptParts }];
  if (includeImage) contents[0].parts.push({ inlineData: { mimeType: 'image/png', data: includeImage } });

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents, generationConfig: { responseMimeType: 'application/json' } })
  });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
};

export const callGeminiVision = async (base64Image, charData) => {
  const prompt = `I am a student learning Kannada from Hindi. I just wrote the Kannada character '${charData.kannada}' (which maps to Hindi '${charData.hindi}'). \n  Look at my handwriting in the image.\n  1. Rate my accuracy from 1 to 5 stars (be encouraging but honest).\n  2. Give me one specific tip to improve the shape or stroke.\n  3. Keep the response very short (max 2 sentences).\n  Output JSON format: { "rating": number, "feedback": "string" }`;

  try {
    const text = await fetchGemini([{ text: prompt }], base64Image);
    return JSON.parse(text);
  } catch (e) {
    console.error('Vision Error:', e);
    throw e;
  }
};

export const callGeminiTutor = async (charData) => {
  const prompt = `I am learning the Kannada character '${charData.kannada}' (Hindi: '${charData.hindi}').\n  1. Give me a creative visual mnemonic to remember its shape.\n  2. Give me 2 simple Kannada words starting with this letter.\n  For each word provide: - "kannada": The word in Kannada script. - "meaning": The meaning in Hindi. - "english_pronunciation": How to pronounce the Kannada word written in English letters. - "hindi_pronunciation": How to pronounce the Kannada word written in Hindi letters.\n  Output JSON format: { "mnemonic": "string", "words": [{ "kannada": "string", "meaning": "string", "english_pronunciation": "string", "hindi_pronunciation": "string" }] }`;

  try {
    const text = await fetchGemini([{ text: prompt }]);
    return JSON.parse(text);
  } catch (e) {
    console.error('Text Error:', e);
    throw e;
  }
};

export const callGeminiSimilar = async (charData) => {
  const prompt = `I am learning the Kannada character '${charData.kannada}'.\n  1. Identify ONE other Kannada character that looks VISUALLY similar to it.\n  2. Explain the main visual difference between them in a simple sentence.\n  Output JSON format: { "similar_char": "string", "difference": "string" }`;

  try {
    const text = await fetchGemini([{ text: prompt }]);
    return JSON.parse(text);
  } catch (e) {
    console.error('Similar Error:', e);
    throw e;
  }
};

export const callGeminiQuiz = async (charData) => {
  const prompt = `Create a single multiple-choice question to test a beginner's knowledge of the Kannada character '${charData.kannada}' (Hindi: '${charData.hindi}').\n  Output JSON format: { "question": "string", "options": ["string","string","string","string"], "correctIndex": number, "explanation": "string" }`;

  try {
    const text = await fetchGemini([{ text: prompt }]);
    return JSON.parse(text);
  } catch (e) {
    console.error('Quiz Error:', e);
    throw e;
  }
};

export const callGeminiUsage = async (charData) => {
  const prompt = `Generate a very simple Kannada sentence using a common word that starts with the character '${charData.kannada}' (${charData.trans}).\n  Output JSON format: { "sentence": "string", "transliteration": "string", "hindi_translation": "string", "word_used": "string" }`;

  try {
    const text = await fetchGemini([{ text: prompt }]);
    return JSON.parse(text);
  } catch (e) {
    console.error('Usage Error:', e);
    throw e;
  }
};

export default {
  callGeminiVision,
  callGeminiTutor,
  callGeminiSimilar,
  callGeminiQuiz,
  callGeminiUsage,
};
