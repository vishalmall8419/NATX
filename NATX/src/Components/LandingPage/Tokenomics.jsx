import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Wallet, Code, Megaphone, Users, Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tokenData = [
  { title: "Exchange", value: "70%", Icon: Wallet, grad: "from-[#00e5ff] to-[#7000ff]" },
  { title: "Technology & Software", value: "10%", Icon: Code, grad: "from-blue-500 to-indigo-600" },
  { title: "Brand Clarity", value: "10%", Icon: Megaphone, grad: "from-pink-500 to-rose-600" },
  { title: "Marketing Community", value: "10%", Icon: Users, grad: "from-orange-500 to-amber-500" },
];

const Tokenomics = () => {
  const section = useRef();
  const supplyRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".tok-header", start: "top 80%",
      onEnter: () => gsap.fromTo(".tok-header", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" })
    });
    ScrollTrigger.create({
      trigger: ".tok-grid", start: "top 78%",
      onEnter: () => gsap.fromTo(".tok-card", { y: 60, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.12, ease: "back.out(1.2)" })
    });
    const counter = { value: 0 };
    ScrollTrigger.create({
      trigger: ".tok-header", start: "top 70%",
      onEnter: () => gsap.to(counter, {
        value: 1000000000, duration: 2.5, ease: "power3.out",
        onUpdate: () => { if (supplyRef.current) supplyRef.current.innerText = Math.ceil(counter.value).toLocaleString(); }
      })
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent px-4 sm:px-6 py-12 md:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,153,61,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="tok-header mb-10 sm:mb-16 text-center flex flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2 backdrop-blur-sm">
            <Coins size={13} className="text-[var(--primary)] animate-pulse" />
            <span className="font-space text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">NATX Tokenomics</span>
          </div>
          <h2 className="font-syne text-[32px] sm:text-[44px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] text-3d">
            TOTAL SUPPLY <br /> <span className="text-gradient font-black">1 BILLION</span>
          </h2>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-panel)] px-6 sm:px-8 py-3 sm:py-4 shadow-xl">
            <span className="font-space text-[12px] sm:text-[14px] text-[var(--text-gray-400)] uppercase tracking-wider font-bold">Total:</span>
            <span className="font-syne text-[20px] sm:text-[28px] font-bold text-[var(--text-primary)]"><span ref={supplyRef}>0</span> NATX</span>
          </div>
        </div>
        <div className="tok-grid grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {tokenData.map(({ title, value, Icon, grad }) => (
            <div key={title} className={"tok-card glass-panel physics-tilt group relative overflow-hidden rounded-[20px] sm:rounded-[28px] p-5 sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_rgba(0,255,102,0.1)]"}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={"mb-5 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[16px] bg-gradient-to-br text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 " + grad}>
                <Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="font-syne mb-2 text-[36px] sm:text-[48px] font-black text-[var(--text-primary)] leading-none">{value}</h3>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-[var(--primary)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <p className="font-space mt-3 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide text-[var(--text-gray-400)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;