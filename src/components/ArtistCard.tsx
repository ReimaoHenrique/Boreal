"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music } from "lucide-react";
import GlassCard from "@/components/GlassCard";

interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  bio: string;
  image?: string;
  featured?: boolean;
  index?: number;
  href?: string;
}

export default function ArtistCard({
  id,
  name,
  genre,
  bio,
  image,
  featured = false,
  index = 0,
  href,
}: ArtistCardProps) {
  const CardContent = () => (
    <GlassCard className="p-6 text-center cursor-pointer group" glow>
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <Music className="w-12 h-12 text-white" />
        )}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-glow-cyan group-hover:text-cyan-300 transition-colors">
        {name}
      </h3>
      <p className="text-purple-300 mb-2">{genre}</p>
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">{bio}</p>
      <div className="text-cyan-400 text-sm font-medium">Ver Perfil →</div>
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
