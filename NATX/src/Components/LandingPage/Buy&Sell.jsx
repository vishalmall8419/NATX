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
import { ArrowRight, WalletCards } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { src: heroImg, top: "26%", left: "8%", w: "37%", z: 20, delay: 0 },
  { src: img2, top: "3%", left: "43%", w: "22%", z: 10, delay: 0.1 },
  { src: img3, top: "7%", left: "66%", w: "32%", z: 20, delay: 0.2 },
  { src: img4, top: "62%", left: "2%", w: "24%", z: 10, delay: 0.15 },
  { src: img5, top: "68%", left: "32%", w: "35%", z: 30, delay: 0.25 },
  { src: img6, top: "45%", left: "70%", w: "28%", z: 10, delay: 0.3 }
];

const BuyAndSell = () => {
  const section = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section.current, start: "top 75%" }
    });

    tl.fromTo(".bs-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" })
      .fromTo(".bs-card", 
        { scale: 0.5, opacity: 0, rotation: -10 }, 
        { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", stagger: 0.1 }, 
        "-=0.8"
      )
      .fromTo(".bs-line", { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }, "-=1");

    // Continuous floating animation
    gsap.to(".bs-card-float", {
      y: "random(-10, 10)",
      rotation: "random(-4, 4)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent section-padding">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="section-container flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        
        {/* Left: Graphic Cards */}
        <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:w-1/2 aspect-square shrink-0">
          
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="bs-line" d="M26,45 C35,25 54,14 82,23" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="0.5" strokeDasharray="1000" strokeDashoffset="1000" />
            <path className="bs-line" d="M26,45 C20,60 30,75 50,85 C65,90 75,70 84,59" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="0.5" strokeDasharray="1000" strokeDashoffset="1000" />
            <path className="bs-line" d="M82,23 C75,40 90,50 84,59" fill="none" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="0.5" strokeDasharray="1000" strokeDashoffset="1000" />
          </svg>

          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`bs-card bs-card-float glass-panel physics-tilt absolute flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 transition-colors hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(0,255,102,0.2)]`}
              style={{
                top: c.top, left: c.left, width: c.w, zIndex: c.z,
                animationDelay: `${c.delay}s`
              }}
            >
              <img src={c.src} alt="NATX Asset" loading="lazy" decoding="async" className="w-full h-auto object-cover rounded-xl sm:rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="bs-text badge-pill mb-6">
            <WalletCards size={12} />
            Instant Liquidity
          </div>
          
          <h2 className="bs-text heading-xl text-3d mb-6 text-[32px] sm:text-[42px] lg:text-[48px]">
            Trade NATX <br className="hidden sm:block" /> Seamlessly
          </h2>
          
          <p className="bs-text body-text mb-8 max-w-[500px]">
            Swap, stake, and yield farm with zero friction. Our optimized routing protocol ensures you get the best rates across all decentralized and centralized exchanges instantly.
          </p>

          <div className="bs-text w-full max-w-[500px] mb-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3">
              <span className="font-space font-semibold text-[var(--text-gray-400)]">Transaction Fee</span>
              <span className="font-syne font-bold text-[var(--primary)]">&lt; $0.001</span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3">
              <span className="font-space font-semibold text-[var(--text-gray-400)]">Confirmation Time</span>
              <span className="font-syne font-bold text-[var(--primary)]">380 ms</span>
            </div>
          </div>

          <div className="bs-text">
            <Button path="/trade" text="Start Trading" icon={<ArrowRight size={15} />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAndSell;