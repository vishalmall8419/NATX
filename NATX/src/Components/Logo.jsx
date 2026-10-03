const Logo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="relative flex h-8 w-8 items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] opacity-80" />
      <svg className="relative z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    </div>
    <span className="font-syne text-[20px] font-black tracking-tight text-[var(--text-primary)]">
      NAT<span className="text-gradient">X</span>
    </span>
  </div>
);

export default Logo;