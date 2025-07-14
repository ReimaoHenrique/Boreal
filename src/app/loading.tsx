"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

export default function Loading() {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex items-center justify-center">
      <ParticleBackground particleCount={15} />

      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-glow-cyan mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
        >
          BOREAL
        </motion.div>

        <motion.div
          className="flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.6 }}
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  );
}
