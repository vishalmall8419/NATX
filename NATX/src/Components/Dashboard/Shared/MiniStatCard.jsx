export const MiniStatCard = ({ title, value, sub, highlight }) => (
  <div className={`glass-panel rounded-xl p-4 border ${highlight ? 'border-[var(--primary)]/50 bg-[var(--primary)]/5' : 'border-[var(--border-light)]'}`}>
    <p className="text-[10px] uppercase text-[var(--text-gray-500)] font-bold mb-1">{title}</p>
    <p className={`text-xl font-bold font-syne ${highlight ? 'text-[var(--primary)]' : 'text-[var(--text-primary)]'}`}>{value}</p>
    <p className="text-[10px] text-[var(--text-secondary)] mt-1">{sub}</p>
  </div>
);