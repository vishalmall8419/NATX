import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import Button from "./Button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme from localStorage or document
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
      className="interactable relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-panel)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_15px_rgba(0,214,163,0.3)]"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ================= SCROLL HANDLER ================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background after scrolling
      if (currentScrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar while scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  /* ================= CLOSE MOBILE MENU ================= */

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* ================= NAVIGATION LINKS ================= */

  const navLinks = [
    {
      name: "Docs",
      path: "/docs",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Miner",
      path: "/miner",
    },
    {
      name: "Keynotes",
      path: "/keynotes",
    },
  ];

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-[100]
        w-full
        transition-all
        duration-300
        ease-in-out

        ${isVisible ? "translate-y-0" : "-translate-y-full"}

        ${
          scrolled
            ? `
              border-b
              border-[var(--nav-border)]
              bg-[var(--bg-primary)]/80
              py-2
              shadow-lg
              backdrop-blur-md
            `
            : `
              border-b
              border-transparent
              bg-transparent
              py-4
            `
        }
      `}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          h-14
          max-w-7xl
          items-center
          justify-between
          px-5
          md:px-8
        "
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={closeMenu}
          className="
            font-tanker
            text-xl
            tracking-wide
            text-[var(--text-primary)]
            transition-colors
            duration-300
            hover:text-[var(--primary)]
          "
        >
          <Logo />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center md:flex">
          {navLinks.map((link, index) => (
            <div key={link.path} className="flex items-center">
              {/* Navigation Link */}

              <Link
                to={link.path}
                className="
                  px-4
                  text-sm
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                  hover:text-[var(--primary)]
                "
              >
                {link.name}
              </Link>

              {/* Separator */}

              {index < navLinks.length - 1 && (
                <span
                  className="
                    h-px
                    w-6
                    bg-[var(--border-light)]
                  "
                />
              )}
            </div>
          ))}
        </div>

        {/* =================================================
            DESKTOP BUY NOW
        ================================================= */}

        
          <div className="hidden md:flex items-center gap-4"><ThemeToggle /><Button path="/buy" text="BUY NOW" icon={<ArrowUpRight size={15} />} /></div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            rounded-md
            p-2
            text-[var(--text-primary)]
            transition-colors
            duration-300
            hover:bg-[var(--bg-card)]
            hover:text-[var(--primary)]
            md:hidden
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          border-t
          border-[var(--nav-border)]
          bg-[var(--bg-secondary)]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:hidden

          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-6 py-5">
          {/* =================================================
              MOBILE NAVIGATION LINKS
          ================================================= */}

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="
                border-b
                border-[var(--border)]
                py-4
                text-sm
                text-[var(--text-secondary)]
                transition-colors
                duration-300
                hover:text-[var(--primary)]
              "
            >
              {link.name}
            </Link>
          ))}

          {/* =================================================
              MOBILE BUY NOW
          ================================================= */}

          <div className="mt-5 flex items-center justify-between">
            <ThemeToggle />
            <Button
              path="/buy"
            text="BUY NOW"
            icon={<ArrowUpRight size={15} />}
            onClick={closeMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


















