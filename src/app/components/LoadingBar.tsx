import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function LoadingBar({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-64 md:w-96 space-y-4">
      <div className="flex justify-between text-xs font-black uppercase tracking-widest text-black">
        <span>INITIALIZING_SYSTEM...</span>
        <span>{Math.min(100, Math.floor(progress))}%</span>
      </div>
      <div className="h-6 w-full border-4 border-black p-1 bg-white">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
      <div className="text-[10px] text-black font-black uppercase tracking-tighter text-center">
        SYSTEM CHECK // RE-ARCHITECTING INTERFACE // READY
      </div>
    </div>
  );
}
