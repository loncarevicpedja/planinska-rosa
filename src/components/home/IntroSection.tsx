import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroSection() {
  return (
    <section className="border-y border-gold/15 bg-surface-deep px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/8 bg-white px-8 py-12 shadow-xl sm:px-10 sm:py-14 md:px-14 md:py-16">
        <SectionHeading
          eyebrow="Zašto Golija?"
          title="Mesto oblikovano tišinom, kamenom i vazduhom punim mirisa borova"
          subtitle="Planinska Rosa leži na blagim obroncima Golije — gde jutra stižu u mekoj svetlosti, popodneva pozivaju na šetnje stazama, a večeri se završavaju toplinom drveta i platna. Manje je žurbe, a više sećanja na to kako je disati duboko."
          align="center"
          tone="white"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="border-x border-gold/35 px-4 font-serif text-xl italic leading-relaxed text-forest md:border-x-0 md:px-0 md:text-2xl md:leading-relaxed">
              „Verujemo da planinski boravak treba da bude iskren — prirodni materijali, pažljiv komfor
              i prostor u kome možete jednostavno biti.“
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
