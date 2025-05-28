
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars - increased from 100 to 300
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }
    };

    // Create floating particles - increased from 20 to 40
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      for (let i = 0; i < 40; i++) {
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

    // Create shooting stars - increased from 8 to 15
    const createShootingStars = () => {
      const shootingStarsContainer = shootingStarsRef.current;
      if (!shootingStarsContainer) return;

      for (let i = 0; i < 15; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 10 + 's';
        shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
        shootingStarsContainer.appendChild(shootingStar);
      }
    };

    createStars();
    createParticles();
    createShootingStars();

    return () => {
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
      if (shootingStarsRef.current) shootingStarsRef.current.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div ref={starsRef} className="moving-stars" />
      <div ref={particlesRef} className="floating-particles" />
      <div ref={shootingStarsRef} className="shooting-stars-container" />
    </>
  );
};

export default AnimatedBackground;
