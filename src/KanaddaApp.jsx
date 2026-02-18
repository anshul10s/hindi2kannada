import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { BookOpen, PenTool, ChevronLeft, RefreshCw, Eraser, Home, Info, MousePointer2, Sparkles, Loader2, Star, Check, AlertCircle, Split, Trophy, CheckCircle2, Brain, Quote, Gamepad2, ArrowRight } from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, collection, deleteDoc } from 'firebase/firestore';

// --- GEMINI API UTILS ---
const apiKey = ""; // System provides key

const callGeminiVision = async (base64Image, charData) => {
  const prompt = `I am a student learning Kannada from Hindi. I just wrote the Kannada character '${charData.kannada}' (which maps to Hindi '${charData.hindi}'). 
  Look at my handwriting in the image.
  1. Rate my accuracy from 1 to 5 stars (be encouraging but honest).
  2. Give me one specific tip to improve the shape or stroke.
  3. Keep the response very short (max 2 sentences).
  Output JSON format: { "rating": number, "feedback": "string" }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inlineData: { mimeType: "image/png", data: base64Image } }
          ]
        }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Vision Error:", error);
    throw error;
  }
};

const callGeminiTutor = async (charData) => {
  const prompt = `I am learning the Kannada character '${charData.kannada}' (Hindi: '${charData.hindi}').
  1. Give me a creative visual mnemonic to remember its shape (e.g., "It looks like a curled snake").
  2. Give me 2 simple Kannada words starting with this letter.
  For each word provide:
  - "kannada": The word in Kannada script.
  - "meaning": The meaning in Hindi.
  - "english_pronunciation": How to pronounce the Kannada word written in English letters.
  - "hindi_pronunciation": How to pronounce the Kannada word written in Hindi letters.
  Output JSON format: { "mnemonic": "string", "words": [{ "kannada": "string", "meaning": "string", "english_pronunciation": "string", "hindi_pronunciation": "string" }] }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Text Error:", error);
    throw error;
  }
};

const callGeminiSimilar = async (charData) => {
  const prompt = `I am learning the Kannada character '${charData.kannada}'.
  1. Identify ONE other Kannada character that looks **VISUALLY** similar to it (a "confusing pair").
  - **IMPORTANT**: Focus strictly on SHAPE similarity, NOT phonetic similarity. 
  - Do NOT compare 'ಇ' with 'ಈ' as they look very different.
  - Good examples: 'ವ' vs 'ಮ', 'ಪ' vs 'ಷ', 'ಬ' vs 'ಒ'.
  2. Explain the main visual difference between them in a simple sentence.
  3. If there are no very similar characters, compare it to the character it is most often confused with by beginners due to stroke style.
  Output JSON format: { "similar_char": "string", "difference": "string" }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Similar Error:", error);
    throw error;
  }
};

const callGeminiQuiz = async (charData) => {
  const prompt = `Create a single multiple-choice question to test a beginner's knowledge of the Kannada character '${charData.kannada}' (Hindi: '${charData.hindi}').
  The question could be about recognizing the shape, the sound, or a simple word.
  Output JSON format: { "question": "string", "options": ["string", "string", "string", "string"], "correctIndex": number, "explanation": "string" }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Quiz Error:", error);
    throw error;
  }
};

