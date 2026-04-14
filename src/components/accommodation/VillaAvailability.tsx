import { IconCalendarBooking } from "@/components/icons/SocialBookingIcons";
import type { Villa } from "@/lib/villas";
import Link from "next/link";

export function VillaAvailability({ villa }: { villa: Villa }) {
  const embed = villa.availabilityCalendarEmbedUrl;
  const booking = villa.bookingPropertyUrl;

  return (
    <section className="border-y border-primary/10 bg-white px-5 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Kalendar</p>
        <h2 className="mt-3 font-serif text-3xl text-primary md:text-4xl">Raspoloživost</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-body/88">
          Ispod ide kalendar raspoloživosti za {villa.title}.
        </p>

        {embed ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-primary/12 shadow-card">
            <iframe
              title={`Raspoloživost — ${villa.title}`}
              src={embed}
              className="h-[min(560px,70vh)] w-full bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-primary/20 bg-primary/[0.04] px-6 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/45 text-primary">
              <IconCalendarBooking className="h-8 w-8" />
            </div>
            <p className="mt-4 max-w-lg mx-auto text-ink-body/90">
              Kalendar ćemo postaviti nakon Kreiranja bookinga.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
