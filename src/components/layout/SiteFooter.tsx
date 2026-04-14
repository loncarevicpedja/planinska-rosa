import { SocialIconLinks } from "@/components/layout/SocialIconLinks";
import { mainNav, site } from "@/lib/site";
import { villas } from "@/lib/villas";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/25 bg-nav">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-white">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/72">
              {site.tagline}. {site.description}
            </p>
            <SocialIconLinks className="mt-6" variant="onDark" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Istražite
            </p>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/82 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Vile</p>
            <ul className="mt-4 space-y-2.5">
              {villas.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/accommodation/${v.slug}`}
                    className="text-sm text-white/82 transition-colors duration-300 hover:text-white"
                  >
                    {v.title.split("—")[0]?.trim() ?? v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/82">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="leading-relaxed">{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gold/20 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
