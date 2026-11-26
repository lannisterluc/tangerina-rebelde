"use client";

export function FooterSection() {
  return (
    <div
      id="contato"
      className="overflow-hidden group bg-[#050505] w-full border-white/5 border-t relative"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none z-0 absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
        <img
          alt="Texture"
          className="opacity-20 mix-blend-luminosity w-full h-full object-cover absolute inset-0 blur-sm"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col justify-between">
        {/* Top bar in footer */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 border-b border-white/5 pb-8 animate-on-scroll animate">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" fill="currentColor" fillOpacity="0.15" r="10" />
                <circle cx="7" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="17" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              Fale Conosco
            </span>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-widest uppercase text-neutral-500">
            <a className="hover:text-white transition-colors duration-300" href="#">
              Política de Privacidade
            </a>
            <a className="hover:text-white transition-colors duration-300" href="#">
              Termos de Uso
            </a>
            <span className="text-neutral-500">© 2026 TANGERINA REBELDE - UNIPESSOAL LDA</span>
          </div>
        </div>

        {/* Corporate Legal Information Bar */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-400 animate-on-scroll animate">
          <div className="space-y-1.5">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-neutral-500 font-semibold text-[10px] tracking-wider uppercase">Firma:</span>
              <span className="text-white font-medium">TANGERINA REBELDE - UNIPESSOAL LDA</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-neutral-400">
              <span><strong className="text-neutral-500 font-medium">NIPC:</strong> 519748760</span>
              <span><strong className="text-neutral-500 font-medium">Natureza Jurídica:</strong> SOCIEDADE POR QUOTAS</span>
            </div>
          </div>

          <div className="space-y-1.5 md:text-right">
            <div>
              <span className="text-neutral-500 font-semibold text-[10px] tracking-wider uppercase md:mr-1.5">Sede:</span>
              <span className="text-neutral-300 font-medium">Avenida São Miguel, 296, Atelier 10 CW-7</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Distrito: Lisboa • Concelho: Cascais • Freguesia: Carcavelos e Parede • 2775 750 CARCAVELOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
