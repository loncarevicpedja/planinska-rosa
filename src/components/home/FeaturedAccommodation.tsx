"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { isBookable, villas } from "@/lib/villas";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FeaturedAccommodation() {
  const stays = villas.filter(isBookable);
  const inn = villas.find((v) => !isBookable(v));

  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Odsednite kod nas"
          title="Tri vile, tri raspoloženja planine"
          subtitle="Svaki dom ima svoj karakter — izaberite ritam koji vam odgovara, od širokih panorama šume do jutara omekšanih livadom."
          tone="white"
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {stays.map((villa, i) => (
            <Reveal key={villa.slug} delay={0.08 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/12 bg-primary/[0.06] shadow-card ring-1 ring-primary/5"
              >
                <Link
                  href={`/accommodation/${villa.slug}`}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={villa.heroImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </Link>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-forest">{villa.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-body/85 md:text-base">
                    {villa.shortDescription}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/accommodation/${villa.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90"
                    >
                      Detaljnije <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        {inn ? (
          <Reveal className="mt-10 md:mt-12">
            <article className="flex flex-col overflow-hidden rounded-3xl border border-primary/12 bg-primary/[0.06] shadow-card ring-1 ring-primary/5 md:grid md:grid-cols-2 md:items-stretch">
              <Link
                href={`/accommodation/${inn.slug}`}
                className="relative block aspect-[16/11] w-full overflow-hidden md:aspect-auto md:min-h-[280px]"
              >
                <Image
                  src={inn.heroImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </Link>
              <div className="p-6 md:p-10">
                <h3 className="font-serif text-2xl text-forest md:text-3xl">{inn.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-body/85 md:text-base">
                  {inn.shortDescription}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/accommodation/${inn.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Pogledajte gostionicu <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}
        <Reveal className="mt-12 text-center md:mt-16">
          <ButtonLink href="/accommodation">Pogledajte ceo smeštaj</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
