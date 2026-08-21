import { site } from "@/lib/site";
import type { Metadata } from "next";

export const seoKeywords = [
  "smestaj Golija",
  "smestaj na Goliji",
  "vikendice Golija",
  "vikendice na Goliji",
  "vikendica Golija",
  "vikendica na Goliji",
  "kuca za odmor Golija",
  "kuca za odmor na Goliji",
  "odmor Golija",
  "odmor na Goliji",
  "planinski smestaj Golija",
  "planinska kuca Golija",
  "apartmani Golija",
  "prenociste Golija",
  "turizam Golija",
  "Planinska Rosa",
  "Planinska Rosa Golija",
  "Planinska Rosa smestaj",
  "Planinska Rosa Golija smestaj",
  "Planinska Rosa vikendice",
  "Planinska Rosa vikendica",
  "Planinska Rosa odmor",
  "Planinska Rosa Golija odmor",
  "Planinska Rosa kuca za odmor",
  "Planinska Rosa vikendica Golija",
  "Planinska Rosa smestaj Golija",
  "Planinska Rosa apartmani",
  "smestaj Planinska Rosa",
  "vikendica Planinska Rosa",
  "vikendice Planinska Rosa",
  "odmor Planinska Rosa",
  "odmor u Planinskoj Rosi",
  "smestaj u Planinskoj Rosi",
  "vikendica za odmor Golija",
  "vikendice za odmor Golija",
  "vikendica za vikend Golija",
  "vikendice za vikend Golija",
  "planinski odmor Golija",
  "odmor u prirodi Golija",
  "vikend u prirodi Golija",
  "miran odmor Golija",
  "porodicni odmor Golija",
  "luksuzni smestaj Golija",
  "privatni smestaj Golija",
  "smestaj u prirodi Golija",
] as const;

export const seoDescription =
  "Planinska Rosa — smeštaj i vikendice na Goliji. Planinske kuće za odmor, apartmani i privatni smeštaj u prirodi: miran porodični odmor, vikend u prirodi i planinski smeštaj Golija. Planinska Rosa Golija smeštaj, vikendice i kuća za odmor.";

export const seoOgTitle =
  "Smeštaj na Goliji | Vikendica i kuća za odmor";

export function pageUrl(path = "/"): string {
  if (path === "/") return `${site.url}/`;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function withCanonical(
  path: string,
  extra: Metadata = {},
): Metadata {
  const url = pageUrl(path);
  return {
    ...extra,
    alternates: {
      canonical: url,
      ...extra.alternates,
    },
    openGraph: {
      type: "website",
      locale: "sr_RS",
      siteName: site.name,
      url,
      ...extra.openGraph,
    },
  };
}
