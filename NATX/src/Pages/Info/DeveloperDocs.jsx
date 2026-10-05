import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../Components/ParticlesBackground";
import Logo from "../../Components/Logo";

const DeveloperDocs = () => {
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
          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">Developer Docs</h1>
          <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--primary)] pl-4">Build the future of DeFi on NATX</p>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-3xl p-8 sm:p-12 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Getting Started
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>NATX is 100% EVM compatible. You can use standard tools like Hardhat, Foundry, and Truffle to deploy your existing Solidity smart contracts directly to the NATX network.</p><div class='bg-[#0a0a0a] border border-[var(--border-light)] p-4 rounded-lg mt-4 font-mono text-xs text-[var(--primary)]'>npm install ethers @natx/sdk</div>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Network Details
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p><strong>Mainnet:</strong><br/>RPC URL: https://rpc.natx.network<br/>Chain ID: 8888<br/>Currency Symbol: NATX<br/>Explorer: https://explorer.natx.network</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Smart Contract Verification
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Contracts can be verified directly via the NATX Explorer API using the standard Etherscan plugin format.</p>` }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDocs;