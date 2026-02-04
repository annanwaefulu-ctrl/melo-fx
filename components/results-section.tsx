"use client";

import { FadeIn, StaggerContainer } from "@/components/animations/fade-in";
import SwiperProofs from "@/components/SwiperProofs";
import { AnimatedButton } from "./animated-button";

export function ResultsSection() {
  const youtubeVideos = [
    "https://www.youtube.com/embed/---7GWqlGg0",
    "https://www.youtube.com/embed/udqrYD9Do64",
    "https://www.youtube.com/embed/zn9bcPlt2C0",
    "https://www.youtube.com/embed/XmO2o6B9MRQ",
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#07130d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1} direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Il Codice Ti Fa Ottenere Risultati.{" "}
              <span className="text-primary">Garantiti.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white">
              E In 90 Giorni Massimo:
            </p>
          </div>
        </FadeIn>

        {/* YouTube Shorts */}
        <StaggerContainer delay={0.2} staggerChildren={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {youtubeVideos.map((url, i) => (
              <FadeIn key={i} direction="up">
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-primary/40 hover:border-primary transition">
                  <iframe
                    src={`${url}?autoplay=1&mute=1&loop=1&playlist=${url
                      .split("/")
                      .pop()}`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
        <FadeIn delay={0.4}>
          <div className="flex justify-center mb-12">
            <AnimatedButton>Continua a leggere</AnimatedButton>
          </div>
        </FadeIn>

        {/* Social Proof Image Slider */}
        <FadeIn delay={0.3} direction="up">
          <SwiperProofs />
        </FadeIn>
      </div>
    </section>
  );
}
