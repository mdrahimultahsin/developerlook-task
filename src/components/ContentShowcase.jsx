import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

// thumbnails / posters
import poster1 from "../assets/content-showcase1-thumb.avif";
import poster2 from "../assets/content-showcase2-thumb.avif";
import poster3 from "../assets/content-showcase3-thumb.avif";

// videos
import video1 from "../assets/video/content-showcase1-video.mp4";
import video2 from "../assets/video/content-showcase2-video.mp4";
import video3 from "../assets/video/content-showcase3-video.mp4";

const cards = [
  {
    id: 1,
    title: "Van nul naar vol,\nbinnen 3 weken",
    tag: "Built",
    borderColor: "border-[#ff5a1f]",
    overlayColor: "bg-[#ff5a1f]",
    poster: poster1,
    video: video1,
    offset: "md:translate-y-16",
  },
  {
    id: 2,
    title: "Zacht in smaak,\nsterk in beeld",
    tag: "Roasta",
    borderColor: "border-[#1e88f5]",
    overlayColor: "bg-[#1e88f5]",
    poster: poster2,
    video: video2,
    offset: "-translate-y-10 md:-translate-y-4",
  },
  {
    id: 3,
    title: "Content die écht\nsmaakt (en raakt)",
    tag: "Loco",
    borderColor: "border-[#39c785]",
    overlayColor: "bg-[#39c785]",
    poster: poster3,
    video: video3,
    offset: "-translate-y-20 md:-translate-y-20",
  },
];

const ShowcaseCard = ({ card }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = async () => {
    if (!videoRef.current) return;
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch (error) {
      console.log("Video play prevented:", error);
    }
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <article
      className={`group relative w-full max-w-50  md:max-w-105 ${card.offset} cursor-pointer `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative rounded-2xl md:rounded-[34px] border-5 md:border-8 ${card.borderColor} bg-black
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-rotate-2 h-55 md:h-auto
        `}
      >
        <div className="relative aspect-[0.7/1] md:aspect-[0.73/1] w-full overflow-hidden rounded-2xl">
          <img
            src={card.poster}
            alt={card.title.replace(/\n/g, " ")}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />

          <video
            ref={videoRef}
            src={card.video}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 "
          />
        </div>

        <div
        style={{clipPath:"polygon(0 22%, 100% 0, 100% 100%, 0% 100%)"}}
          className={`
            absolute left-1.5 md:left-3.5 right-1.5 md:right-3.5  bottom-11
            translate-y-[30%]
            md:translate-y-[10%]
            rounded-2xl ${card.overlayColor}
            px-2 md:px-4 pb-4 pt-5 text-white
            shadow-[0_12px_30px_rgba(0,0,0,0.18)]
            h-29 md:h-50 
          `}
        >
             <button className="group flex h-6 w-6  md:h-11 md:w-11 items-center justify-center overflow-hidden rounded-full absolute top-3 md:top-5 right-3 border bg-white">
  
  {/* Current arrow */}
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
    group-hover:translate-x-[140%] group-hover:-translate-y-[140%] text-black">
    
    <FaArrowUp className="rotate-45" size={15} />
  </span>

  {/* Incoming arrow */}
  <span className="absolute inset-0 flex items-center justify-center 
    translate-x-[-140%] translate-y-[140%]
    transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
    group-hover:translate-x-0 group-hover:translate-y-0">
    
    <FaArrowUp className="rotate-45 text-black" size={15} />
  </span>

</button>
        



          <h3 className="mt-4 md:mt-12  whitespace-pre-line text-[13px] md:text-[18px] font-semibold md:leading-7 tracking-[-0.05em] md:tracking-[-0.04em]">
            {card.title}
          </h3>

          <div className="mt-1 md:mt-4">
            <span className="inline-flex rounded-lg bg-white/25 px-1 md:px-3 py-1.5 text-[8px] md:text-[16px] font-semibold text-white">
              {card.tag}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const ContentShowcase = () => {
  return (
    <section className="mt-0 px-4 pb-16 md:mb-26 md:px-8 md:pb-28 ">
      <div className="mx-auto max-w-375">
        <div className="max-w-240 md:ml-22 md:max-w-245">
          <h2 className="md:hidden text-[45px] font-bold leading-9 tracking-[-1.46023px] text-black  md:leading-25.5 md:tracking-[-2.56px]">
            Content  dat scoort.
          </h2>
          <h2 className="hidden md:block text-[36px] font-bold leading-9 tracking-[-1.46023px] text-black sm:text-[52px] md:text-[102px] md:leading-25.5 md:tracking-[-2.56px]">
            Content <br /> dat scoort.
          </h2>
        </div>

        <div className="mt-5 max-w-95 md:ml-22">
          <p className="text-left text-[16px] font-semibold leading-5 text-black md:text-[24px] md:leading-7">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
        </div>

        <div className="mt-1 md:ml-22">
          <button className="group relative mt-2.5 inline-block md:mt-5">
            <span className="block rounded-lg border-2 border-[#6f6a63] bg-[#FAF4EC] transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:scale-[0.98] md:rounded-xl">
              <span className="relative flex items-center gap-2 rounded-lg px-1 py-1 font-bold text-white sm:px-2 sm:py-1.5 md:rounded-xl">
                <span className="relative z-10 text-xs text-black md:text-base">
                  Leer ons kennen
                </span>
                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-black text-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92] group-active:scale-[0.92] md:h-8 md:w-8">
                  <BsArrowRight size={18} />
                </span>
              </span>
            </span>
          </button>
        </div>

        <div className="md:px-16 mt-16 flex  items-end justify-center gap-x-4 gap-y-20 md:justify-between  md:gap-x-18">
          {cards.map((card) => (
            <ShowcaseCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;