import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { 
  BookOpen, PenTool, ChevronLeft, ChevronRight, RefreshCw, Eraser, 
  Home, Info, MousePointer2, Sparkles, Loader2, Star, Check, 
  AlertCircle, Split, Trophy, CheckCircle2, Brain, Quote, Hash,
  Gamepad2, ArrowRight, Volume2, BookHeart, Moon, Sun, Flame, Target, Zap, Clock,
  ArrowLeftRight
} from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, collection, deleteDoc, getDoc } from 'firebase/firestore';

// --- GEMINI API UTILS ---
// Read API key from Vite env or window/global
const apiKey = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY
  || '';

const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) { bytes[i] = binaryString.charCodeAt(i); }
  return bytes.buffer;
};

const pcmToWav = (pcmData, sampleRate) => {
  const buffer = new ArrayBuffer(44 + pcmData.length * 2);
  const view = new DataView(buffer);
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) { view.setUint8(offset + i, string.charCodeAt(i)); }
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
  for (let i = 0; i < pcmData.length; i++) { view.setInt16(44 + i * 2, pcmData[i], true); }
  return new Blob([buffer], { type: 'audio/wav' });
};

const triggerHaptic = (pattern) => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(pattern);
  }
};

const callGeminiAudio = async (kannadaChar, retryCount = 0) => {
  const payload = {
    contents: [{ parts: [{ text: kannadaChar }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
    }
  };
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    const part = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    if (part?.inlineData?.data) {
      const pcm16 = new Int16Array(base64ToArrayBuffer(part.inlineData.data));
      return URL.createObjectURL(pcmToWav(pcm16, 24000));
    }
    throw new Error("No audio");
  } catch (error) {
    if (retryCount < 2) return callGeminiAudio(kannadaChar, retryCount + 1);
    throw error;
  }
};

// --- DATASET (AUDITED FOR SCRIPT ACCURACY) ---
const charData = [
  { id: 'v1', hindi: 'अ', kannada: 'ಅ', trans: 'a', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v2', hindi: 'आ', kannada: 'ಆ', trans: 'aa', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v3', hindi: 'इ', kannada: 'ಇ', trans: 'i', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v4', hindi: 'ई', kannada: 'ಈ', trans: 'ii', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v5', hindi: 'उ', kannada: 'ಉ', trans: 'u', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v6', hindi: 'ऊ', kannada: 'ಊ', trans: 'uu', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v7', hindi: 'ऋ', kannada: 'ಋ', trans: 'ru', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v8', hindi: 'ए', kannada: 'ಎ', trans: 'e', type: 'vowel', subgroup: 'Vowels', vowelType: 'Short', isFrequent: true, isDravidianUnique: true },
  { id: 'v9', hindi: 'ए', kannada: 'ಏ', trans: 'ee', type: 'vowel', subgroup: 'Vowels', vowelType: 'Long', isFrequent: true },
  { id: 'v10', hindi: 'ऐ', kannada: 'ಐ', trans: 'ai', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v11', hindi: 'ओ', kannada: 'ಒ', trans: 'o', type: 'vowel', subgroup: 'Vowels', vowelType: 'Short', isFrequent: true, isDravidianUnique: true },
  { id: 'v12', hindi: 'ओ', kannada: 'ಓ', trans: 'oo', type: 'vowel', subgroup: 'Vowels', vowelType: 'Long', isFrequent: true },
  { id: 'v13', hindi: 'औ', kannada: 'ಔ', trans: 'au', type: 'vowel', subgroup: 'Vowels' },
  { id: 'v14', hindi: 'अं', kannada: 'ಅಂ', trans: 'am', type: 'vowel', subgroup: 'Vowels', isFrequent: true },
  { id: 'v15', hindi: 'अः', kannada: 'ಅಃ', trans: 'ah', type: 'vowel', subgroup: 'Vowels' },
  { id: 'c1', hindi: 'क', kannada: 'ಕ', trans: 'ka', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)', isFrequent: true },
  { id: 'c2', hindi: 'ख', kannada: 'ಖ', trans: 'kha', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c3', hindi: 'ग', kannada: 'ಗ', trans: 'ga', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)', isFrequent: true },
  { id: 'c4', hindi: 'घ', kannada: 'ಘ', trans: 'gha', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c5', hindi: 'ङ', kannada: 'ಙ', trans: 'nga', type: 'consonant', subgroup: 'Ka-Varga (क-वर्ग)' },
  { id: 'c6', hindi: 'च', kannada: 'ಚ', trans: 'cha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)', isFrequent: true },
  { id: 'c7', hindi: 'छ', kannada: 'ಛ', trans: 'chha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c8', hindi: 'ज', kannada: 'ಜ', trans: 'ja', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)', isFrequent: true },
  { id: 'c9', hindi: 'झ', kannada: 'ಝ', trans: 'jha', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c10', hindi: 'ञ', kannada: 'ಞ', trans: 'nya', type: 'consonant', subgroup: 'Cha-Varga (च-वर्ग)' },
  { id: 'c11', hindi: 'ट', kannada: 'ಟ', trans: 'ta', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c12', hindi: 'ठ', kannada: 'ಠ', trans: 'tha', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c13', hindi: 'ड', kannada: 'ಡ', trans: 'da', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)', isFrequent: true },
  { id: 'c14', hindi: 'ढ', kannada: 'ಢ', trans: 'dha', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c15', hindi: 'ण', kannada: 'ಣ', trans: 'na', type: 'consonant', subgroup: 'Ta-Varga (ट-वर्ग)' },
  { id: 'c16', hindi: 'त', kannada: 'ತ', trans: 'ta', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)', isFrequent: true },
  { id: 'c17', hindi: 'थ', kannada: 'ಥ', trans: 'tha', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c18', hindi: 'द', kannada: 'ದ', trans: 'da', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)', isFrequent: true },
  { id: 'c19', hindi: 'ध', kannada: 'ಧ', trans: 'dha', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)' },
  { id: 'c20', hindi: 'न', kannada: 'ನ', trans: 'na', type: 'consonant', subgroup: 'Ta-Varga (त-वर्ग)', isFrequent: true },
  { id: 'c21', hindi: 'प', kannada: 'ಪ', trans: 'pa', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)', isFrequent: true },
  { id: 'c22', hindi: 'फ', kannada: 'ಫ', trans: 'pha', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c23', hindi: 'ब', kannada: 'ಬ', trans: 'ba', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)', isFrequent: true },
  { id: 'c24', hindi: 'भ', kannada: 'ಭ', trans: 'bha', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)' },
  { id: 'c25', hindi: 'म', kannada: 'ಮ', trans: 'ma', type: 'consonant', subgroup: 'Pa-Varga (प-वर्ग)', isFrequent: true },
  { id: 'c26', hindi: 'य', kannada: 'ಯ', trans: 'ya', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c27', hindi: 'र', kannada: 'ರ', trans: 'ra', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c28', hindi: 'ल', kannada: 'ಲ', trans: 'la', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c29', hindi: 'व', kannada: 'ವ', trans: 'va', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c30', hindi: 'श', kannada: 'ಶ', trans: 'sha', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c31', hindi: 'ष', kannada: 'ಷ', trans: 'sha', type: 'consonant', subgroup: 'Misc (अन्य)' },
  { id: 'c32', hindi: 'स', kannada: 'ಸ', trans: 'sa', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c33', hindi: 'ह', kannada: 'ಹ', trans: 'ha', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true },
  { id: 'c34', hindi: 'ळ', kannada: 'ಳ', trans: 'lla', type: 'consonant', subgroup: 'Misc (अन्य)', isFrequent: true, isDravidianUnique: true },
  { id: 'c35', hindi: 'त्र', kannada: 'ತ್ರ', trans: 'tra', type: 'consonant', subgroup: 'Joint (संयुक्त)' },
  { id: 'c36', hindi: 'ज्ञ', kannada: 'ಜ್ಞ', trans: 'gya', type: 'consonant', subgroup: 'Joint (संयुक्त)' },
  { id: 'c37', hindi: 'श्र', kannada: 'ಶ್ರ', trans: 'shra', type: 'consonant', subgroup: 'Joint (संयुक्त)' },
  { id: 'n0', hindi: '०', kannada: '೦', trans: 'sonne', type: 'numeral', subgroup: 'Numerals', isFrequent: true },
  { id: 'n1', hindi: '१', kannada: '೧', trans: 'ondu', type: 'numeral', subgroup: 'Numerals', isFrequent: true },
  { id: 'n2', hindi: '२', kannada: '೨', trans: 'eradu', type: 'numeral', subgroup: 'Numerals', isFrequent: true },
  { id: 'n3', hindi: '३', kannada: '೩', trans: 'mooru', type: 'numeral', subgroup: 'Numerals' },
  { id: 'n4', hindi: '४', kannada: '೪', trans: 'naalku', type: 'numeral', subgroup: 'Numerals' },
  { id: 'n5', hindi: '५', kannada: '೫', trans: 'aidu', type: 'numeral', subgroup: 'Numerals', isFrequent: true },
  { id: 'n6', hindi: '६', kannada: '೬', trans: 'aaru', type: 'numeral', subgroup: 'Numerals' },
  { id: 'n7', hindi: '७', kannada: '೭', trans: 'elu', type: 'numeral', subgroup: 'Numerals' },
  { id: 'n8', hindi: '८', kannada: '೮', trans: 'entu', type: 'numeral', subgroup: 'Numerals' },
  { id: 'n9', hindi: '९', kannada: '೯', trans: 'ombattu', type: 'numeral', subgroup: 'Numerals' },
];

// --- COMPONENTS ---

const WritingPad = forwardRef(({ character, onClear, theme }, ref) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useImperativeHandle(ref, () => ({
    getCanvasImage: () => {
      const canvas = canvasRef.current; if (!canvas) return null;
      const tCtx = document.createElement('canvas').getContext('2d');
      tCtx.canvas.width = canvas.width; tCtx.canvas.height = canvas.height;
      tCtx.fillStyle = '#ffffff'; tCtx.fillRect(0, 0, canvas.width, canvas.height);
      tCtx.drawImage(canvas, 0, 0); return tCtx.canvas.toDataURL('image/png').split(',')[1];
    },
    clear: () => { 
      if (canvasRef.current) canvasRef.current.getContext('2d').clearRect(0, 0, 9999, 9999);
      triggerHaptic(30); 
    }
  }));

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const update = () => {
        if (!containerRef.current || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round'; ctx.lineJoin = 'round'; 
        ctx.strokeStyle = theme === 'dark' ? '#818cf8' : '#2563eb';
        ctx.lineWidth = 18;
    };
    const observer = new ResizeObserver(update);
    observer.observe(containerRef.current);
    update();
    return () => observer.disconnect();
  }, [character, theme]);

  const start = (e) => {
    e.preventDefault(); if (!canvasRef.current) return;
    triggerHaptic(15); 
    const r = canvasRef.current.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - r.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - r.top;
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath(); ctx.moveTo(x, y); setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || !canvasRef.current) return; e.preventDefault();
    const r = canvasRef.current.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - r.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - r.top;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y); ctx.stroke();
  };

  return (
    <div className="flex flex-col items-center w-full px-2 my-10 flex-none">
      <div ref={containerRef} className={`relative w-full h-[320px] sm:h-[450px] rounded-3xl shadow-lg border-2 overflow-hidden select-none ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-indigo-100'}`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className={`font-bold transition-colors ${theme === 'dark' ? 'text-slate-700' : 'text-slate-50'}`} style={{ fontSize: '260px', fontFamily: 'serif' }}>{character}</span>
        </div>
        <canvas ref={canvasRef} onMouseDown={start} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)} onMouseLeave={() => setIsDrawing(false)} onTouchStart={start} onTouchMove={draw} onTouchEnd={() => setIsDrawing(false)} className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10" />
        <button onClick={() => { if(canvasRef.current) { canvasRef.current.getContext('2d').clearRect(0,0,9999,9999); triggerHaptic(30); } if(onClear)onClear(); }} className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur text-white rounded-full text-sm font-bold shadow-2xl hover:bg-slate-700 active:scale-95 transition-all"><Eraser size={18} /> Clear</button>
      </div>
    </div>
  );
});

const CharacterCard = ({ data, onClick, isCompleted, theme }) => (
  <button onClick={() => onClick(data)} className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-3xl shadow-sm border-2 transition-all group relative ${isCompleted ? (theme === 'dark' ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200') : (theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:border-indigo-500' : 'bg-white border-slate-100 hover:border-indigo-300 shadow-md')} ${data.isFrequent ? 'ring-2 ring-amber-500/20' : ''}`}>
    {data.isFrequent && <Sparkles size={12} className="absolute top-2 left-2 text-amber-500" />}
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
        <span className={`text-xl sm:text-2xl font-serif font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{data.hindi}</span>
        <div className="relative">
          <span className={`text-4xl sm:text-5xl font-black group-hover:text-indigo-400 ${isCompleted ? 'text-green-700' : (theme === 'dark' ? 'text-slate-200' : 'text-slate-800')}`}>{data.kannada}</span>
          {data.vowelType && (
            <span className={`absolute -top-2 -right-4 text-[9px] font-black uppercase text-indigo-500 tracking-tighter`}>
                {data.vowelType === 'Short' ? '1●' : '2●'}
            </span>
          )}
          {data.isDravidianUnique && !data.vowelType && (
             <span className="absolute -top-2 -right-4 text-[8px] font-black uppercase text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-1 rounded">Unique</span>
          )}
        </div>
      </div>
      <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest ${theme === 'dark' ? 'text-slate-600' : 'text-slate-400'}`}>/{data.trans}/</span>
    </div>
    {isCompleted && <div className="absolute top-2 right-2"><CheckCircle2 size={16} className="text-green-600 fill-green-100" /></div>}
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
  const [audioCache, setAudioCache] = useState({});
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  
  const [showFrequentOnly, setShowFrequentOnly] = useState(false);
  const [puzzleQueue, setPuzzleQueue] = useState([]);
  const [puzzleMode, setPuzzleMode] = useState('hi-kn'); 
  const [puzzleState, setPuzzleState] = useState({ target: null, options: [], wrongIds: [], isSolved: false, isFirstAttempt: true, isComplete: false });
  const [puzzleStats, setPuzzleStats] = useState({ score: 0, perfectGuesses: 0, streak: 0 });

  const [theme, setTheme] = useState("light"); 
  const [streak, setStreak] = useState(0);

  const padRef = useRef(null);
  const resultRef = useRef(null);

  // Derived dataset pool (used for navigation and rounds)
  const currentFullList = category ? charData.filter(c => c.type === category) : charData;
  const currentList = currentFullList.filter(c => !showFrequentOnly || c.isFrequent);

  const currentIndex = selectedChar ? currentList.findIndex(c => c.id === selectedChar.id) : -1;
  const prevCharData = currentIndex > 0 ? currentList[currentIndex - 1] : null;
  const nextCharData = currentIndex < currentList.length - 1 ? currentList[currentIndex + 1] : null;

  useEffect(() => {
    let firebaseConfigJson;
    console.log("firebaseConfig_env", typeof __firebase_config !== 'undefined');
    if (typeof __firebase_config !== 'undefined' && __firebase_config) {
      firebaseConfigJson = __firebase_config;
    } else {
      firebaseConfigJson = import.meta.env.VITE_FIREBASE_CONFIG
      console.log("firebaseConfig", firebaseConfigJson);
    }

    if (firebaseConfigJson) {
        try {
            const app = initializeApp(JSON.parse(firebaseConfigJson));
      const auth = getAuth(app);
            const db = getFirestore(app);
            
            const initAuth = async () => { 
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token); 
        else await signInAnonymously(auth); 
      };
            initAuth(); 
            
            onAuthStateChanged(auth, setUser);

            if (user) {
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
              onSnapshot(collection(db, 'artifacts', appId, 'users', user.uid, 'progress'), (snap) => {
      const p = {}; snap.forEach(d => p[d.id] = true); setCompletedChars(p);
    });
    const streakRef = doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'stats');
    getDoc(streakRef).then(d => { if(d.exists()) setStreak(d.data().streak || 0); });
            }
        } catch (err) { 
            console.error("Firebase init failed:", err); 
            setError("Firebase initialization failed.");
        }
    }
  }, [user]);

  // RESET PUZZLE ON FREQUENT TOGGLE
  useEffect(() => {
    if (view === 'puzzle') {
        const baseSet = showFrequentOnly ? charData.filter(c => c.isFrequent) : charData;
        const shuffled = [...baseSet].sort(() => Math.random() - 0.5);
        setPuzzleQueue(shuffled);
        generatePuzzle(shuffled, puzzleMode);
    }
  }, [showFrequentOnly]);

  useEffect(() => {
    if (activeFeature && resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeFeature, aiData]);

  const handleCharSelect = (char) => { setSelectedChar(char); setAiData({}); setActiveFeature(null); setError(null); setView('practice'); };

  const getGroupedChars = () => {
    const groups = {};
    currentList.forEach(item => { if (!groups[item.subgroup]) groups[item.subgroup] = []; groups[item.subgroup].push(item); });
    return groups;
  };

  const nav = (dir) => {
    const idx = currentIndex + dir;
    if (idx >= 0 && idx < currentList.length) {
      handleCharSelect(currentList[idx]);
      if (padRef.current) padRef.current.clear();
    }
  };

  const handlePlayAudio = async (text) => {
    if (audioCache[selectedChar.id]) { new Audio(audioCache[selectedChar.id]).play(); return; }
    setIsAudioLoading(true);
    try {
        const url = await callGeminiAudio(text); setAudioCache(p => ({ ...p, [selectedChar.id]: url }));
        new Audio(url).play();
    } catch { setError("Audio failed."); } finally { setIsAudioLoading(false); }
  };

  const run = async (feat, fn) => {
    setError(null); setActiveFeature(feat); setIsAiLoading(true);
    try { const res = await fn(selectedChar); setAiData(p => ({ ...p, [feat]: res })); }
    catch { setError("AI error."); setActiveFeature(null); } finally { setIsAiLoading(false); }
  };

  const toggleMastered = async () => {
    if (!user || !selectedChar) return;
    const db = getFirestore();
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'progress', selectedChar.id);
    if (completedChars[selectedChar.id]) await deleteDoc(docRef);
    else await setDoc(docRef, { learned: true, updatedAt: new Date().toISOString() });
  };

  const startNewPuzzleRound = (mode = 'hi-kn') => {
    setPuzzleMode(mode);
    const baseSet = showFrequentOnly ? charData.filter(c => c.isFrequent) : charData;
    const shuffled = [...baseSet].sort(() => Math.random() - 0.5);
    setPuzzleQueue(shuffled); 
    generatePuzzle(shuffled, mode); 
    setView('puzzle');
  };

  const generatePuzzle = (currentQueue = puzzleQueue, mode = puzzleMode) => {
    if (currentQueue.length === 0) { setPuzzleState(p => ({ ...p, isComplete: true })); return; }
    const t = currentQueue[0]; const newQueue = currentQueue.slice(1);
    setPuzzleQueue(newQueue);
    let opts = [t];
    const pool = showFrequentOnly ? charData.filter(c => c.isFrequent) : charData;
    while(opts.length < 4) {
      const r = pool[Math.floor(Math.random() * pool.length)];
      if(!opts.find(o => o.id === r.id)) opts.push(r);
    }
    setPuzzleState({ target: t, options: opts.sort(() => Math.random() - 0.5), wrongIds: [], isSolved: false, isFirstAttempt: true, isComplete: false });
  };

  const handlePuzzleGuess = (option) => {
    if (option.id === puzzleState.target.id) {
        triggerHaptic(50);
        setPuzzleStats(prev => ({
            ...prev, score: prev.score + 2,
            perfectGuesses: prev.perfectGuesses + (puzzleState.isFirstAttempt ? 1 : 0),
            streak: prev.streak + 1
        }));
        setPuzzleState(prev => ({ ...prev, isSolved: true }));
    } else {
        triggerHaptic([100, 50, 100]);
        setPuzzleStats(prev => ({ ...prev, score: Math.max(0, prev.score - 1), streak: 0 }));
        setPuzzleState(prev => ({ ...prev, wrongIds: [...prev.wrongIds, option.id], isFirstAttempt: false }));
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 flex flex-col ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <header className={`sticky top-0 z-30 shadow-sm px-4 h-16 flex items-center justify-between flex-none border-b ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center gap-2">
          {view !== 'home' && <button onClick={() => setView(view === 'list' ? 'home' : 'list')} className="p-2 hover:bg-slate-700/50 rounded-full transition-colors"><ChevronLeft size={24} /></button>}
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">Akshara Setu</h1>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button onClick={() => setShowFrequentOnly(!showFrequentOnly)} className={`p-2 rounded-full transition-all ${showFrequentOnly ? 'bg-amber-500 text-white shadow-lg scale-110' : 'text-slate-400 hover:bg-slate-700/30'}`}>
            <Star size={20} className={showFrequentOnly ? "fill-white" : ""} />
          </button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-700/30 transition-colors">
            {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-400" />}
          </button>
          <button onClick={() => { setView('home'); setCategory(null); setSelectedChar(null); }} className="p-2 text-slate-400 hover:text-indigo-500 transition-colors"><Home size={24} /></button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto w-full px-3 py-4 flex-1 overflow-y-auto">
        {view === 'home' && (
          <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300 pb-12">
            <div className={`p-4 sm:p-6 rounded-2xl shadow-sm border-2 flex items-center gap-4 sm:gap-5 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
               <div className={`p-3 sm:p-4 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-indigo-900/30 text-indigo-400' : 'bg-green-100 text-green-600'}`}><Trophy size={24} /></div>
               <div className="flex-1">
                 <div className="flex justify-between text-[10px] sm:text-xs font-bold mb-1 sm:mb-2 text-slate-500 tracking-wider">LEARNING GOAL <span>{Object.keys(completedChars).length} / {charData.length}</span></div>
                 <div className={`h-2 sm:h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-100'}`}><div className="h-full bg-indigo-500 transition-all duration-700 ease-out" style={{ width: `${(Object.keys(completedChars).length / charData.length) * 100}%` }}></div></div>
               </div>
               <div className="flex flex-col items-center px-2 sm:px-4 border-l border-slate-700">
                  <Flame className="text-orange-500 fill-orange-500 animate-pulse" size={20} />
                  <span className="text-base sm:text-lg font-black">{streak}</span>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <button onClick={() => { setCategory('vowel'); setView('list'); }} className={`p-5 sm:p-8 rounded-3xl border-2 text-left relative overflow-hidden group transition-all h-32 sm:h-44 shadow-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:border-indigo-500' : 'bg-white border-slate-100 hover:border-indigo-400'}`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${theme === 'dark' ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}><BookOpen size={24} /></div>
                <h3 className="text-lg sm:text-xl font-bold">Vowels</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">ಅ - ಅಃ ({charData.filter(c => c.type === 'vowel' && (!showFrequentOnly || c.isFrequent)).length})</p>
                <span className={`absolute bottom-1 right-2 text-6xl sm:text-8xl opacity-5 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}>ಅ</span>
              </button>
              <button onClick={() => { setCategory('consonant'); setView('list'); }} className={`p-5 sm:p-8 rounded-3xl border-2 text-left relative overflow-hidden group transition-all h-32 sm:h-44 shadow-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:border-orange-500' : 'bg-white border-slate-100 hover:border-orange-400'}`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${theme === 'dark' ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'}`}><PenTool size={24} /></div>
                <h3 className="text-lg sm:text-xl font-bold">Consonants</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">ಕ - ಳ ({charData.filter(c => c.type === 'consonant' && (!showFrequentOnly || c.isFrequent)).length})</p>
                <span className={`absolute bottom-1 right-2 text-6xl sm:text-8xl opacity-5 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}>ಕ</span>
              </button>
              <button onClick={() => { setCategory('numeral'); setView('list'); }} className={`p-5 sm:p-8 rounded-3xl border-2 text-left relative overflow-hidden group transition-all h-32 sm:h-44 shadow-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:border-green-500' : 'bg-white border-slate-100 hover:border-green-400'}`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}><Hash size={24} /></div>
                <h3 className="text-lg sm:text-xl font-bold">Numerals</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">೦ - ೯ ({charData.filter(c => c.type === 'numeral' && (!showFrequentOnly || c.isFrequent)).length})</p>
                <span className={`absolute bottom-1 right-2 text-6xl sm:text-8xl opacity-5 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}>೧</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onClick={() => startNewPuzzleRound('hi-kn')} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 p-5 sm:p-6 rounded-3xl text-white flex items-center gap-4 shadow-2xl shadow-indigo-500/20 group hover:scale-[1.01] transition-all active:scale-95">
                    <div className="p-3 bg-white/20 rounded-2xl group-hover:rotate-12 transition-transform font-black text-xl">ಅ</div>
                    <div className="text-left"><h4 className="font-bold text-base sm:text-lg">Mastery (अ → ಅ)</h4><p className="text-[10px] sm:text-xs text-indigo-100 opacity-80">Identify Kannada from Hindi</p></div>
                    <ArrowRight className="ml-auto" size={20} />
                </button>
                <button onClick={() => startNewPuzzleRound('kn-hi')} className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 p-5 sm:p-6 rounded-3xl text-white flex items-center gap-4 shadow-2xl shadow-fuchsia-500/20 group hover:scale-[1.01] transition-all active:scale-95">
                    <div className="p-3 bg-white/20 rounded-2xl group-hover:-rotate-12 transition-transform font-black text-xl">अ</div>
                    <div className="text-left"><h4 className="font-bold text-base sm:text-lg">Reverse (ಅ → अ)</h4><p className="text-[10px] sm:text-xs text-fuchsia-100 opacity-80">Identify Hindi from Kannada</p></div>
                    <ArrowRight className="ml-auto" size={20} />
                </button>
            </div>
          </div>
        )}

        {view === 'list' && (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300 pb-12">
            {Object.entries(getGroupedChars()).map(([sub, items]) => (
              <div key={sub} className="space-y-4">
                <h3 className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest pl-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{sub}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                  {items.map(c => <CharacterCard key={c.id} data={c} onClick={handleCharSelect} isCompleted={!!completedChars[c.id]} theme={theme} />)}
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'practice' && selectedChar && (
          <div className="flex flex-col animate-in slide-in-from-bottom-4 duration-300 pb-24">
            <div className="w-full flex items-center justify-between gap-2 max-w-lg mb-4 sm:mb-8">
              <button onClick={() => nav(-1)} disabled={currentIndex <= 0} className={`w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-2xl border-2 shadow-md transition-all ${currentIndex <= 0 ? 'opacity-0 pointer-events-none' : (theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-500' : 'bg-white text-indigo-400 hover:bg-indigo-50')}`}>
                <ChevronLeft size={20} />
                {prevCharData && <span className={`text-base sm:text-xl font-serif font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>{prevCharData.kannada}</span>}
              </button>
              <div className="text-center flex-1">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                        <span className={`text-4xl sm:text-6xl font-serif font-black ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>{selectedChar.hindi}</span>
                        {selectedChar.vowelType && (
                            <div className="flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                                <Clock size={10} className="text-indigo-500" />
                                <span className="text-[10px] font-black uppercase text-indigo-500 tracking-tighter">{selectedChar.vowelType === 'Short' ? '1 Beat' : '2 Beats'}</span>
                            </div>
                        )}
                        {selectedChar.isDravidianUnique && !selectedChar.vowelType && (
                            <div className="flex items-center gap-1 bg-rose-500/10 px-2 py-0.5 rounded-full">
                                <span className="text-[10px] font-black uppercase text-rose-500 tracking-tighter">Unique Sound</span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-7xl sm:text-9xl text-indigo-500 font-serif font-black">{selectedChar.kannada}</span>
                        <button onClick={() => handlePlayAudio(selectedChar.kannada)} disabled={isAudioLoading} className={`p-2 sm:p-3 rounded-2xl border-2 transition-all shadow-md ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-indigo-400 hover:bg-slate-700' : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50'}`}>{isAudioLoading ? <Loader2 className="animate-spin" size={20} /> : <Volume2 size={24} />}</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${theme === 'dark' ? 'bg-indigo-950/40 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>/{selectedChar.trans}/</span>
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-400'}`}>{currentIndex + 1} / {currentList.length}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => nav(1)} disabled={currentIndex >= currentList.length - 1} className={`w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-2xl border-2 shadow-md transition-all ${currentIndex >= currentList.length - 1 ? 'opacity-0 pointer-events-none' : (theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-500' : 'bg-white text-indigo-400 hover:bg-indigo-50')}`}>
                <ChevronRight size={20} />
                {nextCharData && <span className={`text-base sm:text-xl font-serif font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>{nextCharData.kannada}</span>}
              </button>
            </div>

            <WritingPad ref={padRef} character={selectedChar.kannada} theme={theme} />

            <div className="w-full max-w-lg space-y-4 sm:space-y-6 pt-4 px-2">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { id: 'tutor', icon: <Sparkles size={18} />, label: 'Explain', fn: () => run('tutor', async (char) => {
                    const prompt = `Mnemonic & 2 words for Kannada '${char.kannada}'. Hindi explanations. JSON: { "mnemonic": "string", "words": [{ "kannada": "string", "meaning": "string" }] }`;
                    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                      method: 'POST', headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json" } })
                    });
                    const data = await res.json(); return JSON.parse(data.candidates[0].content.parts[0].text);
                  }) },
                  { id: 'usage', icon: <Quote size={18} />, label: 'Usage', fn: () => run('usage', callGeminiUsage) },
                  { id: 'feedback', icon: <Check size={18} />, label: 'Verify', fn: async () => run('feedback', () => callGeminiVision(padRef.current.getCanvasImage(), selectedChar)) }
                ].map(tool => (
                  <button key={tool.id} onClick={tool.fn} className={`flex flex-col items-center justify-center py-3 rounded-2xl border-2 transition-all active:scale-95 ${activeFeature === tool.id ? 'bg-indigo-50 border-indigo-400 text-white shadow-xl' : (theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500' : 'bg-white border-slate-100 text-slate-500 hover:border-indigo-300 shadow-sm')}`}>
                    {tool.icon}<span className="text-[8px] font-black mt-1 uppercase tracking-tighter">{tool.label}</span>
                  </button>
                ))}
              </div>
              {isAiLoading && <div className="flex justify-center py-4"><Loader2 className="animate-spin text-indigo-400" size={32} /></div>}
              {activeFeature && (
                <div ref={resultRef} className={`p-5 sm:p-8 rounded-[2rem] border-2 shadow-xl animate-in slide-in-from-bottom-6 duration-300 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                   {activeFeature === 'usage' && aiData.usage && (
                     <div className="text-center p-2 space-y-4">
                        <p className="text-2xl sm:text-3xl font-serif text-indigo-500 font-black">{aiData.usage.sentence}</p>
                        <div className={`p-4 rounded-[2rem] border-2 shadow-inner ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-indigo-100'}`}>
                          <p className={`text-2xl sm:text-3xl font-black leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{aiData.usage.hindi_script_representation}</p>
                        </div>
                        <div className={`p-4 rounded-2xl border-2 ${theme === 'dark' ? 'bg-indigo-900/20 border-indigo-800' : 'bg-cyan-50 border-cyan-100'}`}>
                          <p className={`text-xl sm:text-2xl font-black ${theme === 'dark' ? 'text-indigo-300' : 'text-cyan-950'}`}>{aiData.usage.hindi_translation}</p>
                        </div>
                     </div>
                   )}
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'puzzle' && (
          <div className="max-w-md mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-300 pb-32 pt-2 flex flex-col items-center">
            
            <div className="w-full px-2 pt-2">
                <div className={`h-1 w-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div 
                        className={`h-full transition-all duration-700 ease-out ${puzzleMode === 'hi-kn' ? 'bg-indigo-500' : 'bg-fuchsia-500'}`}
                        style={{ width: `${((puzzleQueue.length === 0 && puzzleState.isComplete ? 1 : (currentList.length - puzzleQueue.length) / currentList.length)) * 100}%` }}
                    />
                </div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-2 text-center">
                    Round Progress: {currentList.length - puzzleQueue.length} / {currentList.length}
                </p>
            </div>

            {puzzleState.isComplete ? (
                <div className={`w-full p-8 rounded-[2.5rem] border-2 text-center space-y-6 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl'}`}>
                    <Trophy size={40} className="mx-auto text-green-600" />
                    <h2 className="text-3xl font-black text-slate-800 dark:text-white">Round Complete!</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600">
                            <p className="text-xs uppercase font-bold text-slate-500">Score</p>
                            <p className="text-2xl font-black">{puzzleStats.score}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600">
                            <p className="text-xs uppercase font-bold text-slate-500">Perfects</p>
                            <p className="text-2xl font-black">{puzzleStats.perfectGuesses}</p>
                        </div>
                    </div>
                    <button onClick={() => startNewPuzzleRound(puzzleMode)} className={`w-full py-5 text-white rounded-3xl font-black text-xl shadow-xl transition-all active:scale-95 ${puzzleMode === 'hi-kn' ? 'bg-indigo-600' : 'bg-fuchsia-600'}`}>Start New Round</button>
                </div>
            ) : puzzleState.target && (
              <>
                <div className={`w-full grid grid-cols-3 gap-2 p-3 rounded-2xl border-2 shadow-sm ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-100'}`}>
                    <div className="flex flex-col items-center">
                        <Trophy size={14} className="text-amber-500 mb-0.5" />
                        <span className="text-base font-black">{puzzleStats.score}</span>
                        <span className="text-[8px] uppercase font-bold text-slate-500">Score</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-200 dark:border-slate-700">
                        <Target size={14} className="text-indigo-500 mb-0.5" />
                        <span className="text-base font-black">{puzzleStats.perfectGuesses}</span>
                        <span className="text-[8px] uppercase font-bold text-slate-500">Perfects</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Zap size={14} className="text-orange-500 mb-0.5" />
                        <span className="text-base font-black">{puzzleStats.streak}</span>
                        <span className="text-[8px] uppercase font-bold text-slate-500">Streak</span>
                    </div>
                </div>

                <div className="text-center w-full">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 italic text-center">
                    {puzzleMode === 'hi-kn' ? 'Identify Kannada for' : 'Identify Sound (Hindi) for'}
                  </p>
                  
                  <div className={`w-28 h-28 sm:w-36 sm:h-36 border-4 rounded-3xl mx-auto flex items-center justify-center text-7xl sm:text-8xl font-serif shadow-xl transition-all ${theme === 'dark' ? 'bg-slate-800 border-indigo-500 text-indigo-400' : 'bg-white border-indigo-100 text-indigo-600'}`}>
                    <div className="flex flex-col items-center">
                        <span>{puzzleMode === 'hi-kn' ? puzzleState.target.hindi : puzzleState.target.kannada}</span>
                        {(puzzleState.target.vowelType || (puzzleMode === 'kn-hi' && puzzleState.target.isDravidianUnique)) && (
                            <div className="flex items-center gap-0.5 text-indigo-500 -mt-2">
                                <Clock size={8} />
                                <span className="text-[9px] font-black">
                                    {puzzleState.target.vowelType === 'Short' ? '1●' : puzzleState.target.vowelType === 'Long' ? '2●' : 'Unique'}
                                </span>
                            </div>
                        )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 py-1 w-full flex-1">
                  {puzzleState.options.map(o => {
                    const isCorrect = puzzleState.isSolved && o.id === puzzleState.target.id;
                    const isWrong = puzzleState.wrongIds.includes(o.id);
                    return (
                      <button key={o.id} disabled={puzzleState.isSolved || isWrong} onClick={() => handlePuzzleGuess(o)} 
                        className={`w-full h-24 sm:h-36 rounded-2xl sm:rounded-[2rem] border-2 flex flex-col items-center justify-center transition-all ${isCorrect ? 'bg-green-500 border-green-400 text-white shadow-xl scale-105 z-10' : isWrong ? 'bg-red-50/10 border-red-500/20 opacity-40 scale-95 cursor-not-allowed' : (theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-indigo-500 shadow-lg' : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400 shadow-sm')}`}
                      >
                        <span className={`${isCorrect || isWrong ? 'text-2xl sm:text-4xl' : 'text-5xl sm:text-6xl'} font-bold mb-1 transition-all`}>
                            {puzzleMode === 'hi-kn' ? o.kannada : o.hindi}
                        </span>
                        
                        {(isCorrect || isWrong) && (
                            <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60">is</span>
                                <span className={`text-xl sm:text-4xl font-black font-serif ${isCorrect ? 'text-white' : 'text-red-700'}`}>
                                    {puzzleMode === 'hi-kn' ? o.hindi : o.kannada}
                                </span>
                            </div>
                        )}
                      </button>
                    );
                  })}
                </div>
                {puzzleState.isSolved && (
                    <div className="w-full animate-in zoom-in slide-in-from-bottom-2 duration-300 pt-2 pb-12">
                        <button onClick={() => generatePuzzle()} className={`w-full py-4 text-white rounded-3xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 ${puzzleMode === 'hi-kn' ? 'bg-indigo-600' : 'bg-fuchsia-600'}`}>Continue <ArrowRight size={20}/></button>
                    </div>
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}