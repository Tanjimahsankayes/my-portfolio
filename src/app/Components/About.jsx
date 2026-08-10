"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
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

  const services = [
    {
      title: "UI/UX Design",
      desc: "Crafting visually stunning and user-friendly interfaces with a focus on modern aesthetics.",
    },
    {
      title: "Responsive Development",
      desc: "Building web applications that work seamlessly across all devices and screen sizes.",
    },
    {
      title: "Clean Code Architecture",
      desc: "Writing scalable, maintainable, and efficient code following industry best practices.",
    },
  ];

  useGSAP(
    () => {
      // Header reveal
      gsap.from(".about-header > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
        },
      });

      // Profile card reveal
      gsap.from(".profile-card", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".profile-card",
          start: "top 80%",
        },
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
          start: "top 80%",
        },
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
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="about-header text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold">About Me</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            I'm a dedicated MERN Frontend Developer focusing on creating
            high-quality web experiences.
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
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
              <span className="text-xs font-medium text-white/80">
                Available for work
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2 text-center uppercase tracking-tighter">
              Tanjim Ahsan Kayes
            </h3>
            <p className="text-center text-white/60 text-sm mb-8 leading-relaxed">
              MERN Frontend Developer passionate about building interactive and
              responsive web apps.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass-card border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-colors shadow-lg shadow-blue-600/20 text-center"
            >
              Let's Connect
            </a>
          </div>

          {/* Right Column - Details */}
          <div className="about-details lg:col-span-8 flex flex-col gap-6">
            {/* Bio Card */}
            <div className="p-10 glass-card border-subtle flex-1">
              <h4 className="text-2xl font-bold mb-6">
                Hi! I'm Tanjim Ahsan Kayes,
              </h4>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  a developer passionate about building meaningful digital
                  experiences. As a MERN stack specialist, I focus on the
                  frontend, ensuring every pixel is in place and every
                  interaction feels natural.
                </p>
                <p>
                  I specialize in building responsive web applications using
                  React and Tailwind CSS, while also understanding the full
                  stack to ensure seamless integration with backend services. I
                  am constantly learning and staying up-to-date with the latest
                  industry trends.
                </p>
              </div>
            </div>

            {/* Services Grid (Replacement for Experience) */}
            <div className="service-cards-container grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card p-8 glass-card border-subtle space-y-4 hover:border-blue-500/30 transition-colors group"
                >
                  <h5 className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h5>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Summary Card */}
            <div className="p-8 glass-card border-subtle flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <span className="text-xl font-bold">Key Technologies:</span>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {["React", "Next.js", "Node", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 lg:px-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/70 hover:text-blue-400 transition-colors"
                  >
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