const callGeminiUsage = async (charData) => {
  const prompt = `Generate a very simple Kannada sentence using a common word that starts with the character '${charData.kannada}' (${charData.trans}).
  Output JSON format: { "sentence": "string", "transliteration": "string", "hindi_translation": "string", "word_used": "string" }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Usage Error:", error);
    throw error;
  }
};


// --- DATASET: Hindi to Kannada Mapping ---
const charData = [
  // Vowels (Swar)
  { id: 'v1', hindi: 'अ', kannada: 'ಅ', trans: 'a', type: 'vowel' },
  { id: 'v2', hindi: 'आ', kannada: 'ಆ', trans: 'aa', type: 'vowel' },
  { id: 'v3', hindi: 'इ', kannada: 'ಇ', trans: 'i', type: 'vowel' },
  { id: 'v4', hindi: 'ई', kannada: 'ಈ', trans: 'ii', type: 'vowel' },
  { id: 'v5', hindi: 'उ', kannada: 'ಉ', trans: 'u', type: 'vowel' },
  { id: 'v6', hindi: 'ऊ', kannada: 'ಊ', trans: 'uu', type: 'vowel' },
  { id: 'v7', hindi: 'ऋ', kannada: 'ಋ', trans: 'ru', type: 'vowel' },
  { id: 'v8', hindi: 'ए', kannada: 'ಎ', trans: 'e', type: 'vowel' },
  { id: 'v9', hindi: 'ऐ', kannada: 'ಏ', trans: 'ee', type: 'vowel' },
  { id: 'v10', hindi: 'ऐ', kannada: 'ಐ', trans: 'ai', type: 'vowel' },
  { id: 'v11', hindi: 'ओ', kannada: 'ಒ', trans: 'o', type: 'vowel' },
  { id: 'v12', hindi: 'औ', kannada: 'ಓ', trans: 'oo', type: 'vowel' },
  { id: 'v13', hindi: 'औ', kannada: 'ಔ', trans: 'au', type: 'vowel' },
  { id: 'v14', hindi: 'अं', kannada: 'ಅಂ', trans: 'am', type: 'vowel' },
  { id: 'v15', hindi: 'अः', kannada: 'ಅಃ', trans: 'ah', type: 'vowel' },

  // Consonants (Vyanjan) - Ka Varga
  { id: 'c1', hindi: 'क', kannada: 'ಕ', trans: 'ka', type: 'consonant' },
  { id: 'c2', hindi: 'ख', kannada: 'ಖ', trans: 'kha', type: 'consonant' },
  { id: 'c3', hindi: 'ग', kannada: 'ಗ', trans: 'ga', type: 'consonant' },
  { id: 'c4', hindi: 'घ', kannada: 'ಘ', trans: 'gha', type: 'consonant' },
  { id: 'c5', hindi: 'ङ', kannada: 'ಙ', trans: 'nga', type: 'consonant' },

  // Cha Varga
  { id: 'c6', hindi: 'च', kannada: 'ಚ', trans: 'cha', type: 'consonant' },
  { id: 'c7', hindi: 'छ', kannada: 'ಛ', trans: 'chha', type: 'consonant' },
  { id: 'c8', hindi: 'ज', kannada: 'ಜ', trans: 'ja', type: 'consonant' },
  { id: 'c9', hindi: 'झ', kannada: 'ಝ', trans: 'jha', type: 'consonant' },
  { id: 'c10', hindi: 'ञ', kannada: 'ಞ', trans: 'nya', type: 'consonant' },

  // Ta Varga (Retroflex)
  { id: 'c11', hindi: 'ट', kannada: 'ಟ', trans: 'ta', type: 'consonant' },
  { id: 'c12', hindi: 'ठ', kannada: 'ಠ', trans: 'tha', type: 'consonant' },
  { id: 'c13', hindi: 'ड', kannada: 'ಡ', trans: 'da', type: 'consonant' },
  { id: 'c14', hindi: 'ढ', kannada: 'ಢ', trans: 'dha', type: 'consonant' },
  { id: 'c15', hindi: 'ण', kannada: 'ಣ', trans: 'na', type: 'consonant' },

  // Ta Varga (Dental)
  { id: 'c16', hindi: 'त', kannada: 'ತ', trans: 'ta', type: 'consonant' },
  { id: 'c17', hindi: 'थ', kannada: 'ಥ', trans: 'tha', type: 'consonant' },
  { id: 'c18', hindi: 'द', kannada: 'ದ', trans: 'da', type: 'consonant' },
  { id: 'c19', hindi: 'ध', kannada: 'ಧ', trans: 'dha', type: 'consonant' },
  { id: 'c20', hindi: 'न', kannada: 'ನ', trans: 'na', type: 'consonant' },

  // Pa Varga
  { id: 'c21', hindi: 'प', kannada: 'ಪ', trans: 'pa', type: 'consonant' },
  { id: 'c22', hindi: 'फ', kannada: 'ಫ', trans: 'pha', type: 'consonant' },
  { id: 'c23', hindi: 'ब', kannada: 'ಬ', trans: 'ba', type: 'consonant' },
  { id: 'c24', hindi: 'भ', kannada: 'ಭ', trans: 'bha', type: 'consonant' },
  { id: 'c25', hindi: 'म', kannada: 'ಮ', trans: 'ma', type: 'consonant' },

  // Ya Raa La Va ...
  { id: 'c26', hindi: 'य', kannada: 'ಯ', trans: 'ya', type: 'consonant' },
  { id: 'c27', hindi: 'र', kannada: 'ರ', trans: 'ra', type: 'consonant' },
  { id: 'c28', hindi: 'ल', kannada: 'ಲ', trans: 'la', type: 'consonant' },
  { id: 'c29', hindi: 'व', kannada: 'ವ', trans: 'va', type: 'consonant' },
  { id: 'c30', hindi: 'श', kannada: 'ಶ', trans: 'sha', type: 'consonant' },
  { id: 'c31', hindi: 'ष', kannada: 'ಷ', trans: 'sha', type: 'consonant' },
  { id: 'c32', hindi: 'स', kannada: 'ಸ', trans: 'sa', type: 'consonant' },
  { id: 'c33', hindi: 'ह', kannada: 'ಹ', trans: 'ha', type: 'consonant' },
  { id: 'c34', hindi: 'ळ', kannada: 'ಳ', trans: 'la', type: 'consonant' },
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
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tCtx = tempCanvas.getContext('2d');
      
      tCtx.fillStyle = '#ffffff';
      tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tCtx.drawImage(canvas, 0, 0);
      
      return tempCanvas.toDataURL('image/png').split(',')[1];
    }
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    // Use ResizeObserver to reliably set canvas size even during/after animations
    const resizeObserver = new ResizeObserver(() => {
        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();

        // Only update if dimensions are valid to prevent 0x0 issues
        if (rect.width > 0 && rect.height > 0) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#2563eb';
            ctx.lineWidth = 12; 
            
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
        }
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [character]); 

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault(); 
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault(); 
    
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current.getContext('2d');
    ctx.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    if(onClear) onClear();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div 
        ref={containerRef}
        className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white rounded-3xl shadow-inner border border-slate-200 overflow-hidden select-none"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-9xl text-slate-200 font-bold opacity-80" style={{ fontSize: '180px', fontFamily: 'serif' }}>
            {character}
          </span>
        </div>
        
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
        />
      </div>

      <button 
        onClick={clearCanvas}
        className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors text-sm font-medium shadow-lg shadow-slate-200"
      >
        <Eraser size={16} />
        Clear Board
      </button>
    </div>
  );
});

const CharacterCard = ({ data, onClick, isCompleted }) => (
  <button 
    onClick={() => onClick(data)}
    className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm border transition-all duration-200 group relative ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-slate-100 hover:shadow-md hover:border-indigo-200'}`}
  >
    <div className="flex items-baseline gap-2 mb-2">
      <span className="text-xl text-slate-400 font-medium">{data.hindi}</span>
      <span className={`text-3xl font-bold group-hover:text-indigo-600 ${isCompleted ? 'text-green-700' : 'text-slate-800'}`}>{data.kannada}</span>
    </div>
    <span className="text-xs text-slate-500 font-mono bg-white/50 px-2 py-0.5 rounded">{data.trans}</span>
    
    {isCompleted && (
       <div className="absolute top-2 right-2">
         <CheckCircle2 size={16} className="text-green-500 fill-green-100" />
       </div>
    )}
    
    {!isCompleted && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <MousePointer2 size={12} className="text-indigo-400" />
        </div>
    )}
  </button>
);

