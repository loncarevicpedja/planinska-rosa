import { VillaAvailability } from "@/components/accommodation/VillaAvailability";
import { VillaGallerySwiper } from "@/components/accommodation/VillaGallerySwiper";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getVillaBySlug, villas } from "@/lib/villas";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) return {};
  return {
    title: villa.title,
    description: villa.shortDescription,
  };
}

export default async function VillaPage({ params }: Props) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) notFound();

  const gallery = [villa.heroImage, ...villa.gallery];

  return (
    <main className="bg-primary pt-10 md:pt-10">
      <section className="relative min-h-[52vh] w-full md:min-h-[60vh]">
        <Image
          src={villa.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/20" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Vila</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-[3.25rem]">
              {villa.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-body/90 md:text-lg">{villa.description}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/12 bg-white p-6 shadow-soft">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Važni podaci
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-body/90">
                <li>{villa.capacity}</li>
                <li>{villa.bedrooms}</li>
                <li>{villa.bathrooms}</li>
                <li>{villa.size}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/12 bg-white p-6 shadow-soft">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Sadržaji</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-body/90">
                {villa.amenities.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-surface-deep px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-cream md:text-3xl">Galerija</h2>
            <p className="mt-2 max-w-xl text-sm text-cream/70">
              Materijali, svetlost i pogledi koji okružuju vaš boravak izbliza.
            </p>
          </Reveal>
          <div className="mt-10">
            <VillaGallerySwiper images={gallery} />
          </div>
        </div>
      </section>

      <VillaAvailability villa={villa} />

      <section className="px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-surface-deep px-8 py-12 text-center md:px-12">
          <Reveal>
            <h2 className="font-serif text-2xl text-cream md:text-3xl">Spremni da usporite ovde?</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">
              Pošaljite nam željene datume i potvrdićemo dostupnost za {villa.title}.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/contact">Kontakt i rezervacija</ButtonLink>
            <ButtonLink href="/accommodation" variant="secondary">
              Ostale vile
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
