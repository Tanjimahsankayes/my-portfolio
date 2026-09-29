"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProvider({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Modern Lenis (v1.x) uses native scroll under the hood,
    // so ScrollTrigger reads window.scrollY correctly without a proxy.
    // Just tell ScrollTrigger to refresh whenever Lenis scrolls.
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so both systems share the same RAF loop
    function raf(time) {
      lenis.raf(time * 1000); // GSAP ticker gives seconds, Lenis expects ms
    }

    gsap.ticker.add(raf);

    // Disable GSAP ticker lag smoothing for Lenis compatibility
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
