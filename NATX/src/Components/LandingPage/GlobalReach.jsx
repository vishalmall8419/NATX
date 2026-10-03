import React, { useRef, useEffect, useState, useMemo } from "react";
import Globe from "react-globe.gl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MARKERS = [
  { lat: 51.5072, lng: -0.1276,   name: "London" },
  { lat: 40.7128, lng: -74.006,   name: "New York" },
  { lat: 35.6762, lng: 139.6503,  name: "Tokyo" },
  { lat: 1.3521,  lng: 103.8198,  name: "Singapore" },
  { lat: 25.2048, lng: 55.2708,   name: "Dubai" },
  { lat: 48.8566, lng: 2.3522,    name: "Paris" },
];

const GlobalReach = () => {
  const section = useRef();
  const globeRef = useRef();
  const wrapperRef = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [globeSize, setGlobeSize] = useState(480);

  // ResizeObserver â€” no window.addEventListener
  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setGlobeSize(Math.floor(entry.contentRect.width));
    });
    ro.observe(wrapperRef.current);
    setGlobeSize(wrapperRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Fetch country polygons
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((r) => r.json())
      .then(setCountries);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 0.45;
    ctrl.enableZoom = false;
  });

  useGSAP(() => {
    gsap.fromTo(".gr-left", { x: -35, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
      scrollTrigger: { trigger: section.current, start: "top 78%" },
    });
    gsap.fromTo(".gr-right", { x: 35, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
      scrollTrigger: { trigger: section.current, start: "top 78%" },
    });
  }, { scope: section });

  return (
    <section
      ref={section}
      className="relative w-full overflow-hidden bg-transparent px-5 py-20 sm:px-8 md:py-28 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-12 md:flex-row md:gap-10">

        {/* â”€â”€ LEFT: Text â”€â”€ */}
        <div className="gr-left w-full md:w-[46%] lg:pr-6">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--text-primary)]/[0.04] px-4 py-1.5">
            <Globe2 size={13} className="text-[var(--primary)]" />
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              Global Reach
            </span>
          </div>

          <h2 className="font-outfit mb-6 text-[32px] font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-[38px] lg:text-[46px]">
            Borderless<br />Crypto Trading
          </h2>

          <p className="font-inter mb-9 max-w-[440px] text-[16px] leading-[1.85] text-[var(--text-gray-400)]">
            Connect with creators, collectors, and traders worldwide. The NATX protocol provides deep liquidity and seamless cross-border transactions without restrictions.
          </p>

          {/* Stats / bullet list */}
          <div className="flex flex-col gap-5 border-l-[2px] border-[var(--primary)] pl-6 opacity-90">
            <div>
              <h4 className="font-outfit text-[16px] font-semibold text-[var(--text-primary)]">Universal Accessibility</h4>
              <p className="font-inter mt-1 text-[14px] text-[var(--text-gray-500)]">
                Trade instantly across 100+ countries with minimal latency.
              </p>
            </div>
            <div>
              <h4 className="font-outfit text-[16px] font-semibold text-[var(--text-primary)]">Unified Liquidity</h4>
              <p className="font-inter mt-1 text-[14px] text-[var(--text-gray-500)]">
                Access order books aggregated from global markets.
              </p>
            </div>
          </div>
        </div>

        {/* â”€â”€ RIGHT: Globe â”€â”€ */}
        <div className="gr-right flex w-full justify-center md:w-[54%]">
          <div
            ref={wrapperRef}
            className="relative aspect-square w-full max-w-[560px] md:translate-x-6"
          >
            {typeof window !== "undefined" && globeSize > 0 && (
              <Globe
                ref={globeRef}
                width={globeSize}
                height={globeSize}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                atmosphereColor="rgba(0,214,163,0.2)"
                atmosphereAltitude={0.15}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                polygonsData={countries.features}
                polygonAltitude={0.01}
                polygonCapColor={() => "#0a0a0a"}
                polygonSideColor={() => "rgba(0,0,0,0)"}
                polygonStrokeColor={() => "#1c1c1c"}
                htmlElementsData={MARKERS}
                htmlElement={() => {
                  const el = document.createElement("div");
                  el.style.cssText = `
                    width:8px;height:8px;border-radius:50%;
                    background:var(--primary);
                    box-shadow:0 0 12px 3px var(--primary);
                    transform:translate(-50%,-50%);
                  `;
                  return el;
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;



