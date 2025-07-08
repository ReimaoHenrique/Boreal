import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ particleCount = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (6 + Math.random() * 4) + 's';
      
      container.appendChild(particle);
    }
  }, [particleCount]);
  
  return (
    <div 
      ref={containerRef}
      className="particles fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticleBackground;

