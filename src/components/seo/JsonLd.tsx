import { seoDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: seoDescription,
    telephone: [site.phone, site.phoneSecondary],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Golija",
      addressCountry: "RS",
    },
    image: "/golija-slike/dvoriste/logo-planinska-rosa.png",
    sameAs: [site.social.instagram],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Vikendice na Goliji" },
      { "@type": "LocationFeatureSpecification", name: "Planinski smeštaj" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
