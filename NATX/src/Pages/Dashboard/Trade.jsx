import React, { useState } from "react";
import { ArrowDownUp, Settings, TrendingUp, Info } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Modal } from "../../Components/Shared";

const dummyData = Array.from({length: 20}).map((_, i) => ({ value: 100 + Math.random() * 20 + (i*2) }));

const Trade = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="font-syne text-2xl font-bold text-[var(--text-primary)]">Swap</h1>
        <p className="text-xs text-[var(--text-secondary)] mt-1">High-speed, low-fee token exchange</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Market Data Side */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="glass-panel border border-[var(--border-light)] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#26A17B] border-2 border-[var(--bg-primary)] flex items-center justify-center text-[10px] font-bold text-white">USDT</div>
                <div className="w-8 h-8 rounded-full bg-[var(--primary)] border-2 border-[var(--bg-primary)] flex items-center justify-center text-[10px] font-bold text-black">NATX</div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">USDT / NATX</h3>
                <p className="text-[10px] text-[var(--primary)] flex items-center gap-1"><TrendingUp size={10} /> +4.2% (24h)</p>
              </div>
            </div>
            
            <div className="h-32 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dummyData}>
                  <Area type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} fill="var(--primary)" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[var(--bg-elevated)] p-2 rounded-lg border border-[var(--border-light)]">
                <p className="text-[9px] text-[var(--text-gray-500)]">24h Vol</p>
                <p className="text-xs font-bold text-[var(--text-primary)]">$1.2M</p>
              </div>
              <div className="bg-[var(--bg-elevated)] p-2 rounded-lg border border-[var(--border-light)]">
                <p className="text-[9px] text-[var(--text-gray-500)]">Liquidity</p>
                <p className="text-xs font-bold text-[var(--text-primary)]">$5.4M</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swap Module */}
        <div className="lg:col-span-2">
          <div className="max-w-md mx-auto glass-panel border border-[var(--border-light)] rounded-2xl p-5 relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <button className="text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-md">Swap</button>
                <button className="text-xs font-bold text-[var(--text-gray-500)] hover:text-[var(--text-primary)] px-3 py-1">Limit</button>
              </div>
              <button onClick={() => setIsSettingsOpen(true)} className="text-[var(--text-gray-500)] hover:text-[var(--text-primary)] transition-colors interactable"><Settings size={16} /></button>
            </div>

            {/* From */}
            <div className="bg-[var(--bg-elevated)] rounded-xl p-4 mb-1 border border-[var(--border-light)] focus-within:border-[var(--primary)]/50 transition-colors">
              <div className="flex justify-between mb-2">
                <p className="text-[10px] text-[var(--text-gray-500)]">You pay</p>
                <p className="text-[10px] text-[var(--text-gray-500)]">Balance: 2,450.00</p>
              </div>
              <div className="flex justify-between items-center">
                <input type="text" placeholder="0" className="bg-transparent text-2xl font-bold text-[var(--text-primary)] outline-none w-1/2" />
                <button className="flex items-center gap-2 bg-[var(--bg-card)] px-2.5 py-1.5 rounded-lg border border-[var(--border-light)] hover:bg-[var(--border-light)] transition-colors">
                  <span className="text-xs font-bold">USDT</span>
                </button>
              </div>
            </div>

            {/* Swap Button */}
            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-card)] border-[3px] border-[var(--bg-primary)] rounded-lg p-1.5 cursor-pointer hover:scale-110 hover:text-[var(--primary)] transition-all z-10 text-[var(--text-gray-500)]">
              <ArrowDownUp size={14} />
            </div>

            {/* To */}
            <div className="bg-[var(--bg-elevated)] rounded-xl p-4 mt-1 border border-[var(--border-light)] focus-within:border-[var(--primary)]/50 transition-colors">
              <div className="flex justify-between mb-2">
                <p className="text-[10px] text-[var(--text-gray-500)]">You receive</p>
                <p className="text-[10px] text-[var(--text-gray-500)]">Balance: 15,000</p>
              </div>
              <div className="flex justify-between items-center">
                <input type="text" placeholder="0" readOnly className="bg-transparent text-2xl font-bold text-[var(--text-primary)] outline-none w-1/2" />
                <button className="flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-1.5 rounded-lg border border-[var(--primary)]/30">
                  <span className="text-xs font-bold">NATX</span>
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="mt-4 p-3 rounded-xl border border-[var(--border-light)]/50 bg-[var(--bg-elevated)]/50 space-y-2">
              <div className="flex justify-between text-[10px]">
                <span className="text-[var(--text-gray-500)] flex items-center gap-1">Rate <Info size={10}/></span>
                <span className="text-[var(--text-primary)]">1 USDT = 12.4 NATX</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[var(--text-gray-500)]">Network Fee</span>
                <span className="text-[var(--text-primary)]">~$0.02 (0.0001 ETH)</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[var(--text-gray-500)]">Slippage Tolerance</span>
                <span className="text-[var(--primary)]">0.5%</span>
              </div>
            </div>

            <button className="w-full mt-4 rounded-xl bg-[var(--primary)] text-black font-bold py-3.5 text-sm transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,255,102,0.2)]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} title="Transaction Settings">
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase text-[var(--text-gray-500)] mb-3">Slippage Tolerance</label>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-light)] hover:border-[var(--primary)] text-xs text-[var(--text-primary)] transition-colors interactable">0.1%</button>
              <button className="flex-1 py-2 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)] text-xs text-[var(--primary)] font-bold transition-colors interactable">0.5%</button>
              <button className="flex-1 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-light)] hover:border-[var(--primary)] text-xs text-[var(--text-primary)] transition-colors interactable">1.0%</button>
              <div className="flex-1 flex items-center bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg px-2 focus-within:border-[var(--primary)]">
                <input type="number" placeholder="Custom" className="w-full bg-transparent text-xs text-[var(--text-primary)] outline-none" />
                <span className="text-[10px] text-[var(--text-gray-500)]">%</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase text-[var(--text-gray-500)] mb-3">Transaction Deadline</label>
            <div className="flex items-center gap-2">
              <input type="number" defaultValue="20" className="w-20 bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg p-2 text-xs text-[var(--text-primary)] outline-none focus:border-[var(--primary)]" />
              <span className="text-[10px] text-[var(--text-primary)]">minutes</span>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Trade;