import { Clock, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export const ProposalCard = ({ id, title, status, category, time, yes, no, quorum, total }) => {
  const isActive = status === "Active";
  
  return (
    <div className="glass-panel border border-[var(--border-light)] rounded-xl p-5 hover:border-[var(--primary)]/50 transition-colors group">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-[var(--text-gray-500)]">{id}</span>
            <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm ${isActive ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-[var(--bg-elevated)] text-[var(--text-gray-500)] border border-[var(--border-light)]'}`}>
              {status}
            </span>
            <span className="text-[9px] border border-[var(--border-light)] px-2 py-0.5 rounded-sm text-[var(--text-gray-500)]">{category}</span>
          </div>
          <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        </div>
        <div className="text-left md:text-right">
          <p className="text-[10px] text-[var(--text-gray-500)] flex items-center md:justify-end gap-1 mb-1">
            <Clock size={10} /> {time}
          </p>
          <p className="text-[10px] font-bold text-[var(--text-secondary)]">{total} Votes</p>
        </div>
      </div>

      <div className="bg-[var(--bg-elevated)] rounded-lg p-3 border border-[var(--border-light)]/50">
        <div className="flex justify-between text-[10px] font-bold mb-2">
          <span className="text-[var(--primary)] flex items-center gap-1"><CheckCircle2 size={10}/> Yes {yes}%</span>
          <span className="text-[var(--text-gray-500)] flex items-center gap-1">No {no}% <XCircle size={10}/></span>
        </div>
        <div className="w-full h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden flex relative">
          <div className="h-full bg-[var(--primary)]" style={{ width: `${yes}%` }}></div>
          <div className="h-full bg-[var(--text-gray-500)]" style={{ width: `${no}%` }}></div>
          {/* Quorum Marker */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" style={{ left: `${quorum}%` }} title={`Quorum: ${quorum}%`}></div>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-[9px] text-[var(--text-gray-500)]">Quorum Marker at {quorum}%</span>
          {isActive && <button className="text-[10px] font-bold text-[var(--primary)] flex items-center gap-1 hover:underline">Vote Now <ArrowRight size={10}/></button>}
        </div>
      </div>
    </div>
  );
};