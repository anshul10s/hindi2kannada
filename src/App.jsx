import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { BookOpen, PenTool, ChevronLeft, ChevronRight, RefreshCw, Eraser, Home, Info, MousePointer2, Sparkles, Loader2, Star, Check, AlertCircle, Split, Trophy, CheckCircle2, Brain, Quote, Gamepad2, ArrowRight, Volume2, BookHeart } from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, collection, deleteDoc } from 'firebase/firestore';

// --- GEMINI API UTILS ---
const apiKey = ""; 

const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

const pcmToWav = (pcmData, sampleRate) => {
  const buffer = new ArrayBuffer(44 + pcmData.length * 2);
  const view = new DataView(buffer);
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + pcmData.length * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); 
  view.setUint16(22, 1, true); 
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); 
  view.setUint16(32, 2, true); 
  view.setUint16(34, 16, true); 
  writeString(36, 'data');
  view.setUint32(40, pcmData.length * 2, true);
  for (let i = 0; i < pcmData.length; i++) {
    view.setInt16(44 + i * 2, pcmData[i], true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
};

// Improved TTS using Kannada script directly for accurate phonetics
const callGeminiAudio = async (kannadaChar, retryCount = 0) => {
  const payload = {
    contents: [{ parts: [{ text: kannadaChar }] }], // Sending only the Kannada letter for best results
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } }
      }
    }
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`TTS API Error: ${response.status}`);

    const result = await response.json();
    const part = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    const audioDataBase64 = part?.inlineData?.data;
    const mimeType = part?.inlineData?.mimeType;

    if (audioDataBase64 && mimeType) {
      const sampleRateMatch = mimeType.match(/rate=(\d+)/);
      const sampleRate = sampleRateMatch ? parseInt(sampleRateMatch[1], 10) : 24000;
      const pcm16 = new Int16Array(base64ToArrayBuffer(audioDataBase64));
      const wavBlob = pcmToWav(pcm16, sampleRate);
      return URL.createObjectURL(wavBlob);
    }
    throw new Error("Invalid audio response format");
  } catch (error) {
    if (retryCount < 2) {
        await new Promise(r => setTimeout(r, 1000));
        return callGeminiAudio(kannadaChar, retryCount + 1);
    }
    throw error;
  }
};

const callGeminiStory = async (charData) => {
  const prompt = `Act as a Kannada teacher. Write a short 2-sentence story for kids using character '${charData.kannada}' (${charData.trans}) prominently. 
  Output JSON format: { 
    "kannada_story": "string", 
    "hindi_script_story": "string", 
    "hindi_translation": "string" 
  }`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

const callGeminiVision = async (base64Image, charData) => {
  const prompt = `Rate handwriting of Kannada letter '${charData.kannada}' (Hindi: '${charData.hindi}') from 1-5. Give 1 tip in Hindi/English. JSON: { "rating": number, "feedback": "string" }`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType: "image/png", data: base64Image } }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

