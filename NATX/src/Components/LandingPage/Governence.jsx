import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Coins, ShieldCheck, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const govData = [
  { icon: <Coins size={22} />, title: "NATX Token", desc: "The core utility asset powering the ecosystem. Used for staking, transaction fees, and participating in decentralized governance." },
  { icon: <ShieldCheck size={22} />, title: "Decentralized Nodes", desc: "Operate a validator or delegator node to secure the network, earn rewards, and validate cross-chain messaging seamlessly." },
  { icon: <Scale size={22} />, title: "On-Chain Governance", desc: "True decentralization means the community decides. Propose, debate, and vote on protocol upgrades and treasury allocations." }
];

const Governence = () => {
  const section = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section.current, start: "top 75%" }
    });

    tl.fromTo(".gov-head", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".gov-item", { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".gov-line", { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 1.5, ease: "power2.inOut" }, "-=1");
      
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent section-padding">
      <div className="section-divider absolute top-0" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="section-container flex flex-col gap-12 lg:flex-row lg:items-center">
        
        <div className="w-full lg:w-1/2 lg:pr-10">
          <div className="gov-head badge-pill mb-6">
            <Scale size={12} />
            Community Run
          </div>
          <h2 className="gov-head heading-xl text-3d mb-6 text-[32px] sm:text-[42px] lg:text-[48px]">
            Decentralized <span className="text-gradient">Governance</span>
          </h2>
          <p className="gov-head body-text mb-8">
            The NATX Protocol is owned and managed by its community. Every token holder has a voice in shaping the future of the network, ensuring long-term sustainability and true decentralization.
          </p>
        </div>

        <div className="w-full lg:w-1/2 relative pl-6 sm:pl-10">
          {/* Vertical progress line */}
          <div className="gov-line absolute left-[15px] sm:left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--grad-cyan-end)] to-transparent" />

          <div className="flex flex-col gap-10">
            {govData.map((item, i) => (
              <div key={i} className="gov-item relative flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="absolute -left-[30px] sm:-left-[43px] mt-1 sm:mt-0 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-transparent border-2 border-[var(--primary)] shadow-[0_0_15px_rgba(0,255,102,0.4)] text-[var(--primary)]">
                  {item.icon}
                </div>
                <div className="glass-panel physics-tilt flex-1 rounded-2xl p-6 sm:p-7 border border-[var(--border-light)] transition-colors hover:border-[var(--primary)]">
                  <h3 className="font-syne text-[20px] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="body-text text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Governence;