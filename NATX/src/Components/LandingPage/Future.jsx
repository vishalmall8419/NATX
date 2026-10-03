import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Img3 from "../../assets/img3.png";

gsap.registerPlugin(ScrollTrigger);

const CheckIcon = () => (
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] text-white shadow-[0_0_15px_rgba(188,0,255,0.3)]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const listItems = [
  {
    title: "AI-Powered Predictive Analytics",
    description: "Deep data analysis utilizing machine learning to predict market volatility and algorithmic momentum in real-time.",
  },
  {
    title: "Zero-Latency Liquidity Routing",
    description: "Proprietary routing mechanism ensures trades are executed at lightspeed across decentralized liquidity pools.",
  },
  {
    title: "Quantum-Resistant Architecture",
    description: "Built on next-generation lattice-based cryptography to secure assets against future computational threats.",
  },
];

const Future = () => {
  const section = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: section.current,
      start: "top 75%",
      onEnter: () => gsap.fromTo(".ft-left", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "expo.out" })
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top 70%",
      onEnter: () => gsap.fromTo(".ft-item", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out" })
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top 75%",
      onEnter: () => gsap.fromTo(".ft-right", { x: 60, opacity: 0, scale: 0.95 }, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" })
    });

    gsap.to(".ft-img", {
      y: -30,
      rotationZ: 3,
      ease: "none",
      scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 1 },
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-[var(--bg-primary)] px-6 py-8 md:py-12">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-[50%] bg-[var(--primary)] opacity-[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[60%] bg-[var(--grad-cyan-end)] opacity-[0.05] blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-12">

        {/* LEFT: Text list */}
        <div className="ft-left w-full lg:w-[50%]">
          
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="font-space text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Protocol Evolution
            </span>
          </div>

          <h2 className="font-syne mb-4 text-[32px] font-black leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-[42px] lg:text-[48px] text-3d">
            THE FUTURE OF <br /> <span className="text-gradient">WEB3 TRADING</span>
          </h2>
          
          <p className="font-space text-[14px] leading-[1.6] text-[var(--text-gray-400)] mb-6 max-w-[95%]">
            Every layer of the NATX protocol is engineered to redefine the financial matrix. We are moving beyond simple ledgers into fully autonomous, intelligent networks capable of self-healing and predictive load-balancing.
          </p>

          <div className="flex flex-col gap-4">
            {listItems.map((item, i) => (
              <React.Fragment key={i}>
                <div className="ft-item glass-panel physics-tilt group flex items-start gap-4 rounded-[20px] p-5 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_10px_30px_rgba(188,0,255,0.15)]">
                  <CheckIcon />
                  <div>
                    <h3 className="font-syne mb-1 text-[18px] font-bold tracking-tight text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="font-space text-[13px] leading-[1.6] text-[var(--text-gray-400)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="ft-right relative flex w-full justify-center lg:w-[50%] mt-8 lg:mt-0">
          
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-[400px] physics-tilt">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--primary)]/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[var(--grad-cyan-end)]/20 animate-[spin_20s_linear_infinite_reverse]" />
            
            <img
              src={Img3}
              alt="Future of Crypto"
              className="ft-img relative z-20 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(188,0,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