const callGeminiTutor = async (charData) => {
  const prompt = `Learning Kannada letter '${charData.kannada}'. Provide mnemonic and 2 example words. All explanations in Hindi. JSON: { "mnemonic": "string", "words": [{ "kannada": "string", "meaning": "string", "english_pronunciation": "string", "hindi_pronunciation": "string" }] }`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

const callGeminiSimilar = async (charData) => {
  const prompt = `Identify ONE similar char to Kannada '${charData.kannada}'. Explain difference in Hindi. JSON: { "similar_char": "string", "difference": "string" }`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

const callGeminiQuiz = async (charData) => {
  const prompt = `Create a MCQ for Kannada '${charData.kannada}'. Explanation in Hindi. JSON: { "question": "string", "options": ["string", "string", "string", "string"], "correctIndex": number, "explanation": "string" }`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

const callGeminiUsage = async (charData) => {
  const prompt = `Generate a simple Kannada sentence with '${charData.kannada}'. Provide Kannada sentence, Hindi script representation, and Hindi meaning. JSON: { "sentence": "string", "hindi_script_representation": "string", "transliteration": "string", "hindi_translation": "string" }.`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) { throw error; }
};

// --- DATASET ---
const charData = [
  { id: 'v1', hindi: 'अ', kannada: 'ಅ', trans: 'a', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v2', hindi: 'आ', kannada: 'ಆ', trans: 'aa', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v3', hindi: 'इ', kannada: 'ಇ', trans: 'i', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v4', hindi: 'ई', kannada: 'ಈ', trans: 'ii', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v5', hindi: 'उ', kannada: 'ಉ', trans: 'u', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v6', hindi: 'ऊ', kannada: 'ಊ', trans: 'uu', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v7', hindi: 'ऋ', kannada: 'ಋ', trans: 'ru', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v8', hindi: 'ए', kannada: 'ಎ', trans: 'e', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v9', hindi: 'ए', kannada: 'ಏ', trans: 'ee', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v10', hindi: 'ऐ', kannada: 'ಐ', trans: 'ai', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v11', hindi: 'ओ', kannada: 'ಒ', trans: 'o', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v12', hindi: 'ओ', kannada: 'ಓ', trans: 'oo', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v13', hindi: 'औ', kannada: 'ಔ', trans: 'au', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v14', hindi: 'अं', kannada: 'ಅಂ', trans: 'am', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v15', hindi: 'अः', kannada: 'ಅಃ', trans: 'ah', type: 'vowel', subgroup: 'Vowels' },
  { id: 'c1', hindi: 'क', kannada: 'ಕ', trans: 'ka', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c2', hindi: 'ख', kannada: 'ಖ', trans: 'kha', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c3', hindi: 'ग', kannada: 'ಗ', trans: 'ga', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c4', hindi: 'घ', kannada: 'ಘ', trans: 'gha', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c5', hindi: 'ङ', kannada: 'ಙ', trans: 'nga', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c6', hindi: 'च', kannada: 'ಚ', trans: 'cha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c7', hindi: 'छ', kannada: 'ಛ', trans: 'chha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c8', hindi: 'ज', kannada: 'ಜ', trans: 'ja', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c9', hindi: 'झ', kannada: 'ಝ', trans: 'jha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c10', hindi: 'ञ', kannada: 'ಞ', trans: 'nya', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c11', hindi: 'ट', kannada: 'ಟ', trans: 'ta', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c12', hindi: 'ठ', kannada: 'ಠ', trans: 'tha', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c13', hindi: 'ड', kannada: 'ಡ', trans: 'da', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c14', hindi: 'ढ', kannada: 'ಢ', trans: 'dha', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c15', hindi: 'ण', kannada: 'ಣ', trans: 'na', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c16', hindi: 'त', kannada: 'ತ', trans: 'ta', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c17', hindi: 'थ', kannada: 'ಥ', trans: 'tha', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c18', hindi: 'द', kannada: 'ದ', trans: 'da', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c19', hindi: 'ध', kannada: 'ಧ', trans: 'dha', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c20', hindi: 'न', kannada: 'ನ', trans: 'na', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c21', hindi: 'प', kannada: 'ಪ', trans: 'pa', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c22', hindi: 'ಫ', kannada: 'ಫ', trans: 'pha', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c23', hindi: 'ಬ', kannada: 'ಬ', trans: 'ba', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c24', hindi: 'ಭ', kannada: 'ಭ', trans: 'bha', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c25', hindi: 'ಮ', kannada: 'ಮ', trans: 'ma', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c26', hindi: 'ಯ', kannada: 'ಯ', trans: 'ya', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c27', hindi: 'ರ', kannada: 'ರ', trans: 'ra', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c28', hindi: 'ಲ', kannada: 'ಲ', trans: 'la', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c29', hindi: 'ವ', kannada: 'ವ', trans: 'va', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c30', hindi: 'ಶ', kannada: 'ಶ', trans: 'sha', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c31', hindi: 'ಷ', kannada: 'ಷ', trans: 'sha', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c32', hindi: 'ಸ', kannada: 'ಸ', trans: 'sa', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c33', hindi: 'ಹ', kannada: 'ಹ', trans: 'ha', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c34', hindi: 'ಳ', kannada: 'ಳ', trans: 'la', type: 'consonant', subgroup: 'Misc (अन्य)' },
];

// --- COMPONENTS ---

const WritingPad = forwardRef(({ character, onClear }, ref) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useImperativeHandle(ref, () => ({
    getCanvasImage: () => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width; tempCanvas.height = canvas.height;
      const tCtx = tempCanvas.getContext('2d');
      tCtx.fillStyle = '#ffffff'; tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tCtx.drawImage(canvas, 0, 0);
      return tempCanvas.toDataURL('image/png').split(',')[1];
    },
    clear: () => { if (canvasRef.current) canvasRef.current.getContext('2d').clearRect(0, 0, 9999, 9999); }
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const updateCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 18;
    };
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);
    updateCanvasSize();
    return () => resizeObserver.disconnect();
  }, [character]);

  const startDrawing = (e) => {
    e.preventDefault(); 
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - rect.top;
    ctx.beginPath(); ctx.moveTo(x, y); setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return; e.preventDefault();
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - rect.top;
    ctx.lineTo(x, y); ctx.stroke();
  };

  return (
    <div className="flex flex-col items-center w-full px-2 mb-4 flex-none">
      <div ref={containerRef} className="relative w-full h-[400px] sm:h-[500px] bg-white rounded-3xl shadow-lg border-2 border-indigo-100 overflow-hidden select-none">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-slate-50 font-bold" style={{ fontSize: '320px', fontFamily: 'serif' }}>{character}</span>
        </div>
        <canvas 
            ref={canvasRef} 
            onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)} 
            onMouseLeave={() => setIsDrawing(false)} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={() => setIsDrawing(false)} 
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10" 
        />
        <button 
            onClick={() => { if(canvasRef.current){canvasRef.current.getContext('2d').clearRect(0,0,9999,9999);} if(onClear)onClear(); }} 
            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur text-white rounded-full hover:bg-slate-700 transition-all text-sm font-bold shadow-2xl"
        >
            <Eraser size={18} /> Clear
        </button>
      </div>
    </div>
  );
});

