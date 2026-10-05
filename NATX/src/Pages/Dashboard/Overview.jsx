import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Wallet,
  Clock,
  ExternalLink,
  QrCode,
  Copy
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StatCard, ActivityItem } from "../../Components/Dashboard/Shared";
import { Modal } from "../../Components/Shared";

const data = [
  { name: "Mon", value: 20000 },
  { name: "Tue", value: 21500 },
  { name: "Wed", value: 20800 },
  { name: "Thu", value: 23400 },
  { name: "Fri", value: 23100 },
  { name: "Sat", value: 25800 },
  { name: "Sun", value: 24532 },
];

const Overview = () => {
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [isSendOpen, setIsSendOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-[var(--text-primary)]">
            Overview
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Your NATX portfolio summary
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsReceiveOpen(true)}
            className="rounded-lg border border-[var(--border-light)] bg-[var(--bg-elevated)] px-4 py-2 text-xs font-bold text-[var(--text-primary)] hover:border-[var(--primary)] transition-all interactable"
          >
            Receive
          </button>
          <button 
            onClick={() => setIsSendOpen(true)}
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-xs font-bold text-black shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:scale-105 transition-all interactable"
          >
            Send Funds
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total Balance"
          value="$24,532.89"
          change="+12.5%"
          isUp={true}
          icon={<Wallet size={16} />}
          extra="≈ 154,200 NATX"
        />
        <StatCard
          title="24h Trading Volume"
          value="$1,234.50"
          change="-2.4%"
          isUp={false}
          icon={<Activity size={16} />}
          extra="64 Trades"
        />
        <StatCard
          title="Staked NATX"
          value="15,000.00"
          change="+5.0%"
          isUp={true}
          icon={<ArrowUpRight size={16} />}
          extra="Tier: Gold"
        />
        <StatCard
          title="Rewards Earned"
          value="342.50"
          change="+8.2%"
          isUp={true}
          icon={<ArrowDownRight size={16} />}
          extra="Unclaimed: 12.4"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-panel border border-[var(--border-light)] rounded-xl p-5 h-80 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-syne text-sm font-bold text-[var(--text-primary)]">
              Portfolio Performance
            </h2>
            <div className="flex gap-2 bg-[var(--bg-elevated)] p-1 rounded-lg border border-[var(--border-light)]">
              {["1D", "1W", "1M", "1Y"].map((t) => (
                <button
                  key={t}
                  className={`text-[10px] px-2 py-1 rounded ${t === "1W" ? "bg-[var(--primary)] text-black font-bold" : "text-[var(--text-gray-500)]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--primary)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--primary)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-elevated)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "var(--primary)", fontWeight: "bold" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel border border-[var(--border-light)] rounded-xl p-5 h-80 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-syne text-sm font-bold text-[var(--text-primary)]">
              Recent Activity
            </h2>
            <button className="text-[10px] text-[var(--primary)] hover:underline">
              View All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
            <ActivityItem type="Receive" amount="+500 NATX" time="2m ago" status="Completed" hash="0x8f...3c" />
            <ActivityItem type="Swap" amount="1.2 ETH" time="5h ago" status="Completed" hash="0x1a...9b" />
            <ActivityItem type="Send" amount="-120 NATX" time="1d ago" status="Pending" hash="0x4d...2a" />
            <ActivityItem type="Stake" amount="1000 NATX" time="2d ago" status="Completed" hash="0x99...1f" />
            <ActivityItem type="Claim" amount="+45 NATX" time="3d ago" status="Completed" hash="0x7b...8e" />
          </div>
        </div>
      </div>

      {/* Receive Modal */}
      <Modal isOpen={isReceiveOpen} onClose={() => setIsReceiveOpen(false)} title="Receive Funds">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-xl mb-4">
            <QrCode size={120} className="text-black" />
          </div>
          <p className="text-[10px] text-[var(--text-gray-500)] mb-2 uppercase tracking-widest font-bold">Your Wallet Address</p>
          <div className="flex w-full items-center justify-between bg-[var(--bg-elevated)] border border-[var(--border-light)] p-3 rounded-lg mb-6">
            <span className="text-xs font-mono text-[var(--text-primary)] truncate mr-2">0x8f9c1...3a2b4c5d6e7f8</span>
            <button className="text-[var(--primary)] hover:text-white transition-colors">
              <Copy size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-red-400 mb-4">Warning: Send only NATX tokens to this address. Other tokens will be lost.</p>
          <button onClick={() => setIsReceiveOpen(false)} className="w-full py-3 rounded-lg border border-[var(--border-light)] hover:bg-[var(--bg-elevated)] transition-colors text-sm font-bold text-[var(--text-primary)]">Close</button>
        </div>
      </Modal>

      {/* Send Modal */}
      <Modal isOpen={isSendOpen} onClose={() => setIsSendOpen(false)} title="Send Funds">
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-[var(--text-gray-500)] mb-1">Recipient Address</label>
            <input type="text" placeholder="0x..." className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg p-3 text-xs text-[var(--text-primary)] focus:border-[var(--primary)] outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase text-[var(--text-gray-500)] mb-1">Amount (NATX)</label>
            <div className="relative">
              <input type="number" placeholder="0.00" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg p-3 text-xs text-[var(--text-primary)] focus:border-[var(--primary)] outline-none" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded">MAX</button>
            </div>
            <p className="text-[10px] text-[var(--text-gray-500)] mt-1 text-right">Balance: 154,200 NATX</p>
          </div>
          <button className="w-full py-3 mt-4 rounded-lg bg-[var(--primary)] text-black font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,102,0.3)]">
            Confirm Send
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default Overview;
