import { User, Bell, Shield, Paintbrush } from "lucide-react";

const Settings = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-syne text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Settings</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--primary)]/30 text-[var(--primary)] font-bold text-sm">
            <User size={18} /> Profile
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] text-sm font-semibold transition-colors">
            <Shield size={18} /> Security
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] text-sm font-semibold transition-colors">
            <Bell size={18} /> Notifications
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] text-sm font-semibold transition-colors">
            <Paintbrush size={18} /> Appearance
          </button>
        </div>

        <div className="md:col-span-3 glass-panel border border-[var(--border-light)] rounded-2xl p-6 sm:p-8">
          <h2 className="font-syne text-xl font-bold text-[var(--text-primary)] mb-6">Profile Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-[var(--text-gray-500)] mb-2 uppercase">Display Name</label>
              <input type="text" defaultValue="NATX_User" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--primary)] transition-colors" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-[var(--text-gray-500)] mb-2 uppercase">Email Address</label>
              <input type="email" defaultValue="user@example.com" className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--primary)] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-gray-500)] mb-2 uppercase">Connected Wallet</label>
              <div className="flex items-center justify-between bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-xl px-4 py-3">
                <span className="text-[var(--text-secondary)] font-space">0x8F43...3A2B</span>
                <button className="text-xs font-bold text-red-500 hover:text-red-400">Disconnect</button>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-light)] flex justify-end">
              <button className="bg-[var(--primary)] text-black px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:scale-105 transition-transform">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;