const CharacterCard = ({ data, onClick, isCompleted }) => (
  <button onClick={() => onClick(data)} className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm border-2 transition-all duration-200 group relative ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-md'}`}>
    <div className="flex items-baseline gap-2 mb-1">
      <span className="text-base text-slate-400 font-medium">{data.hindi}</span>
      <span className={`text-3xl font-bold group-hover:text-indigo-600 ${isCompleted ? 'text-green-700' : 'text-slate-800'}`}>{data.kannada}</span>
    </div>
    <span className="text-xs text-slate-400 font-mono">/{data.trans}/</span>
    {isCompleted && <div className="absolute top-2 right-2"><CheckCircle2 size={16} className="text-green-500 fill-green-100" /></div>}
  </button>
);

export default function App() {
  const [view, setView] = useState('home');
  const [category, setCategory] = useState(null);
  const [selectedChar, setSelectedChar] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [aiData, setAiData] = useState({});
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [completedChars, setCompletedChars] = useState({});
  const [puzzleState, setPuzzleState] = useState({ target: null, options: [], wrongIds: [], isSolved: false });
  
  // Audio State & Cache
  const [audioCache, setAudioCache] = useState({});
  const [isAudioLoading, setIsAudioLoading] = useState(false);

  const padRef = useRef(null);
  const touchStartRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
        // Try multiple locations for the firebase config string/object.
    const rawConfig = (typeof __firebase_config !== 'undefined' && __firebase_config)
      || import.meta.env.VITE_FIREBASE_CONFIG
      || (typeof window !== 'undefined' && window.__firebase_config)
      || null;

    if (!rawConfig) {
      console.warn('Firebase config not provided. Skipping Firebase initialization.');
      return;
    }

    let firebaseConfig;
    try {
      firebaseConfig = typeof rawConfig === 'string' ? JSON.parse(rawConfig) : rawConfig;
    } catch (e) {
      console.error('Failed to parse firebase config:', e);
      return;
    }
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token);
      else await signInAnonymously(auth);
    };
    initAuth();
    onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (!user) return;
    const db = getFirestore();
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    return onSnapshot(collection(db, 'artifacts', appId, 'users', user.uid, 'progress'), (snap) => {
      const progress = {}; snap.forEach(doc => progress[doc.id] = true); setCompletedChars(progress);
    });
  }, [user]);

  // Background Audio Pre-caching Logic
  useEffect(() => {
    if (view === 'list' && category) {
      const charsToCache = charData.filter(c => c.type === category);
      const cacheQueue = async () => {
        for (const char of charsToCache) {
          if (!audioCache[char.id]) {
            try {
              const url = await callGeminiAudio(char.kannada);
              setAudioCache(prev => ({ ...prev, [char.id]: url }));
              // Throttle background requests to avoid hitting rate limits
              await new Promise(r => setTimeout(r, 2000));
            } catch (e) { console.warn("Background cache skipped for:", char.trans); }
          }
        }
      };
      cacheQueue();
    }
  }, [view, category]);

  useEffect(() => {
    if (activeFeature && resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeFeature, aiData]);

  const toggleComplete = async () => {
    if (!user || !selectedChar) return;
    const db = getFirestore();
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'progress', selectedChar.id);
    if (completedChars[selectedChar.id]) await deleteDoc(docRef);
    else await setDoc(docRef, { learned: true, updatedAt: new Date().toISOString() });
  };

  const currentList = category ? charData.filter(c => c.type === category) : charData;
  const currentIndex = selectedChar ? currentList.findIndex(c => c.id === selectedChar.id) : -1;
  const prevCharData = currentIndex > 0 ? currentList[currentIndex - 1] : null;
  const nextCharData = currentIndex < currentList.length - 1 ? currentList[currentIndex + 1] : null;

  const navigateTo = (direction) => {
    if (currentIndex === -1) return;
    let nextIdx = currentIndex + direction;
    if (nextIdx >= 0 && nextIdx < currentList.length) {
      setSelectedChar(currentList[nextIdx]);
      setAiData({}); setActiveFeature(null); setError(null);
      if (padRef.current) padRef.current.clear();
    }
  };

  const handleTouchStart = (e) => { touchStartRef.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (!touchStartRef.current || e.target.tagName === 'CANVAS') return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 70) diff > 0 ? navigateTo(1) : navigateTo(-1);
    touchStartRef.current = null;
  };

  const handleCharSelect = (char) => { setSelectedChar(char); setAiData({}); setActiveFeature(null); setError(null); setView('practice'); };
  
  const getGroupedChars = () => {
    const items = charData.filter(c => c.type === category);
    const groups = {};
    items.forEach(item => {
      if (!groups[item.subgroup]) groups[item.subgroup] = [];
      groups[item.subgroup].push(item);
    });
    return groups;
  };

  const runAi = async (feature, fn) => {
    setError(null); setActiveFeature(feature); setIsAiLoading(true);
    try { const res = await fn(selectedChar); setAiData(p => ({ ...p, [feature]: res })); }
    catch (e) { setError("AI error. Try again."); setActiveFeature(null); }
    finally { setIsAiLoading(false); }
  };

  const handlePlayAudio = async (kannadaChar) => {
    const charId = selectedChar.id;
    // Check Cache
    if (audioCache[charId]) {
        const audio = new Audio(audioCache[charId]);
        audio.play().catch(e => console.error("Playback failed:", e));
        return;
    }

    setIsAudioLoading(true);
    setError(null);
    try {
        const url = await callGeminiAudio(kannadaChar);
        setAudioCache(prev => ({ ...prev, [charId]: url }));
        const audio = new Audio(url);
        audio.play();
    } catch (e) { setError("Pronunciation unavailable."); }
    finally { setIsAudioLoading(false); }
  };

  const generatePuzzle = () => {
    const target = charData[Math.floor(Math.random() * charData.length)];
    let opts = [target];
    while(opts.length < 4) {
      const r = charData[Math.floor(Math.random() * charData.length)];
      if(!opts.find(o => o.id === r.id)) opts.push(r);
    }
    setPuzzleState({ target, options: opts.sort(() => Math.random() - 0.5), wrongIds: [], isSolved: false });
    setView('puzzle');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans select-none overflow-y-auto flex flex-col" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm px-4 h-16 flex items-center justify-between flex-none">
        <div className="flex items-center gap-2">
          {view !== 'home' && <button onClick={() => setView(view === 'list' ? 'home' : 'list')} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronLeft size={24} /></button>}
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Akshara Setu</h1>
        </div>
        <div className="flex items-center gap-3">
          {view === 'practice' && selectedChar && (
            <button onClick={toggleComplete} className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm transition-all shadow-sm ${completedChars[selectedChar.id] ? 'bg-green-50 border-green-500 text-green-700 font-bold' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
              {completedChars[selectedChar.id] ? <CheckCircle2 size={18} className="fill-green-600 text-white" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300" />}
              <span className="hidden sm:inline">Mastered</span>
            </button>
          )}
          <button onClick={() => { setView('home'); setCategory(null); setSelectedChar(null); }} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Home size={24} /></button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto w-full px-4 py-6 flex-1">
        {view === 'home' && (
          <div className="space-y-6 animate-in fade-in duration-300 pb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 flex items-center gap-5">
               <div className="p-4 bg-green-100 text-green-600 rounded-2xl"><Trophy size={28} /></div>
               <div className="flex-1">
                 <div className="flex justify-between text-sm font-bold mb-2 text-slate-500 tracking-wider">PROGRESS <span>{Object.keys(completedChars).length} / {charData.length}</span></div>
                 <div className="h-3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 transition-all duration-700 ease-out" style={{ width: `${(Object.keys(completedChars).length / charData.length) * 100}%` }}></div></div>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <button onClick={() => { setCategory('vowel'); setView('list'); }} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-indigo-400 text-left relative overflow-hidden group transition-all h-40">
                <BookOpen className="text-indigo-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Vowels (Swar)</h3>
                <p className="text-slate-500">ಅ - ಅಃ (15 Chars)</p>
                <span className="absolute bottom-1 right-2 text-9xl opacity-10 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none">ಅ</span>
              </button>
              <button onClick={() => { setCategory('consonant'); setView('list'); }} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-orange-400 text-left relative overflow-hidden group transition-all h-40">
                <PenTool className="text-orange-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Consonants</h3>
                <p className="text-slate-500">ಕ - ಳ (34 Chars)</p>
                <span className="absolute bottom-1 right-2 text-9xl opacity-10 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none">ಕ</span>
              </button>
            </div>
            <button onClick={generatePuzzle} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-2xl text-white flex items-center gap-5 shadow-xl transition-all group hover:scale-[1.01]">
              <div className="p-4 bg-white/20 rounded-2xl group-hover:rotate-12 transition-transform"><Gamepad2 size={32} /></div>
              <div className="text-left"><h4 className="font-bold text-xl">Visual Match Quiz</h4><p className="text-indigo-100">Test your recognition skills</p></div>
              <ArrowRight className="ml-auto" size={24} />
            </button>
          </div>
        )}

        {view === 'list' && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300 pb-12">
            {Object.entries(getGroupedChars()).map(([subgroup, items]) => (
              <div key={subgroup} className="space-y-4">
                <h3 className="text-base font-bold text-slate-400 uppercase tracking-widest pl-1">{subgroup}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {items.map(char => <CharacterCard key={char.id} data={char} onClick={handleCharSelect} isCompleted={!!completedChars[char.id]} />)}
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'practice' && selectedChar && (
          <div className="flex flex-col animate-in slide-in-from-bottom-4 duration-300 pb-32">
            {/* Header section with Target + Pronunciation */}
            <div className="w-full flex items-center justify-between gap-2 max-w-lg mb-8">
              <button onClick={() => navigateTo(-1)} disabled={!prevCharData} className={`w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center rounded-3xl border-2 transition-all ${!prevCharData ? 'opacity-0 pointer-events-none' : 'bg-white shadow-md hover:bg-slate-50 border-slate-200 text-indigo-400'}`}>
                <ChevronLeft size={24} />
                {prevCharData && <span className="text-xl font-serif font-bold text-slate-700">{prevCharData.kannada}</span>}
              </button>
              
              <div className="text-center flex-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-3">
                    {/* ENHANCED VISIBILITY HINDI LETTER */}
                    <span className="text-5xl text-slate-800 font-serif font-black">{selectedChar.hindi}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-7xl sm:text-9xl text-indigo-600 font-serif font-black">{selectedChar.kannada}</span>
                        {/* HERO PRONUNCIATION BUTTON */}
                        <button 
                            onClick={() => handlePlayAudio(selectedChar.kannada)}
                            disabled={isAudioLoading}
                            className={`p-3 rounded-2xl border-2 transition-all ${isAudioLoading ? 'bg-slate-100 border-slate-200 text-slate-300' : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 shadow-md scale-110'}`}
                        >
                            {isAudioLoading ? <Loader2 className="animate-spin" size={24} /> : <Volume2 size={28} />}
                        </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-base font-mono font-bold">/{selectedChar.trans}/</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-200 px-3 py-1 rounded-full">{currentIndex + 1} / {currentList.length}</span>
                  </div>
                </div>
              </div>

              <button onClick={() => navigateTo(1)} disabled={!nextCharData} className={`w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center rounded-3xl border-2 transition-all ${!nextCharData ? 'opacity-0 pointer-events-none' : 'bg-white shadow-md hover:bg-slate-50 border-slate-200 text-indigo-400'}`}>
                <ChevronRight size={24} />
                {nextCharData && <span className="text-xl font-serif font-bold text-slate-700">{nextCharData.kannada}</span>}
              </button>
            </div>

            <WritingPad ref={padRef} character={selectedChar.kannada} onClear={() => { setActiveFeature(null); setAiData({}); }} />

            <div className="w-full max-w-lg space-y-8 pt-8">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { id: 'tutor', icon: <Sparkles size={20} />, label: 'Explain', fn: () => runAi('tutor', callGeminiTutor) },
                  { id: 'story', icon: <BookHeart size={20} />, label: '✨ Story', fn: () => runAi('story', callGeminiStory) },
                  { id: 'similar', icon: <Split size={20} />, label: 'Similar', fn: () => runAi('similar', callGeminiSimilar) },
                  { id: 'usage', icon: <Quote size={20} />, label: 'Usage', fn: () => runAi('usage', callGeminiUsage) },
                  { id: 'quiz', icon: <Brain size={20} />, label: 'Quiz', fn: () => runAi('quiz', callGeminiQuiz) },
                  { id: 'feedback', icon: <Check size={20} />, label: 'Verify', fn: () => runAi('feedback', async () => callGeminiVision(padRef.current.getCanvasImage(), selectedChar)) }
                ].map(tool => (
                  <button key={tool.id} onClick={tool.fn} className={`flex flex-col items-center justify-center py-3 rounded-2xl border-2 transition-all ${activeFeature === tool.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-2 ring-indigo-200 shadow-inner' : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-300'}`}>
                    {tool.icon}<span className="text-[8px] font-black mt-1.5 uppercase tracking-widest text-center">{tool.label}</span>
                  </button>
                ))}
              </div>

              {isAiLoading && <div className="flex justify-center py-8"><Loader2 className="animate-spin text-indigo-400" size={40} /></div>}
              {error && <div className="p-4 bg-red-50 text-red-700 border-2 border-red-200 rounded-2xl text-sm flex items-center gap-3"><AlertCircle size={20}/> {error}</div>}

              {activeFeature && (
                <div ref={resultRef} className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-2xl animate-in slide-in-from-bottom-6 duration-300">
                   {activeFeature === 'tutor' && aiData.tutor && (
                     <div className="space-y-6">
                       <div>
                         <p className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Mnemonic / याद रखने का तरीका</p>
                         <p className="italic text-2xl leading-relaxed text-slate-800 font-bold">"{aiData.tutor.mnemonic}"</p>
                       </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {aiData.tutor.words?.map((w,i) => (
                           <div key={i} className="p-5 bg-indigo-50 rounded-2xl border-2 border-indigo-100">
                             <div className="font-bold text-3xl text-indigo-800">{w.kannada}</div>
                             <div className="text-xl text-indigo-900 font-black mt-2">हिंदी: {w.meaning}</div>
                             <div className="text-sm text-slate-500 mt-1 font-mono uppercase tracking-tighter">{w.english_pronunciation} / {w.hindi_pronunciation}</div>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}

                   {activeFeature === 'story' && aiData.story && (
                     <div className="space-y-6 text-center">
                        <div className="p-6 bg-violet-50 rounded-2xl border-2 border-violet-100 shadow-inner">
                          <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-4">✨ Tiny AI Story / छोटी कहानी</p>
                          <p className="text-3xl font-serif text-slate-800 font-black leading-relaxed mb-6">{aiData.story.kannada_story}</p>
                          <hr className="border-violet-100 mb-6" />
                          <p className="text-4xl text-slate-900 font-black leading-relaxed mb-3">{aiData.story.hindi_script_story}</p>
                          <p className="text-2xl text-violet-950 font-black italic mt-4 bg-white/60 p-4 rounded-2xl shadow-sm">{aiData.story.hindi_translation}</p>
                        </div>
                     </div>
                   )}

                   {activeFeature === 'usage' && aiData.usage && (
                     <div className="text-center p-4 space-y-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Kannada Sentence / कन्नड़ वाक्य</p>
                          <p className="text-3xl font-serif text-slate-800 font-black leading-tight mb-2">{aiData.usage.sentence}</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border-2 border-indigo-200 shadow-inner text-center">
                          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">Hindi Script Representation / हिंदी लिपि</p>
                          <p className="text-5xl text-slate-900 font-black leading-relaxed mb-1">{aiData.usage.hindi_script_representation}</p>
                          <p className="text-base text-slate-500 font-mono italic mt-2">/{aiData.usage.transliteration}/</p>
                        </div>
                        <div className="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-100 shadow-sm">
                          <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1">Hindi Meaning / हिंदी अर्थ</p>
                          <p className="text-3xl text-cyan-950 font-black leading-snug">{aiData.usage.hindi_translation}</p>
                        </div>
                     </div>
                   )}

                   {activeFeature === 'feedback' && aiData.feedback && (
                     <div className="flex items-start gap-6">
                       <div className="p-5 bg-pink-50 rounded-2xl text-pink-600 flex-none shadow-md border-2 border-pink-100"><Star size={40} className="fill-pink-600" /></div>
                       <div className="pt-1">
                         <p className="text-2xl font-black text-slate-800 mb-2 text-pink-700">Accuracy: {aiData.feedback.rating}/5</p>
                         <p className="text-xl text-slate-900 font-black leading-relaxed">{aiData.feedback.feedback}</p>
                       </div>
                     </div>
                   )}

                   {activeFeature === 'similar' && aiData.similar && (
                     <div className="space-y-6">
                        <p className="font-bold text-amber-600 uppercase text-xs tracking-widest">Confusing Pair / भ्रमित करने वाली जोड़ी</p>
                        <div className="flex items-center gap-6 p-6 bg-amber-50 rounded-3xl border-2 border-amber-200 justify-center shadow-inner">
                            <span className="text-7xl font-black text-slate-800">{selectedChar.kannada}</span>
                            <span className="text-slate-400 font-black text-2xl">VS</span>
                            <span className="text-7xl font-black text-amber-600">{aiData.similar.similar_char}</span>
                        </div>
                        <p className="text-2xl text-slate-950 font-black text-center italic leading-relaxed bg-amber-100/50 p-6 rounded-3xl border-2 border-amber-100">"{aiData.similar.difference}"</p>
                     </div>
                   )}

                   {activeFeature === 'quiz' && aiData.quiz && (
                      <div className="space-y-6">
                        <p className="text-2xl font-black text-slate-800">{aiData.quiz.question}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {aiData.quiz.options.map((o,i) => (
                             <button key={i} onClick={() => setAiData(p => ({ ...p, quiz: { ...p.quiz, sel: i } }))} className={`p-6 rounded-2xl border-4 text-2xl transition-all font-black shadow-sm ${aiData.quiz.sel === i ? (i === aiData.quiz.correctIndex ? 'bg-green-100 border-green-500 text-green-700 shadow-md' : 'bg-red-50 border-red-500 text-red-700') : 'bg-white border-slate-100 hover:border-indigo-400'}`}>{o}</button>
                           ))}
                        </div>
                        {aiData.quiz.sel !== undefined && (
                          <div className="p-6 bg-slate-100 rounded-2xl text-xl font-bold border-2 border-slate-200 text-slate-950 shadow-inner">{aiData.quiz.explanation}</div>
                        )}
                      </div>
                   )}
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'puzzle' && (
          <div className="max-w-md mx-auto space-y-8 animate-in fade-in duration-300 pb-12">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">MATCH KANNADA FOR</p>
              <div className="w-32 h-32 bg-white border-4 border-indigo-50 rounded-3xl mx-auto flex items-center justify-center text-7xl font-serif shadow-xl text-indigo-600 font-black">{puzzleState.target.hindi}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 px-1">
              {puzzleState.options.map(o => {
                const isSel = puzzleState.wrongIds.includes(o.id) || (puzzleState.isSolved && o.id === puzzleState.target.id);
                const isCorrect = puzzleState.isSolved && o.id === puzzleState.target.id;
                return (
                  <button key={o.id} disabled={puzzleState.isSolved} onClick={() => {
                    if(o.id === puzzleState.target.id) setPuzzleState(p => ({ ...p, isSolved: true }));
                    else setPuzzleState(p => ({ ...p, wrongIds: [...p.wrongIds, o.id] }));
                  }} className={`h-48 rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${isCorrect ? 'bg-green-100 border-green-500 shadow-md ring-4 ring-green-50' : isSel ? 'bg-red-50 border-red-200 opacity-60 scale-95' : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg'}`}>
                    <span className="text-6xl font-bold mb-3">{o.kannada}</span>
                    {isSel && (
                        <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">IS</span>
                            <span className="text-5xl font-black text-red-800 font-serif leading-none">{o.hindi}</span>
                        </div>
                    )}
                  </button>
                );
              })}
            </div>
            {puzzleState.isSolved && <button onClick={generatePuzzle} className="w-full p-6 bg-indigo-600 text-white rounded-3xl font-black text-2xl shadow-xl hover:scale-[1.02] transition-transform mb-12">Next Challenge</button>}
          </div>
        )}
      </main>
    </div>
  );
}