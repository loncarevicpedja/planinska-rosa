import {
  IconCalendarBooking,
  IconFacebook,
  IconInstagram,
} from "@/components/icons/SocialBookingIcons";
import { site } from "@/lib/site";

const iconBtn =
  "flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-white transition-all duration-300 hover:border-gold hover:bg-white/10 hover:text-gold-light";

const iconBtnLight =
  "flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-all duration-300 hover:border-forest/40 hover:bg-forest/5";

type Variant = "onDark" | "onLight";

export function SocialIconLinks({
  className = "",
  variant = "onDark",
}: {
  className?: string;
  variant?: Variant;
}) {
  const btn = variant === "onDark" ? iconBtn : iconBtnLight;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={site.social.instagram}
        className={btn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profil"
      >
        <IconInstagram className="h-[1.15rem] w-[1.15rem]" />
      </a>
      <a
        href={site.social.facebook}
        className={btn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook stranica"
      >
        <IconFacebook className="h-[1.05rem] w-[1.05rem]" />
      </a>
      <a
        href={site.bookingHubUrl}
        className={btn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Rezervacija na Booking.com"
      >
        <IconCalendarBooking className="h-5 w-5" />
      </a>
    </div>
  );
}
