import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../Components/ParticlesBackground";
import Logo from "../../Components/Logo";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen w-full bg-[var(--bg-primary)] overflow-hidden font-space">
      <ParticlesBackground />
      
      <div className="absolute top-0 w-full px-6 py-6 sm:px-12 sm:py-8 flex items-center justify-between z-20 border-b border-[var(--border-light)]/30 bg-[var(--bg-primary)]/80 backdrop-blur-md">
        <Logo />
        <Link to="/" className="interactable flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-32 pb-20 px-6 sm:px-12">
        <div className="mb-12">
          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">Privacy Policy</h1>
          <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--primary)] pl-4">How we handle and protect your data</p>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-3xl p-8 sm:p-12 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Information Collection
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>As a decentralized protocol, NATX does not collect personal identifiable information (PII) such as names, addresses, or emails by default. We only collect public blockchain data and non-identifying telemetry for website performance optimization.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Wallet Addresses
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Your public wallet address is recorded on the blockchain and is inherently public. We do not link wallet addresses to real-world identities on our frontend interfaces.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Third-Party Services
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>We may use decentralized storage (IPFS) and RPC providers (like Alchemy or Infura). Your interactions with these services are governed by their respective privacy policies.</p>` }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;