"use client";

import { Shield, ShoppingCart, Lock } from "lucide-react";

export function ThreePillarsSection() {
  const pillars = [
    {
      number: "01",
      icon: Shield,
      title: "Segurança com Antifraude Inteligente",
      desc: "Proteção avançada com análise automática em cada transação, garantindo mais aprovações e menos riscos para seu negócio.",
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: "Checkout Rápido e Conversão",
      desc: "Interface otimizada que carrega em menos de 1 segundo, reduzindo carrinho abandonado e aumentando suas vendas.",
    },
    {
      number: "03",
      icon: Lock,
      title: "Suporte Global 24/7",
      desc: "Equipe especializada e infraestrutura redundante de alta disponibilidade para seu negócio nunca parar de faturar.",
    },
  ];

  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.number} className="relative group animate-on-scroll animate">
              <div className="h-full rounded-2xl p-8 bg-white/[0.03] border border-white/8 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
                {/* Pill Number */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-xs font-bold text-orange-400">{item.number}</span>
                </div>

                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                {/* Title & Description */}
                <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom mini badges */}
                <div className="mt-8 flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
