"use client";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {useState} from "react";
import fireIcon from "../assets/fire-icon.png";

export default function ScrollHideHeader() {
  const {scrollY} = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    {label: "Expertises", href: "#expertises"},
    {label: "Work", href: "#work"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "#contact"},
  ];

  return (
    <>
    <motion.header
  className="fixed inset-x-0 top-0 z-999 py-5"
  animate={{
    y: hidden && !menuOpen ? -140 : 0,
    opacity: hidden && !menuOpen ? 0 : 1,
  }}
  transition={{duration: 0.3, ease: "easeInOut"}}
>
  <div className="relative flex items-center justify-between px-4 md:px-8">
    {/* One fixed logo only */}
    <div className="relative z-999">
      <a href="/">
        <img className="w-24 lg:w-38" src="/logo.png" alt="Logo" />
      </a>
    </div>

    {/* Desktop Nav */}
    <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
      <ul className="flex items-center gap-2 rounded-xl bg-white pl-1 pr-2 py-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group relative block overflow-hidden rounded-xl px-3 py-2"
            >
              <span className="absolute inset-0 rounded-xl bg-white" />

              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
                <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
              </span>

              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0">
                  <span className="absolute top-0 left-0 h-[12%] w-full bg-primary" />
                </span>
              </span>

              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
                <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-150 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
              </span>

              <span className="relative z-10 grid overflow-hidden">
                <span className="col-start-1 row-start-1 text-[14px] font-semibold text-[#111111] transition-all duration-200 ease-out group-hover:-translate-y-8 group-hover:rotate-[-20deg] group-hover:opacity-0">
                  {item.label}
                </span>

                <span className="col-start-1 row-start-1 translate-y-8 rotate-[-30deg] text-[14px] font-semibold text-white opacity-0 transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
                  {item.label}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Desktop CTA */}
    <div className="hidden md:block">
      <button className="group relative inline-block">
        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:scale-95">
          <span className="relative flex items-center gap-2 rounded-xl px-3 py-1.5 font-bold text-[#111]">
            <span className="absolute inset-0 rounded-xl bg-[#FCB8FA] transition-all duration-300 ease-[cubic-bezier(0.34,1.37,0.64,1)] group-hover:rounded-[10px]" />
            <span className="relative z-10">Get Results</span>
            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92]">
              <img className="w-6" src={fireIcon} alt="" />
            </span>
          </span>
        </span>
      </button>
    </div>

    {/* Mobile Menu Button */}
    {menuOpen? <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#111111]" />
              <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#111111]" />
            </span>
          </button>:<button
      type="button"
      aria-label="Open menu"
      onClick={() => setMenuOpen(true)}
      className="relative z-999 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCB8FA] md:hidden"
    >
      <span className="flex flex-col gap-1.5">
        <span className="block h-0.5 w-5 bg-[#111111]" />
        <span className="block h-0.5 w-5 bg-[#111111]" />
      </span>
    </button>}
 
         
       
  </div>
</motion.header>

      {/* Mobile Overlay */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      className="fixed inset-0 z-200 md:hidden"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2, ease: "easeOut"}}
    >
      <div
        className="absolute inset-0 bg-black/5"
        onClick={() => setMenuOpen(false)}
      />

      <motion.div
        className="absolute inset-3 flex flex-col rounded-xl bg-[#f3b2ee] px-4 pb-6 pt-20"
        initial={{y: "-110%", scale: 0.98}}
        animate={{y: 0, scale: 1}}
        exit={{y: "-110%", scale: 0.98}}
        transition={{
          y: {
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
          },
          scale: {
            duration: 0.35,
            ease: "easeOut",
          },
        }}
      >
       
        

        {/* Center Nav with same hover effect */}
        <div className="flex flex-1 items-center justify-center">
          <ul className="flex flex-col items-center gap-3">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 10}}
                transition={{
                  delay: 0.12 + index * 0.06,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative block overflow-hidden rounded-[18px] px-5 py-2.5"
                >
                  <span className="absolute inset-0 rounded-[18px] bg-white" />

                  <span className="absolute inset-0 overflow-hidden rounded-[18px]">
                    <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
                    <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
                  </span>

                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]">
                    <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0">
                      <span className="absolute top-0 left-0 h-[12%] w-full bg-primary" />
                    </span>
                  </span>

                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]">
                    <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
                    <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-150 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
                  </span>

                  <span className="relative z-10 grid overflow-hidden">
                    <span className="col-start-1 row-start-1 text-[18px] font-semibold text-[#111111] transition-all duration-200 ease-out group-hover:-translate-y-8 group-hover:rotate-[-20deg] group-hover:opacity-0">
                      {item.label}
                    </span>

                    <span className="col-start-1 row-start-1 translate-y-8 rotate-[-30deg] text-[18px] font-semibold text-white opacity-0 transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pb-4">
          <button className="group relative inline-block">
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:scale-95">
              <span className="relative flex items-center gap-2 rounded-xl px-3 py-1.5 font-bold text-white">
                <span className="absolute inset-0 rounded-xl bg-[#111111]" />
                <span className="relative z-10">Get Results</span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92]">
                  <img className="w-6" src={fireIcon} alt="" />
                </span>
              </span>
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}