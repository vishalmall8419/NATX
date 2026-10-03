import React, { useRef, useEffect, useState } from "react";
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

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setGlobeSize(Math.floor(entry.contentRect.width));
    });
    ro.observe(wrapperRef.current);
    setGlobeSize(wrapperRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((r) => r.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 0.45;
    ctrl.enableZoom = false;
  }, []);

  useGSAP(() => {
    gsap.fromTo(".gr-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: section.current, start: "top 75%" } }
    );
    gsap.fromTo(".gr-globe",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: section.current, start: "top 70%" } }
    );
  }, { scope: section });

  return (
    <section ref={section} className="relative w-full overflow-hidden bg-transparent section-padding">
      <div className="section-divider absolute top-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="section-container flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="gr-text badge-pill mb-6">
            <Globe2 size={12} />
            Worldwide Network
          </div>
          <h2 className="gr-text heading-xl text-3d mb-6 text-[32px] sm:text-[42px] lg:text-[52px]">
            Decentralized <br className="hidden sm:block" /> Across the <span className="text-gradient">Globe</span>
          </h2>
          <p className="gr-text body-text mb-8 max-w-[500px]">
            NATX nodes are distributed globally, ensuring censorship resistance, robust fault tolerance, and localized sub-second latency for users everywhere.
          </p>
          
          <div className="gr-text grid grid-cols-2 gap-6 w-full max-w-[400px]">
            <div className="glass-panel rounded-2xl p-4 text-left border border-[var(--border-light)]">
              <span className="block font-syne text-[28px] font-black text-gradient">180+</span>
              <span className="font-space text-[12px] font-bold uppercase tracking-wider text-[var(--text-gray-500)]">Countries</span>
            </div>
            <div className="glass-panel rounded-2xl p-4 text-left border border-[var(--border-light)]">
              <span className="block font-syne text-[28px] font-black text-gradient">24k+</span>
              <span className="font-space text-[12px] font-bold uppercase tracking-wider text-[var(--text-gray-500)]">Active Nodes</span>
            </div>
          </div>
        </div>

        <div className="gr-globe w-full lg:w-1/2 flex justify-center">
          <div ref={wrapperRef} className="relative w-full max-w-[480px] aspect-square lg:max-w-[540px] rounded-full flex items-center justify-center">
            
            <div className="absolute inset-0 rounded-full border border-[var(--primary)]/20 animate-[spin_20s_linear_infinite] border-dashed" />
            <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-[0.05] blur-3xl pointer-events-none" />

            {countries.features.length > 0 && (
              <div className="relative z-10 cursor-grab active:cursor-grabbing">
                <Globe
                  ref={globeRef}
                  width={globeSize}
                  height={globeSize}
                  backgroundColor="rgba(0,0,0,0)"
                  showAtmosphere={true}
                  atmosphereColor="#00e5ff"
                  atmosphereAltitude={0.15}
                  polygonsData={countries.features}
                  polygonAltitude={0.01}
                  polygonResolution={1}
                  polygonCapColor={() => "rgba(0, 229, 255, 0.15)"}
                  polygonSideColor={() => "rgba(0, 0, 0, 0.4)"}
                  polygonStrokeColor={() => "rgba(0, 229, 255, 0.4)"}
                  labelsData={MARKERS}
                  labelLat={(d) => d.lat}
                  labelLng={(d) => d.lng}
                  labelText={(d) => d.name}
                  labelSize={2}
                  labelDotRadius={0.5}
                  labelColor={() => "#fff"}
                  labelResolution={2}
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;