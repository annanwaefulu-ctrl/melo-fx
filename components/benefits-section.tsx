"use client";

import { FadeIn, StaggerContainer } from "@/components/animations/fade-in";
import Image from "next/image";

export function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: "/user.svg",
      title: "COMMUNITY ESCLUSIVA + SUPPORTO 24H",
      description:
        "Accedi al canale privato, dove potrai farti qualsiasi domanda e poté confrontarti con gli altri trader. Con supporto 24/7 da me e il mio team.",
    },
    {
      id: 2,
      icon: "/graduate.svg",
      title: "+15H DI VIDEO CORSO",
      description:
        "Accedi ai video corso on demand dove tutti i concetti sono spiegati in modo semplice. Potrai riguardare il mio CODICE DEL TRADING che ti permette di generare un entrata coerente ogni singolo mese.",
    },
    {
      id: 3,
      icon: "/invest.svg",
      title: "LE MIE OPERAZIONI & INVESTIMENTI",
      description:
        "Scopri le mie operazioni dal vivo in diretta. Potrai imparare giornalmente, analizzare i miei investimenti e ruotare strategie per stare al passo sulla teoria e sulla pratica.",
    },
    {
      id: 4,
      icon: "/coach.svg",
      title: "COACHING 1:1",
      description:
        "Sarai seguito in 1:1 con me, collaborando a sessioni in coaching a sessione privata su tutto quello riguardante la tua analisi e sulla teoria e sulla pratica.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#0e1c0e]">
      <div className="max-w-6xl mx-auto">
        {/* Header with Text */}
        <FadeIn delay={0.1} direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-white">
                  ACCESSO ESCLUSIVO AL MIO CODICE CHE TI PERMETTE DI GENERARE
                  CIFRE A 6 ZERI OGNI MESE IN MODO COSTANTE E COLLAUDATO. POTRAI
                  AVERE ACCESSO A{" "}
                </span>
                <span className="text-primary">CAPITALI FINO A $200,000.</span>
              </h2>

              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Sarai seguito personalmente da me in 1:1. Imparerai tutte le mie
                strategie, tutte le mie tecniche e le applicherai in live con
                me, ma partirai da una base solida perchè avrai accesso a conti
                con capitali fino a $200,000.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Risultati? Garantiti. Se non avrai accesso ad un conto da almeno
                25k entro 90 giorni, sarai rimborsato al 100% da me. Questa è la
                mia promessa, ed è la prova di quanto sono fiducioso della mia
                strategia.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="relative  h-full   min-h-96">
              <img
                src="/benefit.png"
                alt="lifestyle image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Benefits Cards - Grid Layout */}
        <StaggerContainer delay={0.2} staggerChildren={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 md:pb-12">
            {benefits.map((benefit) => {
              return (
                <FadeIn key={benefit.id} direction="up">
                  <div className="relative w-full h-full">
                    <div className="absolute -top-8 left-6 z-20">
                      <div className="relative w-full h-full   flex items-center justify-center">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={40}
                          height={40}
                          className="relative z-10 w-full h-full "
                        />
                      </div>
                    </div>

                    <div className="relative w-full h-full rounded-3xl p-[2px] mt-8">
                      <div className="absolute inset-0 rounded-3xl from-primary via-primary to-primary/70" />
                      <div className="relative z-10 w-full h-full rounded-3xl border border-primary bg-[#0b0b0b] p-6 md:p-6 flex flex-col">
                        <h3 className="text-sm md:text-base font-bold text-white mb-3 leading-tight mt-14">
                          {benefit.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
