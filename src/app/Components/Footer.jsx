"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {
  const containerRef = useRef(null);

  const socialIcons = [
    { name: 'Instagram', href: 'https://instagram.com/tanjim.ahsan', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tanjim-ahsan-kayes', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
    { name: 'GitHub', href: 'https://github.com/tanjimahsankayes', icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> },
    { name: 'X', href: 'https://x.com/tanjim_ahsan', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
  ];

  useGSAP(() => {
    // CTA Section Reveal
    gsap.from(".footer-cta", {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".footer-cta",
        start: "top 90%"
      }
    });

    // Main Content Groups
    gsap.from(".footer-content > div", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative bg-deep-bg pt-32 pb-12 px-6 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Call to Action Section */}
        <div className="footer-cta mb-24 p-12 glass-card border-subtle relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to bring your <br />
                <span className="gradient-text">ideas to life?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Let's collaborate and build something extraordinary together.
              </p>
            </div>
            <Link 
              href="#contact" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 whitespace-nowrap"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block text-4xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              TK<span className="text-blue-500">.</span>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              Crafting premium digital experiences through clean code and thoughtful design. 
              Based in Barguna, Bangladesh.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl glass-card border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-xl">Explore</h4>
            <div className="flex flex-col gap-4">
              {['About', 'Education', 'Projects', 'Skills', 'FAQ'].map((link) => (
                <Link 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-white/40 hover:text-white transition-colors w-fit"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-xl">Contact</h4>
            <div className="space-y-4">
              <a 
                href="mailto:tanjimahsankayes@gmail.com" 
                className="block text-white/40 hover:text-blue-400 transition-colors text-lg"
              >
                tanjimahsankayes@gmail.com
              </a>
              <p className="text-white/40 text-lg">
                Available for freelance projects worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} Tanjim Ahsan Kayes. Built with Passion.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-white/30 hover:text-white transition-colors text-sm font-medium">Privacy Policy</button>
            <button className="text-white/30 hover:text-white transition-colors text-sm font-medium">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;