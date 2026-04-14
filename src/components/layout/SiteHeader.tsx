"use client";

import { SocialIconLinks } from "@/components/layout/SocialIconLinks";
import { mainNav, site } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-nav transition-all duration-500 ease-out ${
        scrolled ? "py-3 shadow-[0_8px_32px_rgb(0_0_0/0.35)]" : "py-4 md:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group relative z-10 font-serif text-xl tracking-tight text-white transition-opacity duration-300 hover:opacity-95 md:text-2xl"
        >
          <span className="relative">
            {site.name}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-end gap-1 lg:flex"
          aria-label="Glavna navigacija"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/92 transition-colors duration-300 hover:text-white ${
                      active ? "ring-1 ring-gold/50 ring-offset-2 ring-offset-nav" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="min-w-[210px] rounded-2xl border border-gold/25 bg-nav p-2 shadow-card">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block rounded-xl px-4 py-2.5 text-sm text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active
                    ? "text-white underline decoration-gold decoration-2 underline-offset-8"
                    : "text-white/88 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-3 border-l border-gold/25 pl-5">
            <SocialIconLinks variant="onDark" />
          </div>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-white backdrop-blur-sm transition-colors duration-300 hover:border-gold/50 hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Meni</span>
          <span className="flex flex-col gap-1.5">
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 6 : 0,
              }}
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -6 : 0,
              }}
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/20 bg-nav lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-6"
              aria-label="Mobilna navigacija"
            >
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-3 border-l border-gold/40 pl-4">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2 text-sm text-white/80"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
              <div className="mt-5 border-t border-gold/20 pt-5">
                <SocialIconLinks className="justify-center" variant="onDark" />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
