import React, { useEffect, useMemo, useState } from "react";
import video1 from "../assets/video/Loop Salontopper.mp4";
import video2 from "../assets/video/petrolhead-loop.mp4";
import poster1 from "../assets/hero-poster1.png"
import poster2 from "../assets/hero-poster2.png"
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
     thumbnail: poster1,
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
      thumbnail: poster2,
    rotateA: -2,
    rotateB: 6,
    y: -8,
    hoverY: -16,
    hoverShiftX: 14,
  },
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [flippedMap, setFlippedMap] = useState({});
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = useMemo(() => {
    if (screenWidth < 640) return cards.slice(0, 2); // less than sm
    if (screenWidth < 768) return cards.slice(0, 3); // sm
    return cards; // md and above
  }, [screenWidth]);

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
      screenWidth >= 1280
        ? -64
        : screenWidth >= 768
        ? -24
        : screenWidth >= 640
        ? -16
        : -10;

    const hoverGap =
      screenWidth >= 1280
        ? 28
        : screenWidth >= 768
        ? 18
        : screenWidth >= 640
        ? 14
        : 10;

    if (hoveredIndex === null) return baseOverlap;

    if (index === hoveredIndex) return hoverGap;
    if (index === hoveredIndex + 1) return hoverGap;

    return baseOverlap;
  };

  return (
    <section className="px-4 md:px-8 lg:px-12 pt-30 md:pt-40 pb-16 overflow-hidden">
      <div>
        <div className="max-w-245">
          <h1 className="hidden md:block text-black font-semibold tracking-[-0.06em] leading-[0.9] text-[52px] sm:text-[72px] md:text-[92px] lg:text-[110px]">
            Get Hyped. Get
            <br />
            Noticed. Get Results.
          </h1>

          <h1 className="md:hidden text-black font-semibold tracking-[-1px] leading-[1em] text-[50px] sm:text-[60px] ">
            Get Hyped.
            <br />
             Get
            Noticed. <br />Get Results.
          </h1>

          <p className="mt-6 max-w-[320px] text-[24px] leading-[1.1] font-semibold text-black">
            Klaar met gokken op content die niets oplevert?
          </p>
        </div>

        <div className="mt-15 md:mt-25 flex items-end justify-center  xl:justify-start px-2 md:px-4 lg:px-0 overflow-visible">
          {visibleCards.map((item, index) => {
            const isHovered = hoveredIndex === index;

            const baseClass = `
              relative shrink-0
              w-[52%] h-[230px]
              sm:w-[200px] sm:h-[270px]
              md:w-[220px] md:h-[295px]
              lg:w-[250px] lg:h-[330px]
              xl:w-[380px] xl:h-[470px]
              rounded-xl overflow-hidden
              will-change-transform
              mx-auto 
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
  {/* Thumbnail */}
  {!loadedVideos[index] && (
    <img
      src={item.thumbnail}
      alt="video thumbnail"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )}

  {/* Video */}
  <video
    src={item.video}
    autoPlay
    muted
    loop
    playsInline
    onLoadedData={() =>
      setLoadedVideos((prev) => ({ ...prev, [index]: true }))
    }
    className={`h-full w-full object-cover transition-all duration-700 ${
      isHovered ? "scale-[1.04]" : "scale-100"
    } ${loadedVideos[index] ? "opacity-100" : "opacity-0"}`}
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