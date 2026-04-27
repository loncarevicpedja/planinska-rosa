import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-forest shadow-card hover:bg-gold-light hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-gold/50 bg-transparent text-cream backdrop-blur-sm hover:border-gold hover:bg-gold/10",
  /** Za belu / svetlu pozadinu */
  outline:
    "border-2 border-forest bg-transparent text-forest hover:bg-forest/[0.07]",
  ghost:
    "text-gold hover:text-cream border border-transparent hover:border-gold/30 hover:bg-gold/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
