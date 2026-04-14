import React, { useRef } from "react";
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
    cardBorder: "border-white",
    cardBg: "bg-[#35C98F]",
    cardTagBg: "bg-white",
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
    heading: "Inzichten die impact maken.",
    cardBg: "bg-[#0D8DFF]",
    cardBorder: "border-white",
    cardTagBg: "bg-white",
    cardButtonColor: "bg-white",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    buttonText: "Meer over data",
    video: cardVideo4,
  },
];

const FeatureCard = ({ item, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // straight at first, then fall right + fade out
  const rotate = useTransform(scrollYProgress, [0, 0.65, 1], [0, 0, 7]);
  const y = useTransform(scrollYProgress, [0, 0.65, 1], [0, -10, -90]);
  const x = useTransform(scrollYProgress, [0, 0.65, 1], [0, 0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.12]);
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.985, 0.94]);

  return (
    <div
      ref={ref}
      className="relative h-[115vh]"
      style={{ zIndex: features.length - index }}
    >
      <motion.article
        style={{ rotate, y, x, opacity, scale }}
        className={`
          sticky top-4 md:top-6 lg:top-8
          rounded-[36px] ${item.cardBg}
          px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-14
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        `}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <span
              className={`inline-flex rounded-xl px-4 py-2 text-[18px] font-medium text-black ${item.cardTagBg}`}
            >
              {item.tag}
            </span>

            <div className="relative mt-6 flex items-start justify-between gap-4">
              <h2 className="max-w-230 text-[46px] font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:text-[64px] md:text-[88px] lg:text-[102px]">
                {item.title}
              </h2>

              <span className="absolute right-0 top-0 hidden text-[70px] font-semibold leading-none tracking-[-0.06em] text-white/35 md:block lg:text-[100px]">
                {item.id}
              </span>
            </div>

            <div className="mt-10 max-w-140 lg:mt-28">
              <h3 className="text-[24px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111] md:text-[26px]">
                {item.heading}
              </h3>

              <p className="mt-5 text-[18px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#111] md:text-[19px]">
                {item.description}
              </p>

              <button
                className={`group mt-6 inline-flex items-center gap-3 rounded-xl ${
                  item.cardButtonColor
                } ${
                  item.cardButtonColor === "bg-primary" ? "text-white" : "text-black"
                } px-3 py-2 text-[16px] font-semibold transition-transform duration-300 hover:scale-[1.02]`}
              >
                <span>{item.buttonText}</span>

                <span
                  className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl ${
                    item.cardButtonColor === "bg-primary"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full">
                    <FaArrowRight size={16} />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0">
                    <FaArrowRight size={16} />
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-65 shrink-0 sm:max-w-[320px] lg:mx-0 lg:max-w-105">
            <div className={`overflow-hidden rounded-[28px] border-[6px] ${item.cardBorder} rotate-2`}>
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
  return (
    <section className="mt-10 px-4 md:px-8 lg:px-10">
      <div className="relative">
        {features.map((item, index) => (
          <FeatureCard
            key={item.id}
            item={item}
            index={index}
            isLast={index === features.length - 1}
          />
        
        ))}
      </div>



    </section>
  );
};

export default FeatureCardsSection;