"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/gallery-images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function GalleryPreview() {
  return (
    <section className="bg-white py-20 md:py-15 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galerija"
          title="Trenuci sa padine i iz boravka"
          subtitle="Teksture drveta i kamena, svetlost kroz krošnje i tišina koja sledi posle dana provedenog napolju. Prevucite u stranu za još kadrova — kompletan album je na posebnoj stranici."
          align="center"
          tone="white"
        />
      </div>

      <div
        className="gallery-x-scroll mx-auto mt-2 flex w-[90%] touch-pan-x gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 pl-3 sm:gap-5 sm:px-6 lg:px-8"
        role="region"
        aria-label="Pregled galerije — horizontalno pomeranje"
      >
        {galleryImages.map((img, i) => (
          <Reveal key={`${img.src}-${i}`} delay={0.03 * (i % 6)}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-[min(78vw,17.5rem)] shrink-0 snap-start sm:w-[min(52vw,18rem)] md:w-[min(40vw,19rem)] lg:w-72"
            >
              <Link href="/gallery" className="block outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ring-1 ring-primary/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 78vw, (max-width:1024px) 40vw, 288px"
                  />
                </div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8">
        <Reveal>
          <ButtonLink href="/gallery" variant="outline">
            Otvorite celu galeriju
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
