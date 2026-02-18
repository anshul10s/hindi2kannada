import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Eraser } from 'lucide-react';

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

    const resizeObserver = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
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
    return { x: clientX - rect.left, y: clientY - rect.top };
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
    if (onClear) onClear();
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

export default WritingPad;
