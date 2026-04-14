"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function VillaGallerySwiper({ images }: { images: string[] }) {
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setZoomedSrc(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
                onClick={() => setZoomedSrc(src)}
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

      {zoomedSrc ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setZoomedSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Uvećana fotografija vile"
        >
          <button
            type="button"
            onClick={() => setZoomedSrc(null)}
            className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/30 px-3 py-1 text-sm text-white hover:bg-black/50"
            aria-label="Zatvori pregled"
          >
            Zatvori
          </button>
          <div className="relative h-[85vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={zoomedSrc} alt="" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      ) : null}
    </>
  );
}
