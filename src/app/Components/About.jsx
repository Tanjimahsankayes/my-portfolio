"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const containerRef = useRef(null);

  const socialIcons = [
    { name: 'Instagram', href: 'https://instagram.com/tanjim.ahsan', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tanjim-ahsan-kayes', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
    { name: 'GitHub', href: 'https://github.com/tanjimahsankayes', icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> },
    { name: 'X', href: 'https://x.com/tanjim_ahsan', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
  ];

  const services = [
    { title: 'UI/UX Design', desc: 'Crafting visually stunning and user-friendly interfaces with a focus on modern aesthetics.' },
    { title: 'Responsive Development', desc: 'Building web applications that work seamlessly across all devices and screen sizes.' },
    { title: 'Clean Code Architecture', desc: 'Writing scalable, maintainable, and efficient code following industry best practices.' },
  ];

  useGSAP(() => {
    // Header reveal
    gsap.from(".about-header > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-header",
        start: "top 85%"
      }
    });

    // Profile card reveal
    gsap.from(".profile-card", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".profile-card",
        start: "top 80%"
      }
    });

    // Details reveal
    gsap.from(".about-details > *", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-details",
        start: "top 80%"
      }
    });

    // Service cards stagger
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: ".service-cards-container",
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="about-header text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold">About Me</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            I'm a dedicated MERN Frontend Developer focusing on creating high-quality web experiences.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Profile Card */}
          <div className="profile-card lg:col-span-4 flex flex-col items-center p-8 glass-card border-subtle">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 bg-blue-600/20 group">
              <Image
                src="/images/about-profile.png"
                alt="Profile image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
              <span className="text-xs font-medium text-white/80">Available for work</span>
            </div>

            <h3 className="text-3xl font-bold mb-2 text-center uppercase tracking-tighter">Tanjim Ahsan Kayes</h3>
            <p className="text-center text-white/60 text-sm mb-8 leading-relaxed">
              MERN Frontend Developer passionate about building interactive and responsive web apps.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-card border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>

            <a href="#contact" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-colors shadow-lg shadow-blue-600/20 text-center">
              Let's Connect
            </a>
          </div>

          {/* Right Column - Details */}
          <div className="about-details lg:col-span-8 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="p-10 glass-card border-subtle flex-1">
              <h4 className="text-2xl font-bold mb-6">Hi! I'm Tanjim Ahsan Kayes,</h4>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  a developer passionate about building meaningful digital experiences. As a MERN stack specialist, I focus on the frontend, ensuring every pixel is in place and every interaction feels natural.
                </p>
                <p>
                  I specialize in building responsive web applications using React and Tailwind CSS, while also understanding the full stack to ensure seamless integration with backend services. I am constantly learning and staying up-to-date with the latest industry trends.
                </p>
              </div>
            </div>

            {/* Services Grid (Replacement for Experience) */}
            <div className="service-cards-container grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="service-card p-8 glass-card border-subtle space-y-4 hover:border-blue-500/30 transition-colors group">
                  <h5 className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">{service.title}</h5>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Summary Card */}
            <div className="p-8 glass-card border-subtle flex items-center justify-between">
              <span className="text-xl font-bold">Key Technologies:</span>
              <div className="flex gap-3">
                {['React', 'Next.js', 'Node', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/70 hover:text-blue-400 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;