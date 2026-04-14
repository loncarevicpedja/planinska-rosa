"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    src: "/golija-slike/slike-planine/Golija-smestaj-vikendice-zimi.jpg",
    alt: "Magični slojevi planinskih grebena",
    title: "Gde planina diše polako",
    text: "Usporite među borovim šumama, kamenim stazama i pogledima koji prelaze u horizont.",
  },
  {
    src: "/golija-slike/dvoriste/dvoriste-vila-2.jpeg",
    alt: "Drvo i staklo — planinska kuća",
    title: "Uredan smeštaj, ukorenjen u prirodi",
    text: "Topao enterijer, obilje svetlosti i tihi luksuz pravog bega u visoravan.",
  },
  {
    src: "/golija-slike/slike-planine/golija-jankov-kamen.jpg",
    alt: "Koliba među borovima",
    title: "Vaše utočište na Goliji",
    text: "Tri različite vile — svaka za komfor, bliskost i mir.",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <Swiper
        className="hero-swiper h-[100dvh] w-full"
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={(s) => setActive(s.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.src} className="!h-[100dvh]">
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="hero-kenburns object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-primary via-primary/70 to-transparent"
                aria-hidden
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero namerno bez CTA dugmadi — smeštaj i kontakt su u sekcijama ispod stranice */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end pb-16 sm:pb-20">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Planina Golija
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {slides[active]?.title}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/88 md:text-lg">
                  {slides[active]?.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
