import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, MessageCircle, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1828 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const stats = [
  { value: "500K+", label: "Community Members" },
  { value: "180+", label: "Countries" },
  { value: "24/7", label: "Active Support" },
];

const Community = () => {
  const section = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: section.current, start: "top 80%",
      onEnter: () => gsap.fromTo(".comm-stat", { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" })
    });
    ScrollTrigger.create({
      trigger: section.current, start: "top 75%",
      onEnter: () => gsap.fromTo(".comm-text", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "expo.out" }),
      onLeave: () => gsap.set(".comm-text", { opacity: 0 }),
      onEnterBack: () => gsap.fromTo(".comm-text", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: -0.12, ease: "expo.out" }),
      onLeaveBack: () => gsap.set(".comm-text", { opacity: 0 })
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent px-4 sm:px-6 py-16 md:py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(112,0,255,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto w-full max-w-[860px] text-center">

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="comm-stat glass-panel physics-tilt rounded-2xl px-6 py-4 min-w-[120px] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_10px_30px_rgba(0,255,102,0.1)]">
              <p className="font-syne text-[26px] sm:text-[32px] font-black text-gradient leading-none">{s.value}</p>
              <p className="font-space text-[11px] text-[var(--text-gray-400)] uppercase tracking-wider font-bold mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="comm-text mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          <span className="font-space text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Join the Movement</span>
        </div>

        <h2 className="comm-text font-syne mb-5 text-[32px] sm:text-[48px] md:text-[60px] font-black leading-[1.05] tracking-tight text-[var(--text-primary)] text-3d">
          Join the Global<br /><span className="text-gradient">NATX Movement</span>
        </h2>

        <p className="comm-text font-space mb-10 text-[15px] sm:text-[17px] leading-[1.8] text-[var(--text-gray-400)] max-w-[600px] mx-auto">
          Be part of the fastest-growing decentralized NATX ecosystem. Discuss proposals, shape the protocol's future, and earn rewards alongside thousands of creators.
        </p>

        <div className="comm-text flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="interactable flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] px-7 font-space text-[14px] font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,102,0.4)]">
            Enter Discord <DiscordIcon />
          </button>
          <div className="flex gap-3">
            {[MessageCircle, Send, Globe].map((Icon, i) => (
              <a key={i} href="#" className="interactable flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-panel)] text-[var(--text-gray-400)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Community;