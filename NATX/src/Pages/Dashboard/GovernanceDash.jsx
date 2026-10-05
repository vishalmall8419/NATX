import { Vote, Clock, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ProposalCard } from "../../Components/Dashboard/Shared";

const GovernanceDash = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="font-syne text-2xl font-bold text-[var(--text-primary)]">Governance</h1>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Shape the future of NATX Protocol</p>
        </div>
        <button className="border border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded-lg text-xs font-bold hover:bg-[var(--primary)]/10 transition-colors flex items-center gap-2">
          <Vote size={14} /> Create Proposal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-4">
          <p className="text-[10px] text-[var(--text-gray-500)] uppercase font-bold mb-1">Voting Power</p>
          <p className="text-xl font-bold text-[var(--primary)] font-syne">15,000 vNATX</p>
        </div>
        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-4">
          <p className="text-[10px] text-[var(--text-gray-500)] uppercase font-bold mb-1">Proposals Voted</p>
          <p className="text-xl font-bold text-[var(--text-primary)] font-syne">12</p>
        </div>
        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-4">
          <p className="text-[10px] text-[var(--text-gray-500)] uppercase font-bold mb-1">Delegated To</p>
          <p className="text-sm font-bold text-[var(--text-primary)] mt-1 font-space">Self</p>
        </div>
      </div>

      <div className="flex gap-4 mb-4 border-b border-[var(--border-light)] pb-2">
        <button className="text-xs font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-2 px-1">Active (2)</button>
        <button className="text-xs font-bold text-[var(--text-gray-500)] hover:text-[var(--text-primary)] pb-2 px-1">Passed (45)</button>
        <button className="text-xs font-bold text-[var(--text-gray-500)] hover:text-[var(--text-primary)] pb-2 px-1">Rejected (8)</button>
      </div>

      <div className="space-y-4">
        <ProposalCard 
          id="NIP-42" 
          title="Reduce Staking Unbond Period to 7 Days" 
          status="Active" 
          category="Parameters"
          time="2 days left"
          yes={75} 
          no={25}
          quorum={60}
          total="4.2M"
        />
        <ProposalCard 
          id="NIP-43" 
          title="Add USDC to Core Liquidity Pools" 
          status="Active" 
          category="Treasury"
          time="5 days left"
          yes={92} 
          no={8}
          quorum={45}
          total="1.1M"
        />
        <ProposalCard 
          id="NIP-41" 
          title="Update Protocol Fee Distribution" 
          status="Passed" 
          category="Core"
          time="Ended Sep 28"
          yes={88} 
          no={12}
          quorum={85}
          total="6.8M"
        />
      </div>
    </div>
  );
};

export default GovernanceDash;