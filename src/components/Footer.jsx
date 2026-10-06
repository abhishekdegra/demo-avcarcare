import React from "react";
import { Phone, MessageCircle, MapPin, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { STUDIO_INFO, SERVICES } from "../data/content";

export default function Footer({ onOpenBooking, onReplayIntro }) {
  return (
    <footer className="bg-[#040406] border-t border-white/10 pt-14 pb-24 md:pb-14 text-zinc-400 font-light text-sm relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto max-w-[180px] rounded-lg bg-black border border-white/10 flex items-center justify-center p-1">
                <img
                  src="/images/av-car-care-logo.jpg"
                  alt="AV Car Care - Premium Automotive Care"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div>
                <span className="font-extrabold tracking-wider text-xl text-white font-['Outfit']">
                  AV <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] to-[#d4af37]">CAR CARE</span>
                </span>
                <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                  PREMIUM AUTOMOTIVE CARE
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              AV Car Care is a premier automotive studio engineered for vehicle collectors and daily drivers who demand laboratory-grade paint protection, 2D borophene & 10H ceramic coatings, certified TPU film installations, and bespoke interior restoration.
            </p>

            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ff1a2b] hover:text-[#ff3b4b] hover:border-[#ff1a2b]/50 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* PARALLEL 2-COLUMN GRID ON MOBILE & DESKTOP: Explore & Services */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold mb-3 border-b border-white/5 pb-1">
                Explore
              </h4>
              <ul className="space-y-1.5 text-xs font-mono">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#ppf" className="hover:text-white transition-colors">PPF Armor</a></li>
                <li><a href="#ceramic" className="hover:text-white transition-colors">Borophene & Ceramic</a></li>
                <li><a href="#before-after" className="hover:text-white transition-colors">Before / After</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">4-Step Process</a></li>
                <li><a href="#studio" className="hover:text-white transition-colors">The Studio</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Standards</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services Catalog */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold mb-3 border-b border-white/5 pb-1">
                Services
              </h4>
              <ul className="space-y-1.5 text-xs font-mono">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onOpenBooking(s.name)}
                      className="hover:text-[#e5c158] transition-colors text-left cursor-pointer"
                    >
                      {s.name.split("(")[0]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Studio Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold mb-3 border-b border-white/5 pb-1">
              Studio Hotline
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-zinc-300">
                AV Car Care Studio
              </p>
              <p className="text-zinc-400 font-mono">
                {STUDIO_INFO.hours}
              </p>
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                className="text-white hover:text-[#d4af37] transition-colors font-mono font-bold block text-sm"
              >
                {STUDIO_INFO.phone}
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-white/10 text-[11px] font-mono text-[#e5c158] hover:text-white hover:border-[#d4af37]/40 transition-colors cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Final Lines */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} AV Car Care. All rights reserved.</span>
            {onReplayIntro && (
              <>
                <span>•</span>
                <button
                  onClick={onReplayIntro}
                  data-cursor="REPLAY"
                  className="text-zinc-400 hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Replay Intro ↺
                </button>
              </>
            )}
          </div>

          {/* Brand Taglines */}
          <div className="flex items-center gap-3 text-zinc-300 text-[11px] sm:text-xs">
            <span className="italic font-['Space_Grotesk'] text-[#e5c158] font-bold">
              "{STUDIO_INFO.tagline}"
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">
              "{STUDIO_INFO.secondaryTagline}"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
