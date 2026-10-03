import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Send, ArrowUpRight } from "lucide-react";
import Logo from "../Logo";

gsap.registerPlugin(ScrollTrigger);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const Footer = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(".ftr-elem", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 85%" } }
    );
  }, { scope: container });

  return (
    <footer ref={container} className="relative w-full overflow-hidden bg-transparent section-padding pb-8">
      <div className="section-divider absolute top-0" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 w-[80vw] h-[30vw] max-w-[1200px] -translate-x-1/2 rounded-[100%] ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.03)_0%,transparent_60%)]" />

      <div className="section-container relative z-10">
        
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20 mb-16">
          
          <div className="ftr-elem w-full lg:w-[35%] flex flex-col items-start">
            <Logo />
            <p className="body-text mt-6 mb-8 max-w-[400px]">
              The next-generation Web3 protocol built for infinite scalability, quantum resistance, and institutional adoption. Join the future of decentralized finance today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--text-gray-400)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--text-gray-400)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <Send size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--text-gray-400)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          <div className="ftr-elem w-full lg:w-[25%] flex justify-start lg:justify-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-space font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Ecosystem</h4>
              {["Developer Docs", "Block Explorer", "Governance Forum", "Node Setup Guide", "Whitepaper"].map(link => (
                <a key={link} href="#" className="font-space text-[14px] text-[var(--text-gray-400)] transition-colors hover:text-[var(--primary)]">{link}</a>
              ))}
            </div>
          </div>

          <div className="ftr-elem w-full lg:w-[40%]">
            <div className="glass-panel rounded-3xl p-8 border border-[var(--border-light)] bg-[var(--bg-card)]/50">
              <h4 className="font-syne text-[20px] font-bold text-[var(--text-primary)] mb-2">Stay Updated</h4>
              <p className="body-text text-[13px] mb-6">Join our newsletter to receive the latest protocol updates, ecosystem grants, and developer resources.</p>
              <div className="flex relative items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-[var(--border-light)] bg-transparent py-3.5 pl-5 pr-14 font-space text-[14px] text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--primary)]"
                />
                <button className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] text-black transition-transform hover:scale-105">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="ftr-elem section-divider mb-6" />

        <div className="ftr-elem flex flex-col items-center justify-between gap-4 sm:flex-row text-[12px] font-space font-medium text-[var(--text-gray-500)]">
          <p>© 2024 NATX Protocol. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-[var(--primary)]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[var(--primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;