import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-primary px-5 pt-28 pb-20 text-center md:pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
        Ova staza skreće sa puta
      </h1>
      <p className="mt-4 max-w-md text-sm text-cream/70">
        Stranica koju tražite ne postoji. Vratimo vas na mirnije staze.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Na početnu</ButtonLink>
        <ButtonLink href="/accommodation" variant="secondary">
          Smeštaj
        </ButtonLink>
      </div>
      <Link href="/contact" className="mt-8 text-sm text-gold underline-offset-4 hover:text-gold-light hover:underline">
        Kontakt
      </Link>
    </main>
  );
}
