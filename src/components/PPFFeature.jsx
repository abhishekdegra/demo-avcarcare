import React, { useState } from "react";
import { Shield, Sparkles, ArrowRight, ShieldCheck, Sun, Zap, Check } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function PPFFeature({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("full");

  const packages = {
    full: {
      name: "Full Body PPF Wrap",
      desc: "Complete, edge-tucked bumper-to-bumper wrap covering every painted panel. Zero exposed edges, maximum rock-chip and vandalism defense.",
      coverage: ["Front & Rear Bumpers", "Full Bonnet / Hood", "Front & Rear Fenders", "All Doors & Rocker Panels", "Roof & Rear Quarter Panels", "Side Mirrors & Headlights"],
      warranty: "7–10 Years Warranty",
    },
    front: {
      name: "Front Impact Armor",
      desc: "Concentrated protection on all high-strike highway zones prone to flying gravel, stone chips, bug acids, and road sandblasting.",
      coverage: ["Full Front Bumper", "Complete Bonnet / Hood", "Both Front Fenders", "Headlight Assemblies", "Wing Mirrors & A-Pillars"],
      warranty: "5–7 Years Warranty",
    },
    wear: {
      name: "High-Wear Track Pack",
      desc: "Targeted coverage for daily wear zones that suffer shoe scuffs, fingernail scratches, and luggage rash.",
      coverage: ["Door Cups & Edges", "Luggage Trunk Ledge", "Door Sills & Steps", "Rocker Panel Lower Strips", "Fuel Flap Area"],
      warranty: "5 Years Warranty",
    },
  };

  const featurePillars = [
    { label: "SELF HEALING", desc: "Elastomeric memory topcoat clears micro-swirls under ambient heat" },
    { label: "SCRATCH RESISTANCE", desc: "200+ micron thick optical TPU absorbs highway rock chips & road debris" },
    { label: "UV PROTECTION", desc: "Non-yellowing optical clarity protects factory paint from intense sun & fading" },
    { label: "LONG LASTING FINISH", desc: "Extended warrantied high-gloss or satin stealth protective barrier" },
  ];

  return (
    <section id="ppf" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#ff1a2b]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Immersive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large PPF Image with Technician Application */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl shadow-black/80 flex flex-col group">
              {/* 16:9 Image Container */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:h-[520px] overflow-hidden bg-black">
                <img
                  src="/images/ppf-application.jpg"
                  alt="AV Car Care Master Technicians Installing Paint Protection Film"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Elegant Display Wordmark on Image */}
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 pointer-events-none">
                  <span className="text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white/90 font-['Outfit'] block leading-[0.9]">
                    PAINT <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                      PROTECTION{" "}
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] via-[#e5c158] to-[#d4af37] text-gold-glow">
                      FILM
                    </span>
                  </span>
                </div>
              </div>

              {/* Dedicated Studio Info Bar Below Image (Does Not Cover Photo) */}
              <div className="p-3.5 sm:p-4 bg-zinc-950/95 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                    Cleanroom Installation
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 font-['Outfit']">
                    AV Car Care Studio • Cleanroom Facility
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 text-white text-[10px] sm:text-xs font-mono shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5c158]" />
                  <span>Certified TPU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Narrative & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#d4af37]/30 text-xs font-mono text-[#e5c158] uppercase tracking-widest mb-3">
                <Shield className="w-3.5 h-3.5" />
                Physical Defense Architecture
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
                PROTECT THE FINISH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2b] via-[#ff4d5a] to-[#e5c158]">
                  PRESERVE THE LOOK.
                </span>
              </h2>

              {/* Red & Gold Line */}
              <div className="w-24 h-0.5 red-gold-accent-line shadow-[0_0_10px_#ff1a2b] my-4" />

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                Our thermoplastic polyurethane (TPU) film is an invisible, optically clear sacrificial armor over your factory clear coat. Edge-wrapped with surgical precision for a virtually undetectable fit.
              </p>
            </div>

            {/* 4 Exact Feature Items */}
            <div className="space-y-3 pt-2">
              {featurePillars.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#d4af37]/30 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                      {feat.label}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Package Selector Tabs */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {Object.keys(packages).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    data-cursor="SELECT"
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === key
                        ? "bg-gradient-to-r from-[#ff1a2b] to-[#b30816] text-white font-bold shadow-md shadow-red-950/50"
                        : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {packages[key].name}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">{packages[activeTab].name}</span>
                  <span className="text-[#e5c158] font-semibold">{packages[activeTab].warranty}</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  {packages[activeTab].desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {packages[activeTab].coverage.map((c, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300">
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(`PPF - ${packages[activeTab].name}`)}
                data-cursor="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff1a2b] to-[#b30816] hover:from-[#ff3344] hover:to-[#c70f1e] transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Book PPF Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(packages[activeTab].name)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
