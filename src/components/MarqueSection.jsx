import React, { useEffect, useRef } from "react";

import marqueeImg1 from "../assets/marquee/marquee-01.svg";
import marqueeImg2 from "../assets/marquee/marquee-02.svg";
import marqueeImg3 from "../assets/marquee/marquee-03.svg";
import marqueeImg4 from "../assets/marquee/marquee-04.svg";
import marqueeImg5 from "../assets/marquee/marquee-05.svg";
import marqueeImg6 from "../assets/marquee/marquee-06.svg";
import marqueeImg7 from "../assets/marquee/marquee-07.svg";
import marqueeImg8 from "../assets/marquee/marquee-08.svg";
import marqueeImg9 from "../assets/marquee/marquee-09.svg";
import marqueeImg10 from "../assets/marquee/marquee-10.svg";

const logos = [
  { id: 1, src: marqueeImg1, alt: "Marquee image 1" },
  { id: 2, src: marqueeImg2, alt: "Marquee image 2" },
  { id: 3, src: marqueeImg3, alt: "Marquee image 3" },
  { id: 4, src: marqueeImg4, alt: "Marquee image 4" },
  { id: 5, src: marqueeImg5, alt: "Marquee image 5" },
  { id: 6, src: marqueeImg6, alt: "Marquee image 6" },
  { id: 7, src: marqueeImg7, alt: "Marquee image 7" },
  { id: 8, src: marqueeImg8, alt: "Marquee image 8" },
  { id: 9, src: marqueeImg9, alt: "Marquee image 9" },
  { id: 10, src: marqueeImg10, alt: "Marquee image 10" },
];

const MarqueSection = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const repeatedLogos = [...logos, ...logos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let speed = 1.5;

    const setInitialPosition = () => {
      container.scrollLeft = container.scrollWidth / 4;
    };

    const loop = () => {
      if (!container) return;

      if (!isDraggingRef.current) {
        container.scrollLeft += speed;

        const halfWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }

        if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    setInitialPosition();
    animationFrameRef.current = requestAnimationFrame(loop);

    const handlePointerDown = (e) => {
      isDraggingRef.current = true;
      container.classList.add("dragging");
      startXRef.current = e.pageX ?? e.clientX;
      startScrollLeftRef.current = container.scrollLeft;
    };

    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;

      const x = e.pageX ?? e.clientX;
      const walk = (x - startXRef.current) * 1.4;
      container.scrollLeft = startScrollLeftRef.current - walk;

      const halfWidth = container.scrollWidth / 2;

      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startScrollLeftRef.current -= halfWidth;
      }

      if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startScrollLeftRef.current += halfWidth;
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      container.classList.remove("dragging");
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <section className="overflow-hidden  pb-5 md:py-10">
      <div className="mb-3 px-4 md:mb-14 md:px-8">
        <div className="max-w-375">
          <h2 className="hidden md:block max-w-155 text-[44px] font-semibold leading-20 tracking-[-3.2px] text-black md:text-[80px]">
            These brands
            <br />
            got hyped.
          </h2>
          <h2 className="md:hidden max-w-155 text-[38px] font-semibold leading-20 tracking-[-1.2px] text-black">
            These brands
            got hyped.
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar marquee-drag-container md:mt-6 overflow-x-scroll px-4 md:px-8 cursor-pointer"
      >
        <div className="flex w-max items-stretch gap-2 md:gap-5">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex h-30 w-30 shrink-0 items-center justify-center rounded-2xl border-2 border-black/25 bg-transparent px-4 md:h-75 md:w-75 md:rounded-[28px] md:px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                draggable="false"
                className="pointer-events-none select-none object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueSection;