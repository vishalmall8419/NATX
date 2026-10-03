import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";

gsap.registerPlugin(ScrollTrigger);

const Future = () => {
  const section = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section.current, start: "top 75%" }
    });

    tl.fromTo(".fut-text", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" })
      .fromTo(".fut-img", { scale: 0.9, opacity: 0, rotationY: 15 }, { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, stagger: 0.2, ease: "expo.out" }, "-=0.8");

    gsap.to(".fut-img-1", { y: -15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".fut-img-2", { y: 15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent section-padding">
      <div className="section-divider absolute top-0" />
      
      <div className="absolute right-0 top-1/3 w-[60vw] h-[60vw] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,153,61,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col items-center gap-16 lg:flex-row lg:gap-10">
        
        <div className="w-full lg:w-1/2 lg:pr-10">
          <div className="fut-text badge-pill mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            Ecosystem Vision
          </div>
          <h2 className="fut-text heading-xl text-3d mb-6 text-[32px] sm:text-[42px] lg:text-[48px]">
            Shaping the Future of <span className="text-gradient">Web3 Finance</span>
          </h2>
          <p className="fut-text body-text mb-8">
            NATX is not just a blockchain; it's a foundation for the next generation of decentralized applications. By merging high throughput with uncompromised security, we are paving the way for institutional adoption.
          </p>
          
          <div className="flex flex-col gap-5">
            {[
              { title: "Institutional DeFi", desc: "Compliant, high-liquidity dark pools and lending protocols." },
              { title: "Tokenized RWAs", desc: "Bringing real-world assets on-chain with verifiable proof of reserves." }
            ].map((item, i) => (
              <div key={i} className="fut-text flex items-start gap-4 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] p-5 transition-colors hover:border-[var(--primary)]/50">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(0,255,102,0.8)]" />
                <div>
                  <h4 className="font-syne text-[18px] font-bold text-[var(--text-primary)] mb-1">{item.title}</h4>
                  <p className="font-space text-[14px] text-[var(--text-gray-400)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px]">
          <div className="fut-img fut-img-1 absolute top-0 right-0 w-[65%] sm:w-[60%] rounded-3xl overflow-hidden glass-panel physics-tilt z-10 border-[rgba(255,255,255,0.1)] p-2">
            <img src={Img3} alt="Future Tech 1" loading="lazy" decoding="async" className="w-full h-auto rounded-2xl object-cover" />
          </div>
          <div className="fut-img fut-img-2 absolute bottom-0 left-0 w-[55%] sm:w-[50%] rounded-3xl overflow-hidden glass-panel physics-tilt z-20 border-[rgba(255,255,255,0.1)] p-2 shadow-2xl">
            <img src={Img4} alt="Future Tech 2" loading="lazy" decoding="async" className="w-full h-auto rounded-2xl object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Future;