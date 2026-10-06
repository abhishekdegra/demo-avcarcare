import React, { useState, useEffect, useRef } from "react";
import { Building2, Sparkles, MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function StudioExperience({ onOpenBooking }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackHeight, setTrackHeight] = useState(480);

  // 5 Concise, High-Impact Studio Milestones
  const milestones = [
    {
      step: "01",
      title: "Dust-Free Cleanroom Bays",
      badge: "ISO Standard",
      desc: "Positive-pressure micro-filtered air prevents floating dust during TPU film laying and ceramic curing.",
    },
    {
      step: "02",
      title: "6500K CRI Hexagonal Light Canopy",
      badge: "True-Color",
      desc: "Daylight spectrum lighting array exposes micro-scratches, buffer swirls, and hazing invisible to sunlight.",
    },
    {
      step: "03",
      title: "Low-Profile Hydraulic Scissor Lifts",
      badge: "Chassis Access",
      desc: "Unobstructed 360° access for wheel barrel degreasing, lower rocker panel PPF, and underbody care.",
    },
    {
      step: "04",
      title: "Certified Master Craftsmen",
      badge: "Elite Team",
      desc: "Specialists trained in multi-stage rotary compounding, paint depth preservation, and seamless edge-wraps.",
    },
    {
      step: "05",
      title: "Executive Customer Experience",
      badge: "VIP Comfort",
      desc: "Dedicated automotive care coordinators, real-time WhatsApp progress videos, and transparent consultation.",
    },
  ];

  // Measure track height and calculate scroll position
  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setTrackHeight(trackRef.current.clientHeight);

      const start = windowHeight * 0.75;
      const end = -rect.height + windowHeight * 0.25;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const activeIndex = Math.min(
    milestones.length - 1,
    Math.floor(scrollProgress * milestones.length)
  );

  const carY = scrollProgress * Math.max(0, trackHeight - 70);

  return (
    <section id="studio" className="py-16 lg:py-28 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#d4af37]/30 text-xs font-mono text-[#e5c158] uppercase tracking-widest mb-2.5">
            <Building2 className="w-3.5 h-3.5" />
            AV Car Care Studio & Facility Standards
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
            PREMIUM CARE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] via-[#e5c158] to-[#ff1a2b]">
              PERFECT FINISH.
            </span>
          </h2>

          {/* Red & Gold accent line */}
          <div className="w-24 h-0.5 red-gold-accent-line shadow-[0_0_10px_#d4af37] my-3" />

          <p className="mt-1.5 text-base sm:text-lg font-medium text-zinc-300 italic font-['Space_Grotesk']">
            "Professional automotive care delivered with precision."
          </p>
        </div>

        {/* Dual Real Studio Image Showcase featuring official AV CAR CARE Garage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          {/* Main AV CAR CARE Facade & Studio Showcase */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl flex flex-col group">
            {/* 16:9 Responsive Image Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] overflow-hidden bg-black">
              <img
                src="/images/av-car-care-garage.jpg"
                alt="AV Car Care Studio - Premium Automotive Care, Detailing and Protection Facility"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Discreet floating top badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-black/85 backdrop-blur-md border border-[#d4af37]/40 text-[#fff0a8] font-bold">
                  Official Studio Bay
                </span>
              </div>
            </div>

            {/* Clean Info & Action Bar */}
            <div className="p-4 sm:p-5 bg-zinc-950/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e5c158] font-bold">
                  AV CAR CARE STUDIO
                </span>
                <p className="text-sm font-bold text-white font-['Outfit'] mt-0.5">
                  PREMIUM AUTOMOTIVE CARE FACILITY
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  "YOUR CAR. OUR PRIDE."
                </p>
              </div>

              <button
                onClick={() => onOpenBooking("Studio Consultation")}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff1a2b] to-[#b30816] text-xs font-mono font-bold text-white uppercase hover:from-[#ff3344] transition-colors shrink-0 w-full sm:w-auto cursor-pointer"
              >
                <span>Book Studio Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Interior Cleanroom Bay Shot */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl flex flex-col group">
            {/* 16:9 Responsive Image Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] overflow-hidden bg-black">
              <img
                src="/images/studio-bay.jpg"
                alt="AV Car Care Detailing Bay with Hexagonal High-CRI Lighting and Precision Equipment"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-black/85 backdrop-blur-md border border-[#d4af37]/40 text-[#fff0a8] font-bold">
                  6500K Canopy
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-zinc-950/95 border-t border-white/10 flex flex-col justify-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                PRECISION BAY
              </span>
              <p className="text-sm font-bold text-white font-['Outfit'] mt-0.5">
                Hexagonal High-CRI Light Canopy
              </p>
              <p className="text-xs text-zinc-400 font-mono">
                "Protect • Enhance • Maintain • Drive Better"
              </p>
            </div>
          </div>
        </div>

        {/* 🚗 INTERACTIVE BMW SCROLL ROAD ANIMATION & CONCISE 5 POINTS */}
        <div ref={containerRef} className="relative rounded-2xl bg-zinc-950/70 border border-white/10 p-4 sm:p-6 lg:p-8">
          {/* Section Sub-heading */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold">
                CRAFTSMANSHIP ROADMAP
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white font-['Outfit'] mt-0.5">
                5 STUDIO ENGINEERING PILLARS
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                Scroll to steer vehicle •{" "}
              </span>
              <span className="text-xs font-mono font-bold text-[#e5c158]">
                {Math.round(scrollProgress * 100)}% Journey
              </span>
            </div>
          </div>

          {/* Grid Layout: Vertical Road Runway Track + 5 Concise Cards */}
          <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-3 sm:gap-6 items-start relative">
            {/* The Vertical Road Runway Track */}
            <div ref={trackRef} className="relative w-full h-full min-h-[460px] flex justify-center py-2 select-none">
              {/* Road Asphalt Background Strip */}
              <div className="absolute inset-y-0 w-8 sm:w-10 bg-zinc-900/90 rounded-full border border-white/10 overflow-hidden shadow-inner">
                {/* Center Road Dash Line */}
                <div
                  className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.4) 50%, transparent 50%)",
                    backgroundSize: "2px 14px",
                  }}
                />

                {/* Laser Progress Tracer Trail behind vehicle */}
                <div
                  className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#ff1a2b]/30 via-[#d4af37] to-[#e5c158] shadow-[0_0_12px_#d4af37] transition-all duration-75"
                  style={{
                    height: `${carY + 8}px`,
                  }}
                />
              </div>

              {/* 🏎️ BMW M SPORTS CAR VECTOR (Driving Down/Up with Scroll) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-transform duration-75 ease-out"
                style={{
                  top: `${carY}px`,
                }}
              >
                <div className="relative w-9 h-[54px] sm:w-11 sm:h-[62px] filter drop-shadow-[0_4px_14px_rgba(212,175,55,0.8)] rotate-180">
                  {/* Headlight Glowing Light Beams */}
                  <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-16 sm:w-20 h-16 bg-gradient-to-b from-white/75 via-gold-500/25 to-transparent blur-[3px] pointer-events-none" />

                  <svg
                    viewBox="0 0 48 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full relative z-10"
                  >
                    {/* Rear Quad Exhaust & Diffuser */}
                    <rect x="14" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="20" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="24" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="30" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="12" y="77" width="24" height="4" rx="1.5" fill="#18181b" />

                    {/* Main Aerodynamic Car Body */}
                    <path
                      d="M12 20 C12 10, 16 3, 24 3 C32 3, 36 10, 36 20 L38 38 C41 42, 42 56, 39 74 C38 78, 34 79, 24 79 C14 79, 10 78, 9 74 C6 56, 7 42, 10 38 Z"
                      fill="#0e0e12"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                    />

                    {/* Carbon Fiber Roof & Rear Deck */}
                    <path
                      d="M14 26 C15 22, 18 19, 24 19 C30 19, 33 22, 34 26 L35 56 C34 60, 31 63, 24 63 C17 63, 14 60, 13 56 Z"
                      fill="#1a1a22"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                    />

                    {/* Front Windshield */}
                    <path
                      d="M15 26 C17 22, 20 20, 24 20 C28 20, 31 22, 33 26 L34 35 L14 35 Z"
                      fill="#27272a"
                      stroke="#ffffff"
                      strokeWidth="0.75"
                    />

                    {/* Rear Windshield */}
                    <path
                      d="M15 50 L33 50 L34 58 C31 61, 28 62, 24 62 C20 62, 17 61, 14 58 Z"
                      fill="#27272a"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.75"
                    />

                    {/* Side Mirrors */}
                    <rect x="4" y="30" width="5" height="3" rx="1.5" fill="#d4af37" />
                    <rect x="39" y="30" width="5" height="3" rx="1.5" fill="#d4af37" />

                    {/* Hood Power Dome Accent Lines */}
                    <path d="M21 7 L21 18" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" />
                    <path d="M27 7 L27 18" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" />

                    {/* Twin Grille */}
                    <rect x="18" y="3" width="5" height="2" rx="1" fill="#d4af37" />
                    <rect x="25" y="3" width="5" height="2" rx="1" fill="#d4af37" />

                    {/* Laser Headlights */}
                    <polygon points="12,5 16,4 17,7 13,8" fill="#ffffff" />
                    <polygon points="36,5 32,4 31,7 35,8" fill="#ffffff" />

                    {/* Rear LED Taillights */}
                    <path d="M12 75 L18 75 L18 77 L11 77 Z" fill="#ff1a2b" />
                    <path d="M36 75 L30 75 L30 77 L37 77 Z" fill="#ff1a2b" />

                    {/* Decal Accent on Roof */}
                    <rect x="22" y="38" width="1.5" height="12" fill="#d4af37" />
                    <rect x="23.5" y="38" width="1.5" height="12" fill="#ffffff" />
                    <rect x="25" y="38" width="1.5" height="12" fill="#ff1a2b" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 5 Concise Milestone Cards */}
            <div className="space-y-3 sm:space-y-3.5">
              {milestones.map((m, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={m.step}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 relative ${
                      isActive
                        ? "bg-zinc-900 border-[#d4af37] shadow-lg shadow-black scale-[1.01]"
                        : "bg-zinc-950/80 border-white/5 opacity-85 hover:opacity-100 hover:border-white/15"
                    }`}
                  >
                    {/* Active Indicator Strip */}
                    {isActive && (
                      <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#ff1a2b] to-[#d4af37] rounded-l-xl shadow-[0_0_8px_#d4af37]" />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-[#d4af37] text-zinc-950"
                              : "bg-zinc-900 text-zinc-400 border border-white/5"
                          }`}
                        >
                          {m.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                          {m.title}
                        </h4>
                      </div>

                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-white/5 shrink-0">
                        {m.badge}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-relaxed pl-1">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Bottom Studio Action */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping shrink-0" />
              <span>Complimentary 36-point clear coat audit with every studio visit</span>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ff1a2b] to-[#b30816] hover:from-[#ff3344] text-xs font-mono font-bold text-white uppercase transition-colors cursor-pointer"
            >
              <span>Book Studio Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
