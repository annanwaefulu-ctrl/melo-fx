import { CircleCheckBig } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations/fade-in";

export function WhatYouGetSection() {
  const benefits = [
    {
      id: 1,
      text: "Libertà finanziaria, riuscirai a generare cifre a 6 zeri ogni singolo mese, dal tuo telefono o computer.",
    },
    {
      id: 2,
      text: "Libertà geografica, potrai lavorare e guadagnare da qualsiasi parte del mondo, ti servirà solo una connessione ad internet.",
    },
    {
      id: 3,
      text: "Educazione e formazione sul trading di forex, crypto e materie prime. Tutta la mia intera strategia dalla teoria alla pratica.",
    },
    {
      id: 4,
      text: "Il tuo mindset e la tua persona cambieranno totalmente, diventerai disciplinato e sarai in grado di gestire le tue emozioni durante le tue operazioni e investimenti, così da prendere le corrette decisioni finanziarie.",
    },
    {
      id: 5,
      text: "Avrai accesso a capitali fino a $200,000 in modo da non rischiare i tuoi risparmi e da poter iniziare da una base solida così da generare grandi profitti fin da subito.",
    },
  ];

  return (
    <section className="w-full mx-auto py-10  bg-[#0e1c0e] md:mt-[-50px] ">
      <div className="max-w-7xl mx-auto mt-6 md:mt-12 bg-[#07130d]  border  py-16 md:py-24  px-4 md:px-12 border-primary rounded-3xl ">
        {/* Header */}
        <FadeIn delay={0.1} direction="up">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Cosa Otterrai Grazie{" "}
              <span className="text-primary">Codice Del Trading?</span>
            </h2>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Images */}
          <FadeIn delay={0.2} direction="left">
            <div className="flex flex-col gap-4 items-center md:items-start">
              {/* Main large image */}
              <div className="w-full   ">
                <img
                  src="/lifestyle.png"
                  alt="Trading lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Benefits */}
          <StaggerContainer delay={0.2} staggerChildren={0.08}>
            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <FadeIn key={benefit.id} direction="right">
                  <div className="flex gap-3 p-4 md:p-6 rounded-2xl border-2 border-primary bg-transparent hover:bg-primary/5 transition-colors">
                    <CircleCheckBig className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm md:text-[16px] text-white leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
