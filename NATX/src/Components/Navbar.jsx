import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains("light");
    setIsDark(!isLightMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="interactable relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-transparent text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ecosystem", path: "/dashboard" },
    { name: "Nodes", path: "/node-guide" },
    { name: "Governance", path: "/dashboard/governance" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "border-b border-[var(--border-light)] bg-[var(--bg-primary)]/80 backdrop-blur-xl shadow-lg py-3"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="interactable"
          >
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-6 rounded-full border border-[var(--border-light)] bg-[var(--bg-card)]/50 px-6 py-2.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-space text-[13px] font-semibold tracking-wide text-[var(--text-gray-400)] transition-colors duration-300 hover:text-[var(--primary)] uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <Button
              path="/login"
              text="Launch App"
              icon={<ArrowUpRight size={15} />}
            />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="interactable flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--border-light)] bg-[var(--bg-panel)] md:hidden transition-colors hover:border-[var(--primary)]"
          >
            <span
              className={`h-[2px] w-5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-[var(--bg-primary)]/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 py-24">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-syne text-[32px] font-bold text-[var(--text-secondary)] transition-all hover:text-[var(--primary)] hover:scale-105"
                style={{
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.4s ease ${0.1 + i * 0.05}s`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div
            className="mt-12 flex flex-col items-center gap-6"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: `all 0.4s ease 0.4s`,
            }}
          >
            <ThemeToggle />
            <Button
              path="/login"
              text="Launch App"
              icon={<ArrowUpRight size={15} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
