"use client";

import { FadeIn, StaggerContainer } from "@/components/animations/fade-in";

export function PersonaSection() {
  const videos = [
    "https://www.youtube.com/embed/ZV3H-VhDXi4",
    "https://www.youtube.com/embed/OTtA6ZVPNJc",
    "https://www.youtube.com/embed/cI44CO03OpI",
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#07130d]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0.1} duration={0.8}>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-primary">
                PERSONE NORMALI, PROFITTI FUORI DAL NORMALE.
              </span>
              <span className="text-white">
                {" "}
                Persone esattamente come te, che stanno costruendo i loro
                portafogli a 6 ZERI, questo è il{" "}
              </span>
              <span className="text-white">CODICE DEL TRADING:</span>
            </h1>
          </div>
        </FadeIn>

        {/* Video Grid */}
        <StaggerContainer delay={0.2} staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {videos.map((url, i) => (
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
      </div>
    </section>
  );
}
