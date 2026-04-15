import { FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import fireIcon from "../assets/fire-icon.png";
import greenLogo from "../assets/green-logo.png";
import pinkLogo from "../assets/pink-logo.png";
import redLogo from "../assets/red-logo.png";
import blueLogo from "../assets/blue-logo.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { IoMdMail } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const moveThrottleRef = useRef(0);
  const logoIndexRef = useRef(0);
  const removeTimersRef = useRef({});
  const lastSpawnPointRef = useRef({ x: 0, y: 0 });

  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const [floatingItems, setFloatingItems] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);

  const SPAWN_DELAY = 300;
  const MIN_SPAWN_DISTANCE = 85;

  const mediaLogos = [
    { src: blueLogo, rotate: 6, offsetX: -120, offsetY: -90 },
    { src: pinkLogo, rotate: -10, offsetX: -40, offsetY: -30 },
    { src: greenLogo, rotate: -2, offsetX: -170, offsetY: -130 },
    { src: redLogo, rotate: 4, offsetX: 70, offsetY: -60 },
  ];

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(removeTimersRef.current).forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setFloatingItems([]);
    }
  }, [isDesktop]);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const spawnLogo = (x, y) => {
    const logo = mediaLogos[logoIndexRef.current];
    const id = `${Date.now()}-${Math.random()}`;

    const newItem = {
      id,
      src: logo.src,
      x,
      y,
      rotate: logo.rotate,
      offsetX: logo.offsetX,
      offsetY: logo.offsetY,
    };

    setFloatingItems((prev) => {
      let next = [...prev, newItem];

      if (next.length > 4) {
        const oldest = next[0];
        next = next.slice(1);

        if (removeTimersRef.current[oldest.id]) {
          clearTimeout(removeTimersRef.current[oldest.id]);
          delete removeTimersRef.current[oldest.id];
        }
      }

      return next;
    });

    removeTimersRef.current[id] = setTimeout(() => {
      setFloatingItems((prev) => prev.filter((item) => item.id !== id));
      delete removeTimersRef.current[id];
    }, 1300);

    logoIndexRef.current = (logoIndexRef.current + 1) % mediaLogos.length;
    lastSpawnPointRef.current = { x, y };
  };

  const handleFooterEnter = (e) => {
    if (!isDesktop || !footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPoint({ x, y });
    moveThrottleRef.current = Date.now();
    lastSpawnPointRef.current = { x, y };

    spawnLogo(x, y);
  };

  const handleFooterMove = (e) => {
    if (!isDesktop || !footerRef.current) return;

    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPoint({ x, y });

    const now = Date.now();
    if (now - moveThrottleRef.current < SPAWN_DELAY) return;

    const dx = x - lastSpawnPointRef.current.x;
    const dy = y - lastSpawnPointRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MIN_SPAWN_DISTANCE) return;

    moveThrottleRef.current = now;
    spawnLogo(x, y);
  };

  return (
    <footer
      ref={footerRef}
      onMouseEnter={handleFooterEnter}
      onMouseMove={handleFooterMove}
      className="relative overflow-hidden mt-20"
    >
      <div className="absolute top-0 left-0 right-0 z-150 mx-auto h-0.5 w-[98%] bg-[#CCC8C1]" />
      <div className="absolute top-0.5 left-0 right-0 z-100 mx-auto h-10 w-full bg-[#FAF4EC] sm:h-12 lg:h-15" />

      <div className="relative min-h-140 px-4 pt-16 sm:px-6 sm:pt-20 md:min-h-screen lg:px-0 lg:pt-50">
        <div className="relative  text-center">
          <h2 className="mb-4 text-[46px] leading-none font-bold text-[#111] sm:text-[56px] lg:mb-2 lg:text-[90px]">
            Let’s Get Hyped!
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:gap-4 z-100 relative">
            <button className="group relative inline-block">
              <span className="block rounded-xl border border-[#6f6a63] transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:skew-y-[-4deg] group-active:-rotate-1 group-active:scale-[0.98] bg-[#FAF4EC]">
                <span className="relative flex items-center gap-2 rounded-xl px-1.5 py-1 font-bold text-white sm:px-4 sm:py-2">
                  <span className="absolute inset-0 rounded-xl bg-transparent" />
                  <span className="relative z-10 text-xs md:text-sm text-black sm:text-base">
                    Mail ons direct
                  </span>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92] group-active:scale-[0.92]">
                    <IoMdMail size={18} />
                  </span>
                </span>
              </span>
            </button>

            <button className="group relative inline-block">
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:skew-y-[-4deg] group-active:-rotate-1 group-active:scale-[0.98]">
                <span className="relative flex items-center gap-2 rounded-xl px-1.5 py-1 font-bold text-white sm:px-4 sm:py-2">
                  <span className="absolute inset-0 rounded-xl bg-primary" />
                  <span className="relative z-10 text-xs md:text-sm sm:text-base">Get Results</span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92] group-active:scale-[0.92]">
                    <img className="w-5 sm:w-6" src={fireIcon} alt="" />
                  </span> 
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 left-0 z-10 h-150 sm:h-110 lg:h-80">
          {/* Desktop */}
          <div className="hidden md:block absolute inset-0 overflow-hidden rounded-t-3xl rounded-b-none sm:rounded-2xl">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 260"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="
                  M 24 320
                  L 24 210
                  Q 24 190 44 188
                  L 940 18
                  Q 976 12 976 44
                  L 976 296
                  Q 976 320 952 320
                  L 48 320
                  Q 24 320 24 296
                  Z
                "
                fill="#EAE4D8"
              />
            </svg>
          </div>
          {/* Mobile Shapes*/}
          
