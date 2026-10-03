import { Link } from "react-router-dom";

const Button = ({ path, text, icon, className, onClick }) => {
  return (
    <Link
      to={path}
      className={"group relative flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--grad-cyan-start)] to-[var(--grad-cyan-end)] px-7 py-3 font-space text-[14px] font-bold uppercase tracking-wider text-[var(--button-text)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] " + (className || "")}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      </span>
      <div className="absolute inset-0 z-0 rounded-full bg-[var(--primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
};

export default Button;

