
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Reduce animation count on mobile devices for better performance
    const starCount = isMobile ? 150 : 300;
    const particleCount = isMobile ? 15 : 30;
    const shootingStarCount = isMobile ? 8 : 15;

    // Create stars - optimized count based on device
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // Use document fragment for better performance
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // iOS performance optimization
        star.style.transform = 'translateZ(0)';
        star.style.backfaceVisibility = 'hidden';
        
        fragment.appendChild(star);
      }
      
      starsContainer.appendChild(fragment);
    };

    // Create floating particles - optimized count
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 3 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        
        // iOS performance optimization
        particle.style.transform = 'translateZ(0)';
        particle.style.backfaceVisibility = 'hidden';
        
        fragment.appendChild(particle);
      }
      
      particlesContainer.appendChild(fragment);
    };

    // Create shooting stars - optimized count
    const createShootingStars = () => {
      const shootingStarsContainer = shootingStarsRef.current;
      if (!shootingStarsContainer) return;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < shootingStarCount; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 10 + 's';
        shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // iOS performance optimization
        shootingStar.style.transform = 'translateZ(0)';
        shootingStar.style.backfaceVisibility = 'hidden';
        
        fragment.appendChild(shootingStar);
      }
      
      shootingStarsContainer.appendChild(fragment);
    };

    // Use requestAnimationFrame for smoother initialization
    requestAnimationFrame(() => {
      createStars();
      createParticles();
      createShootingStars();
    });

    return () => {
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
      if (shootingStarsRef.current) shootingStarsRef.current.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div 
        ref={starsRef} 
        className="moving-stars" 
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }} 
      />
      <div 
        ref={particlesRef} 
        className="floating-particles"
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }} 
      />
      <div 
        ref={shootingStarsRef} 
        className="shooting-stars-container"
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }} 
      />
    </>
  );
};

export default AnimatedBackground;
