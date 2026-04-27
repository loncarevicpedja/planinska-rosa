import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "O Goliji",
  description:
    "Otkrijte Park prirode Golija — livade, šume, staze i smiren ritam zelenog srca planina Srbije.",
};

export default function AboutGolijaPage() {
  return (
    <main className="bg-white pt-10 md:pt-10">
      <section className="relative min-h-[45vh] md:min-h-[50vh]">
        <Image
          src="/golija-slike/slike-planine/golija-jankov-kamen.jpg"
          alt="Planinski grebeni u mekoj jutarnjoj svetlosti"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <h1 className="max-w-3xl font-serif text-4xl text-cream md:text-5xl lg:text-[3.25rem]">
            Golija — gde pejzaž podstiče da dišete sporije
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Park prirode"
                title="Golija u kratkim crtama"
                subtitle="Golija je planina jugozapadne Srbije, između Ivanjice, Raške i Novog Pazara. Najviši vrh je Jankov kamen (1.833 m), a ceo masiv je deo Parka prirode i biosfere Golija-Studenica. Na ovom prostoru susreću se široki šumski pojasevi, planinske livade i izvori koji oblikuju prepoznatljiv, miran pejzaž."
                tone="white"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl shadow-soft ring-1 ring-gold/25">
                <Image
                  src="/golija-slike/slike-planine/Golija-slika.jpeg"
                  alt="Sunčeve zrake kroz gustu šumu"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { label: "Najviši vrh", value: "Jankov kamen, 1.833 m" },
              { label: "Dužina masiva", value: "oko 32 km (zapad-istok)" },
              { label: "Status zaštite", value: "Park prirode od 2001." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.05 * i}>
                <div className="rounded-2xl border border-primary/12 bg-white p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{item.label}</p>
                  <p className="mt-2 font-serif text-xl text-forest">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-ink-body/85 md:text-base">
              Zahvaljujući položaju i nadmorskoj visini, Golija ima izražena godišnja doba: proleće je sveže i zeleno,
              leta su prijatna i bez velikih vrućina, jesen je duga i zlatna, a zima stabilna sa obiljem snega. Upravo
              ta smena ritmova čini je atraktivnom i za kraće vikend boravke i za duži odmor u prirodi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl shadow-soft ring-1 ring-gold/25">
              <Image
                src="/golija-slike/slike-planine/skijas.jpg"
                alt="Planinar iznad doline pune oblaka"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Priroda i klima"
              title="Sveža leta, snežne zime i mnogo izvora"
              subtitle="Golija je poznata po dugim zimama sa dosta snega, prijatnim letima i bogatstvu vode. Šume bukve, jele i smrče, zajedno sa livadama i rezervatima, daju joj miran i autentičan planinski karakter."
            />
            <Reveal delay={0.08}>
              <ul className="mt-4 space-y-3 text-cream/78">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Veliki broj snežnih dana i čist planinski vazduh tokom cele godine
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Raznovrsne šume i zaštićeni delovi prirode sa bogatim biodiverzitetom
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Staze, vidikovci i proplanci za lagane šetnje ili duže ture
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Doline Studenice i Moravice daju planini dodatnu svežinu i živu dinamiku
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary/[0.04] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Atmosfera"
            title="Zašto se gosti vraćaju na ove obronke"
            align="center"
            subtitle="Golija spaja pitomu planinu, tišinu i lokalno gostoprimstvo. Ovde je ritam sporiji, a boravak jednostavan i kvalitetan."
            tone="white"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Čist vazduh, iskrena tišina",
                text: "Noći su dovoljno tame za zvezde; jutra stižu sa cvrkutom, a ne bukom.",
              },
              {
                title: "Divljina na dohvat ruke",
                text: "Možete duboko u prirodu i ipak se vratiti na toplu tuš kabinu i meki krevet.",
              },
              {
                title: "Nežan ritam",
                text: "Pijace, staze, kafa na terasi — dani ovde deluju namerno usporeni.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <div className="h-full rounded-2xl border border-primary/12 bg-white p-8 shadow-card">
                  <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-body/85">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <ButtonLink href="/contact">Isplanirajte posetu</ButtonLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
