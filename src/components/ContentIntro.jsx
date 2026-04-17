import React, { useState } from "react";
import girlImage from "../assets/content-intro-img.webp";
import {BsArrowDown, BsArrowRight} from "react-icons/bs";
import {FaArrowDown} from "react-icons/fa";
import videoSrc from "../assets/video/intro-video.mp4"
const ContentIntro = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <section className=" px-4 md:px-8  py-16 md:py-28">
      <div className="mx-auto max-w-350">
        <div className="sm:max-w-240 md:max-w-245 md:ml-22">
          <h2 className="text-black text-[30px] tracking-[-1.46023px] md:tracking-[-2.56px] font-semibold leading-8 sm:leading-9 md:leading-16 sm:text-[52px]  md:text-[64px]">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        <div className="mt-10 sm:mt-15 md:mt-20    gap-10 flex flex-col items-center sm:flex-row md:items-center sm:items-end md:gap-16 lg:gap-60">
        <div className="relative w-[80%] max-w-70 h-75 md:w-64 md:h-80 rotate-3 md:rotate-0 overflow-hidden rounded-xl">
  
  {/* Image (always visible until video loads) */}
  <img
    src={girlImage}
    alt="Team portrait"
    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
      videoLoaded ? "opacity-0" : "opacity-100"
    }`}
  />

  {/* Video */}
  <video
    src={videoSrc}
    autoPlay
    muted
    loop
    playsInline
    onLoadedData={() => setVideoLoaded(true)}
    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
      videoLoaded ? "opacity-100" : "opacity-0"
    }`}
  />
</div>

          <div className="flex-1  md:max-w-130 ">
            <p className="text-black text-[16px] leading-5 md:leading-8.25 font-semibold md:tracking-[-0.768px] md:text-[24px] text-left ">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            <button className="mt-2.5 md:mt-5 group relative inline-block ">
              <span className="block rounded-lg md:rounded-xl border-2 border-[#6f6a63] transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:skew-y-[-4deg] group-active:-rotate-1 group-active:scale-[0.98] bg-[#FAF4EC]">
                <span className="relative flex items-center gap-2 rounded-lg md:rounded-xl px-1 py-1 font-bold text-white sm:px-2 sm:py-1.5">
                  <span className="absolute inset-0 rounded-lg md:rounded-xl bg-transparent" />
                  <span className="relative z-10 text-xs md:text-base text-black ">
                    Leer ons kennen
                  </span>
                  <span className="relative z-10 flex w-6 h-6 md:h-8 md:w-8 items-center justify-center rounded-lg bg-black text-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92] group-active:scale-[0.92]">
                    <BsArrowRight size={18} />
                  </span>
                </span>
              </span>
            </button>
          </div>

          <div className="hidden sm:flex  items-end justify-end md:justify-start">
            <button
              aria-label="Scroll down"
              className="group relative flex h-9 w-9 md:h-11 md:w-11 items-center justify-center overflow-hidden rounded-[10px] border border-black"
            >
              {/* Current arrow */}
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-full">
                <FaArrowDown className="text-orange-500" size={16} />
              </span>

              {/* Incoming arrow */}
              <span className="absolute inset-0 flex items-center justify-center -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <FaArrowDown className="text-orange-500" size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentIntro;