<div className="lg:hidden absolute inset-0 px-4 overflow-hidden">
  <div className="relative h-full w-full overflow-hidden rounded-t-3xl rounded-b-none">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 290"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M 0 186.9
          L 1000 147.9
          L 1000 290
          L 0 290
          Z
        "
        fill="#EAE4D8"
      />
    </svg>
  </div>
</div>
          <div className="absolute bottom-46 left-4 z-20 sm:bottom-24 sm:left-6 lg:bottom-0 lg:left-0 lg:pl-10">
            <img
              className="w-32 sm:w-40 md:w-52 lg:w-80"
              src="/logo.png"
              alt="Get Hyped"
            />
          </div>

          <div className="absolute right-10 top-65 z-30 sm:right-6 sm:-top-6.5 lg:right-40 lg:-top-8">
            <div className="relative h-18 w-18 rotate-10 sm:h-24 sm:w-24 lg:h-29 lg:w-29">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 animate-spin-slow"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>

                <text fill="#111" fontSize="10" fontWeight="600">
                  <textPath href="#circlePath" startOffset="0%">
                    • GET HYPED • GET RESULTS • GET NOTICED •
                  </textPath>
                </text>
              </svg>

              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#E5A8E3]">
                <span className="text-[24px] font-black italic text-black sm:text-[32px] lg:text-[38px]">
                  GH
                </span>
              </div>
            </div>
          </div>

          <div className=" relative z-20 flex h-full items-end justify-between gap-10 px-8 pb-12 sm:px-6 sm:pb-5 lg:ml-auto lg:max-w-215 lg:flex-row lg:items-end lg:justify-end lg:gap-10 lg:px-0 lg:pb-4 mt-5 lg:mt-0">
            <div className="flex flex-col gap-6  lg:gap-8">
              <div className=" flex max-w-90 flex-wrap gap-1.5 sm:mt-14 lg:mt-0 lg:gap-3">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <FooterNavItem key={item} item={item} />
                ))}
              </div>

              <div className="flex items-center gap-2 md:gap-3 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-[12px] md:text-base font-bold text-[#111]">Follow us</span>

                <div className="flex gap-2">
                  {[<FaLinkedinIn />, <FaTiktok />, <FaInstagram />, <FaYoutube />].map(
                    (icon, index) => (
                      <div
                        key={index}
                        className="flex w-8 h-8 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-full bg-white md:text-base font-bold text-[#111] transition hover:scale-110 text-sm "
                      >
                        {icon}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex  justify-between gap-2 text-[10px] md:text-xs text-[#6f6a63] sm:flex-row sm:flex-wrap sm:gap-6 lg:gap-20">
                <span className="">© 2025 Get Hyped</span>
                <span className="cursor-pointer hover:text-primary">
                  © Design by Dylan
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 text-[#111] sm:mt-6 sm:flex-row sm:gap-10 lg:mt-0 lg:min-w-55 lg:flex-col lg:gap-2">
              <div>
                <p className="font-black text-[14px] md:text-base">Contact</p>
                <p className="mt-1 text-[13px] md:text-sm font-medium sm:mt-1.5">info@gethyped.nl</p>
                <p className="text-[13px] md:text-sm font-medium">+31 6 1533 7496</p>
              </div>

              <div>
                <p className="font-black text-[14px] md:text-base">Adress</p>
                <p className="mt-1 text-[13px] md:text-sm font-medium sm:mt-1.5">Beltrumstraat 6,</p>
                <p className="text-[13px] md:text-sm font-medium">7141 AL Groenlo</p>
              </div>

              <p className="cursor-pointer text-xs text-[#6f6a63] hover:text-primary">
                Privacyvoorwaarden
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="medias pointer-events-none absolute left-0 top-0">
        <img src={blueLogo} alt="" draggable="false" className="invisible absolute h-px w-px" />
        <img src={pinkLogo} alt="" draggable="false" className="invisible absolute h-px w-px" />
        <img src={greenLogo} alt="" draggable="false" className="invisible absolute h-px w-px" />
        <img src={redLogo} alt="" draggable="false" className="invisible absolute h-px w-px" />
      </div>

      {isDesktop && (
        <div className="pointer-events-none absolute inset-0 z-1" aria-hidden="true">
          <AnimatePresence>
            {floatingItems.map((item, index) => {
              const isLast = index === floatingItems.length - 1;

              const rawDriftX = (cursorPoint.x - item.x) * 0.012;
              const rawDriftY = (cursorPoint.y - item.y) * 0.012;

              const driftX = isLast ? clamp(rawDriftX, -38, 38) : 0;
              const driftY = isLast ? clamp(rawDriftY, -38, 38) : 0;

              return (
                <motion.img
                  key={item.id}
                  src={item.src}
                  alt=""
                  draggable="false"
          className="pointer-events-none absolute z-80 hidden w-[15vw] min-w-35 max-w-70 object-contain lg:block"
                  style={{
                    left: item.x + item.offsetX,
                    top: item.y + item.offsetY,
                    rotate: `${item.rotate}deg`,
                  }}
                  initial={{
                    opacity: 0,
                    y: 36,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: driftX,
                    y: driftY,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -14,
                    scale: 0.985,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      type: "spring",
                      stiffness: 70,
                      damping: 24,
                      mass: 1.6,
                    },
                    x: {
                      type: "spring",
                      stiffness: 36,
                      damping: 24,
                      mass: 1.8,
                    },
                    y: {
                      type: "spring",
                      stiffness: 36,
                      damping: 24,
                      mass: 1.8,
                    },
                    filter: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </footer>
  );
};

const FooterNavItem = ({ item }) => {
  return (
    <a
      href={`#${item.toLowerCase()}`}
      className="group relative block overflow-hidden rounded-lg px-1 md:px-3 py-1.5 md:py-2"
    >
      <span className="absolute inset-0 rounded-lg bg-white" />

      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
        <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
      </span>

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0">
          <span className="absolute left-0 top-0 h-[12%] w-full bg-primary" />
        </span>
      </span>

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
        <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-150 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
      </span>

      <span className="relative z-10 grid overflow-hidden">
        <span className="col-start-1 row-start-1 text-[10px] md:text-[15px] font-bold text-[#111111] transition-all duration-200 ease-out group-hover:-translate-y-8 group-hover:rotate-[-20deg] group-hover:opacity-0">
          {item}
        </span>

        <span className="col-start-1 row-start-1 translate-y-8 rotate-[-30deg] text-[10px] md:text-[15px] font-bold text-white opacity-0 transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
          {item}
        </span>
      </span>
    </a>
  );
};

export default Footer;