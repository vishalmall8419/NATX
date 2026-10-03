import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar";
import ParticlesBackground from "../Components/ParticlesBackground";
import Hero from "../Components/LandingPage/Hero";
import FeaturesSection from "../Components/LandingPage/FeaturesSection";
import BuyAndSell from "../Components/LandingPage/Buy&Sell";
import GlobalReach from "../Components/LandingPage/GlobalReach";
import Future from "../Components/LandingPage/Future";
import Tokenomics from "../Components/LandingPage/Tokenomics";
import Governence from "../Components/LandingPage/Governence";
import Community from "../Components/LandingPage/Community";
import Footer from "../Components/LandingPage/Footer";
import usePhysicsTilt from "../Components/usePhysicsTilt";
import LiveMarket from "../Components/LandingPage/LiveMarket";
import Roadmap from "../Components/LandingPage/Roadmap";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  usePhysicsTilt();
  useEffect(() => {
    // â”€â”€ Lenis smooth scroll, integrated with GSAP ScrollTrigger â”€â”€
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    // Sync Lenis scroll events â†’ GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker so Lenis raf is called every GSAP frame
    const tickerCb = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0); // Prevent catchup lag

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCb);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <BuyAndSell />
      <GlobalReach />
      <Future />
      <Tokenomics />
      <LiveMarket />
      <Governence />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;


