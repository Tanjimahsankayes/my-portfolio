"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'none',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500/50 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
};

export default MouseFollower;
