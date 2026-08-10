"use client";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const containerRef = useRef(null);

  const socialIcons = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tanjimahsankayes?igsh=MTR3ZzBkMDFzZnk3cA==",
      icon: <FaInstagram size={25} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tanjimahsankayes12/",
      icon: <FaLinkedin size={25} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Tanjimahsankayes",
      icon: <FaGithub size={25} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/tanjimahsankayes12",
      icon: <FaFacebook size={25} />,
    },
  ];

  useGSAP(
    () => {
      // CTA Section Reveal
      gsap.from(".footer-cta", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-cta",
          start: "top 90%",
        },
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
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      className="relative bg-deep-bg pt-32 pb-12 px-6 lg:px-24 overflow-hidden border-t border-white/5"
    >
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
            <Link
              href="/"
              className="inline-block text-4xl font-black tracking-tighter hover:opacity-80 transition-opacity"
            >
              TK<span className="text-blue-500">.</span>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              Crafting premium digital experiences through clean code and
              thoughtful design. Based in Barguna, Bangladesh.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              {["About", "Education", "Projects", "Skills", "FAQ"].map(
                (link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-white transition-colors w-fit"
                  >
                    {link}
                  </Link>
                ),
              )}
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
            <button className="text-white/30 hover:text-white transition-colors text-sm font-medium">
              Privacy Policy
            </button>
            <button className="text-white/30 hover:text-white transition-colors text-sm font-medium">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
