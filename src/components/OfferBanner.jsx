import React, { useState } from "react";
import { Sparkles, ArrowRight, X, ShieldAlert } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function OfferBanner({ onOpenBooking }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Studio Announcement" className="relative z-30 bg-gradient-to-r from-[#1a1407] via-[#241908] to-[#140608] border-b border-[#d4af37]/30 py-2.5 px-4 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gradient-to-r from-[#ff1a2b] to-[#d4af37] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3 h-3" />
            Studio Privilege
          </span>
          <p className="text-zinc-200">
            <strong className="text-[#fff0a8] font-semibold">Complimentary 36-Point Paint Audit & Decontamination</strong> with all PPF & Borophene Packages.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking("PPF (Paint Protection Film)")}
            className="hidden sm:inline-flex items-center gap-1 text-[#e5c158] hover:text-white transition-colors underline underline-offset-4 font-semibold cursor-pointer"
          >
            Claim Consultation
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setVisible(false)}
            className="text-zinc-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
