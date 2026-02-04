"use client";

import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export function BookYourCallSection() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    telefono: undefined as string | undefined,
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#0e1c0e]">
      <div className="max-w-4xl mx-auto bg-black p-10 border-t-2 border-t-primary">
        {/* Header */}
        <FadeIn delay={0.1} direction="up">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              IL CODICE DEL TRADING
            </h2>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2} direction="up">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nome Field */}
            <div>
              <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                NOME *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="JANE"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                required
              />
            </div>

            {/* Cognome Field */}
            <div>
              <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                COGNOME:
              </label>
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                placeholder="SMITH"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
              />
            </div>

            {/* Telefono Field */}
            <div>
              <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                NUMERO DI TELEFONO:
              </label>

              <PhoneInput
                international
                defaultCountry="US"
                value={formData.telefono}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    telefono: value,
                  }))
                }
                className="phone-input-custom"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="NAME@EXAMPLE.COM"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                required
              />
            </div>

            {/* Submit Button and Info */}
            <div className="flex items-center justify-between pt-8">
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded font-bold hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                OK
                <span className="text-xs">Press Enter ↲</span>
              </button>

              {/* Arrow buttons */}
              <div className="flex gap-1">
                <button
                  type="button"
                  className="w-10 h-10 border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-colors rounded flex items-center justify-center"
                >
                  <ChevronDown size={20} />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-colors rounded flex items-center justify-center"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
