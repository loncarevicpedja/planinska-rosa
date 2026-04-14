"use client";

import { galleryImages } from "@/lib/gallery-images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function GalleryLightbox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i + 1) % galleryImages.length
    );
  }, []);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {galleryImages.map((img, index) => (
          <motion.button
            key={img.src}
            type="button"
            className="group relative aspect-square w-full overflow-hidden rounded-2xl text-left shadow-card ring-1 ring-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() => setOpenIndex(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width:768px) 50vw, 33vw"
            />
            <span className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/25" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && openIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-deep/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Pregled fotografije"
            onClick={close}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full border border-gold/40 bg-primary/60 px-4 py-2 text-sm text-cream backdrop-blur-sm transition-colors hover:bg-gold/20"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              Zatvori
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-gold/40 bg-primary/60 px-3 py-3 text-cream backdrop-blur-sm transition-colors hover:bg-gold/20 md:block"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Prethodna fotografija"
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-gold/40 bg-primary/60 px-3 py-3 text-cream backdrop-blur-sm transition-colors hover:bg-gold/20 md:block"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Sledeća fotografija"
            >
              ›
            </button>
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-gold/30 md:aspect-video">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain bg-surface-deep"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm text-cream/80">{current.alt}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
