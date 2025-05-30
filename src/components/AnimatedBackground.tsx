
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);
  const cometsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars - increased to 800 for maximum starfield effect with movement
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      for (let i = 0; i < 800; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
      }
    };

    // Create floating particles - increased to 80
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    // Create shooting stars - increased to 35 for more frequent shooting stars
    const createShootingStars = () => {
      const shootingStarsContainer = shootingStarsRef.current;
      if (!shootingStarsContainer) return;

      for (let i = 0; i < 35; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 8 + 's';
        shootingStar.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        shootingStarsContainer.appendChild(shootingStar);
      }
    };

    // Create deep space comets - new addition for streaking effects
    const createComets = () => {
      const cometsContainer = cometsRef.current;
      if (!cometsContainer) return;

      for (let i = 0; i < 20; i++) {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.left = Math.random() * 100 + '%';
        comet.style.top = Math.random() * 60 + '%';
        comet.style.animationDelay = Math.random() * 12 + 's';
        comet.style.animationDuration = (Math.random() * 4 + 3) + 's';
        cometsContainer.appendChild(comet);
      }
    };

    createStars();
    createParticles();
    createShootingStars();
    createComets();

    return () => {
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
      if (shootingStarsRef.current) shootingStarsRef.current.innerHTML = '';
      if (cometsRef.current) cometsRef.current.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div ref={starsRef} className="moving-stars" />
      <div ref={particlesRef} className="floating-particles" />
      <div ref={shootingStarsRef} className="shooting-stars-container" />
      <div ref={cometsRef} className="comets-container" />
      {/* Add subtle overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none z-0" />
    </>
  );
};

export default AnimatedBackground;
