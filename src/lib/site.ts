export const site = {
  name: "Planinska Rosa",
  tagline: "Smeštaj na planini Golija",
  description:
    "Vrhunske planinske vile i apartmani na Goliji — mir, priroda i pažljivo osmišljen komfor.",
  phone: "+381 64 419 74 74",
  email: "kontakt@planinskarosa.rs",
  address: "Plešin 150E, Golija, Srbija",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4303.820552257988!2d20.363890499999997!3d43.2826071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757d25e222cd359%3A0x59642bf63d96a74c!2zMTUw0JUsINCf0LvQtdGI0LjQvQ!5e1!3m2!1ssr!2srs!4v1776196114010!5m2!1ssr!2srs",
  social: {
    instagram: "https://www.instagram.com/_planinska_rosa_golija/",
    facebook: "https://facebook.com",
  },
  bookingHubUrl: "https://www.booking.com/index.sr.html",
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Početna" },
  {
    href: "/accommodation",
    label: "Smeštaj",
    children: [
      { href: "/accommodation/villa-1", label: "Vila 1" },
      { href: "/accommodation/villa-2", label: "Vila 2" },
      { href: "/accommodation/villa-3", label: "Vila 3" },
    ],
  },
  { href: "/about-golija", label: "O Goliji" },
  { href: "/gallery", label: "Galerija" },
  { href: "/contact", label: "Kontakt" },
];
