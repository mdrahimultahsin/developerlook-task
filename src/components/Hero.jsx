import React, { useState } from "react";
import video1 from "../assets/video/Loop Salontopper.mp4";
import video2 from "../assets/video/petrolhead-loop.mp4";

const cards = [
  {
    title: "10M+",
    subtitle: "Organische views",
    description: "Groei door slimme content",
    bg: "bg-[#1e90ff]",
    type: "stat",
    rotateA: -8,
    rotateB: 8,
    y: 2,
    hoverY: -12,
    hoverShiftX: -18,
  },
  {
    video: video1,
    type: "video",
    rotateA: 5,
    rotateB: -5,
    y: 14,
    hoverY: -18,
    hoverShiftX: 12,
  },
  {
    title: "30+",
    subtitle: "Merken geholpen",
    description: "Van start-up tot multinational",
    bg: "bg-[#42d39b]",
    type: "stat",
    rotateA: 4,
    rotateB: 0,
    y: 10,
    hoverY: -10,
    hoverShiftX: -22,
  },
  {
    video: video2,
    type: "video",
    rotateA: -2,
    rotateB: 6,
    y: -8,
    hoverY: -16,
    hoverShiftX: 14,
    hiddenMobile: true,
  },
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedMap, setFlippedMap] = useState({});

  const handleEnter = (index) => {
    setHoveredIndex(index);
    setFlippedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const getStoredRotation = (index, item) => {
    const flipped = !!flippedMap[index];
    return flipped ? item.rotateB : item.rotateA;
  };

  const getCardTransform = (index, item) => {
    const isHovered = hoveredIndex === index;
    const storedRotate = getStoredRotation(index, item);

    let rotate = storedRotate;
    let translateY = item.y;
    let translateX = 0;

    if (isHovered) {
      rotate = item.rotateB;
      translateY = item.hoverY;
      translateX = item.hoverShiftX ?? 0;
    }

    return `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
  };

  const getCardMarginLeft = (index) => {
    if (index === 0) return 0;

    const baseOverlap =
      window.innerWidth >= 1280
        ? -64
        : window.innerWidth >= 768
        ? -24
        : window.innerWidth >= 640
        ? -16
        : -10;

    const hoverGap =
      window.innerWidth >= 1280
        ? 28
        : window.innerWidth >= 768
        ? 18
        : window.innerWidth >= 640
        ? 14
        : 10;

    if (hoveredIndex === null) return baseOverlap;

    // hovered card er age gap
    if (index === hoveredIndex) return hoverGap;

    // hovered card er porer gap
    if (index === hoveredIndex + 1) return hoverGap;

    return baseOverlap;
  };

  return (
    <section className=" px-4 md:px-8 lg:px-12 pt-10 md:pt-14 lg:pt-40 pb-16 overflow-hidden">
      <div>
        <div className="max-w-245">
          <h1 className="text-black font-semibold tracking-[-0.06em] leading-[0.9] text-[52px] sm:text-[72px] md:text-[92px] lg:text-[110px]">
            Get Hyped. Get
            <br />
            Noticed. Get Results.
          </h1>

          <p className="mt-6 max-w-[320px] text-[24px] leading-[1.1] font-semibold text-black">
            Klaar met gokken op content die niets oplevert?
          </p>
        </div>

        <div className="mt-25 flex items-end justify-center xl:justify-start px-2 md:px-4 lg:px-0 overflow-visible">
          {cards.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const visibilityClass = item.hiddenMobile ? "hidden md:block" : "block";

            const baseClass = `
              relative shrink-0
              w-[158px] h-[220px]
              sm:w-[200px] sm:h-[270px]
              md:w-[220px] md:h-[295px]
              lg:w-[250px] lg:h-[330px]
              xl:w-[380px] xl:h-[470px]
              rounded-xl overflow-hidden
              will-change-transform
              ${visibilityClass}
              ${isHovered ? "z-30" : "z-10"}
            `;

            const sharedProps = {
              key: index,
              onMouseEnter: () => handleEnter(index),
              onMouseLeave: handleLeave,
              className:
                item.type === "stat"
                  ? `${baseClass} ${item.bg} p-5 md:p-6 xl:p-7 flex flex-col justify-between cursor-pointer`
                  : `${baseClass} bg-black cursor-pointer`,
              style: {
                marginLeft: `${getCardMarginLeft(index)}px`,
                transform: getCardTransform(index, item),
                transition:
                  "transform 700ms cubic-bezier(0.22,1,0.36,1), margin-left 700ms cubic-bezier(0.22,1,0.36,1)",
              },
            };

            if (item.type === "stat") {
              return (
                <div {...sharedProps}>
                  <h2 className="text-black text-[38px] sm:text-[46px] md:text-[54px] xl:text-[62px] leading-none font-semibold tracking-[-0.05em]">
                    {item.title}
                  </h2>

                  <div>
                    <h3 className="text-black text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-semibold leading-tight">
                      {item.subtitle}
                    </h3>
                    <div className="mt-2 h-px w-full bg-black" />
                    <p className="mt-2 text-black text-[10px] sm:text-[11px] md:text-[12px] xl:text-[14px] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div {...sharedProps}>
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered ? "scale-[1.04]" : "scale-100"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;