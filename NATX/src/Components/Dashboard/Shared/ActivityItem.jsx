import { Clock, ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";

export const ActivityItem = ({ type, amount, time, status, hash }) => {
  const isPositive = type === "Receive" || type === "Claim";
  const isPending = status === "Pending";
  
  return (
    <div className="flex items-center justify-between border-b border-[var(--border-light)]/50 pb-2.5 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${isPending ? 'bg-orange-500/10 text-orange-500' : isPositive ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-[var(--text-gray-500)]/10 text-[var(--text-gray-500)]'}`}>
          {isPending ? <Clock size={12} /> : isPositive ? <ArrowDownRight size={12} /> : <ArrowUpRight size={12} />}
        </div>
        <div>
          <p className="text-xs font-bold text-[var(--text-primary)]">{type}</p>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-[var(--text-gray-500)]">{time}</span>
            <a href="#" className="text-[9px] text-[var(--primary)] flex items-center hover:underline">{hash} <ExternalLink size={8} className="ml-0.5" /></a>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className={`text-xs font-bold block ${isPositive ? 'text-[var(--primary)]' : 'text-[var(--text-primary)]'}`}>{amount}</span>
        <span className={`text-[9px] ${isPending ? 'text-orange-500' : 'text-[var(--text-gray-500)]'}`}>{status}</span>
      </div>
    </div>
  );
};