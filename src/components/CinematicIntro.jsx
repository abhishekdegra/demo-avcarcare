import React, { useState, useEffect } from "react";

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: black, 1: line, 2: text, 3: sweep, 4: exit

  useEffect(() => {
    // Stage 1: Red & Gold laser line begins
    const t1 = setTimeout(() => setStage(1), 150);
    // Stage 2: Logo and branding reveal
    const t2 = setTimeout(() => setStage(2), 600);
    // Stage 3: Light sweep / flash transition
    const t3 = setTimeout(() => setStage(3), 1400);
    // Stage 4: Fade out and complete
    const t4 = setTimeout(() => {
      setStage(4);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#060608] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        stage === 4 ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background subtle noise & radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(255,26,43,0.06)_40%,transparent_70%)] pointer-events-none" />

      {/* Center Branding Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        {/* Official AV CAR CARE Logo Badge */}
        <div
          className={`relative mb-4 transition-all duration-700 ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src="/images/av-car-care-logo.jpg"
            alt="AV Car Care - Premium Automotive Care"
            className="w-44 sm:w-56 md:w-64 h-auto object-contain rounded-xl border border-white/10 shadow-2xl shadow-black drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          />
        </div>

        {/* Thin Expanding Red & Gold Laser Line */}
        <div className="relative w-64 sm:w-80 h-0.5 mb-5 overflow-hidden">
          <div
            className={`h-full red-gold-accent-line shadow-[0_0_15px_#ff1a2b] transition-all duration-700 ease-out mx-auto ${
              stage >= 1 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Main Brand Title Reveal */}
        <div
          className={`transition-all duration-700 transform ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative inline-block overflow-hidden pb-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase font-['Outfit'] flex items-center justify-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff1a8] via-[#e5c158] to-[#d4af37] text-gold-glow">
                AV
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                CAR
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2b] via-[#ff4d5a] to-[#d60012] text-glow">
                CARE
              </span>
            </h1>

            {/* Light sweep beam */}
            {stage === 3 && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 animate-[sweep_0.6s_ease-in-out_forwards] pointer-events-none" />
            )}
          </div>

          {/* Subtitle & Tagline */}
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-zinc-300 mt-2 transition-all duration-500 delay-150 ${
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            PREMIUM AUTOMOTIVE CARE
          </p>

          <p
            className={`text-[11px] font-mono tracking-[0.2em] uppercase text-[#e5c158] mt-1 transition-all duration-500 delay-200 ${
              stage >= 2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            YOUR CAR. OUR PRIDE.
          </p>
        </div>

        {/* Lower expanding red & gold accent line */}
        <div className="relative w-48 sm:w-64 h-0.5 mt-5 overflow-hidden">
          <div
            className={`h-full red-gold-accent-line shadow-[0_0_12px_#d4af37] transition-all duration-700 ease-out mx-auto ${
              stage >= 2 ? "w-full opacity-80" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
      >
        Skip Intro ⇥
      </button>
    </div>
  );
}
