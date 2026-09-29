"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "bg-deep-bg/70 backdrop-blur-xl border-white/10 shadow-2xl shadow-blue-500/5 py-3.5 px-6"
            : "bg-transparent border-transparent py-5 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 text-2xl font-black tracking-tighter"
          >
            <span className="text-white transition-colors duration-300 group-hover:text-blue-400">
              TK
            </span>
            <span className="text-blue-500 group-hover:scale-150 transition-transform duration-300 inline-block">
              .
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-white/[0.03] backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors py-1 group"
                >
                  {link.name}
                  {/* Hover Underline Effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              ))}
            </div>

            {/* Hire Me CTA Button */}
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none rounded-lg bg-white/5 border border-white/10 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4 pt-4 border-t border-white/10"
              : "max-h-0 opacity-0 mt-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
