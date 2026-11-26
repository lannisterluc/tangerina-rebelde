"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Language, translations } from "./translations";

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const t = translations[language].nav;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "pt" as Language, label: "Português", flag: "🇧🇷" },
    { code: "en" as Language, label: "English", flag: "🇺🇸" },
    { code: "es" as Language, label: "Español", flag: "🇪🇸" },
  ];

  const currentFlag = languages.find((l) => l.code === language)?.flag || "🇧🇷";

  const navLinks = [
    { label: t.integrações, href: "#integracoes" },
    { label: t.soluções, href: "#solucoes" },
    { label: t.taxas, href: "#taxas" },
    { label: t.faq, href: "#faq" },
    { label: t.contato, href: "#contato" },
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-10 sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 animate-on-scroll animate">
      {/* Brand Logo */}
      <a href="/" className="flex items-center gap-3 group cursor-pointer">
        <img
          src="/logo.png"
          alt="Tangerina Rebelde"
          className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-md"
        />
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Action Buttons & Language Switcher */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-neutral-300 text-sm font-medium"
          >
            <span>{currentFlag}</span>
            <ChevronDown className="w-3 h-3 text-neutral-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[140px] py-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLanguage(item.code);
                    setDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-sm text-left flex items-center gap-2.5 hover:bg-white/10 transition-colors ${
                    language === item.code ? "bg-white/15 text-white font-semibold" : "text-neutral-300"
                  }`}
                >
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Login Link */}
        <a
          href="/login"
          className="text-sm font-medium px-5 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all text-neutral-300"
        >
          {t.login}
        </a>

        {/* Glowing Sign Up Button */}
        <a
          href="/login"
          className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(249,115,22,0.4)] bg-gradient-to-b from-white/10 via-white/0 to-white/5 rounded-full relative shadow-[0_0_15px_rgba(249,115,22,0.25)]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div
              className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_3s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(249,115,22,0.85) 180deg, transparent 280deg, transparent 360deg)",
              }}
            />
          </div>
          <div className="absolute inset-[1px] rounded-full backdrop-blur-xl z-0 bg-neutral-950/90" />
          <div className="z-10 flex gap-2 overflow-hidden text-sm font-medium text-white rounded-full py-2 pr-4 pl-3.5 relative items-center">
            <span className="whitespace-nowrap font-medium tracking-tight text-white/95 group-hover:text-white transition-colors">
              {t.cadastrar}
            </span>
            <span className="inline-flex items-center justify-center bg-white/10 w-5 h-5 rounded-full group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}
