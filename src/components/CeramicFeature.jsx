import React, { useState } from "react";
import { Sparkles, Droplets, ArrowRight, Flame, Layers } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function CeramicFeature({ onOpenBooking }) {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      label: "2D Borophene Matrix",
      detail: "Atomically dense 2D boron lattice cross-linking with clear coat, providing unmatched thermal dissipation and mechanical resistance.",
      stat: "2D Shield",
      icon: Layers,
    },
    {
      label: "115°+ Hydrophobic Angle",
      detail: "Ultra-high surface tension causes water, mud, and road grime to bead into spheres and roll off effortlessly at highway speeds.",
      stat: "115°+",
      icon: Droplets,
    },
    {
      label: "Chemical Defense (pH 2–13)",
      detail: "Completely impervious to acid rain, bird lime, tree sap, harsh road salts, and aggressive chemical fallout.",
      stat: "pH 2–13",
      icon: Flame,
    },
    {
      label: "Liquid Glass Candy Gloss",
      detail: "Dramatically enhances the optical refraction index, magnifying deep paint depth and metallic sparkle for years.",
      stat: "99.8%",
      icon: Sparkles,
    },
  ];

  return (
    <section id="ceramic" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Ambient Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px red-gold-accent-line" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#d4af37]/30 text-xs font-mono text-[#e5c158] uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            AV Car Care • Advanced Surface Chemistry
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-none">
            BOROPHENE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] via-[#e5c158] to-[#ff1a2b]">
              & CERAMIC COATING
            </span>
          </h2>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            Engineered 2D Borophene and Nano-Ceramic formulations that molecularly penetrate and bond with factory clear coats. Exceptional hydrophobic water-repellent performance, liquid candy reflections, and years of durable protection.
          </p>
        </div>

        {/* Hero Visual Display with 100% Uncropped Responsive Proportions */}
        <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl mb-12 flex flex-col group">
          {/* Image Container with Natural 16:9 Aspect Ratio on Mobile */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] lg:h-[440px] overflow-hidden bg-black">
            <img
              src="/images/borophene-coating.jpg"
              alt="AV Car Care Borophene Coating application with extreme hydrophobic water beading"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-102"
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top Badge */}
            <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono uppercase bg-black/85 backdrop-blur-md border border-[#d4af37]/35 text-[#fff0a8] font-bold">
                AV CAR CARE • BOROPHENE 2D COATING
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3e5ab]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
                Contact Angle: &gt;115°
              </span>
            </div>
          </div>

          {/* Clean Dedicated Info & Action Bar (Doesn't Obstruct the Photo) */}
          <div className="p-4 sm:p-6 bg-zinc-950/95 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#e5c158] shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base font-['Outfit']">
                  AV Car Care Borophene & Ceramic Crystallization
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  Multi-layer application with dedicated topcoat gloss booster and precision IR shortwave heat baking.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={() => onOpenBooking("Borophene Coating")}
                data-cursor="BOOK"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#b30816] hover:from-[#ff3344] hover:to-[#c70f1e] transition-colors cursor-pointer"
              >
                <span>Book Coating</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20your%20Borophene%20and%20Ceramic%20Coating%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeMetric === idx
                    ? "bg-zinc-900 border-[#d4af37] shadow-lg shadow-black"
                    : "bg-zinc-950/70 border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-['Space_Grotesk'] text-white">
                    {item.stat}
                  </span>
                  <div className={`p-2 rounded-lg ${activeMetric === idx ? "bg-[#d4af37] text-zinc-950" : "bg-zinc-900 text-zinc-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white font-['Outfit']">
                  {item.label}
                </h4>

                <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
