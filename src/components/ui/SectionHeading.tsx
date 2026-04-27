import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** dark = beli na zelenoj; paper/krem; white = čisto bela pozadina */
  tone?: "dark" | "onDark" | "paper" | "white";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const isLight = tone === "paper" || tone === "white";
  const eyebrowTone = "text-gold";
  const titleTone = isLight ? "text-forest" : "text-white";
  const subtitleTone = isLight ? "text-ink-body/90" : "text-white/78";

  return (
    <div className={`mb-10 max-w-2xl md:mb-14 lg:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <Reveal>
          <p
            className={`font-sans text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowTone}`}
          >
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2
          className={`mt-3 font-serif text-3xl leading-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${titleTone}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.12}>
          <p className={`mt-4 font-sans text-base leading-relaxed md:text-lg ${subtitleTone}`}>
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
