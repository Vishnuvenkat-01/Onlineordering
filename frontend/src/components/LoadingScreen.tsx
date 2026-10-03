import { useState, useEffect } from 'react';
import logoImg from '@/assets/logo.png';

interface LoadingScreenProps {
  onFinish?: () => void;
  durationMs?: number;
}

export default function LoadingScreen({ onFinish, durationMs = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          setIsDone(true);
          onFinish?.();
        }, 400); // 400ms fade transition
      }
    }, 16);

    return () => clearInterval(interval);
  }, [durationMs, onFinish]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EFECE6] transition-all duration-500 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(206, 27, 40, 0.05) 0%, rgba(239, 236, 230, 1) 70%)',
      }}
    >
      {/* Decorative ambient blurred glow behind logo */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-red/15 blur-3xl animate-pulse pointer-events-none" />

      {/* Floating subtle herbs/leaves in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/5 w-10 h-12 bg-gradient-to-br from-emerald-600 to-green-800 rounded-full blur-[1px] opacity-40 animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/5 w-12 h-14 bg-gradient-to-tr from-green-700 to-emerald-500 rounded-full blur-[1.5px] opacity-35 animate-float-reverse" />
      </div>

      {/* Logo container with animated pulse and ring */}
      <div className="relative flex flex-col items-center z-10">
        {/* Glowing animated halo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-red/20 via-amber-400/20 to-brand-red/20 animate-spin blur-md" style={{ animationDuration: '3s' }} />
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/90 p-3 shadow-2xl border-4 border-white/80 flex items-center justify-center overflow-hidden backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
            <img
              src={logoImg}
              alt="Beemans Logo"
              className="w-full h-full object-contain drop-shadow-md animate-pulse"
              style={{ animationDuration: '1.8s' }}
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-8 text-center space-y-1">
          <h2 className="text-2xl md:text-3xl font-black font-sans tracking-tight text-neutral-900">
            Beemans <span className="text-brand-red">Restaurant</span>
          </h2>
          <p className="text-xs md:text-sm font-medium text-neutral-500">
            Traditional taste served with pure அன்பு ✨
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-48 md:w-56 flex flex-col items-center gap-2">
          <div className="w-full h-1.5 bg-neutral-200/80 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-brand-red to-amber-500 rounded-full transition-all ease-out duration-75 shadow-sm shadow-brand-red/50"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-neutral-400 tracking-wider font-mono">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
