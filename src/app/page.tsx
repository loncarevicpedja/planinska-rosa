import { AboutGolijaPreview } from "@/components/home/AboutGolijaPreview";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { FeaturedAccommodation } from "@/components/home/FeaturedAccommodation";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSlider } from "@/components/home/HeroSlider";
import { IntroSection } from "@/components/home/IntroSection";
import { LifestyleSection } from "@/components/home/LifestyleSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <main>
        <IntroSection />
        <FeaturedAccommodation />
        <AboutGolijaPreview />
        <GalleryPreview />
        <AmenitiesSection />
        <LifestyleSection />
        <FinalCtaSection />
        <ContactPreview />
      </main>
    </>
  );
}
