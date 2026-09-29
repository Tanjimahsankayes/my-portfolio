"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressBarRef = useRef(null);

  useGSAP(() => {
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  });

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] origin-left pointer-events-none">
      <div 
        ref={progressBarRef}
        className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-red-500 scale-x-0"
      />
    </div>
  );
};

export default ScrollProgress;

