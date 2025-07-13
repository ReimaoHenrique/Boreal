"use client";

import { motion } from "framer-motion";
import VinylRecord from "@/components/VinylRecord";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  artist?: string;
}

interface EventTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function EventTimeline({
  items,
  className = "",
}: EventTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      {/* Vinyl Record decorativo no topo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute -top-12 -right-8 md:right-8 right-2"
      >
        <VinylRecord size={40} speed={2} opacity={0.8} />
      </motion.div>

      <div className="relative">
        {/* Linha central da timeline */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500" />

        {/* Items da timeline */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Círculo da timeline */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Conteúdo */}
              <div className="ml-6 flex-1">
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-glow-cyan font-advent">
                      {item.time}
                    </span>
                    {item.artist && (
                      <span className="text-sm text-purple-400 font-medium">
                        {item.artist}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-advent">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Vinyl Record decorativo para alguns items */}
              {index % 2 === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -right-8 md:-right-8 -right-2 top-1/2 transform -translate-y-1/2"
                >
                  <VinylRecord size={30} speed={1.5} opacity={0.8} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Vinyl Record decorativo no final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 -left-8 md:-left-8 -left-2"
        >
          <VinylRecord size={50} speed={1} opacity={0.8} />
        </motion.div>
      </div>
    </motion.div>
  );
}
