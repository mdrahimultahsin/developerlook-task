import React, {useEffect} from "react";
import cardVideo1 from "../assets/video/card-video1.mp4";
import cardVideo2 from "../assets/video/card-video2.mp4";
import cardVideo3 from "../assets/video/card-video3.mp4";
import cardVideo4 from "../assets/video/card-video4.mp4";
import {FaArrowRight} from "react-icons/fa";


const features = [
  {
    id: "01",
    tag: "Expertise",
    title: "Social strategy",
    cardBg: "bg-white",
    cardTagBg: "bg-[#e7e0d4]",
    cardBorder: "border-primary",
    cardButtonColor: "bg-primary",
    heading: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    buttonText: "Meer over social strategie",
    video: cardVideo1,
  },
  {
    id: "02",
    tag: "Expertise",
    title: "Content creation",
    cardBg: "bg-[#F2B1EE]",
    cardTagBg: "bg-white",
    cardBorder: "border-white",
    cardButtonColor: "bg-white",
    heading: "Content die opvalt en raakt.",
    description:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    buttonText: "Meer over content creation",
    video: cardVideo2,
  },
  {
    id: "03",
    tag: "Expertise",
    title: "Activation",
    cardBg: "bg-[#35C98F]",
    cardTagBg: "bg-white",
    cardBorder: "border-white",
    cardButtonColor: "bg-white",
    heading: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    buttonText: "Meer over activatie",
    video: cardVideo3,
  },
  {
    id: "04",
    tag: "Expertise",
    title: "Data",
    cardBg: "bg-[#0D8DFF]",
    cardTagBg: "bg-white",
    cardBorder: "border-white",
    cardButtonColor: "bg-white",
    heading: "Inzichten die impact maken.",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    buttonText: "Meer over data",
    video: cardVideo4,
  },
];

const FeatureCardsSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".sticky-card");
    let rafId = null;

    const updateCards = () => {
      const viewportHeight = window.innerHeight;
      const topOffset = viewportHeight * 0.1;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const nextRect = nextCard.getBoundingClientRect();

        const dist = nextRect.top - topOffset;
        const range = viewportHeight - topOffset;

        let progress = 1 - dist / range;

        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
const scale = 1 - progress * 0.02;
const brightness = 1 - progress * 0.18;
const translateY = progress * -18;
const translateX = progress * 2;
const translateZ = progress * -140;
const rotateX = progress * 22;
const rotateZ = progress * 1.8;

card.style.transform = `
  translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
  rotateX(${rotateX}deg)
  rotateZ(${rotateZ}deg)
  scale(${scale})
`;
card.style.filter = `brightness(${brightness})`;
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCards);
    };

    updateCards();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="mt-10 sm:mt-15 px-4 md:px-8 lg:px-10 pb-30 overflow-visible">
 <div className="relative w-full rounded-2xl space-y-10 md:space-y-24 lg:space-y-28 perspective-[2200px] perspective-origin-[50%_0%]">
        {features.map((item, index) => (
          <article
            key={index}
           className={`sticky-card sticky top-[5vh] md:top-[8vh] w-full overflow-hidden rounded-2xl ${item.cardBg}
px-6 pt-7 pb-0 md:px-8 lg:px-12 md:pt-15
shadow-[0_40px_80px_rgba(0,0,0,0.05),0_10px_30px_rgba(0,0,0,0.03)]
origin-top will-change-[transform,filter] transform-3d backface-hidden`}
          >
            <div className="flex flex-col justify-between gap-5   lg:flex-row lg:items-stretch lg:justify-between pb-8 md:pb-10">
              <div className="flex min-w-0 flex-1 flex-col">
                <div>
                  <span
                    className={`inline-flex rounded-lg md:rounded-xl px-2 py-1 md:px-4 md:py-2 md:text-[18px] font-medium text-black ${item.cardTagBg}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className=" mt-4 flex items-start justify-between gap-4 md:mt-6 ">
                  <h2 className="max-w-[11ch] text-[40px] font-semibold leading-[0.9] tracking-[-0.06em] text-black sm:max-w-none sm:text-[72px] md:text-[92px] lg:text-[112px]">
                    {item.title}
                  </h2>

                  <span
                    className={`absolute right-5 md:right-15 top-2 md:top-6  text-[70px] font-semibold leading-none tracking-[-0.06em] md:block lg:text-[128px] ${
                      item.cardBg === "bg-white"
                        ? "text-[#e7e0d4]"
                        : "text-white/30"
                    }`}
                  >
                    {item.id}
                  </span>
                </div>

                <div className="mt-5 relative w-full max-w-30 shrink-0 md:hidden">
                  <div
                    className={`overflow-hidden rounded-2xl border-[6px] ${item.cardBorder} -rotate-4`}
                  >
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-35 w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 md:mt-12 max-w-140 lg:mt-auto lg:pt-0">
                  <h3 className=" sm:text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#111] md:text-[28px]">
                    {item.heading}
                  </h3>

                  <p className="mt-3 md:mt-4 md:max-w-[32ch] text-[13px] font-medium leading-[1.2] md:leading-[1.45] tracking-[-0.03em] text-[#111] md:text-[19px]">
                    {item.description}
                  </p>

                  <button className="group relative mt-2 inline-block md:mt-6">
                    <span
                      className={`
                                block rounded-lg md:rounded-xl
                                transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)]
                                will-change-transform
                                group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02]
                                group-active:skew-y-[-4deg] group-active:-rotate-1 group-active:scale-[0.98]
                                ${item.cardButtonColor}
                              `}
                    >
                      <span className="relative flex items-center gap-3 rounded-xl px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] font-semibold md:text-[16px]">
                        <span
                          className={`relative z-10 ${
                            item.cardButtonColor === "bg-primary"
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {item.buttonText}
                        </span>

                        <span
                          className={`
                                    relative z-10 flex w-6 h-6 sm:w-7 sm:h-7 md:h-9 md:w-9 items-center justify-center rounded-lg
                                    transition-transform duration-150 ease-out
                                    group-hover:scale-[0.92] group-active:scale-[0.92]
                                    ${
                                      item.cardButtonColor === "bg-primary"
                                        ? "bg-white text-black"
                                        : "bg-black text-white"
                                    }
                                  `}
                        >
                          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
                            <FaArrowRight className="text-sm md:text-lg" />
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative mx-auto hidden w-full max-w-90 shrink-0 md:block lg:mx-0 lg:max-w-80 mt-15">
                <div
                  className={`overflow-hidden rounded-[30px] border-[6px] ${item.cardBorder} rotate-2`}
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-105 w-full object-cover md:h-125 lg:h-100"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* <div className="h-[50vh]" /> */}
    </section>
  );
};

export default FeatureCardsSection;
