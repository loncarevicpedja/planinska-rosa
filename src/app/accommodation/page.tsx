import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isBookable, villas } from "@/lib/villas";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smeštaj i vikendice na Goliji",
  description:
    "Vikendice i smeštaj Planinska Rosa na Goliji — planinske kuće za odmor, privatni smeštaj u prirodi i gostionica na imanju.",
};

export default function AccommodationPage() {
  return (
    <main className="bg-primary pt-28 md:pt-32">
      <section className="px-5 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Smeštaj"
            title="Izaberite vilu koja odgovara Vašem ritmu"
            subtitle="Tri vile za noćenje i zasebna gostionica za druženje — sve na istom mirnom imanju na Goliji."
          />
          <div className="grid gap-10 lg:gap-14">
            {villas.map((villa, i) => (
              <Reveal key={villa.slug} delay={0.08 * i}>
                <article className="grid items-center gap-8 overflow-hidden rounded-3xl border border-primary/12 bg-white shadow-card lg:grid-cols-2 lg:gap-0">
                  <Link
                    href={`/accommodation/${villa.slug}`}
                    className={`relative aspect-[16/11] lg:aspect-auto lg:min-h-[380px] ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={villa.heroImage}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                  </Link>
                  <div
                    className={`px-6 pb-10 pt-2 md:px-10 md:pb-12 md:pt-4 lg:py-14 ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h2 className="font-serif text-2xl text-forest md:text-3xl">{villa.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-body/85 md:text-base">
                      {villa.shortDescription}
                    </p>
                    <dl className="mt-6 grid grid-cols-2 gap-3 text-xs text-ink-body/75 sm:text-sm">
                      <div>
                        <dt className="text-gold">Kapacitet</dt>
                        <dd className="mt-0.5 font-medium text-forest/90">{villa.capacity}</dd>
                      </div>
                      <div>
                        <dt className="text-gold">Površina</dt>
                        <dd className="mt-0.5 font-medium text-forest/90">{villa.size}</dd>
                      </div>
                    </dl>
                    <div className="mt-8">
                      <ButtonLink href={`/accommodation/${villa.slug}`}>
                        {isBookable(villa) ? "Detalji smeštaja" : "Pogledajte gostionicu"}
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
