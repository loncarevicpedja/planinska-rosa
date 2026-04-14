import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function AboutGolijaPreview() {
  return (
    <section className="bg-primary px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card ring-1 ring-gold/35 md:aspect-[5/6]">
            <Image
              src="/golija-slike/slike-planine/Golija-slika.jpeg"
              alt="Osvetljeni planinski vrhovi iznad talasastih grebena"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Planina"
            title="Golija — nežni div livada i neba"
            subtitle="Zaštićeni pejzaži, bistri potoci i staze koje nagrađuju svaku pauzu. Bilo da hodate satima ili posmatrate kako oblaci oblikuju greben sa terase, Golija nudi retku mešavinu dostupnosti i divljeg mira."
            tone="dark"
          />
          <Reveal delay={0.1}>
            <ul className="mt-2 space-y-3 text-white/88">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Park prirode sa bogatim biljnim i životinjskim svetom i tišim šumskim putevima
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Lepota kroz godišnja doba — od livadskog cveća do grebena u magli
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Sporiji ritam zbog koga večeri deluju duže i nežnije
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <ButtonLink href="/about-golija" variant="secondary">
              Saznajte više o Goliji
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
