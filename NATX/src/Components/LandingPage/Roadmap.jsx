import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Flag, Rocket, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  { phase: "Phase 1", title: "Foundation & Launch", status: "Completed", Icon: Flag, items: ["Core Smart Contracts", "Initial Dex Offering (IDO)", "Security Audit V1", "Beta Platform Release"] },
  { phase: "Phase 2", title: "Ecosystem Expansion", status: "In Progress", Icon: Rocket, items: ["Cross-chain Bridge", "Staking & Farming Pools", "Tier-1 CEX Listings", "Mobile Wallet Integration"] },
  { phase: "Phase 3", title: "Decentralized Governance", status: "Upcoming", Icon: ShieldCheck, items: ["DAO Infrastructure", "Community Voting Portal", "Treasury Deployment", "Strategic Partnerships"] },
  { phase: "Phase 4", title: "Global Adoption", status: "Upcoming", Icon: Zap, items: ["Institutional Onboarding", "Real-world Asset Tokenization", "Enterprise Solutions", "Mainstream Marketing"] },
];

const Roadmap = () => {
  const section = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".rd-head", start: "top 85%",
      onEnter: () => gsap.fromTo(".rd-head", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" })
    });
    ScrollTrigger.create({
      trigger: ".rd-grid", start: "top 80%",
      onEnter: () => gsap.fromTo(".rd-card", { y: 60, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.12, ease: "back.out(1.2)" })
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-[var(--bg-primary)] px-4 sm:px-6 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="rd-head mb-10 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="font-space text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Strategic Vision</span>
          </div>
          <h2 className="font-syne text-[32px] sm:text-[44px] md:text-[54px] font-black leading-[1.05] tracking-tight text-[var(--text-primary)] text-3d">The Journey Ahead</h2>
          <p className="font-space mt-3 max-w-[500px] text-[15px] leading-[1.7] text-[var(--text-gray-400)]">A meticulously planned protocol expansion — from genesis to global institutional adoption.</p>
        </div>
        <div className="rd-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {phases.map((p, idx) => {
            const done = p.status === "Completed";
            const active = p.status === "In Progress";
            return (
              <div key={idx} className={"rd-card physics-tilt relative flex flex-col rounded-[24px] border p-5 sm:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] " + (active ? "border-[var(--primary)] bg-[var(--primary)]/5" : done ? "border-[var(--border-light)] bg-[var(--bg-panel)]" : "border-[var(--border-light)] bg-[var(--bg-panel)]")}>
                <span className="absolute -right-3 -top-5 font-syne text-[100px] sm:text-[120px] font-black leading-none text-[var(--text-primary)]/[0.03] select-none">{idx + 1}</span>
                <div className={"mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[18px] transition-transform duration-500 group-hover:scale-110 " + (done ? "bg-gradient-to-br from-[#00e5ff] to-[#7000ff] text-white" : active ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "bg-[var(--bg-panel)] border border-[var(--border-light)] text-[var(--text-gray-400)]")}>
                  <p.Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="mb-2 flex items-center gap-2 flex-wrap">
                  <span className="font-space text-[10px] font-bold uppercase tracking-wider text-[var(--text-gray-500)]">{p.phase}</span>
                  <span className={"rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider " + (done ? "bg-[var(--primary)]/20 text-[var(--primary)]" : active ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-[var(--text-gray-500)]")}>{p.status}</span>
                </div>
                <h3 className="font-syne mb-5 sm:mb-6 text-[18px] sm:text-[20px] font-bold text-[var(--text-primary)]">{p.title}</h3>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full " + (done ? "bg-[var(--primary)]" : active && i < 2 ? "bg-[var(--primary)]" : "bg-gray-600")} />
                      <span className="font-space text-[13px] leading-relaxed text-[var(--text-gray-400)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;