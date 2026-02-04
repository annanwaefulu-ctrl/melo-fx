"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Instagram, TicketIcon as TikTok, Youtube } from "lucide-react";

export function FooterSection() {
  const socialLinks = [
    {
      id: 1,
      platform: "Instagram",
      followers: "+130K",
      icon: Instagram,
      url: "#",
    },
    {
      id: 2,
      platform: "TikTok",
      followers: "+25K",
      icon: TikTok,
      url: "#",
    },
    {
      id: 3,
      platform: "YouTube",
      followers: "+10K",
      icon: Youtube,
      url: "#",
    },
  ];

  return (
    <footer className="w-full p-12 md:p-12 px-4 md:px-6 bg-[#0e1c0e] ">
      <div className="max-w-7xl mx-auto mt-6 md:mt-12 bg-[#07130d]  border  py-16 md:py-24  px-4 md:px-12 border-primary rounded-3xl">
        <FadeIn delay={0.1} direction="up">
          <div className="text-center">
            {/* Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
              <span className="text-white">I MIEI CANALI </span>
              <span className="text-primary">UFFICIALI:</span>
            </h2>

            {/* Social Links Grid */}
            <div className="grid items-center justify-center grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    className="group flex flex-col items-center justify-center p-8 rounded-2xl   hover:border-primary transition-colors hover:bg-primary/5"
                  >
                    {/* Icon */}
                    <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent
                        className="w-8 h-8 md:w-10 md:h-10 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Platform Name */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {social.platform}
                    </h3>

                    {/* Followers Count */}
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      {social.followers}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Bottom text */}
            <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-primary/30">
              <p className="text-xs md:text-sm text-gray-400">
                © 2026 MeloFX. All rights reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
