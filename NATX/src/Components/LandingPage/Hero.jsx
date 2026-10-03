import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroImg from "../../assets/hero.png";
import { ArrowRight, Play, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const section = useRef();
  const btnPrimaryRef = useRef();
  const btnSecondaryRef = useRef();

  const magnet = (ref) => ({
    onMouseMove: (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
      gsap.to(ref.current, { x, y, duration: 0.5, ease: "power2.out" });
    },
    onMouseLeave: () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" }),
  });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".hero-pill",      { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.1)
      .fromTo(".hero-title-word",{ y: 50,  opacity: 0, rotateX: 15 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.08, duration: 1.1 }, 0.25)
      .fromTo(".hero-desc",      { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.55)
      .fromTo(".hero-btns",      { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.7)
      .fromTo(".hero-stats",     { y: 16,  opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.8 }, 0.8)
      .fromTo(".hero-visual",    { x: 40,  opacity: 0, scale: 0.92 }, { x: 0, opacity: 1, scale: 1, duration: 1.6, ease: "power4.out" }, 0.2)
      .fromTo(".hero-float-card",{ y: 30,  opacity: 0, scale: 0.88 }, { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 1.2, ease: "back.out(1.4)" }, 0.75);

    gsap.to(".float-1", { y: -14, rotationZ: 2,  duration: 4,   repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".float-2", { y:  12, rotationZ: -2, duration: 4.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.8 });
    gsap.to(".hero-ring-1", { rotation: 360,  duration: 40, repeat: -1, ease: "none", transformOrigin: "center center" });
    gsap.to(".hero-ring-2", { rotation: -360, duration: 28, repeat: -1, ease: "none", transformOrigin: "center center" });

    gsap.to(".hero-visual", {
      y: 60, ease: "none",
      scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: 1.2 },
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative flex w-full items-center overflow-hidden bg-transparent pt-20 pb-8 sm:pt-24 sm:pb-10">

      {/* Ambient blobs */}
      <div className="hero-glow-blob ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.15)_0%,transparent_60%)] top-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px]" />
      <div className="hero-glow-blob ![background:radial-gradient(circle_at_center,rgba(0,153,61,0.15)_0%,transparent_60%)] bottom-[0%] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px]" style={{ animationDelay: "-5s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12 xl:gap-16">

          {/* ===== LEFT: VISUAL ===== */}
          <div className="hero-visual order-1 lg:order-1 relative flex w-full max-w-[360px] shrink-0 items-center justify-center lg:max-w-none lg:w-[44%]">
            <div className="relative w-full max-w-[320px] lg:max-w-[400px] xl:max-w-[460px]">

              {/* Orbit rings */}
              <div className="hero-ring-1 absolute inset-[-12%] rounded-full border border-dashed border-[var(--primary)]/25" />
              <div className="hero-ring-2 absolute inset-[-24%] rounded-full border border-[var(--grad-cyan-end)]/15" />

              {/* Glow under image */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,20)_0%,transparent_60%)]" />

              <img
                src={HeroImg}
                alt="NATX 3D Visual"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,255,102,0.25)]"
                loading="eager"
              />

              {/* Floating stats card — top right */}
              <div className="hero-float-card float-1 glass-panel physics-tilt absolute top-[6%] right-[-8%] sm:right-[-14%] flex items-center gap-3 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <p className="font-space text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--text-gray-500)]">Speed</p>
                  <p className="font-syne text-[15px] sm:text-[17px] font-black text-[var(--text-primary)] leading-tight">10K+ TPS</p>
                </div>
              </div>

              {/* Floating stats card — bottom left */}
              <div className="hero-float-card float-2 glass-panel physics-tilt absolute bottom-[8%] left-[-8%] sm:left-[-14%] flex items-center gap-3 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <p className="font-space text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--text-gray-500)]">Security</p>
                  <p className="font-syne text-[15px] sm:text-[17px] font-black text-[var(--text-primary)] leading-tight">Quantum Safe</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: TEXT ===== */}
          <div className="order-2 lg:order-2 flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:w-[54%]">

            {/* Badge */}
            <div className="hero-pill badge-pill mb-6 sm:mb-8">
              <Sparkles size={12} />
              <span>BlockDAG V2.0 — Now Live</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--primary)]"></span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-syne font-black uppercase leading-[1.05] tracking-tight text-[var(--text-primary)] text-3d" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              <div className="overflow-hidden"><span className="hero-title-word block">Unleash</span></div>
              <div className="overflow-hidden"><span className="hero-title-word block text-gradient pb-1">The Future</span></div>
              <div className="overflow-hidden"><span className="hero-title-word block">Of Crypto</span></div>
            </h1>

            {/* Description */}
            <p className="hero-desc mt-4 sm:mt-5 max-w-[500px] font-space text-[14px] sm:text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              The world's most advanced Layer 1 blockchain. Experience infinite scalability, sub-400ms finality, and military-grade quantum-resistant security — all in one ecosystem.
            </p>

            {/* CTAs */}
            <div className="hero-btns mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <button
                ref={btnPrimaryRef}
                {...magnet(btnPrimaryRef)}
                className="interactable relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] px-6 sm:px-7 py-3 sm:py-3.5 font-space text-[13px] sm:text-[14px] font-bold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,255,102,0.5)]"
              >
                Start Building <ArrowRight size={15} />
              </button>
              <button
                ref={btnSecondaryRef}
                {...magnet(btnSecondaryRef)}
                className="interactable flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--bg-panel)] px-6 sm:px-7 py-3 sm:py-3.5 font-space text-[13px] sm:text-[14px] font-bold text-[var(--text-primary)] transition-all hover:border-[var(--primary)] hover:shadow-[0_0_20px_rgba(0,255,102,0.15)]"
              >
                <Play size={14} fill="currentColor" /> Watch Demo
              </button>
            </div>

            {/* Stats row */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:justify-start">
              {[["1B", "Total Supply"], ["10K+", "Transactions/s"], ["$45M+", "Daily Volume"]].map(([val, label]) => (
                <div key={label} className="hero-stats flex flex-col items-center lg:items-start">
                  <span className="font-syne text-[22px] sm:text-[26px] font-black text-gradient leading-none">{val}</span>
                  <span className="font-space text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest text-[var(--text-gray-500)] mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;