import { Coins, Lock, ShieldCheck, Activity, AlertCircle } from "lucide-react";
import { MiniStatCard, ValidatorRow } from "../../Components/Dashboard/Shared";

const Staking = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="font-syne text-2xl font-bold text-[var(--text-primary)]">Liquid Staking</h1>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Stake NATX to earn rewards and secure the network</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[10px] text-[var(--text-gray-500)] uppercase">Global Staked</p>
          <p className="text-sm font-bold text-[var(--primary)] font-space">42,500,000 NATX</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <MiniStatCard title="Current APR" value="14.5%" sub="Fixed + Dynamic" />
        <MiniStatCard title="Total Staked" value="15,000" sub="$12,450.00" highlight />
        <MiniStatCard title="Claimable Rewards" value="342.5" sub="~$284.10" />
        <MiniStatCard title="Unbonding" value="0.00" sub="0 days remaining" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stake Action */}
        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Lock size={120} /></div>
          
          <div className="flex gap-4 mb-6 border-b border-[var(--border-light)] pb-2">
            <button className="text-xs font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-2 px-2">Stake</button>
            <button className="text-xs font-bold text-[var(--text-gray-500)] hover:text-[var(--text-primary)] pb-2 px-2">Unstake</button>
            <button className="text-xs font-bold text-[var(--text-gray-500)] hover:text-[var(--text-primary)] pb-2 px-2">Claim</button>
          </div>
          
          <div className="bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-xl p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] text-[var(--text-gray-500)]">Amount to Stake</span>
              <span className="text-[10px] text-[var(--text-gray-500)]">Available: 2,450 NATX</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="0.00" className="bg-transparent outline-none text-2xl font-bold text-[var(--text-primary)] w-2/3" />
              <div className="flex items-center gap-2">
                <button className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded">MAX</button>
                <span className="text-sm font-bold text-[var(--text-primary)]">NATX</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-6 bg-[var(--bg-elevated)]/50 p-3 rounded-lg border border-[var(--border-light)]/50">
            <AlertCircle size={14} className="text-[var(--text-gray-500)] mt-0.5 shrink-0" />
            <p className="text-[10px] text-[var(--text-gray-500)] leading-relaxed">
              Staking will lock your funds for a minimum of 7 days. You will receive sNATX (Staked NATX) as a receipt token in your wallet.
            </p>
          </div>

          <button className="w-full rounded-xl bg-[var(--primary)] text-black text-sm font-bold py-3.5 transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,255,102,0.2)]">
            Confirm Stake
          </button>
        </div>

        {/* Validators */}
        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-6 flex flex-col">
          <h2 className="font-syne text-sm font-bold text-[var(--text-primary)] mb-4">Top Validators</h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            <ValidatorRow name="NATX Core Node" apr="14.5%" comm="5%" uptime="99.9%" isDelegated />
            <ValidatorRow name="Nexus Secure" apr="14.2%" comm="8%" uptime="99.8%" />
            <ValidatorRow name="Alpha Stake" apr="14.8%" comm="10%" uptime="99.5%" />
            <ValidatorRow name="Omega Validator" apr="13.9%" comm="2%" uptime="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;