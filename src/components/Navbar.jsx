import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "PPF", href: "#ppf" },
    { label: "Borophene & Ceramic", href: "#ceramic" },
    { label: "Before / After", href: "#before-after" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Studio", href: "#studio" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Quick Info Bar */}
      <div className="bg-[#040406] border-b border-white/5 py-1.5 px-4 text-xs font-mono text-zinc-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff1a2b] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] -ml-2.5" />
              AV Car Care • Premium Automotive Care
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">Dust-Free Bays • Certified TPU • Borophene & 10H Ceramic</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-400">{STUDIO_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080c]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5"
            : "bg-gradient-to-b from-[#08080c]/90 to-transparent py-3 md:py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official AV CAR CARE Asset */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-11 sm:h-12 w-auto max-w-[170px] sm:max-w-[200px] rounded-lg overflow-hidden border border-white/10 group-hover:border-[#d4af37]/60 transition-colors bg-black flex items-center justify-center p-1">
              <img
                src="/images/av-car-care-logo.jpg"
                alt="AV Car Care - Premium Automotive Care"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold tracking-wider text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#fff3b8] to-[#d4af37] font-['Outfit']">
                  AV
                </span>
                <span className="font-bold tracking-wider text-base sm:text-lg text-white font-['Outfit']">
                  CAR CARE
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] uppercase font-mono text-zinc-400">
                PREMIUM AUTOMOTIVE CARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff1a2b] to-[#d4af37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b30816] hover:from-[#ff3344] hover:to-[#d61323] shadow-lg shadow-red-950/50 hover:shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Detailing</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono uppercase bg-[#ff1a2b] text-white cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#e5c158] hover:bg-zinc-800 transition-colors"
              aria-label="Call AV Car Care"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0c0c10] border-b border-white/10 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            {/* Mobile Brand Banner */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="h-10 w-auto rounded border border-white/10 bg-black p-0.5">
                <img
                  src="/images/av-car-care-logo.jpg"
                  alt="AV Car Care Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37]">
                YOUR CAR. OUR PRIDE.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-zinc-900/60 border border-white/5 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-xs font-mono"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#b30816] shadow-lg shadow-red-950/40"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Detailing</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20AV%20Car%20Care,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
