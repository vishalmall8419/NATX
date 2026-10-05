import React, { useState } from "react";
import {
  Bell,
  Search,
  Menu,
  Wallet,
  LogOut,
  ExternalLink,
  Settings,
} from "lucide-react";
import { Modal } from "../Shared";
import { Link } from "react-router-dom";

const DashNav = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-[var(--border-light)] bg-[#030303]/80 px-6 backdrop-blur-md">
      {/* Mobile Menu Button */}
      <button className="lg:hidden text-[var(--text-primary)] interactable">
        <Menu size={24} />
      </button>

      {/* Search */}
      <div className="hidden items-center lg:flex relative w-64">
        <Search
          size={16}
          className="absolute left-3 text-[var(--text-gray-500)]"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-full py-2 pl-10 pr-4 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsNotifOpen(true)}
          className="interactable relative rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary)]"></span>
        </button>

        <button
          onClick={() => setIsWalletOpen(true)}
          className="interactable flex items-center gap-3 rounded-full border border-[var(--border-light)] bg-[var(--bg-elevated)] p-1 pr-4 hover:border-[var(--primary)] transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-black">
            <Wallet size={14} />
          </div>
          <span className="font-space text-sm font-bold text-[var(--text-primary)]">
            0x8F...3A2
          </span>
        </button>
      </div>

      <Modal
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
        title="Notifications"
      >
        <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
          <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-light)] hover:border-[var(--primary)]/50 transition-colors">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-bold text-[var(--text-primary)]">
                Staking Reward Received
              </span>
              <span className="text-[10px] text-[var(--text-gray-500)]">
                2h ago
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)]">
              You received 12.5 NATX from your active delegation.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-light)] hover:border-[var(--primary)]/50 transition-colors">
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs font-bold text-[var(--text-primary)]">
                Proposal NIP-43 Passed
              </span>
              <span className="text-[10px] text-[var(--text-gray-500)]">
                1d ago
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)]">
              The proposal you voted on has reached quorum and passed.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
        title="Account"
      >
        <div className="flex flex-col items-center mb-6 ">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[var(--primary)] to-blue-500 p-1 mb-3">
            <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
              <Wallet size={24} className="text-white" />
            </div>
          </div>
          <span className="text-lg font-bold font-syne text-[var(--text-primary)]">
            0x8F...3A2
          </span>
          <span className="text-xs text-[var(--text-gray-500)] flex items-center gap-1 hover:text-[var(--primary)] cursor-pointer mt-1">
            View on Explorer <ExternalLink size={10} />
          </span>
        </div>

        <div className="space-y-2">
          <Link
            to="/dashboard/settings"
            onClick={() => setIsWalletOpen(false)}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-light)] hover:border-[var(--primary)] text-sm font-bold text-[var(--text-primary)] transition-colors interactable"
          >
            <Settings size={16} /> Account Settings
          </Link>
          <Link
            to="/"
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 hover:border-red-500 text-sm font-bold text-red-500 transition-colors interactable"
          >
            <LogOut size={16} /> Disconnect Wallet
          </Link>
        </div>
      </Modal>
    </header>
  );
};
export default DashNav;
