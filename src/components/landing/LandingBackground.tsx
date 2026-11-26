"use client";

import { useEffect, useRef } from "react";

export function LandingBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      len: Math.random() * 80 + 20,
      speed: Math.random() * 1.5 + 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      width: Math.random() * 1.2 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const angle = Math.PI / 2 + 0.18;
        const h = Math.cos(angle) * p.len;
        const v = Math.sin(angle) * p.len;
        const grad = ctx.createLinearGradient(p.x, p.y, p.x + h, p.y + v);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.5, `rgba(249,115,22,${p.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${p.opacity})`);

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + h, p.y + v);
        ctx.strokeStyle = grad;
        ctx.lineWidth = p.width;
        ctx.stroke();

        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;

        if (p.y > canvas.height + p.len || p.x > canvas.width + p.len) {
          p.x = Math.random() * canvas.width;
          p.y = -p.len;
        }
      });
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed z-0 top-0 right-0 bottom-0 left-0 pointer-events-none">
      {/* Background dark image texture */}
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
        src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&h=1080&fit=crop"
      />
      
      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(234,88,12,0.15),transparent)]" />
      
      {/* Orange pulse glow orbs */}
      <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-orange-900/25 blur-[160px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-amber-950/20 blur-[140px] animate-[pulse_12s_ease-in-out_2s_infinite]" />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

export function GridLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-7xl mx-auto border-r border-white/5 opacity-60">
      <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
        <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span>
      </div>
      <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
        <div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1" />
        <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
      </div>
      <div className="flex-1 border-l border-white/5 h-full flex justify-center relative overflow-hidden">
        <div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-2" />
        <div className="h-full border-r border-dashed border-orange-500/20 w-px" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-1"
          style={{ animationDelay: "1.5s" }}
        />
        <span className="absolute bottom-8 text-orange-500/30 text-xs font-mono">03</span>
      </div>
      <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
        <div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3" />
        <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
      </div>
      <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
        <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span>
      </div>
    </div>
  );
}
