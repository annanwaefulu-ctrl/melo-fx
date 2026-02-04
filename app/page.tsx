"use client";

import { PersonaSection } from "@/components/persona-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ResultsSection } from "@/components/results-section";
import { CTASection } from "@/components/cta-section";
import { WhatYouGetSection } from "@/components/what-you-get-section";
import { WhoIsMeloSection } from "@/components/who-is-melo-section";
import { TradingCodeInfoSection } from "@/components/trading-code-info-section";
import { BookYourCallSection } from "@/components/book-your-call-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <CTASection />
      <ResultsSection />
      <PersonaSection />
      <BenefitsSection />

      <WhatYouGetSection />
      <WhoIsMeloSection />
      <TradingCodeInfoSection />
      <BookYourCallSection />

      <FooterSection />
    </main>
  );
}
