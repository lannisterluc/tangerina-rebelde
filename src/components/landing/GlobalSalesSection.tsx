"use client";

import { useEffect, useState, useRef } from "react";
import { Language, translations } from "./translations";

const languagesList = [
  { code: "br", name: "Portuguese" },
  { code: "us", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "in", name: "Hindi" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "sa", name: "Arab" },
  { code: "de", name: "German" },
  { code: "jp", name: "Japanese" },
  { code: "cn", name: "Mandarin" },
];

const countriesList = [
  { code: "br", name: "Brasil" },
  { code: "us", name: "EUA" },
  { code: "fr", name: "França" },
  { code: "es", name: "Espanha" },
  { code: "ru", name: "Rússia" },
  { code: "au", name: "Austrália" },
  { code: "in", name: "Índia" },
  { code: "cn", name: "China" },
  { code: "za", name: "África do Sul" },
  { code: "mx", name: "México" },
  { code: "jp", name: "Japão" },
  { code: "it", name: "Itália" },
  { code: "pt", name: "Portugal" },
  { code: "gb", name: "Reino Unido" },
  { code: "de", name: "Alemanha" },
  { code: "ca", name: "Canadá" },
  { code: "ar", name: "Argentina" },
  { code: "cl", name: "Chile" },
  { code: "co", name: "Colômbia" },
];

const currenciesList = [
  { symbol: "₿", name: "Bitcoin", color: "#f7931a" },
  { symbol: "$", name: "Dollar", color: "#f97316" },
  { symbol: "€", name: "Euro", color: "#ea580c" },
  { symbol: "£", name: "Pound", color: "#fb923c" },
  { symbol: "R$", name: "Real", color: "#c2410c" },
  { symbol: "¥", name: "Yen", color: "#fdba74" },
  { symbol: "₹", name: "Rupee", color: "#f97316" },
  { symbol: "₩", name: "Won", color: "#fed7aa" },
];

const paymentMethodsCols = [
  [
    { label: "Pix", bg: "#1c1c1e", fg: "#32bcad", textBig: true },
    { label: "Visa", bg: "#1c1c1e", fg: "#2563eb", textBig: true },
    { label: "Mastercard", bg: "#1c1c1e", fg: "#f97316", textBig: true },
    { label: "OXXO", bg: "#dc2626", fg: "#ffffff", textBig: true },
  ],
  [
    { label: "MB WAY", bg: "#1c1c1e", fg: "#3b82f6", textBig: true },
    { label: "Multibanco", bg: "#1c1c1e", fg: "#10b981", textBig: true },
    { label: "Bizum", bg: "#1c1c1e", fg: "#0ea5e9", textBig: true },
    { label: "SEPA", bg: "#1c1c1e", fg: "#a855f7", textBig: true },
  ],
  [
    { label: "Apple Pay", bg: "#1c1c1e", fg: "#ffffff", textBig: true },
    { label: "Google Pay", bg: "#1c1c1e", fg: "#ffffff", textBig: true },
    { label: "Boleto", bg: "#1c1c1e", fg: "#f59e0b", textBig: true },
    { label: "Cripto", bg: "#f7931a", fg: "#000000", textBig: true },
  ],
];

