import { FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import fireIcon from "../assets/fire-icon.png";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden  ">
      <div className="relative min-h-122 ">
        {/* Top CTA */}
        <div className="relative z-10   text-center">
          <h2 className="mb-2 text-[90px] font-bold text-[#111] ">
            Let’s Get Hyped!
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="group relative inline-block">
                        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:scale-95 border rounded-xl ">
                          <span className="relative flex items-center gap-2 rounded-xl px-3 py-1.5 font-bold text-white">
                            <span className="absolute inset-0 rounded-xl bg-transparent" />
                            <span className="relative z-10 text-black">Mail ons direct</span>
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92]">
                              <IoMdMail  size={18}/>
                            </span>
                          </span>
                        </span>
                      </button>

            <button className="group relative inline-block">
                        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,2.27,0.64,1)] will-change-transform group-hover:skew-y-[-4deg] group-hover:-rotate-1 group-hover:scale-[1.02] group-active:scale-95">
                          <span className="relative flex items-center gap-2 rounded-xl px-3 py-1.5 font-bold text-white">
                            <span className="absolute inset-0 rounded-xl bg-primary" />
                            <span className="relative z-10">Get Results</span>
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-150 ease-out will-change-transform group-hover:scale-[0.92]">
                              <img className="w-6" src={fireIcon} alt="" />
                            </span>
                          </span>
                        </span>
                      </button>
          </div>
        </div>

        {/* Curved panel wrapper */}
        <div className="absolute inset-x-0 bottom-9 left-0  z-0 h-80">
          {/* curved bg */}
         {/* Rounded container */}
<div className="absolute inset-0 overflow-hidden rounded-2xl">
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

          {/* Logo positioned exactly like left red mark */}
          <div className="absolute bottom-0 left-0 z-20 pl-12">
            <img
              className="w-40 md:w-60 lg:w-80"
              src="/logo.png"
              alt="Get Hyped"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute right-8 -top-8 md:right-40 z-30">
      <div className="relative h-30 w-30 rotate-10">

        {/* Rotating text */}
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

          <text
            fill="#111"
            fontSize="10"
            fontWeight="600"
            letterSpacing=""
          >
            <textPath href="#circlePath" startOffset="0%">
              • GET HYPED • GET RESULTS • GET NOTICED •
            </textPath>
          </text>
        </svg>

        {/* Center circle */}
        <div className="flex  h-full w-full items-center justify-center rounded-full bg-[#E5A8E3]">
          <span className="text-[38px] font-black italic text-black">GH</span>
        </div>
      </div>
    </div>

          {/* Bottom content */}
          <div className=" relative z-20 ml-auto flex h-full max-w-215 items-end justify-end gap-10 pb-4">
            {/* Center block */}
            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-wrap gap-3">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
  <FooterNavItem key={item} item={item} />
))}
              </div>

              <div className="flex items-center gap-2">
                <span className=" font-bold text-[#111]">
                  Follow us
                </span>

                <div className="flex gap-2">
                  {[<FaLinkedinIn />, <FaTiktok />, <FaInstagram />, <FaYoutube />].map((icon) => (
                    <div
                      key={icon}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-[#111] cursor-pointer hover:scale-110 transition"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-20 text-xs  text-[#6f6a63]">
                <span>© 2025 Get Hyped</span>
                <span className="hover:text-primary cursor-pointer">© Design by Dylan</span>
              </div>
            </div>

            {/* Right block */}
            <div className="flex min-w-55 flex-col gap-2  text-[#111]">
              <div>
                <p className=" font-black">Contact</p>
                <p className="text-sm font-medium mt-1.5">info@gethyped.nl</p>
                <p className="text-sm font-medium ">+31 6 1533 7496</p>
              </div>

              <div>
                <p className="  font-black">Adress</p>
                <p className="text-sm font-medium mt-1.5">Beltrumsestraat 6,</p>
                <p className="text-sm font-medium ">7141 AL Groenlo</p>
              </div>

              <p className="text-[#6f6a63] text-xs hover:text-primary cursor-pointer">Privacyvoorwaarden</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterNavItem = ({item}) => {
  return (
    <a
      href={`#${item.toLowerCase()}`}
      className="group relative block overflow-hidden rounded-lg  px-3 py-2"
    >
      {/* default white bg */}
      <span className="absolute inset-0 rounded-lg  bg-white" />

      {/* black bg swoosh */}
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
        <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0" />
      </span>

      {/* yellow strip */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[6%] group-hover:rotate-0">
          <span className="absolute top-0 left-0 h-[12%] w-full bg-primary" />
        </span>
      </span>

      {/* black cover */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute left-[-10%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
        <span className="absolute left-[20%] top-0 h-[170%] w-[135%] translate-y-[115%] rotate-[-30deg] bg-[#111111] transition-all duration-300 delay-150 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0" />
      </span>

      {/* text */}
      <span className="relative z-10 grid overflow-hidden">
        <span className="col-start-1 row-start-1 text-[15px]  text-[#111111] transition-all duration-200 ease-out group-hover:-translate-y-8 group-hover:rotate-[-20deg] group-hover:opacity-0 font-bold">
          {item}
        </span>

        <span className="col-start-1 row-start-1 translate-y-8 rotate-[-30deg] text-[15px] font-bold text-white opacity-0 transition-all duration-300 delay-75 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
          {item}
        </span>
      </span>
    </a>
  );
};
export default Footer;