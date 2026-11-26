"use client";

import { useEffect, useState, useRef } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Tag,
  CircleDollarSign,
  Wallet,
  LayoutTemplate,
  Plug,
  BarChart3,
  MousePointerClick,
  Settings,
  Bell,
  PanelLeft,
  ChevronDown,
  ArrowUpRight,
  MoreHorizontal,
  Flame,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const chartPoints = [
  { day: "Seg", revenue: 4000 },
  { day: "Ter", revenue: 3000 },
  { day: "Qua", revenue: 4800 },
  { day: "Qui", revenue: 3800 },
  { day: "Sex", revenue: 12500 },
  { day: "Sab", revenue: 14285 },
  { day: "Dom", revenue: 16800 },
];

export function HeroDashboardMock() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 600);
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

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Marketplace", icon: ShoppingCart },
    { label: "Produtos", icon: Tag },
    { label: "Vendas", icon: CircleDollarSign },
    { label: "Financeiro", icon: Wallet },
    { label: "Checkouts", icon: LayoutTemplate },
    { label: "Integrações", icon: Plug },
    { label: "Relatórios", icon: BarChart3 },
    { label: "Indique e ganhe", icon: MousePointerClick },
  ];

  return (
    <div ref={containerRef} className="w-full max-w-[660px] relative select-none">
      {/* Background Orange Ambient Glow */}
      <div className="absolute -inset-8 bg-orange-600/20 blur-3xl -z-10 pointer-events-none" />

      {/* Main Glass Mockup Container matching real dashboard */}
      <div
        className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-700 bg-black text-slate-100"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        }}
      >
        <div className="flex h-[390px]">
          {/* Real Dashboard Sidebar */}
          <div className="w-[145px] flex-shrink-0 border-r border-white/5 flex flex-col justify-between py-3.5 px-2 bg-black">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 px-2 mb-4">
                <img src="/icon.png" alt="Tangerina Rebelde" className="w-6 h-6 object-contain shrink-0 rounded-sm" />
                <span className="text-white font-extrabold text-[10px] tracking-tight leading-tight">
                  Tangerina <span className="text-orange-500">Rebelde</span>
                </span>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-0.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all ${
                        item.active
                          ? "bg-orange-500/10 text-orange-500 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3 h-3 shrink-0" />
                      <span className="text-[8px] truncate">{item.label}</span>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Settings Link */}
            <div className="px-2 pt-2 border-t border-white/5 flex items-center gap-2 text-slate-400">
              <Settings className="w-3 h-3" />
              <span className="text-[8px] font-medium">Ajustes</span>
            </div>
          </div>

          {/* Real Dashboard Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-black">
            {/* Real Top Header */}
            <div className="h-11 flex items-center justify-between px-4 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-2">
                <PanelLeft className="w-3 h-3 text-slate-400" />
                <div className="h-3 w-[1px] bg-white/10" />
                <span className="text-[10px] font-bold text-white tracking-tight">Dashboard</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-white/5 text-slate-400">
                  <Bell className="w-2.5 h-2.5" />
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 p-1 pr-2.5 rounded-full border border-white/5">
                  <img
                    src="https://ui-avatars.com/api/?name=Amanda+Blake&background=f97316&color=fff"
                    alt="User"
                    className="w-4 h-4 rounded-full"
                  />
                  <div>
                    <p className="text-[7.5px] font-bold text-white leading-tight">Amanda B.</p>
                    <p className="text-[5.5px] text-slate-400 leading-none">Admin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-hidden p-3.5 space-y-3">
              {/* Welcome & Filter Bar */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[10px] font-medium text-slate-400">
                    Bem-vinda, Amanda Blake!
                  </h3>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#161616] border border-white/10 rounded-lg text-[7px] text-slate-300 font-semibold">
                  <span>Hoje</span>
                  <ChevronDown className="w-2 h-2 text-slate-400" />
                </div>
              </div>

              {/* 6 Period Metrics Grid */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="bg-[#121212] p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                  <span className="text-[6px] font-black uppercase tracking-wider text-slate-500">
                    FATURAMENTO BRUTO
                  </span>
                  <p className="text-[11px] font-black text-white mt-0.5 tracking-tight">
                    R$ 142.500,80
                  </p>
                  <span className="text-[6px] text-slate-500">Vendas pagas</span>
                </div>

                <div className="bg-[#121212] p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                  <span className="text-[6px] font-black uppercase tracking-wider text-slate-500">
                    FATURAMENTO LÍQUIDO
                  </span>
                  <p className="text-[11px] font-black text-emerald-400 mt-0.5 tracking-tight">
                    R$ 138.938,28
                  </p>
                  <span className="text-[6px] text-slate-500">Após taxas</span>
                </div>

                <div className="bg-[#121212] p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                  <span className="text-[6px] font-black uppercase tracking-wider text-slate-500">
                    TAXA DE CONVERSÃO
                  </span>
                  <p className="text-[11px] font-black text-white mt-0.5 tracking-tight">
                    97,80%
                  </p>
                  <span className="text-[6px] text-slate-500">Aprovadas/total</span>
                </div>
              </div>

              {/* Balance Card & Revenue Chart Grid */}
              <div className="grid grid-cols-12 gap-2">
                {/* Saldo Total Card */}
                <div className="col-span-5 bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 p-3 rounded-2xl text-white shadow-lg shadow-orange-600/30 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                  <div className="flex justify-between items-start">
                    <span className="text-orange-100 text-[8px] font-bold">Saldo Total</span>
                    <span className="bg-white/20 text-white text-[6.5px] font-bold px-1.5 py-0.5 rounded-full">
                      +5.2%
                    </span>
                  </div>
                  <div className="my-1">
                    <p className="text-[15px] font-extrabold tracking-tight">R$ 142.500,80</p>
                    <p className="text-[6.5px] text-orange-200">Disponível para saque instantâneo</p>
                  </div>
                  <div className="flex items-center gap-1 text-[6.5px] text-orange-100 font-semibold">
                    <Flame className="w-2.5 h-2.5 text-amber-300" />
                    <span>Multiadquirência Ativa</span>
                  </div>
                </div>

                {/* Revenue Evolution Chart */}
                <div className="col-span-7 bg-[#121212] p-2.5 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[7.5px] font-bold text-white">Evolução de Vendas</span>
                    <span className="text-emerald-400 text-[6.5px] font-bold flex items-center">
                      <ArrowUpRight className="w-2 h-2 mr-0.5" /> +14.2%
                    </span>
                  </div>
                  <div className="h-[52px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartPoints} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="realDashGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stroke="#f97316"
                          strokeWidth={2}
                          fill="url(#realDashGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between text-[6px] text-slate-500 font-mono mt-0.5">
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sáb</span>
                    <span>Dom</span>
                  </div>
                </div>
              </div>

              {/* Transações Recentes Row */}
              <div className="bg-[#121212] p-2.5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[7.5px] font-bold text-white">Transações Recentes</span>
                  <MoreHorizontal className="w-2.5 h-2.5 text-slate-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[7px] py-0.5 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-[7px]">
                        ⚡
                      </span>
                      <div>
                        <p className="font-bold text-white leading-tight">Mentoria Rebelde Anual</p>
                        <p className="text-[5.5px] text-slate-500">Hoje, 14:32 • PIX</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-400">+ R$ 499,00</p>
                      <p className="text-[5.5px] text-emerald-400/80">Aprovado</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[7px] py-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[7px]">
                        📱
                      </span>
                      <div>
                        <p className="font-bold text-white leading-tight">Acesso Global Portugal</p>
                        <p className="text-[5.5px] text-slate-500">Hoje, 13:10 • MB WAY</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-400">+ € 89,90</p>
                      <p className="text-[5.5px] text-emerald-400/80">Aprovado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
