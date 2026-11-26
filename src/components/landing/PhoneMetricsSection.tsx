"use client";

import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

const stats = [
  { value: "190+", label: "Países com Suporte Nativo" },
  { value: "+130", label: "Moedas com Conversão Automática" },
  { value: "97.8%", label: "Taxa Média de Aprovação de Vendas" },
  { value: "24/7", label: "Monitoramento e Suporte Dedicado" },
];

export function PhoneMetricsSection() {
  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: 3D Smartphone Device Mockup */}
        <div className="relative flex justify-center lg:justify-start group animate-[fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-600/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none" />

          {/* Smartphone Frame */}
          <div className="relative w-[340px] h-[640px] bg-[#0a0a0a] border-[6px] border-[#1f1f1f] rounded-[3rem] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out select-none">
            {/* Dynamic Island Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-800" />
            </div>

            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-3.5 pb-2 text-white text-xs font-medium relative z-40">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <div className="w-5 h-3 border border-white/30 rounded-[3px] relative">
                  <div className="absolute top-0.5 left-0.5 bottom-0.5 right-1 bg-white rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-30">
              <div className="flex items-center gap-2">
                <img src="/icon.png" alt="logo" className="w-5 h-5 object-contain" />
                <span className="font-bold text-base tracking-tight text-white">
                  Tangerina Rebelde
                </span>
              </div>
              <div className="flex gap-3 text-white/60">
                <Heart className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <MessageCircle className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Stories / Pills */}
            <div className="flex gap-3 px-5 py-3.5 overflow-x-hidden border-b border-white/5">
              {[
                { label: "Global", gradient: true, text: "LIVE" },
                { label: "Pix", gradient: false, text: "24h" },
                { label: "Europa", gradient: false, text: "PT" },
                { label: "3DS2", gradient: true, text: "SCA" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-12 h-12 rounded-full p-[2px] ${
                      item.gradient
                        ? "bg-gradient-to-tr from-orange-500 to-amber-600"
                        : "bg-neutral-800"
                    }`}
                  >
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
                      <span className="text-[8px] font-bold text-white">{item.text}</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-neutral-400">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Post / Sale Notification Card */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                    TR
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white">tangerina_rebelde</span>
                    <span className="text-[9px] text-emerald-400 font-bold">Venda Aprovada Instantânea</span>
                  </div>
                </div>
                <MoreHorizontal className="w-4 h-4 text-neutral-500" />
              </div>

              {/* Feed Card */}
              <div className="w-full rounded-2xl bg-[#141414] border border-white/5 p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 blur-xl rounded-full" />
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                  Transação Europeia #84920
                </span>
                <div className="text-2xl font-black text-white">€ 499,00</div>
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
                  <span className="text-neutral-400">Método: MB WAY</span>
                  <span className="text-emerald-400 font-semibold">Taxa Líquida: 97,8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Giant Statistics List */}
        <div className="flex flex-col justify-center gap-2 pl-0 lg:pl-12">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2 ${
                idx === 0 ? "pb-8" : idx < stats.length - 1 ? "py-8" : "pt-8"
              } ${idx < stats.length - 1 ? "border-b border-white/5" : ""} animate-on-scroll animate`}
            >
              <div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-lg text-neutral-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
