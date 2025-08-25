
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Defer animation creation for better initial load performance
    const initAnimations = () => {
      requestAnimationFrame(() => {
        // Stagger animation creation to avoid blocking
        setTimeout(createStars, 0);
        setTimeout(createParticles, 100);
        setTimeout(createShootingStars, 200);
        setTimeout(createMatrixCode, 300);
      });
    };

    // Create stars - optimized for performance
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 3 + 3) + 's';
        starsContainer.appendChild(star);
      }
    };

    // Create floating particles - optimized
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 3 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    // Create shooting stars - optimized
    const createShootingStars = () => {
      const shootingStarsContainer = shootingStarsRef.current;
      if (!shootingStarsContainer) return;

      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 10 + 's';
        shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
        shootingStarsContainer.appendChild(shootingStar);
      }
    };

    // Create optimized Matrix-style falling code
    const createMatrixCode = () => {
      const matrixContainer = matrixRef.current;
      if (!matrixContainer) return;

      // Matrix characters for the code rain
      const matrixChars = '01ABCXYZ';  // Simplified character set for performance
      const isMobile = window.innerWidth < 768;
      const columnWidth = isMobile ? 25 : 30;
      const columns = Math.min(Math.floor(window.innerWidth / columnWidth), isMobile ? 15 : 25); // Reduced columns

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * columnWidth + 'px';
        column.style.animationDelay = Math.random() * 8 + 's';
        column.style.animationDuration = (Math.random() * 2 + 6) + 's';

        // Reduced characters per column for performance
        const charCount = isMobile ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
        for (let j = 0; j < charCount; j++) {
          const char = document.createElement('span');
          char.className = 'matrix-char';
          char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          char.style.opacity = (Math.random() * 0.6 + 0.2) + '';
          column.appendChild(char);
        }

        matrixContainer.appendChild(column);
      }
    };

    // Debounced resize handler for Matrix columns
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (matrixRef.current) {
          matrixRef.current.innerHTML = '';
          createMatrixCode();
        }
      }, 250);
    };

    initAnimations();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
      if (shootingStarsRef.current) shootingStarsRef.current.innerHTML = '';
      if (matrixRef.current) matrixRef.current.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div ref={starsRef} className="moving-stars" />
      <div ref={particlesRef} className="floating-particles" />
      <div ref={shootingStarsRef} className="shooting-stars-container" />
      <div ref={matrixRef} className="matrix-background" />
    </>
  );
};

export default AnimatedBackground;
