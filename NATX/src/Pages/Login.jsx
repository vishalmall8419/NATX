import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wallet,
  Mail,
  Lock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import ParticlesBackground from "../Components/ParticlesBackground";
import Logo from "../Components/Logo";
import { Modal } from "../Components/Shared";

const Login = () => {
  const containerRef = useRef(null);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    // Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from(".login-fade-up", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-[var(--bg-primary)] overflow-hidden flex flex-col items-center justify-center font-space"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,255,102,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full ![background:radial-gradient(circle_at_center,rgba(0,153,61,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Top Navbar Area for Logo and Back button */}
      <div className="absolute top-0 w-full px-6 py-6 sm:px-12 sm:py-8 flex items-center justify-between z-20">
        <Logo />
        <Link
          to="/"
          className="interactable flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-[380px] px-6 sm:px-0">
        <div className="glass-panel relative rounded-2xl p-6 sm:p-8 border border-[var(--border-light)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Top glow border hack */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />

          <div className="flex flex-col items-center text-center mb-6 login-fade-up">
            <div className="h-10 w-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-light)] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
              <Sparkles className="text-[var(--primary)]" size={20} />
            </div>
            <h1 className="font-syne text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
              Welcome Back
            </h1>
            <p className="text-xs text-[var(--text-secondary)]">
              Enter the NATX ecosystem
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-3 mb-5">
            <div className="login-fade-up relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
                <Mail size={16} />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="interactable w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-gray-500)] outline-none transition-all focus:border-[var(--primary)] focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]"
              />
            </div>

            <div className="login-fade-up relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
                <Lock size={16} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="interactable w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-gray-500)] outline-none transition-all focus:border-[var(--primary)] focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]"
              />
            </div>

            <div className="login-fade-up flex justify-end mt-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsForgotOpen(true);
                }}
                className="interactable text-[11px] font-semibold text-[var(--primary)] hover:text-white transition-colors"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] text-white font-bold text-sm py-3 transition-all hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:scale-[1.02]"
          >
            Login
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <div className="login-fade-up relative flex items-center justify-center py-5">
            <div className="absolute w-full h-[1px] bg-[var(--border-light)]" />
            <span className="relative bg-[var(--bg-card)] px-3 text-[10px] uppercase text-[var(--text-gray-500)]">
              Or
            </span>
          </div>

          {/* Web3 Connect */}
          <Link
            to="/dashboard"
            className="login-fade-up interactable group flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-light)] bg-transparent py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary)] hover:bg-[var(--bg-elevated)]"
          >
            <Wallet
              size={16}
              className="text-[var(--text-gray-500)] group-hover:text-[var(--primary)] transition-colors"
            />
            Connect Wallet
          </Link>

          <div className="login-fade-up text-center mt-6">
            <p className="text-[11px] text-[var(--text-secondary)]">
              Don't have an account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignUpOpen(true);
                }}
                className="interactable font-bold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
        title="Reset Password"
      >
        <p className="text-xs text-[var(--text-gray-500)] mb-4">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
            <Mail size={16} />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
          />
        </div>
        <button
          onClick={() => setIsForgotOpen(false)}
          className="w-full rounded-lg bg-[var(--primary)] text-black font-bold text-sm py-3 hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,102,0.3)] interactable"
        >
          Send Reset Link
        </button>
      </Modal>

      <Modal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        title="Create Account"
      >
        <div className="space-y-4 mb-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
              <Mail size={16} />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
              <Lock size={16} />
            </div>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray-500)]">
              <Lock size={16} />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-[var(--bg-elevated)] border border-[var(--border-light)] rounded-lg py-2.5 pl-11 pr-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
        <button
          onClick={() => setIsSignUpOpen(false)}
          className="w-full rounded-lg bg-[var(--primary)] text-black font-bold text-sm py-3 hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,102,0.3)] interactable"
        >
          Sign Up
        </button>
      </Modal>
    </div>
  );
};

export default Login;
