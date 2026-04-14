import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija",
  description:
    "Vizuelno putovanje kroz pejzaže Golije i tople enterijere Planinske Rose.",
};

export default function GalleryPage() {
  return (
    <main className="bg-primary pt-28 md:pt-32">
      <section className="px-5 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Galerija"
            title="Svetlost, tekstura i raspoloženje planine"
            subtitle="Dodirnite ili kliknite fotografiju za miran prikaz preko celog ekrana. Strelicama na tastaturi listate; zatvorite dugmetom Zatvori ili tipkom za napuštanje celog ekrana."
            align="center"
          />
          <Reveal>
            <GalleryLightbox />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
