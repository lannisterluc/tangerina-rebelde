"use client";

import { ArrowRight } from "lucide-react";
import { Language, translations } from "./translations";
import { HeroDashboardMock } from "./HeroDashboardMock";

export function HeroSection({ language }: { language: Language }) {
  const t = translations[language].hero;

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-20 pb-16 gap-x-6 gap-y-12 items-center relative z-10">
      {/* Left Column: Headline & Call to Action */}
      <div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-2 text-orange-500 mb-8 animate-on-scroll animate">
          <span className="flex h-2 w-2 rounded-full bg-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500/90">
            {t.subtitle}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter text-white font-medium mb-6 animate-on-scroll animate">
          {t.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-200">
            {t.titleHighlight}
          </span>
        </h1>

        {/* Description */}
        <p className="leading-relaxed text-lg font-medium text-white/60 max-w-lg animate-on-scroll animate">
          {t.description}
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-wrap gap-6 items-center animate-on-scroll animate">
          <a
            href="/login"
            className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(249,115,22,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-full relative shadow-[0_0_25px_rgba(249,115,22,0.3),0_8px_40px_rgba(249,115,22,0.15)]"
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
            <div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-sm font-medium text-white w-full rounded-full py-3.5 pr-6 pl-5 relative items-center">
              <span className="whitespace-nowrap relative z-10 font-medium tracking-tight text-base text-white/95 group-hover:text-white transition-colors">
                {t.cta}
              </span>
              <span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Right Column: Hero Dashboard Showcase */}
      <div className="col-span-1 lg:col-span-6 md:pr-10 flex flex-col lg:pt-10 h-full pt-6 pr-6 items-end justify-center">
        <HeroDashboardMock />
      </div>
    </div>
  );
}
