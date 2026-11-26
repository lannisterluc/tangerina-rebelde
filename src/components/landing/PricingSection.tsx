"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export function PricingSection() {
  return (
    <div id="taxas" className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading & CTA */}
        <div className="flex flex-col justify-start animate-on-scroll animate">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            Só pague quando vender
          </h2>
          <p className="text-white/55 text-lg mb-8">
            Sem mensalidade, sem taxas ocultas
          </p>

          <a
            href="/login"
            className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(249,115,22,0.4)] bg-gradient-to-b from-white/10 via-white/0 to-white/5 rounded-full relative shadow-[0_0_15px_rgba(249,115,22,0.25)] mb-12 w-fit"
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
            <div className="z-10 flex gap-2 overflow-hidden text-sm font-medium text-white rounded-full py-3 px-6 relative items-center">
              <span className="whitespace-nowrap font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors uppercase">
                Começar Agora
              </span>
              <span className="inline-flex items-center justify-center bg-white/10 w-5 h-5 rounded-full group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Enterprise Callout */}
          <div className="bg-black/60 border border-white/5 rounded-2xl p-6">
            <p className="text-white text-sm">
              Para grandes operações e alto volume, oferecemos{" "}
              <span className="font-semibold text-orange-400">negociação de taxas personalizada</span>.
            </p>
          </div>
        </div>

        {/* Right Column: Pricing Comparison Table */}
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden shadow-2xl animate-on-scroll animate">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/5 bg-white/[0.02]">
            <div className="p-6 font-semibold text-white/70 text-sm" />
            <div className="p-6 border-l border-white/5 font-semibold text-white/90 text-sm flex items-center gap-2">
              <span className="text-orange-400 text-base">⚡</span>
              Pix
            </div>
            <div className="p-6 border-l border-white/5 font-semibold text-white/90 text-sm flex items-center gap-2">
              <span className="text-orange-400 text-base">💳</span>
              Cartão
            </div>
          </div>

          {/* Row 1: Brazil */}
          <div className="grid grid-cols-3 border-b border-white/5">
            <div className="p-6">
              <div className="text-xs text-white/50 uppercase tracking-wider mb-2 font-mono">
                BRASIL
              </div>
              <div className="text-white font-bold text-lg">4,99% + R$ 1,50</div>
            </div>
            <div className="p-6 border-l border-white/5 flex items-center">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Receba no mesmo dia</span>
              </div>
            </div>
            <div className="p-6 border-l border-white/5 flex items-center">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Receba em até 2 dias*</span>
              </div>
            </div>
          </div>

          {/* Row 2: Global */}
          <div className="grid grid-cols-3">
            <div className="p-6">
              <div className="text-xs text-white/50 uppercase tracking-wider mb-2 font-mono">
                GLOBAL (PT / ES / EU)
              </div>
              <div className="text-white font-bold text-lg">4,99% + € 0,25</div>
            </div>
            <div className="p-6 border-l border-white/5 flex items-center">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>MB WAY Instantâneo</span>
              </div>
            </div>
            <div className="p-6 border-l border-white/5 flex items-center">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Receba em até 2 dias*</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