export function GlobalSalesSection({ language }: { language: Language }) {
  const t = translations[language].global;
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1000);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          clearTimeout(timer);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5"
    >
      {/* Title & Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <h2
          className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          {t.venda}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
            {t.mundo}
          </span>
        </h2>
        <p
          className="text-white/60 text-base leading-relaxed self-center transition-all duration-700 delay-150"
          style={{
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          {t.desc}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Idiomas */}
        <div
          className="rounded-2xl p-8 flex flex-col items-center gap-5 relative overflow-hidden transition-all duration-700"
          style={{
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            minHeight: 280,
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          <div className="text-white font-semibold text-xl tracking-tight self-start">
            {t.idiomas}
          </div>
          <div className="flex flex-col items-center gap-2.5 w-full my-auto">
            <div className="flex justify-center gap-2 flex-wrap">
              {languagesList.slice(0, 3).map((l, i) => (
                <div
                  key={l.code}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border ${
                    i === 0
                      ? "bg-orange-500/20 border-orange-500/50 text-white"
                      : "bg-white/5 border-white/10 text-white/70"
                  }`}
                >
                  {l.name}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 flex-wrap">
              {languagesList.slice(3, 7).map((l, i) => (
                <div
                  key={l.code}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border ${
                    i === 1
                      ? "bg-orange-500/20 border-orange-500/50 text-white"
                      : "bg-white/5 border-white/10 text-white/70"
                  }`}
                >
                  {l.name}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 flex-wrap">
              {languagesList.slice(7, 10).map((l) => (
                <div
                  key={l.code}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-white/70"
                >
                  {l.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Países Marquee */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-700 delay-100"
          style={{
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            minHeight: 280,
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          <div className="text-white font-semibold text-xl tracking-tight">
            {t.países}
          </div>
          <div className="flex flex-col gap-2.5 my-auto">
            {/* Row 1 Left */}
            <div className="overflow-hidden w-full relative">
              <div className="flex gap-2.5 w-max animate-[marquee-left_25s_linear_infinite]">
                {[...countriesList.slice(0, 10), ...countriesList.slice(0, 10)].map((c, i) => (
                  <div
                    key={`${c.code}-${i}`}
                    className="rounded-full overflow-hidden flex-shrink-0 w-11 h-11 bg-[#111] border-2 border-white/10"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 Right */}
            <div className="overflow-hidden w-full relative">
              <div className="flex gap-2.5 w-max animate-[marquee-right_28s_linear_infinite]">
                {[...countriesList.slice(6, 16), ...countriesList.slice(6, 16)].map((c, i) => (
                  <div
                    key={`${c.code}-2-${i}`}
                    className="rounded-full overflow-hidden flex-shrink-0 w-11 h-11 bg-[#111] border-2 border-white/10"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Moedas Orbit */}
        <div
          className="rounded-2xl p-6 flex flex-col items-start gap-4 overflow-hidden transition-all duration-700 delay-200"
          style={{
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            minHeight: 280,
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          <div className="text-white font-semibold text-xl tracking-tight">
            {t.moedas}
          </div>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-[260px] h-[200px] flex items-center justify-center">
              {/* Outer Dashed Orbit */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
              {/* Inner Dashed Orbit */}
              <div className="absolute w-[120px] h-[120px] rounded-full border border-dashed border-white/15 animate-[spin_12s_linear_infinite_reverse]" />

              {/* Center Bitcoin / Globe Orb */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-[0_0_25px_rgba(249,115,22,0.5)] z-20">
                $
              </div>

              {/* Orbiting Coin Badges */}
              {currenciesList.map((c, i) => {
                const angle = (i * 360) / currenciesList.length;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 90;
                const y = Math.sin(rad) * 90;
                return (
                  <div
                    key={c.name}
                    className="absolute w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border border-white/20 shadow-md text-white select-none transition-transform hover:scale-125"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      background: `radial-gradient(circle at 35% 30%, ${c.color}, #431407 100%)`,
                    }}
                  >
                    {c.symbol}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 4: Métodos de Pagamento Marquee Vertical */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-700 delay-300"
          style={{
            background: "#0d0d0d",
            border: "1px solid #1f1f1f",
            minHeight: 280,
            opacity: inView ? 1 : 0,
            transform: `translateY(${inView ? 0 : 30}px)`,
          }}
        >
          <div className="text-white font-semibold text-xl tracking-tight">
            {t.pagamentos}
          </div>
          <div className="flex gap-3 h-[180px] overflow-hidden">
            {paymentMethodsCols.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex-1 overflow-hidden relative flex flex-col gap-2.5 animate-[marquee-up_12s_linear_infinite]"
                style={{
                  animationDuration: `${10 + colIdx * 3}s`,
                  animationDelay: `${colIdx * 1.2}s`,
                }}
              >
                {[...col, ...col].map((item, idx) => (
                  <div
                    key={`${item.label}-${idx}`}
                    className="flex items-center justify-center rounded-xl font-bold flex-shrink-0 h-12 px-2"
                    style={{
                      background: item.bg,
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span
                      style={{
                        color: item.fg,
                        fontSize: item.textBig ? 13 : 11,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
