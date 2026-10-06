import React from "react";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Contact({ onOpenBooking }) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#d4af37]/30 text-xs font-mono text-[#e5c158] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Studio Location & Inquiries
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-none">
            AV CAR CARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff0a8] via-[#e5c158] to-[#ff1a2b]">
              STUDIO & CONTACT
            </span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Connect directly with our master technicians for vehicle inspection, PPF consultation, and custom package quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Studio Info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Studio Location
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    AV Car Care Studio
                  </p>
                  <p className="text-xs text-zinc-300 font-light mt-0.5 leading-relaxed">
                    Location details available upon enquiry. Contact our studio coordinator for direct directions and slot reservation.
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Studio Timings
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {STUDIO_INFO.hours}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Open 7 Days a Week
                  </p>
                </div>
              </div>

              {/* Verified Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-[#ff1a2b] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Direct Phone / WhatsApp
                  </h4>
                  <a
                    href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-lg font-bold text-white hover:text-[#e5c158] transition-colors font-mono mt-0.5 block"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Call or message for instant consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons as requested: CALL NOW, WHATSAPP, BOOK NOW */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenBooking()}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b30816] hover:from-[#ff3344] hover:to-[#c70f1e] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-red-950/40 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Facility Showcase & Google Maps Ready Container */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 flex flex-col shadow-2xl justify-between">
            {/* 16:9 Responsive Image Container with Zero Cropping */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:h-[320px] overflow-hidden bg-black group">
              <img
                src="/images/av-car-care-garage.jpg"
                alt="AV Car Care Studio Facility"
                className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Discreet Top Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-black/85 backdrop-blur-md border border-[#d4af37]/40 text-[#fff0a8] font-bold">
                  Official Facility
                </span>
              </div>
            </div>

            {/* Studio Info Bar Below Image (Never Obscures the Facility Visual) */}
            <div className="p-4 sm:p-5 bg-zinc-950/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-auto max-w-[120px] rounded bg-black p-1 border border-white/10 shrink-0">
                  <img
                    src="/images/av-car-care-logo.jpg"
                    alt="AV Car Care"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase font-bold tracking-wider">
                    OFFICIAL STUDIO
                  </span>
                  <h3 className="text-sm font-bold text-white font-['Outfit']">
                    AV Car Care
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    +91 86965 36692
                  </p>
                </div>
              </div>

              <a
                href={STUDIO_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-200 hover:text-white hover:border-[#d4af37]/50 transition-colors w-full sm:w-auto"
              >
                <Navigation className="w-3.5 h-3.5 text-[#e5c158]" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
