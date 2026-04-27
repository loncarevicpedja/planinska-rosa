import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";

export function LifestyleSection() {
  return (
    <section className="relative overflow-hidden bg-surface-deep">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
        <div className="rounded-[2rem] border border-primary/10 bg-white/95 p-8 shadow-2xl backdrop-blur-sm sm:p-10 md:p-12 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Atmosfera
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-forest md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Jutra u magli, popodneva u svetlosti kroz borove
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="space-y-6 text-base leading-relaxed text-ink-body/88 md:text-lg md:leading-relaxed">
                <p>
                  Zamislite kafu koja se polako hladi dok se dolina budi. Knjiga ostavljena na naslonu
                  jer vas je pogled odvukao napolje. Tih vetar u krošnjama — stalan, strpljiv, miran.
                </p>
                <p>
                  Taj ritam čuvamo: meko platno, toplo drvo, kamen koji drži svežinu večeri. Bez žurbe,
                  bez viška buke — samo luksuz da izaberete tišinu i da je pronađete svuda oko sebe.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
