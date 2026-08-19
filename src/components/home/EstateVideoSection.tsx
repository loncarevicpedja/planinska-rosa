"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useEffect, useRef } from "react";

type VideoEl = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitRequestFullscreen?: () => Promise<void>;
  webkitDisplayingFullscreen?: boolean;
};

export function EstateVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.45, 0.75] },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  async function enterFullscreen() {
    const video = videoRef.current as VideoEl | null;
    if (!video) return;

    const alreadyFull =
      document.fullscreenElement === video || Boolean(video.webkitDisplayingFullscreen);
    if (alreadyFull) return;

    try {
      if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        await video.webkitRequestFullscreen();
      }
    } catch {
      /* native controls remain available */
    }
  }

  return (
    <section className="bg-white py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-0">
        <SectionHeading
          eyebrow="Iz vazduha"
          title="Ceo kompleks, jednim pogledom"
          subtitle="Let iznad Planinske Rose otkriva kako vile, gostionica i dvorište stoje zajedno među borovima."
          align="center"
          tone="white"
        />
      </div>
      <Reveal>
        <div className="mx-auto w-[95%] max-w-5xl overflow-hidden rounded-3xl bg-forest shadow-card ring-1 ring-primary/12">
          <video
            ref={videoRef}
            className="aspect-video w-full cursor-pointer bg-forest object-cover"
            controls
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Snimak dronom Planinske Rose — dodirnite za prikaz preko celog ekrana"
            onClick={enterFullscreen}
          >
            <source src="/golija-slike/dvoriste/planinska-rosa-dron.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>
    </section>
  );
}
