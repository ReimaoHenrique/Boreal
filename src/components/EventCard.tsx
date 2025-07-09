"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
interface EventCardProps {
  name: string;
  date: string;
  location: string;
  attendees: string;
  destaques: string;
  image?: string;
  index?: number;
  href?: string;
}

export default function EventCard({
  name,
  date,
  location,
  attendees,
  destaques,
  image,
  index = 0,
  href,
}: EventCardProps) {
  const CardContent = () => (
    <GlassCard className="p-6 text-center cursor-pointer group" glow>
      <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            width={400}
            height={300}
            priority={index < 2}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl">📅</span>
              <p className="text-lg text-gray-300">Evento Passado</p>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-3 text-glow-cyan group-hover:text-cyan-300 transition-colors">
        {name}
      </h3>

      <div className="space-y-2 text-sm text-gray-300 mb-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-purple-400">📅</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-cyan-400">📍</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-purple-400">👥</span>
          <span>{attendees} pessoas</span>
        </div>
      </div>

      <div className="text-xs text-gray-400 border-t border-white/10 pt-3">
        <p className="font-medium text-cyan-300 mb-1">Destaques:</p>
        <p>{destaques}</p>
      </div>
    </GlassCard>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {href ? (
        <Link href={href}>
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
}
