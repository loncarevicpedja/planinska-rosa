export type Villa = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  capacity: string;
  bedrooms?: string;
  bathrooms: string;
  size: string;
  gallery: string[];
  amenities: string[];
  /** Ako je false, objekat se prikazuje ali se ne nudi za rezervaciju. */
  bookable?: boolean;
  /** Pun HTTPS URL za src ugrađenog kalendara (Google / Booking widget / drugi alat). */
  availabilityCalendarEmbedUrl?: string;
  /** Direktan link ka ovoj vili na Booking.com. */
  bookingPropertyUrl?: string;
};

export function isBookable(villa: Villa) {
  return villa.bookable !== false;
}

export const villas: Villa[] = [
  {
    slug: "villa-1",
    title: "Planinska rosa 1",
    shortDescription:
      "Prostrano drveno utočište sa pogledom na šumu i terasom punom sunčeve svetlosti.",
    description:
      "Borov vrh dočekuje toplim tonovima drveta, detaljima od kamena i prozorima koji okviruju zelene obronke Golije. Jutra počinju planinskim svetlom i tihim ritmom šume. Otvoreni dnevni boravak prelazi u prostranu terasu — idealnu za sporu kafu, čitanje ili jednostavno disanje čistog vazduha. Pažljivo opremljena za duži boravak, spaja rustični šarm sa komforom koji očekujete od vrhunskog planinskog doma.",
    heroImage: "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica.jpeg",
    capacity: "Do 6 gostiju",
    bedrooms: "2 spavaće sobe",
    bathrooms: "Kupatilo i sauna",
    size: "100 m²",
    gallery: [
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-1.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-2.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-3.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-4.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-5.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-6.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-7.jpeg",
      "/golija-slike/vila-1/planinska-rosa-1-golija-smestaj-vikendica-8.jpeg"
    ],
    amenities: [
      "Potpuno opremljena kuhinja",
      "Kamin na drva",
      "Privatna terasa",
      "Parking",
      "Bežični internet",
      "Grejanje",
      "Posteljina i peškiri"
    ],
  },
  {
    slug: "villa-2",
    title: "Planinska rosa 2",
    shortDescription:
      "Topla A-frame kuća sa peći na drva, zelenom garniturom i saunom posle dana na Goliji.",
    description:
      "Planinska rosa 2 dočekuje oštrim krovom od lima i medenim daskama — kuća koja odmah deluje kao utočište. Unutra je sve u drvetu: otvoreni dnevni boravak sa tamnozelenom garniturom, trpezarija za šest i kuhinja spremna za jednostavan obrok. U uglu gori peć na drva, a veliki stakleni otvori vode u dvorište. Na spratu su bračna soba i soba sa dva kreveta ispod kosine. Dva kupatila, od kojih jedno sa saunom, zatvaraju dan tišinom i toplotom.",
    heroImage: "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica.jpeg",
    capacity: "Do 6 gostiju",
    bedrooms: "2 spavaće sobe",
    bathrooms: "2 kupatila",
    size: "70 m²",
    gallery: [
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-1.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-2.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-3.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-4.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-41.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-5.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-51.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-6.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-7.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-8.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-9.jpeg",
      "/golija-slike/vila-2/planinska-rosa-2-golija-smestaj-vikendica-10.jpeg"
    ],
    amenities: [
      "Opremljena kuhinja",
      "Peć na drva",
      "Sauna",
      "Trpezarija za šest",
      "Parking",
      "Bežični internet",
      "Izlaz na dvorište",
    ],
  },
  {
    slug: "villa-3",
    title: "Planinska rosa 3",
    shortDescription:
      "Svetla kuća među borovima — bež boravak, drveni plafoni i privatna sauna za sporiji ritam.",
    description:
      "Planinska rosa 3 stoji uz borove, sa istim A-frame karakterom imanja i mekšim, svetljim enterijerom. Dnevni boravak je otvoren, sa bež garniturom i svetlošću koja se prelama po daskama zidova i plafona. Trpezarija i kuhinja su tu, na dohvat ruke, za porodične večere posle šetnje. Sprat vodi u bračnu sobu uz prozor i sobu sa dva kreveta. U kupatilu vas čeka sauna — mali ritual pred noć na Goliji, kada šuma utihne i kuća ostane topla.",
    heroImage: "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica.jpeg",
    capacity: "Do 6 gostiju",
    bedrooms: "2 spavaće sobe",
    bathrooms: "2 kupatila",
    size: "70 m²",
    gallery: [
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-1.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-2.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-3.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-4.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-41.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-5.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-6.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-7.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-8.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-9.jpeg",
      "/golija-slike/vila-3/planinska-rosa-3-golija-smestaj-vikendica-10.jpeg"
    ],
    amenities: [
      "Opremljena kuhinja",
      "Sauna",
      "Trpezarija za šest",
      "Parking",
      "Bežični internet",
      "Izlaz na dvorište",
    ],
  },
  {
    slug: "gostionica",
    title: "Gostionica Topla",
    shortDescription:
      "Zasebna kućica za druženje i zajedničke obroke — toplo mesto susreta, a ne smeštaj za rezervaciju.",
    description:
      "Gostionica Topla stoji pored vikendica kao srce imanja: zasebna kućica u koju se dolazi da se sedne za sto, podeli obrok i produži dan posle šetnje Golijom. Nije namenjena rezervaciji noćenja — gosti je koriste tokom boravka u vilama, za porodična okupljanja, zajedničke večere i razgovore koji traju. Prostor prima do 24 osobe. Drvo, tiha svetlost i osećaj seoske gostionice čine je praktičnom i srdačnom, kao da ste svratili kod domaćina.",
    heroImage: "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica.jpeg",
    capacity: "Do 24 osobe",
    bathrooms: "Kupatilo",
    size: "30 m²",
    bookable: false,
    gallery: [
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-1.jpeg",
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-2.jpeg",
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-3.jpeg",
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-4.jpeg",
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-5.jpeg",
      "/golija-slike/gostionica/planinska-rosa-gostionica-golija-smestaj-vikendica-6.jpeg",
    ],
    amenities: [
      "Prostor za druženje",
      "Mesto za zajedničke obroke",
      "Opremljena kuhinja",
      "Bežični internet",
      "Baštenski nameštaj",
    ],
  },
];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}
