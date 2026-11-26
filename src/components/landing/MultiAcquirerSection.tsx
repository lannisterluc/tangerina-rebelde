"use client";

import { useEffect, useState, useRef } from "react";
import { ShoppingCart, Check, X } from "lucide-react";

export function MultiAcquirerSection() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeColumn, setActiveColumn] = useState(0);

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
    const interval = setInterval(() => {
      setActiveColumn((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [inView]);

  const columns = [0, 1, 2];
  const rows = [0, 1, 2];

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
              04
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Retentativa Inteligente com Multiadquirência
          </h3>
          <p className="text-white/55 text-base leading-relaxed max-w-md">
            Sistema automatizado que realiza múltiplas tentativas de aprovação em diferentes
            adquirentes, recuperando vendas e aumentando sua taxa de conversão final.
          </p>
        </div>

        {/* Right Column: Multiadquirer Visualizer */}
        <div className="flex justify-center md:justify-end animate-on-scroll animate">
          <div className="relative w-full h-96 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Top Row: Carts */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-8 w-full justify-center">
                {columns.map((colIdx) => {
                  const isActive = activeColumn === colIdx;
                  return (
                    <div
                      key={`cart-${colIdx}`}
                      className="w-16 h-16 rounded-full bg-black border-2 flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: isActive ? "#f97316" : "rgba(255,255,255,0.1)",
                        boxShadow: isActive ? "0 0 25px rgba(249, 115, 22, 0.6)" : "none",
                      }}
                    >
                      <ShoppingCart className="w-7 h-7 text-white" />
                    </div>
                  );
                })}
              </div>

              {/* Columns & Status Indicators */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full">
                <div className="flex justify-around px-8 w-full">
                  {columns.map((colIdx) => {
                    const isActive = activeColumn === colIdx;
                    return (
                      <div key={`col-${colIdx}`} className="flex flex-col items-center">
                        {/* Connecting Line Down */}
                        <div className="w-0.5 h-24 bg-gradient-to-b from-orange-500/30 to-orange-500/10 mb-4" />

                        {/* Status Check / Cross Orbs */}
                        <div className="flex flex-col gap-3">
                          {rows.map((rowIdx) => {
                            let iconNode;
                            if (isActive) {
                              if (rowIdx < 2) {
                                iconNode = <Check className="w-5 h-5 text-emerald-400" />;
                              } else {
                                iconNode = <X className="w-5 h-5 text-orange-500" />;
                              }
                            } else {
                              iconNode = <div className="w-5 h-5 rounded-full border-2 border-orange-300/30" />;
                            }

                            return (
                              <div
                                key={`status-${colIdx}-${rowIdx}`}
                                className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                                style={{
                                  backgroundColor: isActive ? "rgba(249, 115, 22, 0.15)" : "transparent",
                                  borderColor: isActive ? "#f97316" : "rgba(249, 115, 22, 0.2)",
                                }}
                              >
                                {iconNode}
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Connecting Line */}
                        <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500/10 to-orange-500/30 mt-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
