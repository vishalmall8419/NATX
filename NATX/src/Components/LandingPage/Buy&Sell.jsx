import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImg from "../../assets/hero.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

/* ================================================================
   BUY & SELL SECTION
   Layout: Left = 6 NFT cards in spatial network pattern
           Right = text + CTA
   Animation: Staggered elastic pop-in â†’ continuous gentle float
   ================================================================ */

// Card definitions: fixed % positions inside a 520Ã—520 box
const CARDS = [
  {
    src: heroImg,
    top: "26%",
    left: "8%",
    w: "37%",
    z: 20,
    alt: "Asset 1 â€” large left",
  },
  {
    src: img2,
    top: "3%",
    left: "43%",
    w: "22%",
    z: 10,
    alt: "Asset 2 â€” small top",
  },
  {
    src: img3,
    top: "7%",
    left: "66%",
    w: "32%",
    z: 20,
    alt: "Asset 3 â€” large top-right",
  },
  {
    src: img4,
    top: "62%",
    left: "4%",
    w: "38%",
    z: 20,
    alt: "Asset 4 â€” large bottom-left",
  },
  {
    src: img5,
    top: "72%",
    left: "44%",
    w: "20%",
    z: 10,
    alt: "Asset 5 â€” small bottom",
  },
  {
    src: img6,
    top: "58%",
    left: "66%",
    w: "32%",
    z: 20,
    alt: "Asset 6 â€” large bottom-right",
  },
];

const BuyAndSell = () => {
  const section = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: section.current,
      start: "top 85%",
      onEnter: () => gsap.fromTo(".bs-text", { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: "power3.out" }),
      onLeave: () => gsap.set(".bs-text", { opacity: 0 }),
      onEnterBack: () => gsap.fromTo(".bs-text", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: -0.12, ease: "power3.out" }),
      onLeaveBack: () => gsap.set(".bs-text", { opacity: 0 })
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top 72%",
      onEnter: () => gsap.fromTo(".bs-card", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: "power3.out" }),
      onLeave: () => gsap.set(".bs-card", { opacity: 0 }),
      onEnterBack: () => gsap.fromTo(".bs-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: -0.15, ease: "power3.out" }),
      onLeaveBack: () => gsap.set(".bs-card", { opacity: 0 })
    });
  }, { scope: section });

  return (
    <section
      ref={section}
      className="relative w-full overflow-hidden bg-transparent px-5 py-20 sm:px-8 md:py-28"
    >
      {/* Ambient left glow */}
      <div className="opt-glow pointer-events-none absolute left-[12%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-[0.1]" />

      <div className="mx-auto flex w-full max-w-[1160px] flex-col-reverse items-center gap-12 md:flex-row md:gap-10 lg:gap-16">
        {/* â”€â”€ LEFT: NFT Network Composition â”€â”€ */}
        <div className="w-full shrink-0 md:w-[52%]">
          {/* Fixed-height box â€” cards are always visible */}
          <div
            className="relative mx-auto"
            style={{ width: "100%", maxWidth: 500, height: 470 }}
          >
            {/* Orbit rings â€” pure SVG, no filter */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 500 470"
              fill="none"
            >
              <ellipse
                cx="250"
                cy="235"
                rx="175"
                ry="145"
                stroke="var(--border-light)"
                strokeWidth="0.8"
                strokeDasharray="3 6"
                opacity="0.45"
              />
              {/* Spoke lines to card centers */}
              <line
                x1="250"
                y1="235"
                x2="90"
                y2="140"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              <line
                x1="250"
                y1="235"
                x2="320"
                y2="28"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              <line
                x1="250"
                y1="235"
                x2="410"
                y2="150"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              <line
                x1="250"
                y1="235"
                x2="95"
                y2="345"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              <line
                x1="250"
                y1="235"
                x2="320"
                y2="430"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              <line
                x1="250"
                y1="235"
                x2="410"
                y2="340"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.18"
              />
              {/* Node dots */}
              {[
                [90, 140],
                [320, 28],
                [410, 150],
                [95, 345],
                [320, 430],
                [410, 340],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3.5"
                  fill="var(--primary)"
                  opacity="0.4"
                />
              ))}
              <circle
                cx="250"
                cy="235"
                r="5"
                fill="var(--primary)"
                opacity="0.55"
              />
            </svg>

            {/* Asset Cards */}
            {CARDS.map((c, i) => (
              <div
                key={i}
                className="bs-card absolute overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--bg-panel)] shadow-[0_14px_38px_rgba(0,0,0,0.65)] transition-all duration-300 hover:scale-[1.06] hover:border-[var(--primary)]/40 hover:shadow-[0_0_22px_rgba(0,214,163,0.22)] hover:!z-50"
                style={{
                  top: c.top,
                  left: c.left,
                  width: c.w,
                  aspectRatio: "1/1",
                  zIndex: c.z,
                }}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* â”€â”€ RIGHT: Text â”€â”€ */}
        <div className="flex w-full flex-col text-center md:w-[48%] md:text-left">
          {/* Badge */}
          <div className="bs-text mb-5 inline-flex self-center items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--text-primary)]/[0.04] px-4 py-1.5 md:self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              NATX Trading Network
            </span>
          </div>

          <h2 className="bs-text font-outfit mb-6 text-[36px] font-black leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[52px]">
            Buy, Sell &amp;
            <br className="hidden md:block" /> Trade NATX.
          </h2>

          <p className="bs-text mb-9 max-w-[440px] text-[16px] leading-[1.85] text-[var(--text-gray-400)] mx-auto md:mx-0">
            Connect to the fastest-growing decentralized Web3 network.
            Intelligent routing and spatial node mapping execute trades with
            zero gas fees instantly across global subnets.
          </p>

          <div className="bs-text self-center md:self-start">
            <Button text="Buy Now" path="/buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAndSell;





