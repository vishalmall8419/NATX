import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../Components/ParticlesBackground";
import Logo from "../../Components/Logo";

const NodeSetupGuide = () => {
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
          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">Node Setup Guide</h1>
          <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--primary)] pl-4">Run a validator and secure the network</p>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-3xl p-8 sm:p-12 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Hardware Requirements
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>To run a full validator node, we recommend:<br/>- CPU: 8 Cores (Modern AMD/Intel)<br/>- RAM: 32 GB DDR4<br/>- Storage: 2 TB NVMe SSD<br/>- Network: 1 Gbps symmetric</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Installation
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Download the latest release binary from our GitHub repository and initialize the genesis block.</p><div class='bg-[#0a0a0a] border border-[var(--border-light)] p-4 rounded-lg mt-4 font-mono text-xs text-[var(--primary)]'>wget https://github.com/natx/natx-node/releases/latest<br/>./natx-node init my-node</div>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Staking Requirement
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>A minimum of 50,000 NATX must be staked to activate a validator node. If uptime falls below 95%, your stake may be subject to slashing.</p>` }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default NodeSetupGuide;