'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassButton from '@/components/GlassButton';
import GlassCard from '@/components/GlassCard';
import ParticleBackground from '@/components/ParticleBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex items-center justify-center">
      <ParticleBackground particleCount={20} />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <GlassCard className="p-12 max-w-md mx-auto">
            <motion.h1 
              className="text-8xl font-bold mb-6 text-glow-purple"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            <h2 className="text-3xl font-bold mb-4 text-glow-cyan">
              Página Não Encontrada
            </h2>
            
            <p className="text-gray-300 mb-8">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
            
            <Link href="/">
              <GlassButton variant="accent" size="lg" glow>
                Voltar ao Início
              </GlassButton>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

