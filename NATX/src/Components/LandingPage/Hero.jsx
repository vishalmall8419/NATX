import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroImg from "../../assets/hero.png";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Meteors from "../Meteors";

gsap.registerPlugin(ScrollTrigger);

// A premium interactive physics button
const MagneticButton = ({ children, className, primary }) => {
  const btnRef = useRef();

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={
        "interactable relative flex items-center gap-2 rounded-full px-6 py-3 font-space text-[14px] font-bold transition-colors "
      }
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

const Hero = () => {
  const section = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.5 },
      });

      tl.fromTo(
        ".hero-pill",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.1,
      )
        .fromTo(
          ".hero-title-line",
          { y: 40, opacity: 0, rotateX: 20 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.1 },
          0.2,
        )
        .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.4)
        .fromTo(".hero-btns", { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, 0.6)
        .fromTo(
          ".hero-visual",
          { scale: 0.9, opacity: 0, rotationY: -10 },
          { scale: 1, opacity: 1, rotationY: 0, duration: 2, ease: "expo.out" },
          0.3,
        )
        .fromTo(
          ".hero-floating-card",
          { y: 30, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 1.5,
            ease: "back.out(1.4)",
          },
          0.6,
        );

      gsap.to(".float-1", {
        y: -15,
        rotationZ: 3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-2", {
        y: 15,
        rotationZ: -3,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(".hero-visual", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative flex min-h-[100vh] sm:min-h-[90vh] w-full items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20"
    >
      <Meteors number={20} />

      <div className="hero-glow-blob bg-[var(--primary)] top-[-10%] right-[-10%] w-[50vw] h-[50vw]" />
      <div
        className="hero-glow-blob bg-[var(--grad-cyan-end)] bottom-[5%] left-[-10%] w-[45vw] h-[45vw]"
        style={{ animationDelay: "-5s" }}
      />

      {/* Liquid fluid blur background */}
      <div className="absolute inset-0 z-0 bg-[var(--bg-primary)]/40 backdrop-blur-[100px]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="hero-visual order-1 lg:order-1 relative flex h-full min-h-[350px] sm:min-h-[450px] w-full items-center justify-center">
            <div className="relative z-10 w-[90%] sm:w-[80%] max-w-[420px] lg:w-full">
              <img
                src={HeroImg}
                alt="Abstract 3D Crypto Element"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(188,0,255,0.3)]"
              />

              <div className="hero-floating-card float-1 glass-panel physics-tilt absolute top-[5%] right-[-5%] sm:right-[-12%] flex items-center gap-3 rounded-2xl p-2.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--primary)]/20 text-[var(--primary)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-space text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-gray-400)]">
                    Speed
                  </p>
                  <p className="font-syne text-[14px] sm:text-[16px] font-bold text-[var(--text-primary)]">
                    10,000+ TPS
                  </p>
                </div>
              </div>

              <div className="hero-floating-card float-2 glass-panel physics-tilt absolute bottom-[10%] left-[-5%] sm:left-[-12%] flex items-center gap-3 rounded-2xl p-2.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--grad-cyan-end)]/20 text-[var(--grad-cyan-end)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="font-space text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-gray-400)]">
                    Security
                  </p>
                  <p className="font-syne text-[14px] sm:text-[16px] font-bold text-[var(--text-primary)]">
                    Quantum Safe
                  </p>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -z-10 h-[105%] w-[105%] sm:h-[110%] sm:w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]/20 border-dashed opacity-50 animate-[spin_40s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -z-10 h-[125%] w-[125%] sm:h-[135%] sm:w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--grad-cyan-end)]/20 opacity-40 animate-[spin_60s_linear_infinite_reverse]" />
            </div>
          </div>

          <div className="order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left z-20">
            <div className="hero-pill mb-6 mx-auto lg:mx-0 inline-flex items-center gap-3 rounded-full border border-[var(--primary)]/30 bg-[var(--bg-card)] px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <Sparkles size={14} className="text-[var(--primary)]" />
              <span className="font-space text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-primary)]">
                BlockDAG V2.0 Live
              </span>
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--grad-cyan-end)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--grad-cyan-end)]"></span>
              </span>
            </div>

            <h1 className="font-syne text-[36px] font-black uppercase leading-[1.1] tracking-tight sm:text-[48px] lg:text-[64px] text-3d">
              <div className="hero-title-line overflow-visible">
                <span className="block text-[var(--text-primary)]">
                  Unleash
                </span>
              </div>
              <div className="hero-title-line overflow-visible">
                <span className="block text-gradient pb-2">The Future</span>
              </div>
              <div className="hero-title-line overflow-visible">
                <span className="block text-[var(--text-primary)]">
                  Of Crypto
                </span>
              </div>
            </h1>

            <p className="hero-desc mt-6 max-w-[500px] font-space text-[15px] sm:text-[16px] font-medium leading-[1.6] text-[var(--text-gray-300)] mx-auto lg:mx-0">
              The world's most advanced Layer 1 blockchain. Experience infinite
              scalability, zero delays, and military-grade security.
            </p>

            <div className="hero-btns mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <MagneticButton className="bg-gradient-to-r from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] text-white hover:shadow-[0_0_25px_rgba(188,0,255,0.5)]">
                Start Building <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton className="border border-[var(--border-light)] bg-[var(--bg-panel)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">
                <Play size={16} fill="currentColor" /> Watch Video
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