export default function App() {
  const [view, setView] = useState('home'); 
  const [category, setCategory] = useState(null); 
  const [selectedChar, setSelectedChar] = useState(null);
  
  // AI States
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null); // 'tutor', 'similar', 'quiz', 'usage', 'feedback'
  const [aiData, setAiData] = useState({}); // Store data for current active feature
  const [error, setError] = useState(null); 
  const padRef = useRef(null);

  // Puzzle State - UPDATED for multiple attempts
  const [puzzleState, setPuzzleState] = useState({ 
    target: null, 
    options: [], 
    wrongIds: [], // Track incorrect attempts
    isSolved: false // Track if puzzle is completed
  });

  // Persistence & Cache States
  const [user, setUser] = useState(null);
  const [completedChars, setCompletedChars] = useState({});
  const [cache, setCache] = useState({ tutor: {}, similar: {}, quiz: {}, usage: {} });

  // --- FIREBASE INIT ---
  useEffect(() => {
    const firebaseConfig = JSON.parse(__firebase_config);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // --- FIREBASE SYNC ---
  useEffect(() => {
    if (!user) return;
    const db = getFirestore();
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    
    const q = collection(db, 'artifacts', appId, 'users', user.uid, 'progress');
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const progress = {};
      snapshot.forEach(doc => {
        progress[doc.id] = true;
      });
      setCompletedChars(progress);
    }, (err) => console.error("Sync error:", err));

    return () => unsubscribe();
  }, [user]);

  const toggleComplete = async () => {
    if (!user || !selectedChar) return;
    const db = getFirestore();
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const charId = selectedChar.id;
    const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'progress', charId);

    if (completedChars[charId]) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, { 
        learned: true,
        updatedAt: new Date().toISOString()
      });
    }
  };


  const getCharacters = () => {
    if (!category) return [];
    return charData.filter(c => c.type === category);
  };

  const charList = getCharacters();
  const currentIndex = selectedChar ? charList.findIndex(c => c.id === selectedChar.id) : -1;
  const prevData = currentIndex > 0 ? charList[currentIndex - 1] : null;
  const nextData = currentIndex < charList.length - 1 ? charList[currentIndex + 1] : null;

  const handleCharSelect = (char) => {
    setSelectedChar(char);
    setAiData({});
    setActiveFeature(null);
    setError(null);
    setView('practice');
  };

  const goBack = () => {
    if (view === 'practice' || view === 'puzzle') {
      setView(view === 'puzzle' ? 'home' : 'list');
      setSelectedChar(null);
      setAiData({});
      setActiveFeature(null);
      setError(null);
    } else if (view === 'list') {
      setView('home');
      setCategory(null);
    }
  };

  const nextChar = () => {
    if (nextData) handleCharSelect(nextData);
  };

  const prevChar = () => {
    if (prevData) handleCharSelect(prevData);
  };

  // --- PUZZLE LOGIC ---
  const generatePuzzle = () => {
    const randomIdx = Math.floor(Math.random() * charData.length);
    const target = charData[randomIdx];
    
    // Get 3 random unique distractors
    const options = [target];
    while(options.length < 4) {
        const randomOption = charData[Math.floor(Math.random() * charData.length)];
        if (!options.find(o => o.id === randomOption.id)) {
            options.push(randomOption);
        }
    }
    
    // Fisher-Yates Shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // RESET STATE FOR NEW PUZZLE
    setPuzzleState({
        target,
        options,
        wrongIds: [],
        isSolved: false
    });
    setView('puzzle');
  };

  const handlePuzzleSelect = (option) => {
    if (puzzleState.isSolved) return; 
    
    if (option.id === puzzleState.target.id) {
        // Correct Answer
        setPuzzleState(prev => ({
            ...prev,
            isSolved: true
        }));
    } else {
        // Incorrect Answer - Add to wrong attempts list
        setPuzzleState(prev => ({
            ...prev,
            wrongIds: [...prev.wrongIds, option.id]
        }));
    }
  };

  // --- AI HANDLERS ---
  const runAiFeature = async (featureName, apiCallFn) => {
    setError(null);
    setActiveFeature(featureName);

    // Check Cache first
    if (cache[featureName]?.[selectedChar.id]) {
      setAiData(prev => ({ ...prev, [featureName]: cache[featureName][selectedChar.id] }));
      return;
    }

    setIsAiLoading(true);
    try {
      const result = await apiCallFn(selectedChar);
      setAiData(prev => ({ ...prev, [featureName]: result }));
      setCache(prev => ({ 
        ...prev, 
        [featureName]: { ...prev[featureName], [selectedChar.id]: result } 
      }));
    } catch (e) {
      setError("Unable to load data. Please check your internet connection.");
      setActiveFeature(null);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleCheckWriting = async () => {
    if (!padRef.current) return;
    setActiveFeature('feedback');
    setIsAiLoading(true);
    setError(null);
    try {
      const b64 = padRef.current.getCanvasImage();
      const result = await callGeminiVision(b64, selectedChar);
      setAiData(prev => ({ ...prev, feedback: result }));
    } catch (e) {
      setError("Unable to analyze. Please check your internet connection.");
      setActiveFeature(null);
    } finally {
      setIsAiLoading(false);
    }
  };

  const progressCount = Object.keys(completedChars).length;
  const totalChars = charData.length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100">
      
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {view !== 'home' && (
              <button onClick={goBack} className="p-2 hover:bg-slate-100 rounded-full mr-1 transition-colors">
                <ChevronLeft size={24} className="text-slate-600" />
              </button>
            )}
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Akshara Setu
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">Learn Kannada through Hindi</p>
            </div>
          </div>
          
          <div className="flex gap-2">
           <button onClick={() => { setView('home'); setCategory(null); setSelectedChar(null); }} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
             <Home size={20} />
           </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        
        {view === 'home' && (
          <div className="space-y-8 animate-in fade-in zoom-in duration-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
               <div className="p-3 bg-green-100 text-green-600 rounded-full">
                 <Trophy size={24} />
               </div>
               <div className="flex-1">
                 <div className="flex justify-between text-sm font-medium mb-2">
                   <span className="text-slate-700">Learning Progress</span>
                   <span className="text-slate-500">{progressCount} / {totalChars} Mastered</span>
                 </div>
                 <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                   <div 
                      className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(progressCount / totalChars) * 100}%` }}
                   ></div>
                 </div>
               </div>
            </div>

            <div className="text-center space-y-2 mb-6">
              <h2 className="text-3xl font-bold text-slate-800">Choose a Category</h2>
              <p className="text-slate-500">Start your journey with vowels or consonants</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <button 
                onClick={() => { setCategory('vowel'); setView('list'); }}
                className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all text-left"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl font-serif">ಅ</span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Swar (Vowels)</h3>
                  <p className="text-slate-500 text-sm">अ - अः (15 Characters)</p>
                </div>
              </button>

              <button 
                onClick={() => { setCategory('consonant'); setView('list'); }}
                className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-orange-300 transition-all text-left"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl font-serif">ಕ</span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                    <PenTool size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Vyanjan (Consonants)</h3>
                  <p className="text-slate-500 text-sm">क - ळ (34 Characters)</p>
                </div>
              </button>
            </div>

            {/* VISUAL MATCH PUZZLE CARD */}
            <div className="mt-8">
                <button 
                  onClick={generatePuzzle}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-violet-500 to-indigo-600 p-6 rounded-2xl shadow-md border border-indigo-400 hover:shadow-xl hover:scale-[1.01] transition-all text-left"
                >
                   <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                      <Gamepad2 size={140} className="text-white transform translate-x-10 translate-y-10" />
                   </div>
                   
                   <div className="relative z-10 flex items-center gap-6">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-inner border border-white/30">
                        <Gamepad2 size={32} />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-white mb-1">Visual Match Puzzle</h3>
                       <p className="text-indigo-100 text-sm">Test your visual memory! Match Hindi characters to Kannada.</p>
                     </div>
                     <div className="ml-auto bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                        <ArrowRight className="text-white" size={24} />
                     </div>
                   </div>
                </button>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg flex items-start gap-3 text-sm text-indigo-800 mt-8 border border-indigo-100">
              <Info className="shrink-0 mt-0.5" size={16} />
              <p>
                <strong>Tip:</strong> This app is designed for pen input. Use your stylus in Practice mode to trace characters.
              </p>
            </div>
          </div>
        )}

        {view === 'puzzle' && puzzleState.target && (
            <div className="max-w-xl mx-auto animate-in fade-in zoom-in duration-300">
                <div className="text-center mb-8">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Find the Kannada match for</span>
                   <div className="mt-4 w-32 h-32 mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 flex items-center justify-center">
                      <span className="text-7xl font-serif text-slate-800">{puzzleState.target.hindi}</span>
                   </div>
                   <p className="mt-2 text-slate-400 font-mono">/{puzzleState.target.trans}/</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   {puzzleState.options.map((option) => {
                       const isWrong = puzzleState.wrongIds.includes(option.id);
                       const isCorrect = puzzleState.isSolved && option.id === puzzleState.target.id;
                       const showReveal = puzzleState.isSolved || isWrong; 

                       let stateClass = "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md";
                       
                       if (puzzleState.isSolved) {
                           if (isCorrect) {
                               stateClass = "bg-green-100 border-green-400 shadow-md ring-1 ring-green-300";
                           } else if (isWrong) {
                               stateClass = "bg-red-50 border-red-300 shadow-sm opacity-75"; 
                           } else {
                               stateClass = "bg-slate-50 border-slate-100 opacity-50"; 
                           }
                       } else if (isWrong) {
                           stateClass = "bg-red-50 border-red-300 shadow-sm"; 
                       }

                       return (
                           <button
                             key={option.id}
                             disabled={puzzleState.isSolved || isWrong}
                             onClick={() => handlePuzzleSelect(option)}
                             className={`h-32 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${stateClass}`}
                           >
                             <span className="text-5xl font-bold mb-1 text-slate-800">{option.kannada}</span>
                             {showReveal && (
                                <div className="flex flex-col items-center animate-in fade-in duration-300">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${option.id === puzzleState.target.id ? 'text-green-700' : 'text-red-500'}`}>
                                        {option.id === puzzleState.target.id ? 'Correct' : 'Incorrect'}
                                    </span>
                                    
                                    <div className="flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-sm font-medium text-slate-600">
                                        <span className="text-xs text-slate-400">is</span>
                                        <span className="font-serif text-xl font-bold">{option.hindi}</span>
                                    </div>
                                </div>
                             )}
                           </button>
                       );
                   })}
                </div>

                {puzzleState.isSolved && (
                   <div className="mt-8 flex justify-center animate-in slide-in-from-bottom-4">
                      <button 
                        onClick={generatePuzzle}
                        className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all"
                      >
                         <RefreshCw size={20} />
                         Next Question
                      </button>
                   </div>
                )}
            </div>
        )}

        {view === 'list' && (
          <div className="animate-in slide-in-from-right-8 duration-300">
             <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold capitalize">
                {category === 'vowel' ? 'Swar (Vowels)' : 'Vyanjan (Consonants)'}
              </h2>
              <span className="text-sm font-medium bg-slate-200 px-3 py-1 rounded-full text-slate-600">
                {getCharacters().length} Chars
              </span>
             </div>

             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {getCharacters().map((char) => (
                  <CharacterCard 
                    key={char.id} 
                    data={char} 
                    onClick={handleCharSelect} 
                    isCompleted={!!completedChars[char.id]}
                  />
                ))}
             </div>
          </div>
        )}

        {view === 'practice' && selectedChar && (
          <div className="animate-in slide-in-from-bottom-8 duration-300 flex flex-col items-center pb-20">
            
            <div className="w-full flex items-center justify-between mb-8 max-w-md">
              <button 
                onClick={prevChar} 
                disabled={!prevData}
                className={`group flex items-center gap-2 p-2 rounded-xl transition-all ${!prevData ? 'opacity-0 pointer-events-none' : 'hover:bg-slate-100 text-slate-500 hover:text-indigo-600'}`}
              >
                <ChevronLeft size={24} />
                {prevData && (
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium text-slate-400">Prev</span>
                    <span className="text-xl font-bold font-serif">{prevData.kannada}</span>
                  </div>
                )}
              </button>
              
              <div className="text-center">
                <h3 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Translating</h3>
                <div className="flex items-center gap-6 text-4xl font-bold">
                  <span className="text-slate-300 font-serif">{selectedChar.hindi}</span>
                  <span className="text-slate-200 text-2xl">→</span>
                  <span className="text-indigo-600 font-serif">{selectedChar.kannada}</span>
                </div>
                <p className="text-sm text-slate-400 font-mono mt-2 tracking-wide">/{selectedChar.trans}/</p>
              </div>

              <button 
                onClick={nextChar} 
                disabled={!nextData}
                className={`group flex items-center gap-2 p-2 rounded-xl transition-all ${!nextData ? 'opacity-0 pointer-events-none' : 'hover:bg-slate-100 text-slate-500 hover:text-indigo-600'}`}
              >
                {nextData && (
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium text-slate-400">Next</span>
                    <span className="text-xl font-bold font-serif">{nextData.kannada}</span>
                  </div>
                )}
                <ChevronLeft size={24} className="rotate-180" />
              </button>
            </div>

            <div className="mb-6">
               <button 
                 onClick={toggleComplete}
                 className={`flex items-center gap-2 px-6 py-2 rounded-full border shadow-sm transition-all duration-300 ${
                   completedChars[selectedChar.id] 
                   ? 'bg-green-100 border-green-300 text-green-700' 
                   : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                 }`}
               >
                 {completedChars[selectedChar.id] ? (
                   <>
                     <CheckCircle2 size={18} className="fill-green-600 text-white" />
                     <span className="font-semibold">Mastered</span>
                   </>
                 ) : (
                   <>
                     <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                     <span className="font-medium">Mark as Mastered</span>
                   </>
                 )}
               </button>
            </div>

            <div className="mb-8">
               <WritingPad 
                ref={padRef}
                character={selectedChar.kannada} 
                onClear={() => {
                   setAiData(prev => ({ ...prev, feedback: null }));
                   setActiveFeature(null);
                }} 
              />
            </div>

            <div className="w-full max-w-md space-y-6">
              
              {/* Feature Selection Grid */}
              <div className="grid grid-cols-5 gap-2">
                <button 
                  onClick={() => runAiFeature('tutor', callGeminiTutor)}
                  disabled={isAiLoading}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2 bg-white border rounded-xl transition-all group shadow-sm ${activeFeature === 'tutor' ? 'border-violet-400 bg-violet-50 ring-1 ring-violet-200' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <div className={`p-2 rounded-full transition-transform ${activeFeature === 'tutor' ? 'bg-violet-200 text-violet-700' : 'bg-violet-50 text-violet-500'}`}>
                    <Sparkles size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Explain</span>
                </button>

                 <button 
                  onClick={() => runAiFeature('similar', callGeminiSimilar)}
                  disabled={isAiLoading}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2 bg-white border rounded-xl transition-all group shadow-sm ${activeFeature === 'similar' ? 'border-amber-400 bg-amber-50 ring-1 ring-amber-200' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <div className={`p-2 rounded-full transition-transform ${activeFeature === 'similar' ? 'bg-amber-200 text-amber-700' : 'bg-amber-50 text-amber-500'}`}>
                    <Split size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Compare</span>
                </button>

                <button 
                  onClick={() => runAiFeature('usage', callGeminiUsage)}
                  disabled={isAiLoading}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2 bg-white border rounded-xl transition-all group shadow-sm ${activeFeature === 'usage' ? 'border-cyan-400 bg-cyan-50 ring-1 ring-cyan-200' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <div className={`p-2 rounded-full transition-transform ${activeFeature === 'usage' ? 'bg-cyan-200 text-cyan-700' : 'bg-cyan-50 text-cyan-500'}`}>
                    <Quote size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Sentence</span>
                </button>

                <button 
                  onClick={() => runAiFeature('quiz', callGeminiQuiz)}
                  disabled={isAiLoading}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2 bg-white border rounded-xl transition-all group shadow-sm ${activeFeature === 'quiz' ? 'border-indigo-400 bg-indigo-50 ring-1 ring-indigo-200' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <div className={`p-2 rounded-full transition-transform ${activeFeature === 'quiz' ? 'bg-indigo-200 text-indigo-700' : 'bg-indigo-50 text-indigo-500'}`}>
                    <Brain size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Test</span>
                </button>

                <button 
                  onClick={handleCheckWriting}
                  disabled={isAiLoading}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2 bg-white border rounded-xl transition-all group shadow-sm ${activeFeature === 'feedback' ? 'border-pink-400 bg-pink-50 ring-1 ring-pink-200' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  <div className={`p-2 rounded-full transition-transform ${activeFeature === 'feedback' ? 'bg-pink-200 text-pink-700' : 'bg-pink-50 text-pink-500'}`}>
                     <Check size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">Check</span>
                </button>
              </div>

              {isAiLoading && (
                <div className="flex justify-center p-8">
                  <Loader2 className="animate-spin text-slate-400" size={32} />
                </div>
              )}
              
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-sm animate-in fade-in slide-in-from-bottom-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {/* 1. TUTOR RESULT */}
              {activeFeature === 'tutor' && aiData.tutor && (
                <div className="bg-white rounded-xl p-5 border border-violet-200 shadow-md animate-in slide-in-from-bottom-2 fade-in">
                  <div className="flex items-center justify-between mb-3 text-violet-700 font-bold">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} />
                      <h3>AI Tutor</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <p className="text-xs text-violet-500 font-bold uppercase mb-1">Mnemonic</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{aiData.tutor.mnemonic}</p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase mb-2">Example Words</p>
                      <div className="space-y-2">
                        {aiData.tutor.words?.map((word, i) => (
                           <div key={i} className="flex flex-col p-3 rounded-lg border border-slate-100 bg-slate-50">
                             <div className="flex items-baseline justify-between mb-1">
                                <span className="font-bold text-lg text-slate-800">{word.kannada}</span>
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-100 text-center min-w-[4rem]">
                                  {word.meaning || word.hindi}
                                </span>
                             </div>
                             <div className="flex items-center gap-3 text-sm">
                                <span className="text-slate-600 font-mono bg-white px-1.5 rounded border border-slate-200 text-xs shadow-sm">
                                  {word.english_pronunciation}
                                </span>
                                <span className="text-slate-600 font-medium">
                                  {word.hindi_pronunciation}
                                </span>
                             </div>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. SIMILAR RESULT */}
              {activeFeature === 'similar' && aiData.similar && (
                <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-md animate-in slide-in-from-bottom-2 fade-in">
                  <div className="flex items-center justify-between mb-3 text-amber-700 font-bold">
                    <div className="flex items-center gap-2">
                       <Split size={18} />
                       <h3>Similar Characters</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-4xl font-serif text-slate-800 mb-1">{selectedChar.kannada}</div>
                      <div className="text-xs text-slate-400 uppercase">Current</div>
                    </div>
                    <div className="h-12 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-4xl font-serif text-amber-600 mb-1">{aiData.similar.similar_char}</div>
                      <div className="text-xs text-amber-500 uppercase font-bold">Similar</div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-xs text-amber-600 font-bold uppercase mb-1">The Difference</p>
                    <p className="text-slate-700 text-sm leading-relaxed">{aiData.similar.difference}</p>
                  </div>
                </div>
              )}

              {/* 3. FEEDBACK RESULT */}
              {activeFeature === 'feedback' && aiData.feedback && (
                <div className="bg-white rounded-xl p-5 border border-pink-200 shadow-md animate-in slide-in-from-bottom-2 fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-pink-700 font-bold">
                      <Check size={18} />
                      <h3>Feedback</h3>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => (
                        <Star 
                          key={s} 
                          size={16} 
                          className={s <= aiData.feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-slate-700 text-sm leading-relaxed">{aiData.feedback.feedback}</p>
                  </div>
                </div>
              )}

              {/* 4. QUIZ RESULT (NEW) */}
              {activeFeature === 'quiz' && aiData.quiz && (
                 <div className="bg-white rounded-xl p-5 border border-indigo-200 shadow-md animate-in slide-in-from-bottom-2 fade-in">
                    <div className="flex items-center gap-2 mb-4 text-indigo-700 font-bold">
                       <Brain size={18} />
                       <h3>Pop Quiz</h3>
                    </div>
                    
                    <p className="text-lg font-medium text-slate-800 mb-4">{aiData.quiz.question}</p>
                    
                    <div className="space-y-2">
                       {aiData.quiz.options.map((opt, i) => (
                         <button 
                           key={i}
                           className={`w-full text-left p-3 rounded-lg border transition-all ${
                             aiData.quiz.selected === i 
                               ? i === aiData.quiz.correctIndex 
                                 ? 'bg-green-50 border-green-300 text-green-800'
                                 : 'bg-red-50 border-red-300 text-red-800'
                               : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700'
                           }`}
                           onClick={() => {
                             if (aiData.quiz.selected !== undefined) return;
                             setAiData(prev => ({
                               ...prev,
                               quiz: { ...prev.quiz, selected: i }
                             }));
                           }}
                         >
                           <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {aiData.quiz.selected === i && (
                                i === aiData.quiz.correctIndex 
                                  ? <CheckCircle2 size={18} className="text-green-600" />
                                  : <AlertCircle size={18} className="text-red-500" />
                              )}
                           </div>
                         </button>
                       ))}
                    </div>

                    {aiData.quiz.selected !== undefined && (
                      <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
                        <strong>Explanation:</strong> {aiData.quiz.explanation}
                      </div>
                    )}
                 </div>
              )}

              {/* 5. USAGE RESULT (NEW) */}
              {activeFeature === 'usage' && aiData.usage && (
                <div className="bg-white rounded-xl p-5 border border-cyan-200 shadow-md animate-in slide-in-from-bottom-2 fade-in">
                  <div className="flex items-center gap-2 mb-4 text-cyan-700 font-bold">
                     <Quote size={18} />
                     <h3>Context Usage</h3>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-2xl text-slate-800 font-serif leading-relaxed mb-2">
                      {aiData.usage.sentence}
                    </p>
                    <p className="text-sm text-slate-500 font-mono">{aiData.usage.transliteration}</p>
                  </div>

                  <div className="bg-cyan-50 p-3 rounded-lg flex items-start gap-2">
                    <span className="text-cyan-700 font-bold shrink-0">Hindi:</span>
                    <p className="text-slate-700 text-sm">{aiData.usage.hindi_translation}</p>
                  </div>
                </div>
              )}

              {!activeFeature && !isAiLoading && (
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 text-left">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <RefreshCw size={16} className="text-indigo-500"/>
                    Writing Guide
                  </h4>
                  <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
                    <li>Kannada script is <strong>circular</strong>. Try to keep curves smooth.</li>
                    <li>Most letters start from the <strong>Top-Left</strong> or the main circle.</li>
                    <li>Write from <strong>Left to Right</strong>, then Top to Bottom.</li>
                  </ul>
                </div>
              )}

            </div>

          </div>
        )}
      </main>
    </div>
  );
}