# Invictuspay - Landing Page

Landing Page moderna, responsiva e de alta conversão da plataforma **Invictuspay**, baseada no design Lumina com identidade visual própria (modo dark, efeitos de partículas, gráficos interativos e suporte multi-idiomas PT/EN/ES).

## 🚀 Como Executar

### 1. Instalar as dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```

Abra no navegador em [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Tecnologias Utilizadas
- **Next.js 16** (App Router & Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **Lucide Icons**
- **Recharts** (Gráficos interativos da Dashboard Mock)
- **TypeScript**

---

## 📁 Estrutura de Pastas
```
├── public/                 # Imagens, logos e ícones da marca
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css     # Tailwind + animações Lumina
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Página inicial
│   └── components/
│       └── landing/        # Todos os componentes modulares da LP
│           ├── Navbar.tsx
│           ├── HeroSection.tsx
│           ├── HeroDashboardMock.tsx
│           ├── GlobalSalesSection.tsx
│           ├── FeaturesSection.tsx
│           ├── ThreePillarsSection.tsx
│           ├── WalletInstantSection.tsx
│           ├── MultiAcquirerSection.tsx
│           ├── PricingSection.tsx
│           ├── PhoneMetricsSection.tsx
│           ├── InteractiveCanvasSteps.tsx
│           ├── FaqSection.tsx
│           ├── FooterSection.tsx
│           ├── LandingBackground.tsx
│           ├── LandingPageClient.tsx
│           └── translations.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```
