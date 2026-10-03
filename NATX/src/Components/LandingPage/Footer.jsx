import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { ArrowUpRight, Send } from "lucide-react";

/* ================= BRAND ICONS ================= */
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const DiscordIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1828 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const RedditIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 11.5c0-.95.78-1.72 1.7-1.72.6 0 1.15.3 1.45.83-1.04.68-1.8 1.53-2.1 2.5-.66-.3-1.05-1-1.05-1.6zm17.65 7c-3.1 1.96-8.6 1.96-11.7 0-1.4-.9-2.25-2.3-2.25-3.8 0-1.5.85-2.9 2.25-3.8 3.1-1.96 8.6-1.96 11.7 0 1.4.9 2.25 2.3 2.25 3.8 0 1.5-.85 2.9-2.25 3.8zm-1.85-6.5c0-.95.78-1.72 1.7-1.72.95 0 1.7.78 1.7 1.72 0 .6-.4 1.3-1.05 1.6-.3-.98-1.05-1.83-2.1-2.5-.25-.53.8-.83 1.45-.83H18.1zM8 12.8c-.85 0-1.5.68-1.5 1.5s.65 1.5 1.5 1.5 1.5-.68 1.5-1.5-.65-1.5-1.5-1.5zm8 0c-.85 0-1.5.68-1.5 1.5s.65 1.5 1.5 1.5 1.5-.68 1.5-1.5-.65-1.5-1.5-1.5zm-4 4.5c-1.8 0-3.3-.9-3.7-2.1-.1-.2.1-.5.3-.5.2 0 .4.1.4.3.3.9 1.5 1.5 3 1.5s2.7-.6 3-1.5c0-.2.3-.3.4-.3.3 0 .4.3.3.5-.4 1.2-1.9 2.1-3.7 2.1z" />
  </svg>
);

const Footer = () => {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".ftr-left", {
      x: -50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: container.current, start: "top 90%", toggleActions: "play none none reverse" }
    });
    gsap.from(".ftr-right", {
      x: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: container.current, start: "top 90%", toggleActions: "play none none reverse" }
    });
    gsap.from(".ftr-bottom", {
      y: 20, opacity: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ".ftr-bottom", start: "top 95%", toggleActions: "play none none reverse" }
    });
  }, { scope: container });

  return (
    <footer ref={container} className="relative w-full overflow-hidden bg-transparent px-6 pb-6 pt-24 font-inter sm:px-12 lg:px-20">
      
      {/* Background Gradient Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-full max-w-[1500px] -translate-x-1/2 opt-glow opacity-40 lg:h-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        
        {/* =================================================
            TOP SECTION (Newsletter & Links)
        ================================================= */}
        <div className="flex flex-col items-start justify-between gap-16 md:flex-row md:gap-10">
          
          {/* Newsletter Box */}
          <div className="ftr-left w-full max-w-[500px] rounded-[24px] bg-[var(--bg-footer-box)] px-8 py-10 shadow-lg md:px-10 md:py-12">
            <h3 className="font-outfit mb-8 text-[18px] font-bold tracking-wide text-[var(--text-primary)] md:text-[20px]">
              Sign Up to Receive Product Updates and More
            </h3>
            <div className="relative flex items-center border-b border-[var(--primary)] pb-2 transition-colors duration-300 focus-within:border-[var(--grad-cyan-focus)]">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full bg-transparent pr-10 text-[14px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-gray-500)]"
              />
              <button
                type="button"
                aria-label="Submit"
                className="absolute right-0 bottom-2 text-[var(--primary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
              >
                <ArrowUpRight size={22} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="ftr-right flex w-full gap-16 md:w-auto md:gap-24 lg:pr-10">
            {/* Menu Links */}
            <div className="flex flex-col gap-5">
              <h4 className="font-outfit mb-2 text-[16px] font-bold tracking-wider uppercase text-[var(--text-primary)]">Menu</h4>
              <a href="#" className="text-[14px] font-medium text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)]">
                Home
              </a>
              <a href="#" className="text-[14px] font-medium text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)]">
                About Us
              </a>
              <a href="#" className="text-[14px] font-medium text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)]">
                Services
              </a>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-5">
              <h4 className="font-outfit mb-2 text-[16px] font-bold tracking-wider uppercase text-[var(--text-primary)]">Help</h4>
              <a href="#" className="text-[14px] font-medium text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)]">
                Privacy and Policy
              </a>
              <a href="#" className="text-[14px] font-medium text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)]">
                Term of Use
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM SECTION (Copyright & Socials)
        ================================================= */}
        <div className="ftr-bottom mt-20 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          
          <div className="text-[13px] font-medium text-[var(--text-gray-400)]">
            2023. All Rights Reserved
          </div>

          <div className="text-[13px] font-medium text-[var(--text-gray-400)]">
            Terms & Conditions Privacy
          </div>

          <div className="flex items-center gap-5 text-[var(--text-primary)]">
            <a href="#" aria-label="Telegram" className="transition-colors hover:text-[var(--primary)]">
              <Send size={18} />
            </a>
            <a href="#" aria-label="Discord" className="transition-colors hover:text-[var(--primary)]">
              <DiscordIcon size={19} />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-[var(--primary)]">
              <TwitterIcon size={18} />
            </a>
            <a href="#" aria-label="Reddit" className="transition-colors hover:text-[var(--primary)]">
              <RedditIcon size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;














