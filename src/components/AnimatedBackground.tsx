
import React, { useEffect, useRef, useCallback } from 'react';

const AnimatedBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);
  const cometsRef = useRef<HTMLDivElement>(null);

  // Optimized element creation with reduced counts for better performance
  const createStars = useCallback(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;

    const fragment = document.createDocumentFragment();
    
    // Reduced from 800 to 400 for better performance
    for (let i = 0; i < 400; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${Math.random() * 2 + 2}s;
        will-change: transform, opacity;
      `;
      star.style.height = star.style.width;
      fragment.appendChild(star);
    }
    
    starsContainer.appendChild(fragment);
  }, []);

  // Optimized particles with reduced count
  const createParticles = useCallback(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const fragment = document.createDocumentFragment();
    
    // Reduced from 80 to 40 for better performance
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${Math.random() * 20}s;
        animation-duration: ${Math.random() * 10 + 15}s;
        will-change: transform, opacity;
      `;
      fragment.appendChild(particle);
    }
    
    particlesContainer.appendChild(fragment);
  }, []);

  // Optimized shooting stars with reduced count
  const createShootingStars = useCallback(() => {
    const shootingStarsContainer = shootingStarsRef.current;
    if (!shootingStarsContainer) return;

    const fragment = document.createDocumentFragment();
    
    // Reduced from 35 to 20 for better performance
    for (let i = 0; i < 20; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 50}%;
        animation-delay: ${Math.random() * 8}s;
        animation-duration: ${Math.random() * 2 + 1.5}s;
        will-change: transform, opacity;
      `;
      fragment.appendChild(shootingStar);
    }
    
    shootingStarsContainer.appendChild(fragment);
  }, []);

  // Optimized comets with reduced count
  const createComets = useCallback(() => {
    const cometsContainer = cometsRef.current;
    if (!cometsContainer) return;

    const fragment = document.createDocumentFragment();
    
    // Reduced from 20 to 12 for better performance
    for (let i = 0; i < 12; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 60}%;
        animation-delay: ${Math.random() * 12}s;
        animation-duration: ${Math.random() * 4 + 3}s;
        will-change: transform, opacity;
      `;
      fragment.appendChild(comet);
    }
    
    cometsContainer.appendChild(fragment);
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame for smoother initialization
    requestAnimationFrame(() => {
      createStars();
      createParticles();
      createShootingStars();
      createComets();
    });

    return () => {
      // Optimized cleanup
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
      if (shootingStarsRef.current) shootingStarsRef.current.innerHTML = '';
      if (cometsRef.current) cometsRef.current.innerHTML = '';
    };
  }, [createStars, createParticles, createShootingStars, createComets]);

  return (
    <>
      <div ref={starsRef} className="moving-stars" />
      <div ref={particlesRef} className="floating-particles" />
      <div ref={shootingStarsRef} className="shooting-stars-container" />
      <div ref={cometsRef} className="comets-container" />
      {/* Optimized overlay with better performance */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none z-0 will-change-auto" />
    </>
  );
};

export default React.memo(AnimatedBackground);
