import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu, ShieldCheck, Zap, Globe, Layers, Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  { icon: <Zap size={24} />, title: "Infinite Scalability", desc: "BlockDAG architecture enables parallel processing, pushing TPS to unseen limits without compromising decentralization." },
  { icon: <ShieldCheck size={24} />, title: "Quantum Resistance", desc: "Post-quantum cryptographic algorithms ensure your assets remain secure against future computational threats." },
  { icon: <Cpu size={24} />, title: "Sub-second Finality", desc: "Experience near-instant transaction confirmations with our optimized consensus mechanism." },
  { icon: <Globe size={24} />, title: "Cross-chain Interop", desc: "Seamlessly move assets across major layer-1 and layer-2 networks with built-in trustless bridging." },
  { icon: <Layers size={24} />, title: "Modular Architecture", desc: "Decoupled consensus and execution layers allow developers to build specialized rollups effortlessly." },
  { icon: <Network size={24} />, title: "Eco-friendly Consensus", desc: "Proof-of-Stake combined with DAG requires a fraction of the energy of traditional blockchains." }
];

const FeaturesSection = () => {
  const section = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section.current, start: "top 75%" }
    });

    tl.fromTo(".feat-head", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out" })
      .fromTo(".feat-card", { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 1, ease: "back.out(1.2)" }, "-=0.6");

  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent section-padding">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="feat-head mb-16 max-w-2xl text-center mx-auto">
          <div className="badge-pill mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            Core Infrastructure
          </div>
          <h2 className="heading-xl text-3d mb-6 text-[32px] sm:text-[42px] lg:text-[52px]">
            Engineered for <br /><span className="text-gradient">Mass Adoption</span>
          </h2>
          <p className="body-text mx-auto max-w-[500px]">
            NATX combines the best of directed acyclic graphs and traditional blockchain to solve the blockchain trilemma once and for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureData.map((feat, i) => (
            <div key={i} className="feat-card glass-panel physics-tilt group flex flex-col items-start rounded-3xl p-8 transition-colors duration-500 hover:border-[var(--primary)] hover:bg-[var(--bg-panel)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-card)] border border-[var(--border-light)] text-[var(--primary)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[var(--primary)]/50 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.2)]">
                {feat.icon}
              </div>
              <h3 className="font-syne mb-3 text-[22px] font-bold text-[var(--text-primary)] transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--grad-cyan-start)] group-hover:to-[var(--grad-cyan-end)]">
                {feat.title}
              </h3>
              <p className="body-text text-[14px]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;