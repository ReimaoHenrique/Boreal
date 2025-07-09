"use client";

import { motion } from "framer-motion";
import { Music, Instagram, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import ParticleBackground from "@/components/ParticleBackground";

// Dados dos artistas
const artists = [
  {
    id: "dj-aurora",
    name: "DJ AURORA",
    realName: "Aurora Silva",
    genre: "Progressive House",
    bio: "Pioneira do Progressive House no Brasil, DJ Aurora é conhecida por suas transições suaves e atmosferas mágicas que transportam o público para dimensões sonoras únicas.",
    image: "/assets/artists/dj-aurora.jpg",
    instagram: "https://instagram.com/dj_aurora",
    youtube: "https://youtube.com/@djaurora",
    soundcloud: "https://soundcloud.com/dj-aurora",
    spotify: "https://open.spotify.com/artist/dj-aurora",
    featured: true,
  },
  {
    id: "neon-beats",
    name: "NEON BEATS",
    realName: "Carlos Neon",
    genre: "Techno",
    bio: "Mestre do Techno brasileiro, Neon Beats combina batidas pulsantes com elementos futuristas, criando uma experiência sonora imersiva e energética.",
    image: "/assets/artists/neon-beats.jpg",
    instagram: "https://instagram.com/neon_beats",
    youtube: "https://youtube.com/@neonbeats",
    soundcloud: "https://soundcloud.com/neon-beats",
    spotify: "https://open.spotify.com/artist/neon-beats",
    featured: true,
  },
  {
    id: "cyber-wave",
    name: "CYBER WAVE",
    realName: "Ana Cyber",
    genre: "Synthwave",
    bio: "A rainha do Synthwave nacional, Cyber Wave traz o melhor dos anos 80 com uma roupagem moderna, criando paisagens sonoras nostálgicas e futuristas.",
    image: "/assets/artists/cyber-wave.jpg",
    instagram: "https://instagram.com/cyber_wave",
    youtube: "https://youtube.com/@cyberwave",
    soundcloud: "https://soundcloud.com/cyber-wave",
    spotify: "https://open.spotify.com/artist/cyber-wave",
    featured: true,
  },
  {
    id: "electric-soul",
    name: "ELECTRIC SOUL",
    realName: "Pedro Electric",
    genre: "Deep House",
    bio: "Especialista em Deep House, Electric Soul mergulha nas profundezas da música eletrônica, criando grooves hipnóticos e atmosferas sensuais.",
    image: "/assets/artists/electric-soul.jpg",
    instagram: "https://instagram.com/electric_soul",
    youtube: "https://youtube.com/@electricsoul",
    soundcloud: "https://soundcloud.com/electric-soul",
    spotify: "https://open.spotify.com/artist/electric-soul",
    featured: false,
  },
  {
    id: "digital-dreams",
    name: "DIGITAL DREAMS",
    realName: "Maria Digital",
    genre: "Trance",
    bio: "Veterana do Trance brasileiro, Digital Dreams é conhecida por suas melodias épicas e builds emocionantes que elevam o espírito do público.",
    image: "/assets/artists/digital-dreams.jpg",
    instagram: "https://instagram.com/digital_dreams",
    youtube: "https://youtube.com/@digitaldreams",
    soundcloud: "https://soundcloud.com/digital-dreams",
    spotify: "https://open.spotify.com/artist/digital-dreams",
    featured: false,
  },
  {
    id: "bass-galaxy",
    name: "BASS GALAXY",
    realName: "Lucas Bass",
    genre: "Dubstep",
    bio: "O mestre do Dubstep nacional, Bass Galaxy explora os limites do som com drops devastadores e frequências que fazem o corpo vibrar.",
    image: "/assets/artists/bass-galaxy.jpg",
    instagram: "https://instagram.com/bass_galaxy",
    youtube: "https://youtube.com/@bassgalaxy",
    soundcloud: "https://soundcloud.com/bass-galaxy",
    spotify: "https://open.spotify.com/artist/bass-galaxy",
    featured: false,
  },
];

export default function ArtistasPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={20} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-blue font-advent">
              ARTISTAS
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-glow-purple font-advent">
              DA CASA
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-cyan-300 max-w-3xl mx-auto">
              Conheça os talentos que fazem do Boreal Club a experiência mais
              imersiva de música eletrônica do Brasil
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DESTAQUES
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists
              .filter((artist) => artist.featured)
              .map((artist, index) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/artistas/${artist.id}`}>
                    <GlassCard
                      className="p-6 text-center cursor-pointer group"
                      glow
                    >
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center overflow-hidden">
                        <Music className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-glow-cyan group-hover:text-cyan-300 transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-purple-300 mb-2">{artist.genre}</p>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                        {artist.bio}
                      </p>

                      <div className="flex justify-center space-x-3">
                        <a
                          href={artist.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href={artist.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                        <a
                          href={artist.soundcloud}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TODOS OS ARTISTAS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/artistas/${artist.id}`}>
                  <GlassCard className="p-6 text-center cursor-pointer group">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-glow-cyan group-hover:text-cyan-300 transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-purple-300 mb-2">{artist.genre}</p>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {artist.bio}
                    </p>

                    <div className="flex justify-center space-x-3">
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={artist.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                      <a
                        href={artist.soundcloud}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
