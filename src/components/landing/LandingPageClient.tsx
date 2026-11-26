"use client";

import { useState, useEffect } from "react";
import { Language } from "./translations";
import { LandingBackground, GridLines } from "./LandingBackground";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { GlobalSalesSection } from "./GlobalSalesSection";
import { FeaturesSection } from "./FeaturesSection";
import { ThreePillarsSection } from "./ThreePillarsSection";
import { WalletInstantSection } from "./WalletInstantSection";
import { MultiAcquirerSection } from "./MultiAcquirerSection";
import { PricingSection } from "./PricingSection";
import { PhoneMetricsSection } from "./PhoneMetricsSection";
import { InteractiveCanvasSteps } from "./InteractiveCanvasSteps";
import { FaqSection } from "./FaqSection";
import { FooterSection } from "./FooterSection";

export function LandingPageClient() {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("tangerina_lang") as Language | null;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("tangerina_lang", lang);
  };

  // Scroll animations observer with robust threshold and fallback
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    const fallback = setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => el.classList.add("animate"));
    }, 2000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 flex flex-col min-h-screen relative">
      {/* Dynamic Animated Particle Canvas Background */}
      <LandingBackground />

      {/* Vertical Futuristic Beams & Grids */}
      <GridLines />

      {/* Main Top Wrap */}
      <div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative z-10">
        <Navbar language={language} setLanguage={handleSetLanguage} />
        <HeroSection language={language} />
        <GlobalSalesSection language={language} />
      </div>

      {/* Core Landing Sections */}
      <div id="solucoes">
        <FeaturesSection language={language} />
      </div>
      <div id="integracoes">
        <ThreePillarsSection />
      </div>
      <WalletInstantSection />
      <MultiAcquirerSection />
      <PricingSection />
      <PhoneMetricsSection />
      <InteractiveCanvasSteps />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
