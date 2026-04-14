export type Villa = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  capacity: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
  gallery: string[];
  amenities: string[];
  /** Pun HTTPS URL za src ugrađenog kalendara (Google / Booking widget / drugi alat). */
  availabilityCalendarEmbedUrl?: string;
  /** Direktan link ka ovoj vili na Booking.com. */
  bookingPropertyUrl?: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const villas: Villa[] = [
  {
    slug: "villa-1",
    title: "Vila Sanja",
    shortDescription:
      "Prostrano drveno utočište sa pogledom na šumu i terasom punom sunčeve svetlosti.",
    description:
      "Borov vrh dočekuje toplim tonovima drveta, detaljima od kamena i prozorima koji okviruju zelene obronke Golije. Jutra počinju planinskim svetlom i tihim ritmom šume. Otvoreni dnevni boravak prelazi u prostranu terasu — idealnu za sporu kafu, čitanje ili jednostavno disanje čistog vazduha. Pažljivo opremljena za duži boravak, spaja rustični šarm sa komforom koji očekujete od vrhunskog planinskog doma.",
    heroImage: "/golija-slike/vila-1/vikendica-hero.jpeg",
    capacity: "Do 6 gostiju",
    bedrooms: "3 spavaće sobe",
    bathrooms: "2 kupatila",
    size: "Oko 140 m²",
    gallery: [
      "/golija-slike/vila-1/enterijer.jpeg",
      "/golija-slike/vila-1/enterijer-pogled(2).jpeg",
      "/golija-slike/vila-1/enterijer.jpeg",
      "/golija-slike/vila-1/enterijer(4).jpeg",
      "/golija-slike/vila-1/enterijer-spavaca-soba.jpeg",
    ],
    amenities: [
      "Potpuno opremljena kuhinja",
      "Kamin na drva",
      "Privatna terasa",
      "Parking",
      "Bežični internet",
      "Grejanje",
      "Posteljina i peškiri",
      "Sauna"
    ],
  },
  {
    slug: "villa-2",
    title: "Vila 2",
    shortDescription:
      "Intimna vila u alpskom duhu — lokalni kamen, meka svetlost i panoramski grebeni.",
    description:
      "Vila 2 osmišljena je za goste koji vole teksturu i mir. Prirodni materijali sidre enterijer, dok veliki otvori okviruju nebo iznad Golije. Večeri pozivaju na opuštanje uz vatru; dani na istraživanje livada, staza i vidikovaca. Svaki detalj je u funkciji spokoja — pročišćen prostor, kvalitetna posteljina i kuhinja spremna za jednostavno, iskreno kuvanje posle vremena provedenog napolju.",
    heroImage: unsplash("photo-1600047509807-ba8f99d2cdde"),
    capacity: "Do 4 gosta",
    bedrooms: "2 spavaće sobe",
    bathrooms: "1 kupatilo",
    size: "Oko 95 m²",
    gallery: [
      unsplash("photo-1600585154526-990dced4db0d"),
      unsplash("photo-1600607687644-c7171b42498f"),
      unsplash("photo-1600210492486-724fe5c67fb0"),
      unsplash("photo-1600566752355-35792bedcfea"),
    ],
    amenities: [
      "Opremljena kuhinja",
      "Kamin u enterijeru",
      "Balkon sa pogledom",
      "Parking",
      "Bežični internet",
      "Podno grejanje u kupatilu",
      "Baštenski nameštaj",
    ],
  },
  {
    slug: "villa-3",
    title: "Vila 3",
    shortDescription:
      "Svetao, vazdušast apartman sa pogledom na livadu — za par ili malu porodicu.",
    description:
      "Vila 3, gde jutarnja magla pretvara pejzaž u meke tonove. Raspored je otvoren i jednostavan, u smirenoj paleti inspirisanoj koricom breze, mahovinom i bledom kamenu. Odlična baza za planinarenje, fotografiju i spor život. Sa staza se vraćate na toplu tuš, čaj na balkonu i tišinu koju donose samo planinske večeri.",
    heroImage: unsplash("photo-1600585154363-67eb9e2e2099"),
    capacity: "Do 4 gosta",
    bedrooms: "2 spavaće sobe",
    bathrooms: "1 kupatilo",
    size: "Oko 78 m²",
    gallery: [
      unsplash("photo-1600573472592-401b489a3cdc"),
      unsplash("photo-1600607688969-a5bfcd646154"),
      unsplash("photo-1600585154084-4e5fe7c39198"),
      unsplash("photo-1600566753086-00f18fb6b3ea"),
    ],
    amenities: [
      "Kuhinjica i trpezarija",
      "Privatni balkon",
      "Pogled na prirodu",
      "Parking",
      "Bežični internet",
      "Grejanje",
      "Zastori za potpunu tamu",
    ],
  },
];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}
