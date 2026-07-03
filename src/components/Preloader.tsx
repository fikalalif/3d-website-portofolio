"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress bar berjalan persis selama 4 detik
    gsap.to(barRef.current, {
      width: "100%",
      duration: 6, 
      ease: "power1.inOut",
      onComplete: () => {
        // Setelah 4 detik (100%), buka tirai ke atas
        const tl = gsap.timeline({
          onComplete: () => setIsDone(true)
        });
        
        tl.to(containerRef.current, {
          yPercent: -100,
          duration: 1.5,
          ease: "power4.inOut",
          borderBottomLeftRadius: "40%",
          borderBottomRightRadius: "40%",
        });
      }
    });
  }, []);

  if (isDone) return null;

  return (
    <div 
      ref={containerRef} 
      // Z-index 9000 (di bawah 9999 milik 3D Canvas)
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-end pb-20 bg-slate-950 overflow-hidden origin-top"
    >
      {/* Progress Bar Container */}
      <div className="w-64 md:w-80 h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          ref={barRef} 
          className="h-full bg-cyan-400 w-0 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
        />
      </div>
    </div>
  );
}