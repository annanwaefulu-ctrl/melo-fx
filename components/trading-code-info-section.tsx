import { FadeIn } from "@/components/animations/fade-in";

export function TradingCodeInfoSection() {
  return (
    <section className="w-full -mt-[50px] pb-10 md:pb-20 px-4 md:px-6 bg-[#0e1c0e]">
      <div className="max-w-7xl mx-auto mt-6 md:mt-12 bg-[#07130d]  border  py-16 md:py-24  px-4 md:px-12 border-primary rounded-3xl">
        {/* Header */}
        <FadeIn delay={0.1} direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Il <span className="text-primary">Codice Del Trading</span>
            </h2>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase mb-4">
                  IL CODICE DEL TRADING
                </h3>
                <p className="text-white leading-relaxed text-sm md:text-base">
                  E' la strategia che ho usato per passare da studente al verde
                  a trader multimilionario, la quale mi permette di generare
                  profitti a 6 zeri ogni singolo mese.
                </p>
              </div>

              <p className="text-white leading-relaxed text-sm md:text-base">
                Avrai accesso alle mie strategie giornaliere, una community
                privata, una mentorship 1:1 con me, e accesso a capitali fino a
                $200k – il tutto strutturato per farti fare le tue prime 6 cifre
                entro 90 giorni.
              </p>
            </div>
          </FadeIn>

          {/* Right Column */}
          <FadeIn delay={0.3} direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-4">
                  COSTRUITO PER LE PERSONE{" "}
                  <span className="text-primary">AFFAMATE DI SUCCESSO</span>.
                  NON E' PER TUTTI.
                </h3>
                <p className="text-white leading-relaxed text-sm md:text-base">
                  Questo percorso non è per tutti. E' stato sviluppato solamente
                  per coloro che sono determinati, motivati ed affamati di
                  successo. Per coloro che si sono stancati di questo sistema
                  corrotto in cui viviamo.
                </p>
              </div>

              <p className="text-white leading-relaxed text-sm md:text-base">
                Lavoro solo con gente pronta a vincere, nel trading, nella vita,
                in qualsiasi cosa io faccia.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
