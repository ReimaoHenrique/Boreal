import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`aurora-bg relative ${className}`}>
      {/* Aurora waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(74, 127, 218, 0.2) 50%, transparent 70%)',
        }}
        animate={{
          x: ['-100%', '100%'],
          y: ['-100%', '100%'],
          rotate: [0, 180]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(-45deg, transparent 30%, rgba(170, 74, 254, 0.2) 50%, transparent 70%)',
        }}
        animate={{
          x: ['100%', '-100%'],
          y: ['100%', '-100%'],
          rotate: [180, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {children}
    </div>
  );
};

export default AuroraBackground;

