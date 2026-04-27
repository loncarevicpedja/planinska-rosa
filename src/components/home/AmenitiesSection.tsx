import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Parking",
    text: "Privatan parking blizu svake vile radi lakog dolaska i odlaska.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 10v8M4 6v4M8 6v12M8 6h8a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "WiFi",
    text: "Stabilna veza za planiranje ruta, deljenje trenutaka ili miran rad.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8.5 14.5a4 4 0 0 1 7 0M5 11a8 8 0 0 1 14 0M2 7.5a12 12 0 0 1 20 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Pogled na prirodu",
    text: "Terase i prozori okrenuti ka šumi, livadi i prelepim pogledima.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 18h16M7 14l3-4 3 3 4-6 3 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Terasa",
    text: "Spoljašnji prostori za magične prizore izlaska sunca.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20h16M6 20V10l6-4 6 4v10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Sauna",
    text: "Opustite telo i um u sauni nakon dana provedenog u prirodi.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 4c-1 1-.5 2 0 3M12 3c-1 1-.5 2 0 3M16 4c-1 1-.5 2 0 3M6 10h12M7 10v8M17 10v8M4 18h16M10 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Opremljena kuhinja",
    text: "Kuvajte jednostavno i lepo — kvalitetna osnova za planinske obroke kod kuće.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 4h8v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4ZM6 20h12M10 12v8M14 12v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Mirno okruženje",
    text: "Bez buke, tihe noći i tišina koja pomaže da se resetujete.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3a9 9 0 0 1 9 9M12 3a9 9 0 0 0-9 9M12 3v18M3 12h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function AmenitiesSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-15 lg:px-8 lg:py-15">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Komfor"
          title="Pažljivo odabrani detalji za dane bez žurbe"
          subtitle="Sve što vam treba da se osećate kao kod kuće — bez ometanja onoga zbog čega ste došli."
          align="center"
          tone="white"
        />
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="rounded-2xl border border-primary/12 bg-primary/[0.05] p-6 transition-colors duration-500 hover:border-primary/22 hover:bg-primary/[0.08] md:p-8">
                <div className="text-forest">{item.icon}</div>
                <h3 className="mt-4 font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-body/85">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
