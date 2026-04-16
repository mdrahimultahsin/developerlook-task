import React, { createRef, useMemo, useLayoutEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

import cardVideo1 from "../assets/video/card-video1.mp4";
import cardVideo2 from "../assets/video/card-video2.mp4";
import cardVideo3 from "../assets/video/card-video3.mp4";
import cardVideo4 from "../assets/video/card-video4.mp4";

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

const STICKY_TOP = "24px";

const FeatureCard = ({
  item,
  index,
 
  selfRef,
  nextCardRef,
  isLast,
  cardHeight,
}) => {
  const { scrollYProgress } = useScroll({
    target: nextCardRef || selfRef,
    offset: ["start end", "start start"],
  });


const y = 0;
const rotate = 0;
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
const filter = useTransform(
  scrollYProgress,
  [0, 1],
  ["brightness(1)", "brightness(0.96)"]
);

  return (
    <div
      ref={selfRef}
      className="relative"
     style={{
  height: cardHeight ? `${cardHeight + 320}px` : "130vh",
  marginTop: "0px",
}}
    >
      <motion.article
        className={`
          sticky overflow-x-hidden rounded-[36px] ${item.cardBg}
          px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-14
          shadow-[0_25px_50px_-12px_rgba(22,38,58,0.18)]
          will-change-transform
        `}
     style={{
  top: STICKY_TOP,
  zIndex: 100 + index,
  transformOrigin: "center top",
  scale: isLast ? 1 : scale,
  y: isLast ? 0 : y,
  rotate: isLast ? 0 : rotate,
  filter: isLast ? "brightness(1)" : filter,
}}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <span
              className={`inline-flex rounded-lg md:rounded-xl px-2 py-1 md:px-4 md:py-2 md:text-[18px] font-medium text-black ${item.cardTagBg}`}
            >
              {item.tag}
            </span>

            <div className="relative mt-4 md:mt-6 flex items-start justify-between gap-4">
              <h2 className="max-w-57.5 text-[46px] font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:max-w-none sm:text-[64px] md:text-[88px] lg:text-[102px]">
                {item.title}
              </h2>

              <span
                className={`absolute right-0 top-0 hidden text-[70px] font-semibold leading-none tracking-[-0.06em] md:block lg:text-[100px] ${
                  item.cardBg === "bg-white" ? "text-[#e7e0d4]" : "text-white/35"
                }`}
              >
                {item.id}
              </span>
            </div>

            <div className="my-15 relative w-full max-w-45 shrink-0 md:hidden">
              <div
                className={`overflow-hidden rounded-[28px] border-[6px] ${item.cardBorder} -rotate-4`}
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-55 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10 max-w-140 lg:mt-28">
              <h3 className="text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#111] md:text-[26px] md:font-bold">
                {item.heading}
              </h3>

              <p className="mt-3.5 text-[18px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111] md:mt-5 md:text-[19px] md:font-semibold md:leading-[1.45]">
                {item.description}
              </p>

              <button className="group relative mt-4 inline-block md:mt-6">
                <span
                  className={`
                    block rounded-xl
                    transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)]
                    will-change-transform
                    group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02]
                    group-active:skew-y-[-4deg] group-active:-rotate-1 group-active:scale-[0.98]
                    ${item.cardButtonColor}
                  `}
                >
                  <span className="relative flex items-center gap-3 rounded-xl px-3 py-2 text-[14px] font-semibold md:text-[16px]">
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
                        relative z-10 flex h-9 w-9 items-center justify-center rounded-lg
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
                        <FaArrowRight size={16} />
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-65 shrink-0 md:block sm:max-w-[320px] lg:mx-0 lg:max-w-105">
            <div
              className={`overflow-hidden rounded-[28px] border-[6px] ${item.cardBorder} rotate-2`}
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-70 w-full object-cover sm:h-85 lg:h-115"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const FeatureCardsSection = () => {
  const refs = useMemo(() => features.map(() => createRef()), []);
  const [cardHeight, setCardHeight] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const firstCard = refs[0]?.current;
      if (!firstCard) return;

      const article = firstCard.querySelector("article");
      if (!article) return;

      setCardHeight(article.offsetHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [refs]);

  return (
  <section className="mt-10 px-4 md:px-8 lg:px-10 pb-30 overflow-visible">
  <div className="mx-auto max-w-full overflow-visible">
        {features.map((item, index) => (
          <FeatureCard
            key={item.id}
            item={item}
            index={index}
            total={features.length}
            selfRef={refs[index]}
            nextCardRef={index < features.length - 1 ? refs[index + 1] : null}
            isLast={index === features.length - 1}
            cardHeight={cardHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureCardsSection;