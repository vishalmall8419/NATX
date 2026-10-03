import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Network, Shield, Ban } from "lucide-react";
import Img2 from "../../assets/img2.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Network size={28} strokeWidth={2} />,
    title: "Multi-Asset Baskets",
    description:
      "NATX portfolios contain dynamically adjusting algorithms that balance various asset classes. Our synthetic tokenization engine allows you to gain extreme diversification and risk-adjusted exposure across multiple decentralized liquidity pools simultaneously. No centralized points of failure.",
  },
  {
    icon: <Shield size={28} strokeWidth={2} />,
    title: "Algorithmic Escrow",
    description:
      "Trustless smart contracts mapped on a Directed Acyclic Graph (DAG) architecture. These mathematically immutable agreements execute instantly when cryptographic conditions are met — entirely eliminating brokers, manual delays, and counterparty risk from the ecosystem.",
  },
  {
    icon: <Ban size={28} strokeWidth={2} />,
    title: "Absolute Immutability",
    description:
      "Utilizing lattice-based quantum-resistant cryptography, NATX ensures your on-chain records can never be blocked, censored, or reversed. Your sovereign wealth remains under your absolute control, shielded from traditional financial system vulnerabilities.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="feat-card glass-panel physics-tilt group relative flex flex-col rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[var(--primary)] hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden">
    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[var(--primary)] blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />

    <div className="mb-6 sm:mb-8 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] text-white shadow-[0_10px_20px_rgba(188,0,255,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
      {icon}
    </div>

    <div
      className="feat-line relative mb-5 sm:mb-6 h-px w-full bg-gradient-to-r from-[var(--primary)] to-transparent opacity-50"
      onMouseEnter={(e) => {
        gsap.killTweensOf(e.currentTarget, "y");
        gsap.fromTo(
          e.currentTarget,
          { y: -25 },
          { y: 0, duration: 1.5, ease: "elastic.out(2, 0.1)", clearProps: "y" },
        );
      }}
    />

    <h3 className="font-syne mb-3 sm:mb-4 text-[20px] sm:text-[24px] font-bold tracking-tight text-[var(--text-primary)] group-hover:text-gradient transition-colors duration-300">
      {title}
    </h3>
    <p className="font-space text-[14px] sm:text-[15px] leading-[1.8] text-[var(--text-gray-400)] relative z-10 group-hover:text-[var(--text-gray-300)] transition-colors duration-300">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const section = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".feat-banner",
        start: "top 85%",
        onEnter: () =>
          gsap.fromTo(
            ".feat-banner",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          ),
      });

      ScrollTrigger.create({
        trigger: ".feat-grid",
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            ".feat-card",
            { y: 60, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.15,
              ease: "back.out(1.2)",
            },
          ),
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="w-full bg-[var(--bg-primary)] px-4 sm:px-6 py-12 md:py-20 relative overflow-hidden"
    >
      {/* Liquid fluid blur background */}
      <div className="absolute left-[-20%] top-[10%] w-[60vw] h-[60vw] rounded-full bg-[var(--grad-cyan-start)] opacity-5 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--grad-cyan-end)] opacity-5 blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto w-full max-w-[1280px] relative z-10">
        {/* Massive Banner */}
        <div className="feat-banner relative flex w-full flex-col-reverse items-center justify-between rounded-[32px] sm:rounded-[40px] border border-[var(--primary)]/20 bg-[var(--bg-panel)]/80 backdrop-blur-xl px-6 sm:px-8 py-12 lg:flex-row lg:px-24 lg:py-0 overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--primary-light)]/5 pointer-events-none" />

          <div className="relative z-10 mt-12 w-full text-center lg:mt-0 lg:w-3/5 lg:py-16 lg:text-left">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              <p className="font-space text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Next-Gen Tech
              </p>
            </div>

            <h2 className="font-syne text-[20px] sm:text-[20px] font-black leading-[1.05] tracking-tight text-[var(--text-primary)] lg:text-[56px] text-3d mb-4 sm:mb-6">
              PREMIER <br /> DECENTRALIZED <br />{" "}
              <span className="text-gradient">WEB3 TRADING</span>
            </h2>

            <p className="font-space text-[14px] sm:text-[16px] leading-[1.8] text-[var(--text-gray-300)] max-w-[500px] mx-auto lg:mx-0">
              NATX utilizes a bespoke consensus algorithm blending
              Proof-of-Stake with Directed Acyclic Graph (DAG) architecture.
              This dual-layered network topology achieves theoretical finality
              under 400ms while maintaining near-zero gas fees for
              micro-transactions.
            </p>
          </div>

          <div className="relative z-20 flex w-full justify-center lg:w-2/5 lg:justify-end">
            <img
              src={Img2}
              alt="NATX character"
              className="h-[250px] sm:h-[300px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,229,255,0.3)] lg:absolute lg:bottom-0 lg:right-[5%] lg:h-[130%] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="feat-grid mt-16 sm:mt-24 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
