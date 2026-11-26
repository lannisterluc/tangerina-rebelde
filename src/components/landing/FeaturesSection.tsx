"use client";

import { useEffect, useState, useRef } from "react";
import { Zap } from "lucide-react";
import { Language, translations } from "./translations";

const barChartValues = [
  { label: "Jan", value: 12 },
  { label: "Fev", value: 19 },
  { label: "Mar", value: 15 },
  { label: "Abr", value: 27 },
  { label: "Mai", value: 32 },
  { label: "Jun", value: 41 },
  { label: "Jul", value: 38 },
  { label: "Ago", value: 55 },
  { label: "Set", value: 62 },
  { label: "Out", value: 74 },
  { label: "Nov", value: 88 },
  { label: "Dez", value: 100 },
];

export function FeaturesSection({ language }: { language: Language }) {
  const t = translations[language].features;
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Speedometer state
  const [speedProgress, setSpeedProgress] = useState(0);

  // Chart state
  const [animatedSum, setAnimatedSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1200);
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

  // Speedometer animation
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1800;
    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setSpeedProgress(ease);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  // Volume counter animation
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const target = 2847391;
    const duration = 2200;
    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setAnimatedSum(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  // Speedometer needle coordinates
  const radius = 46;
  const centerX = 60;
  const centerY = 65;
  const needleAngle = (-180 + speedProgress * 175) * (Math.PI / 180);
  const needleX = centerX + radius * Math.cos(needleAngle);
  const needleY = centerY + radius * Math.sin(needleAngle);

  return (
    <div
      ref={containerRef}
      id="solucoes"
      className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5"
    >
      {/* Header */}
      <div className="text-center mb-16 animate-on-scroll animate">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6 max-w-2xl mx-auto leading-tight">
          {t.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-200">
            {t.titleHighlight}
          </span>{" "}
          {t.titleEnd}
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* 2 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Venda globalmente with Live Chart */}
        <div className="group animate-on-scroll animate bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-5 overflow-hidden">
              <img src="/icon.png" alt="logo" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">
              {t.global}
            </h3>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              {t.globalDesc}
            </p>
          </div>

          {/* Mini Bar Chart */}
          <div className="flex-shrink-0 w-36 flex flex-col gap-2">
            <div className="text-center">
              <div className="text-orange-400 font-bold text-sm leading-none">
                $ {animatedSum.toLocaleString("en-US")}
              </div>
              <div className="text-white/30 text-[9px] mt-0.5">Vendas acumuladas</div>
            </div>
            <div className="h-20 flex items-end justify-between gap-1 pt-2">
              {barChartValues.map((b, i) => (
                <div key={b.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-orange-600 to-amber-400 transition-all duration-500"
                    style={{
                      height: inView ? `${b.value}%` : "5%",
                      transitionDelay: `${i * 40}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Speedometer Checkout */}
        <div className="group animate-on-scroll animate bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">
              {t.checkout}{" "}
              <span className="text-orange-400">{t.checkoutHighlight}</span>
            </h3>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              {t.checkoutDesc}
            </p>
          </div>

          {/* Speedometer Gauge */}
          <div className="relative w-32 h-20 flex-shrink-0">
            <svg viewBox="0 0 120 70" className="w-full h-full">
              <defs>
                <linearGradient id="rebeldeSpeedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M 10 65 A 50 50 0 0 1 110 65"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 10 65 A 50 50 0 0 1 110 65"
                fill="none"
                stroke="url(#rebeldeSpeedGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={157}
                strokeDashoffset={157 - speedProgress * 137}
                opacity="0.9"
              />
              <line
                x1={centerX}
                y1={centerY}
                x2={needleX}
                y2={needleY}
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx={centerX} cy={centerY} r="4" fill="#f97316" />
              <circle cx={centerX} cy={centerY} r="2" fill="#0d0d0d" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
