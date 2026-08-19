import type { Villa } from "@/lib/villas";
import type { ReactNode } from "react";

function IconGuests() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.2 19c.4-2.2 1.7-3.5 3.6-3.5 1.1 0 2 .4 2.7 1.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBed() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 18v-6.5A2.5 2.5 0 0 1 6.5 9H20v9M4 18h16M4 14h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9V7.5A1.5 1.5 0 0 1 8.5 6h3A1.5 1.5 0 0 1 13 7.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBath() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 13h14v2.5A3.5 3.5 0 0 1 15.5 19h-7A3.5 3.5 0 0 1 5 15.5V13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 13V8.5A2.5 2.5 0 0 1 9.5 6h.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 19.5v1M17 19.5v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconArea() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 12h16M12 5v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VillaFacts({ villa }: { villa: Villa }) {
  const facts: { label: string; icon: ReactNode }[] = [
    { label: villa.capacity, icon: <IconGuests /> },
    ...(villa.bedrooms ? [{ label: villa.bedrooms, icon: <IconBed /> }] : []),
    { label: villa.bathrooms, icon: <IconBath /> },
    { label: villa.size, icon: <IconArea /> },
  ];

  return (
    <div className="rounded-2xl border border-primary/12 bg-white p-6 shadow-soft">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Važni podaci
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-ink-body/90">
        {facts.map((fact) => (
          <li key={fact.label} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
              {fact.icon}
            </span>
            {fact.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
