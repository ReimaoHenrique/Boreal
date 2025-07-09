"use client";

import { motion } from "framer-motion";
import {
  Music,
  Instagram,
  Youtube,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Play,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ParticleBackground from "@/components/ParticleBackground";
import ShareButtons from "@/components/ShareButtons";

// Dados do DJ Aurora
const artist = {
  id: "dj-aurora",
  name: "DJ AURORA",
  realName: "Aurora Silva",
  genre: "Progressive House",
  bio: "Pioneira do Progressive House no Brasil, DJ Aurora é conhecida por suas transições suaves e atmosferas mágicas que transportam o público para dimensões sonoras únicas. Com mais de 10 anos de experiência, ela já se apresentou nos principais clubes e festivais do país, sempre levando sua marca registrada de melodias envolventes e grooves hipnóticos.",
  longBio: `Nascida em São Paulo, Aurora Silva descobriu sua paixão pela música eletrônica ainda na adolescência. Influenciada por artistas como Sasha, John Digweed e Hernan Cattaneo, ela desenvolveu um estilo único que combina a sofisticação do Progressive House com elementos da música brasileira.

Sua jornada profissional começou em 2013, quando começou a se apresentar em pequenos clubes da capital paulista. Rapidamente, seu talento foi reconhecido e ela passou a integrar as principais casas noturnas do Brasil.

Em 2018, lançou seu primeiro EP "Aurora Borealis", que recebeu críticas positivas da cena eletrônica nacional e internacional. Desde então, tem se dedicado tanto à produção quanto às apresentações ao vivo, sempre buscando inovar e surpreender seu público.

No Boreal Club, DJ Aurora é uma das principais atrações, responsável por criar atmosferas mágicas que transportam o público para dimensões sonoras únicas.`,
  image: "/assets/artists/dj-aurora.jpg",
  instagram: "https://instagram.com/dj_aurora",
  youtube: "https://youtube.com/@djaurora",
  soundcloud: "https://soundcloud.com/dj-aurora",
  spotify: "https://open.spotify.com/artist/dj-aurora",
  facebook: "https://facebook.com/dj.aurora",
  twitter: "https://twitter.com/dj_aurora",
  website: "https://dj-aurora.com",
  nextShow: {
    date: "15 de Agosto, 2025",
    time: "23:00 - 01:00",
    venue: "Paradise Beach Club",
    location: "Copacabana, Rio de Janeiro",
  },
  stats: {
    followers: "125K",
    shows: "500+",
    countries: "15",
    years: "12",
  },
  tracks: [
    {
      title: "Aurora Borealis",
      duration: "7:32",
      genre: "Progressive House",
      year: "2018",
    },
    {
      title: "Midnight Sun",
      duration: "8:15",
      genre: "Progressive House",
      year: "2020",
    },
    {
      title: "Northern Lights",
      duration: "6:48",
      genre: "Progressive House",
      year: "2022",
    },
    {
      title: "Polar Night",
      duration: "9:02",
      genre: "Progressive House",
      year: "2024",
    },
  ],
};

export default function DJAuroraPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={25} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow-blue font-advent">
                {artist.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-light mb-4 text-glow-purple font-advent">
                {artist.realName}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-cyan-300">
                {artist.genre}
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {artist.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-glow-cyan">
                    {artist.stats.followers}
                  </div>
                  <div className="text-sm text-gray-400">Seguidores</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-glow-purple">
                    {artist.stats.shows}
                  </div>
                  <div className="text-sm text-gray-400">Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-glow-cyan">
                    {artist.stats.countries}
                  </div>
                  <div className="text-sm text-gray-400">Países</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-glow-purple">
                    {artist.stats.years}
                  </div>
                  <div className="text-sm text-gray-400">Anos</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={artist.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href={artist.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a
                  href={artist.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Play className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <GlassCard className="p-8 text-center" glow>
                <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center overflow-hidden">
                  <Music className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-glow-cyan">
                  Próximo Show
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>{artist.nextShow.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-purple-400" />
                    <span>{artist.nextShow.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>{artist.nextShow.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{artist.nextShow.location}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HISTÓRIA
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <div className="prose prose-invert max-w-none">
                {artist.longBio.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-300 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PRINCIPAIS TRACKS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {artist.tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-glow-cyan">
                        {track.title}
                      </h3>
                      <p className="text-purple-300 mb-1">{track.genre}</p>
                      <p className="text-sm text-gray-400">{track.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-cyan-400">
                        {track.duration}
                      </div>
                      <button className="mt-2 p-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-glow-purple">
                Compartilhe o Talento
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ajude a divulgar o trabalho incrível da {artist.name}
              </p>
              <ShareButtons
                title={`${artist.name} - Boreal Club`}
                description={artist.bio}
                url={`https://borealclub.com/artistas/${artist.id}`}
                artistName={artist.name}
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
