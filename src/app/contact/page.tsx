import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktirajte ${site.name} telefonom, e-poštom ili putem formulara — smeštaj na Goliji.`,
};

export default function ContactPage() {
  return (
    <main className="bg-white pt-28 md:pt-32">
      <section className="px-5 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Kontakt"
            title="Da zajedno osmislimo Vaš beg na Goliju"
            subtitle="Javite se sa pitanjima o vilama i raspoloživosti."
            tone="white"
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-gold/25 bg-surface p-8 shadow-card md:p-10">
                  <h2 className="font-serif text-2xl text-cream">Direktan kontakt</h2>
                  <dl className="mt-8 space-y-6 text-sm md:text-base">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        Telefon
                      </dt>
                      <dd className="mt-2">
                        <a
                          className="text-cream/90 transition-colors hover:text-gold"
                          href={`tel:${site.phone.replace(/\s/g, "")}`}
                        >
                          {site.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        E-pošta
                      </dt>
                      <dd className="mt-2">
                        <a
                          className="text-cream/90 transition-colors hover:text-gold"
                          href={`mailto:${site.email}`}
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        Lokacija
                      </dt>
                      <dd className="mt-2 leading-relaxed text-cream/80">{site.address}</dd>
                    </div>
                  </dl>
                  <div className="mt-10 rounded-2xl border border-dashed border-gold/30 bg-surface-deep/60 p-5 text-sm text-cream/70">
                    Prvo želite da pregledate?{" "}
                    <Link href="/accommodation" className="font-medium text-gold hover:underline">
                      Pogledajte vile
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="hidden lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-surface-deep px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-cream md:text-3xl">Nađite nas na mapi</h2>
            <p className="mt-2 max-w-2xl text-sm text-cream/70">
              Tačna lokacija i uputstva za vožnju šaljemo posle rezervacije. Ovaj pregled centrira širi region Golije.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-gold/25 shadow-card md:min-h-[420px]">
              <iframe
                title="Mapa regiona Golije"
                src={site.mapEmbedUrl}
                className="absolute inset-0 h-full w-full grayscale-[25%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-2xl text-primary md:text-3xl">
              Jedan razgovor je dovoljan da počnete
            </h2>
            <p className="mt-4 text-ink-body/85">
              Podelite svoju priču — godišnjicu, porodičnu nedelju, odmor u dvoje ili sami sa sobom — a mi predložićemo vilu i godišnje doba koje odgovara.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Upit — Planinska Rosa")}`}
              className="inline-flex rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-primary shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-soft"
            >
              Pišite nam e-poštom
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
