import React from 'react';
import { MousePointer2, CheckCircle2 } from 'lucide-react';

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

export default CharacterCard;
