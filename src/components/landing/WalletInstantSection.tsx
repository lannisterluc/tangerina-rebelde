"use client";

import { useEffect, useState, useRef } from "react";

export function WalletInstantSection() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1500);
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

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const target = 252391;
    const duration = 2500;
    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setBalance(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center animate-on-scroll animate">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              02
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Recebimentos Instantâneos e D+2
          </h3>
          <p className="text-white/55 text-base leading-relaxed max-w-md">
            Receba pagamentos via Pix instantaneamente e valores de cartão em até 2 dias úteis,
            assegurando fluxo de caixa ágil e saudável para sua operação.
          </p>
        </div>

        {/* Right Column: 3D Stacked Wallet Cards */}
        <div className="relative h-96 flex items-center justify-center perspective">
          {/* Back Card 1 */}
          <div
            className="absolute w-72 h-48 rounded-2xl bg-gradient-to-br from-orange-600/10 to-amber-700/10 border border-orange-500/20 transform transition-all duration-700"
            style={{
              opacity: inView ? 0.3 : 0,
              transform: inView
                ? "translateX(-60px) translateY(-20px) scale(0.9)"
                : "translateX(0px) translateY(0px) scale(1)",
              transitionDelay: "200ms",
            }}
          />

          {/* Back Card 2 */}
          <div
            className="absolute w-72 h-48 rounded-2xl bg-gradient-to-br from-orange-600/15 to-amber-700/15 border border-orange-500/25 transform transition-all duration-700"
            style={{
              opacity: inView ? 0.5 : 0,
              transform: inView
                ? "translateX(-30px) translateY(-10px) scale(0.95)"
                : "translateX(0px) translateY(0px) scale(1)",
              transitionDelay: "100ms",
            }}
          />

          {/* Front Active Orange Card */}
          <div
            className="absolute w-72 rounded-2xl p-6 bg-gradient-to-br from-orange-500 via-amber-600 to-orange-600 border border-orange-400 shadow-[0_20px_60px_rgba(249,115,22,0.4)] transform transition-all duration-700 z-10"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateX(0px) translateY(0px) scale(1) rotateY(0deg)"
                : "translateX(30px) translateY(10px) scale(0.9) rotateY(-15deg)",
            }}
          >
            <div className="text-white">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Saque Instantâneo
                  </span>
                </div>
              </div>

              {/* Wallet Balance */}
              <div className="mb-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <p className="text-xs text-white/70 mb-1">Minha carteira</p>
                <p className="text-3xl font-extrabold tracking-tight">
                  R$ {balance.toLocaleString("pt-BR")}
                </p>
              </div>

              {/* 4 Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
                  <p className="text-white/70 text-[10px] mb-0.5">Banco</p>
                  <p className="font-semibold text-[11px]">Conta Corrente</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
                  <p className="text-white/70 text-[10px] mb-0.5">Banco recebedor</p>
                  <p className="font-semibold text-[11px]">Tangerina Rebelde</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
                  <p className="text-white/70 text-[10px] mb-0.5">Recebedor</p>
                  <p className="font-semibold text-[11px]">Sua Empresa</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
                  <p className="text-white/70 text-[10px] mb-0.5">Forma de pagamento</p>
                  <p className="font-semibold text-[11px]">PIX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
