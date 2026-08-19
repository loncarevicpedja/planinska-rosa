"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function VillaGallerySwiper({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

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

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="gallery-swiper relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="!pb-12"
        >
          {images.map((src, i) => (
            <SwiperSlide key={`${src}-${i}`}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="relative block w-full overflow-hidden rounded-2xl shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Uvećaj fotografiju"
              >
                <div className="relative aspect-[16/9] md:aspect-[16/8]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width:1024px) 100vw, 85vw"
                  />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
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
              className="absolute right-5 top-5 z-10 rounded-full border border-gold/40 bg-primary/60 px-4 py-2 text-sm text-cream backdrop-blur-sm transition-colors hover:bg-gold/20"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              Zatvori
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-primary/60 px-3 py-3 text-cream backdrop-blur-sm transition-colors hover:bg-gold/20"
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
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-primary/60 px-3 py-3 text-cream backdrop-blur-sm transition-colors hover:bg-gold/20"
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-deep shadow-soft ring-1 ring-gold/30 md:aspect-video">
                <Image
                  src={current}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
