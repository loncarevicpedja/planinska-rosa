import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialIconLinks } from "@/components/layout/SocialIconLinks";
import { site } from "@/lib/site";

export function ContactPreview() {
  return (
    <section className="bg-surface-deep px-5 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14 lg:items-stretch">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-primary/10 bg-white p-8 shadow-lg md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Kontakt</p>
            <h2 className="mt-3 font-serif text-3xl text-forest md:text-4xl">Tu smo da pomognemo</h2>
            <dl className="mt-8 space-y-5 text-sm md:text-base">
              <div>
                <dt className="font-medium text-gold">Telefon</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-ink-body transition-colors hover:text-forest"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gold">E-pošta</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink-body transition-colors hover:text-forest"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gold">Lokacija</dt>
                <dd className="mt-1 leading-relaxed text-ink-body/85">{site.address}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Društvene mreže i rezervacija
              </p>
              <SocialIconLinks variant="onLight" className="mt-3" />
            </div>
            <div className="mt-10">
              <ButtonLink href="/contact">Kontakt i mapa</ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-primary/10 bg-white p-2 shadow-card md:min-h-[360px]">
            <iframe
              title="Pregled mape — region Golije"
              src={site.mapEmbedUrl}
              className="absolute inset-0 h-full w-full rounded-2xl grayscale-[20%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
