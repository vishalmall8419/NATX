export const StatCard = ({ title, value, change, isUp, icon, extra }) => (
  <div className="glass-panel flex flex-col justify-between rounded-xl border border-[var(--border-light)] p-4 hover:border-[var(--primary)]/50 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-bold uppercase text-[var(--text-gray-500)]">{title}</span>
      <div className="text-[var(--text-secondary)]">{icon}</div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <span className="font-syne text-xl font-bold text-[var(--text-primary)] leading-none block mb-1">{value}</span>
        <span className="text-[10px] text-[var(--text-gray-500)]">{extra}</span>
      </div>
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isUp ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "bg-red-500/10 text-red-500"}`}>
        {change}
      </span>
    </div>
  </div>
);