import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../Components/ParticlesBackground";
import Logo from "../../Components/Logo";

const TermsofService = () => {
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
          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">Terms of Service</h1>
          <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--primary)] pl-4">Legal agreement for using NATX interfaces</p>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-3xl p-8 sm:p-12 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Acceptance of Terms
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>By accessing the NATX interface, you agree to these Terms of Service. NATX is a decentralized protocol; the frontend is merely an interface to interact with smart contracts deployed on the blockchain.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              Assumption of Risk
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Trading, staking, and interacting with cryptographic tokens involves significant risk. You acknowledge that smart contracts may contain vulnerabilities, and you bear full responsibility for any loss of funds.</p>` }} />
          </section>
          <section>
            <h2 className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              No Financial Advice
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: `<p>Nothing on the NATX platform constitutes financial, legal, or tax advice. All metrics, APRs, and charts are provided for informational purposes only.</p>` }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsofService;