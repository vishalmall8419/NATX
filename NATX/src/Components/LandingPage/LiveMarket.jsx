import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Activity, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 4800, pv: 3100 },
  { name: "Mar", uv: 5500, pv: 4200 },
  { name: "Apr", uv: 5100, pv: 4800 },
  { name: "May", uv: 6800, pv: 5500 },
  { name: "Jun", uv: 8200, pv: 6800 },
  { name: "Jul", uv: 10400, pv: 8900 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-[var(--primary)]/30 bg-[var(--bg-panel)]/90 p-4 shadow-xl backdrop-blur-md">
        <p className="font-space mb-2 text-sm font-semibold text-[var(--text-primary)]">{label}</p>
        <p className="font-space text-sm text-[var(--primary)]">Volume: <span className="font-bold">${payload[0].value.toLocaleString()}</span></p>
        <p className="font-space mt-1 text-sm text-blue-400">TVL: <span className="font-bold">${payload[1].value.toLocaleString()}</span></p>
      </div>
    );
  }
  return null;
};

const StatPill = ({ value, label }) => (
  <div className="glass-panel physics-tilt rounded-2xl px-5 py-4 flex flex-col items-start transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)]">
    <div className="flex items-center gap-2 mb-1">
      <ArrowUp size={14} className="text-green-400" />
      <span className="font-syne text-[22px] sm:text-[28px] font-black text-[var(--text-primary)]">{value}</span>
    </div>
    <p className="font-space text-[11px] sm:text-[12px] text-[var(--text-gray-400)] uppercase tracking-wider font-bold">{label}</p>
  </div>
);

const LiveMarket = () => {
  const section = useRef();
  const [isChartVisible, setIsChartVisible] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: section.current, start: "top 85%",
      onEnter: () => gsap.fromTo(".mkt-text", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }),
      onLeave: () => gsap.set(".mkt-text", { opacity: 0 }),
      onEnterBack: () => gsap.fromTo(".mkt-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: -0.1, ease: "power3.out" }),
      onLeaveBack: () => gsap.set(".mkt-text", { opacity: 0 })
    });
    ScrollTrigger.create({
      trigger: section.current, start: "top 75%",
      onEnter: () => { setIsChartVisible(true); gsap.fromTo(".mkt-chart", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }); },
      onLeave: () => { setIsChartVisible(false); gsap.set(".mkt-chart", { opacity: 0 }); },
      onEnterBack: () => { setIsChartVisible(true); gsap.fromTo(".mkt-chart", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }); },
      onLeaveBack: () => { setIsChartVisible(false); gsap.set(".mkt-chart", { opacity: 0 }); }
    });
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-[var(--bg-primary)] px-4 sm:px-6 py-12 md:py-20">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[var(--primary)] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

        <div className="w-full lg:w-[42%]">
          <div className="mkt-text mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--primary)]/10 px-4 py-1.5">
            <Activity size={13} className="text-[var(--primary)]" />
            <span className="font-space text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Live Protocol Metrics</span>
          </div>
          <h2 className="mkt-text font-syne mb-4 text-[28px] sm:text-[38px] md:text-[48px] font-black leading-[1.1] tracking-tight text-[var(--text-primary)] text-3d">
            Explosive<br />Network Growth
          </h2>
          <p className="mkt-text font-space mb-8 max-w-[480px] text-[14px] sm:text-[16px] leading-[1.8] text-[var(--text-gray-400)]">
            Track real-time trading volumes, total value locked (TVL), and network adoption. NATX Protocol is expanding rapidly across decentralized ecosystems.
          </p>
          <div className="mkt-text flex gap-4 mb-8 flex-wrap">
            <StatPill value="$45M+" label="Daily Volume" />
            <StatPill value="12.5k" label="Active Traders" />
          </div>
          <div className="mkt-text">
            <button className="interactable inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-6 py-3 font-space text-[13px] font-bold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-black hover:scale-105">
              View Full Explorer <TrendingUp size={15} />
            </button>
          </div>
        </div>

        <div className="mkt-chart relative w-full lg:w-[58%]">
          <div className="relative z-10 rounded-[24px] sm:rounded-[32px] border border-[var(--border-light)] bg-[var(--bg-panel)]/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" /><span className="font-space text-[11px] font-bold text-[var(--text-gray-400)] uppercase tracking-wide">Volume</span></div>
              <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-blue-400" /><span className="font-space text-[11px] font-bold text-[var(--text-gray-400)] uppercase tracking-wide">TVL</span></div>
            </div>
            <div className="h-[260px] sm:h-[320px]">
              {isChartVisible && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={1} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.3} />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={1} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--text-gray-500)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="var(--text-gray-500)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    <Bar dataKey="pv" fill="url(#colorPv)" radius={[6,6,0,0]} animationDuration={1500} isAnimationActive={true} animationEasing="ease-out" />
                    <Bar dataKey="uv" fill="url(#colorUv)" radius={[6,6,0,0]} animationDuration={1500} animationBegin={200} isAnimationActive={true} animationEasing="ease-out" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;