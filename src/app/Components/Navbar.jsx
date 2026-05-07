"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-deep-bg/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity"
        >
          TK<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-deep-bg/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] py-8' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="w-full text-center py-4 bg-blue-600 text-white font-bold rounded-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
