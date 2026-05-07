"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Banner = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial load animations
    tl.from(".banner-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    })
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.5")
    .from(".banner-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.8");

    // Scroll parallax for glows
    gsap.to(glow1Ref.current, {
      y: 200,
      x: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(glow2Ref.current, {
      y: -200,
      x: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Subtle floating animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  // Magnetic Button Effect (inline for now)
  const onMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const onMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-32 pb-20 overflow-hidden bg-deep-bg">
      {/* Background Glows */}
      <div ref={glow1Ref} className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div ref={glow2Ref} className="absolute bottom-1/4 -right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Content */}
      <div className="z-10 flex-1 text-center lg:text-left space-y-6">
        <h3 className="banner-text text-2xl lg:text-3xl font-medium text-white/80">
          Hi, I'm
        </h3>
        <h1 className="banner-text text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="gradient-text">Tanjim Ahsan Kayes</span>
        </h1>
        <p className="banner-text max-w-lg text-lg text-white/60 leading-relaxed mx-auto lg:mx-0">
          I build scalable full-stack applications using React, Node.js, Express and MongoDB. 
          I love clean code and fast UIs.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a 
            href="#projects"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="banner-btn px-8 py-4 bg-linear-to-r from-blue-500 to-red-500 text-white font-semibold rounded-full cursor-pointer shadow-lg shadow-blue-500/20 text-center"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="banner-btn px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2 group cursor-pointer text-center"
          >
            Let's Collaborate
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          </a>
        </div>
      </div>

      {/* Right Content - Profile & Orbit */}
      <div className="relative flex-1 flex items-center justify-center mt-20 lg:mt-0">
        {/* Glow behind image */}
        <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        
        {/* Profile Image Container */}
        <div ref={imageRef} className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full p-2 bg-linear-to-br from-blue-500/20 to-red-500/20 border border-white/10 overflow-hidden glow-shadow">
          <Image
            src="/images/about-profile.png"
            alt="Tanjim Ahsan Kayes"
            fill
            className="object-cover rounded-full p-4 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
