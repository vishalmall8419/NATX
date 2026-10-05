import { ShieldCheck } from "lucide-react";

export const ValidatorRow = ({ name, apr, comm, uptime, isDelegated }) => (
  <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-light)] bg-[var(--bg-elevated)]/50 hover:border-[var(--primary)]/50 transition-colors">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] border border-[var(--border-light)] flex items-center justify-center">
        <ShieldCheck size={14} className={isDelegated ? "text-[var(--primary)]" : "text-[var(--text-gray-500)]"} />
      </div>
      <div>
        <p className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
          {name}
          {isDelegated && <span className="text-[8px] bg-[var(--primary)]/20 text-[var(--primary)] px-1.5 py-0.5 rounded-sm uppercase">Active</span>}
        </p>
        <p className="text-[9px] text-[var(--text-gray-500)]">Commission: {comm} • Uptime: {uptime}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-xs font-bold text-[var(--primary)]">{apr}</p>
      <p className="text-[9px] text-[var(--text-gray-500)]">APR</p>
    </div>
  </div>
);