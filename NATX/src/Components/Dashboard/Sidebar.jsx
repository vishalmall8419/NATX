import { LayoutDashboard, ArrowRightLeft, Coins, Landmark, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Overview", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { name: "Trade", icon: <ArrowRightLeft size={18} />, path: "/dashboard/trade" },
    { name: "Staking", icon: <Coins size={18} />, path: "/dashboard/staking" },
    { name: "Governance", icon: <Landmark size={18} />, path: "/dashboard/governance" },
    { name: "Settings", icon: <Settings size={18} />, path: "/dashboard/settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-[var(--border-light)] bg-[#030303] lg:flex">
      <div className="flex h-20 items-center px-8 border-b border-[var(--border-light)]">
        <Logo />
      </div>
      
      <div className="flex flex-1 flex-col justify-between px-4 py-6">
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const active = currentPath === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`interactable flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  active 
                  ? "bg-[var(--primary)] text-black shadow-[0_0_15px_rgba(0,255,102,0.2)]" 
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link to="/" className="interactable flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-gray-500)] transition-all hover:bg-red-500/10 hover:text-red-500">
          <LogOut size={18} />
          Disconnect
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;