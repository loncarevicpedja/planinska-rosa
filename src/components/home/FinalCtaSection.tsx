import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCtaSection() {
  return (
    <section className="border-y border-primary/10 bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Rezervacija"
          title="Rezervišite svoj mirni ugao na Goliji"
          subtitle="Javite nam datume, vilu koja vas privlači i posebne želje. Odgovorićemo lično — bez automatskih obećanja, sa gostoprimstvom od prve poruke."
          align="center"
          tone="white"
        />
        <Reveal className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href="/contact">Pošaljite upit</ButtonLink>
          <ButtonLink href="/accommodation" variant="outline">
            Uporedite vile
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
