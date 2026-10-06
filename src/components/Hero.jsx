import React, { useState, useEffect } from "react";
import { Calendar, MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Hero({ onOpenBooking }) {
  const [activeHeroImg, setActiveHeroImg] = useState("/images/av-car-care-garage.jpg");
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle parallax tracking only on desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const heroStats = [
    { label: "Dust-Free", value: "100%", sub: "Sealed Detailing Bays" },
    { label: "Surface Hardness", value: "10H", sub: "Borophene & Ceramic Bond" },
    { label: "PPF Protection", value: "Self-Healing", sub: "Optical Grade TPU" },
    { label: "Studio Standard", value: "6500K", sub: "True-Color CRI Lights" },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10 bg-[#060608]">
      {/* Background Cinematic Image with Subtle Parallax & Zoom */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0) scale(1.04)`,
        }}
      >
        <img
          src={activeHeroImg}
          alt="AV Car Care Studio - Premium Automotive Care and Detailing"
          className="w-full h-full object-cover object-[center_28%] sm:object-[center_35%] transition-all duration-1000 ease-out"
        />

        {/* Studio-Grade Dark Gradients & Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/75 to-[#060608]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/90 via-[#060608]/40 to-[#060608]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#060608_85%)]" />

        {/* Moving Red & Gold Light Streak */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#ff1a2b]/15 via-[#d4af37]/10 to-[#ff1a2b]/15 rounded-full blur-[140px] transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(calc(-50% + ${mouseOffset.x * 2}px), ${mouseOffset.y * 2}px, 0)`,
          }}
        />
      </div>

      {/* Hexagonal Pattern Overlay for Detailing Bay Ambiance */}
      <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none z-0" />

      {/* Subtle Red & Gold Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px red-gold-accent-line" />

      {/* Hero Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
        }}
      >
        {/* Top Micro-Label with Official Logo Preview */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/85 border border-[#d4af37]/30 backdrop-blur-md mb-6 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-[#ff1a2b] animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#fff3b8] via-[#e5c158] to-[#d4af37] font-bold">
            AV CAR CARE • PREMIUM AUTOMOTIVE CARE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-['Outfit'] max-w-5xl leading-[0.92]">
          YOUR CAR. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            OUR{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] via-[#e5c158] to-[#d4af37] text-gold-glow">
            PRIDE.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
          Premium automotive care, detailing and protection for cars that deserve the best.
        </p>

        {/* Key Feature Pills */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-zinc-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900/80 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff1a2b]" />
            Self-Healing TPU Film
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900/80 border border-[#d4af37]/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
            Borophene & 10H Ceramic
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900/80 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff1a2b]" />
            100% Swirl-Free Handover
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenBooking()}
            data-cursor="BOOK"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b30816] hover:from-[#ff3344] hover:to-[#d61323] shadow-xl shadow-red-950/60 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Calendar className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Book Your Detailing</span>
          </button>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20detailing%20my%20car.`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Hero Studio Switcher Pills */}
        <div className="mt-8 flex items-center gap-2 p-1.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-md">
          <span className="text-[10px] font-mono uppercase text-zinc-400 pl-3 pr-1 hidden sm:inline">
            Studio Views:
          </span>
          {[
            { label: "AV Studio Bay", src: "/images/av-car-care-garage.jpg" },
            { label: "Cleanroom Bay", src: "/images/studio-bay.jpg" },
            { label: "PPF Installation", src: "/images/ppf-application.jpg" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveHeroImg(item.src)}
              data-cursor="SWITCH"
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                activeHeroImg === item.src
                  ? "bg-[#ff1a2b] text-white font-bold shadow-md shadow-red-950/60"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-zinc-950/60 border border-white/5 backdrop-blur-sm flex flex-col items-center text-center group hover:border-[#d4af37]/40 transition-colors"
            >
              <span className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk'] tracking-tight group-hover:text-[#e5c158] transition-colors">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Scroll Indicator */}
        <a
          href="#services"
          data-cursor="EXPLORE"
          className="mt-10 inline-flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200">
            SCROLL TO EXPLORE ↓
          </span>
          <ChevronDown className="w-4 h-4 text-[#ff1a2b] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
