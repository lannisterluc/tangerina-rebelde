"use client";

import { useEffect, useRef } from "react";
import { Upload, Zap, Download } from "lucide-react";

const steps = [
  { number: "01", title: "Crie sua conta em 1 minuto", icon: Upload, highlight: true },
  { number: "02", title: "Integre checkout ou API", icon: Zap, highlight: false },
  { number: "03", title: "Receba e saque instantâneo", icon: Download, highlight: false },
];

export function InteractiveCanvasSteps() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let progress = 0;
    const duration = 2500;
    let startTime: number | null = null;

    const render = (time: number) => {
      if (!startTime) startTime = time;
      progress = ((time - startTime) % duration) / duration;

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "rgba(249, 115, 22, 0.15)");
      grad.addColorStop(0.5, "rgba(10, 10, 10, 0.8)");
      grad.addColorStop(1, "rgba(10, 10, 10, 1)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top navbar simulation
      ctx.fillStyle = "rgba(15, 15, 15, 0.9)";
      ctx.fillRect(0, 0, canvas.width, 32);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, 32);
      ctx.lineTo(canvas.width, 32);
      ctx.stroke();

      ctx.fillStyle = "#f97316";
      ctx.font = "bold 10px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("⚡ Tangerina Rebelde", 14, 16);

      const links = ["INTEGRAÇÕES", "SOLUÇÕES", "TAXAS", "FAQ"];
      let linkX = 140;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "7px Inter, sans-serif";
      links.forEach((l) => {
        ctx.fillText(l, linkX, 16);
        linkX += 55;
      });

      // Login / Cadastro buttons
      const btnX = canvas.width - 65;
      ctx.strokeStyle = "rgba(249, 115, 22, 0.8)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.roundRect(btnX, 8, 55, 16, 6);
      ctx.stroke();
      ctx.fillStyle = "rgba(249, 115, 22, 0.25)";
      ctx.fillRect(btnX, 8, 55, 16);
      ctx.fillStyle = "#f97316";
      ctx.font = "bold 8px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Cadastrar", btnX + 27, 16.5);

      // Hero text
      const heroX = 20;
      const heroY = 55;
      ctx.fillStyle = "#f97316";
      ctx.font = "bold 7px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("● TECNOLOGIA E AGILIDADE PARA ESCALAR SEU NEGÓCIO", heroX, heroY);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 18px Inter, sans-serif";
      ["A Evolução dos", "Pagamentos Digitais", "com a Tangerina Rebelde"].forEach((line, i) => {
        ctx.fillText(line, heroX, heroY + 22 + i * 19);
      });

      // Simulated Dashboard Card
      const cardX = canvas.width / 2 + 15;
      const cardY = heroY;
      const cardW = 140;
      const cardH = 115;
      ctx.fillStyle = "rgba(25, 25, 25, 0.9)";
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 8);
      ctx.fill();
      ctx.strokeStyle = "rgba(249, 115, 22, 0.35)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.fillStyle = "#f97316";
      ctx.font = "bold 8px Inter, sans-serif";
      ctx.fillText("● Tangerina Rebelde", cardX + 10, cardY + 12);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px Inter, sans-serif";
      ctx.fillText("Dashboard", cardX + 10, cardY + 24);

      // Mini chart line in card
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cardX + 45, cardY + 70);
      ctx.quadraticCurveTo(cardX + 80, cardY + 45, cardX + 125, cardY + 60);
      ctx.stroke();

      // Cursor animation moving towards "Cadastrar" button
      const curStartX = heroX + 50;
      const curStartY = heroY + 140;
      const curEndX = btnX + 27;
      const curEndY = 16;
      let curX, curY;

      if (progress < 0.7) {
        const ease = progress / 0.7;
        curX = curStartX + (curEndX - curStartX) * ease;
        curY = curStartY + (curEndY - curStartY) * ease;
      } else {
        curX = curEndX;
        curY = curEndY;
      }

      // Draw cursor arrow
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(curX, curY);
      ctx.lineTo(curX + 5, curY + 8);
      ctx.lineTo(curX + 2.5, curY + 2.5);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fill();

      // Pulse ring when clicking
      if (progress > 0.7) {
        const clickFrac = (progress - 0.7) / 0.3;
        ctx.fillStyle = `rgba(249, 115, 22, ${(1 - clickFrac) * 0.5})`;
        ctx.beginPath();
        ctx.arc(curEndX, curEndY, 15 + 15 * clickFrac, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5">
      <div className="flex flex-col items-center gap-8 animate-on-scroll animate">
        {/* Canvas Screen */}
        <div className="relative w-full max-w-lg group">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 to-transparent rounded-2xl blur-3xl -z-10" />
          <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 bg-black/40 shadow-2xl">
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              className="w-full aspect-video object-cover bg-black"
            />
          </div>
        </div>

        {/* 3 Step Action Pills */}
        <div className="w-full max-w-lg flex flex-col gap-3 animate-on-scroll animate">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${
                  item.highlight
                    ? "bg-white/[0.08] border border-orange-500/40"
                    : "bg-white/[0.03] border border-white/8 hover:bg-white/[0.05] hover:border-white/15"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-bold tracking-widest ${
                      item.highlight ? "text-orange-400" : "text-white/40"
                    }`}
                  >
                    {item.number}
                  </span>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
                <Icon
                  className={`w-5 h-5 ${item.highlight ? "text-orange-400" : "text-white/30"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
