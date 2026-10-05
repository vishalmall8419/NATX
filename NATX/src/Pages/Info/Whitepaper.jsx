import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../Components/ParticlesBackground";
import Logo from "../../Components/Logo";

const Whitepaper = () => {
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
          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">Whitepaper</h1>
          <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--primary)] pl-4">The technical foundation of the NATX Protocol</p>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-3xl p-8 sm:p-12 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              1. Abstract
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>NATX is a highly scalable, EVM-compatible Layer 1 blockchain designed specifically for high-frequency trading, real-world asset tokenization, and institutional DeFi. By utilizing a novel Proof-of-Liquidity consensus mechanism, NATX achieves sub-second finality while maintaining robust decentralization.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              2. Consensus Architecture
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Unlike traditional Proof-of-Stake systems, NATX's Proof-of-Liquidity requires validators to not only stake the native token but also provide liquidity to core protocol pairs. This dual-requirement ensures that network security directly correlates with network liquidity, solving the cold-start problem of new DeFi ecosystems.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              3. Tokenomics
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Total Supply: 1,000,000,000 NATX.<br/>- 70% Exchange & Liquidity<br/>- 10% Technology Development<br/>- 10% Brand & Partnerships<br/>- 10% Marketing & Community Grants</p>` }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;