"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiCode, FiLayout, FiZap } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  "use no memo";
  const containerRef = useRef(null);

  const socialIcons = [
    {
      name: "GitHub",
      href: "https://github.com/Tanjimahsankayes",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tanjimahsankayes12/",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/tanjimahsankayes12",
      icon: <FaFacebook size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tanjimahsankayes?igsh=MTR3ZzBkMDFzZnk3cA==",
      icon: <FaInstagram size={20} />,
    },
  ];

  const services = [
    {
      title: "Frontend Architecture",
      desc: "Building highly responsive, fast, and accessible web apps using Next.js & React.",
      icon: <FiLayout size={24} />,
    },
    {
      title: "Clean Code & Performance",
      desc: "Writing modular, maintainable, and scalable code following industry best practices.",
      icon: <FiCode size={24} />,
    },
    {
      title: "Full-Stack Integration",
      desc: "Connecting smooth frontend UIs with Express, MongoDB, and secure authentication.",
      icon: <FiZap size={24} />,
    },
  ];

  useGSAP(
    () => {
      // safe scoped selectors
      const header = containerRef.current?.querySelector(".about-header");
      const bentoItems =
        containerRef.current?.querySelectorAll(".about-bento-item");

      if (header) {
        gsap.fromTo(
          header,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 90%", // Trigger slightly earlier for safety
              once: true,
            },
          },
        );
      }

      if (bentoItems && bentoItems.length > 0) {
        gsap.fromTo(
          bentoItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-grid",
              start: "top 85%", // Safe offset
              once: true,
            },
          },
        );
      }

      // ScrollTrigger refresh to ensure proper positions on initial render
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16 space-y-3">
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Get To Know Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Bento-style Grid Layout */}
        <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <div className="about-bento-item lg:col-span-8 p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-xs font-medium text-blue-400">
                  MERN Frontend Developer
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Crafting modern, user-centric digital experiences with
                precision.
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed text-base lg:text-lg">
                <p>
                  Hi! I'm{" "}
                  <strong className="text-white">Tanjim Ahsan Kayes</strong>. I
                  specialize in building responsive, scalable, and visually
                  appealing web applications. With a strong foundation in{" "}
                  <strong className="text-blue-400">React.js</strong> and{" "}
                  <strong className="text-blue-400">Next.js</strong>, I bring
                  ideas to life through high-quality code and modern aesthetics.
                </p>
                <p>
                  I focus heavily on clean architecture, pixel-perfect UI
                  designs, and smooth full-stack integration with Node.js,
                  Express, and MongoDB.
                </p>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                Connect With Me
              </span>
              <div className="flex items-center gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Side Card - Status & CTA */}
          <div className="about-bento-item lg:col-span-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <div>
                  <p className="text-xs text-green-400 font-semibold uppercase tracking-wider">
                    Status
                  </p>
                  <p className="text-sm font-medium text-white/90">
                    Available for Work / Hire
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Let's Build Something Great Together
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Have a project in mind or looking for a skilled frontend
                  developer to join your team?
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group"
            >
              <span>Get In Touch</span>
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Service Cards Row */}
          {services.map((service, index) => (
            <div
              key={index}
              className="about-bento-item lg:col-span-4 p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
