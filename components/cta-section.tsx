"use client";

import { AnimatedButton } from "@/components/animated-button";
import { FadeIn } from "@/components/animations/fade-in";

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#08130B]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Il Codice Del Trading By{" "}
              <span className="text-primary">MeloFX</span>
            </h2>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Impara Il Codice </span>
              <span className="text-primary">
                Per Diventare Un Trader Profittevole
              </span>
              <span className="text-white">
                {" "}
                E Generare 6 Zeri In 90 Giorni.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-12">
              Impari Direttamente Da Un Trader Che Ha Generato +$10M
            </p>
          </div>
        </FadeIn>

        {/* YouTube Video */}
        <FadeIn delay={0.3}>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2BBBDsgKjAs?rel=0&modestbranding=1&autoplay=0"
              title="MeloFX Trading Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.4}>
          <div className="flex justify-center">
            <AnimatedButton subtext="$1,537 persone sono da dentro la community.">
              PRENOTA LA TUA CHIAMATA
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
