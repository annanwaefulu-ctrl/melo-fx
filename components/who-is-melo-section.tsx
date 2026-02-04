import { FadeIn } from "@/components/animations/fade-in";

export function WhoIsMeloSection() {
  return (
    <section className="w-full py-16 md:pt-24 md:pb-6 px-4 md:px-6 bg-[#0e1c0e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Header */}
        <FadeIn delay={0.1} direction="up">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">CHI' MELO?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
              MELOFX sui social, Carmelo Currò è il mio vero nome e lascia che
              mi presenti. Ho 24 anni, vengo da una famiglia normalissima e sono
              riuscito a cambiare la mia vita, la vita della mia famiglia e
              quella di 5,000 persone grazie al mondo del trading di Forex e
              Crypto.
            </p>
            <p className="text-base md:text-base text-gray-300 mb-6 leading-relaxed">
              Ho completato i miei studi a Londra, ho conseguito un diploma in
              Business & Finance in uno dei migliori college del Regno Unito. Mi
              sono laureato e specializzato in Finance & Risk management in una
              delle migliori università di Londra.
            </p>
            <p className="text-base md:text-base text-gray-300 mb-6 leading-relaxed">
              Sono entrato nel mondo del trading e degli investimenti nel 2017,
              e da quel momento la mia vita è cambiata. Sono riuscito a generare
              +$10,000,000 di profitto durante questi anni, ho comprato le
              macchine dei miei sogni, ho comprato gli orologi dei miei sogni e
              sono riuscito a costruirmi anche un portafoglio immobiliare da
              diversi milioni di dollari.
            </p>
            <p className="text-base md:text-base text-gray-300 mb-6 leading-relaxed">
              Ho creato la mia community perché sentivo di dover dare
              l’opportunità a tutti di poter entrare in questo mondo e uscire
              dal sistema corrotto in cui viviamo, cosi sono riuscito a cambiare
              la vita di +5,000 persone che ora vivono grazie a questo lavoro e
              sono diventate economicamente e geograficamente libere.
            </p>
          </div>
        </FadeIn>

        {/* Content - Collage layout */}
        <div className="relative w-full h-full mb-16 md:mb-0 md:h-screen max-h-screen">
          <FadeIn delay={0.2} direction="right">
            <div className="w-full h-full ">
              <img
                src="/lifestyle2.png"
                alt="Private jet"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
