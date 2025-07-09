"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Music,
  Instagram,
  Facebook,
  Twitter,
  Play,
  Heart,
  Share2,
  Clock,
  Star,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import ShareButtons from "@/components/ShareButtons";

// Dados do evento Paradise Edition
const event = {
  name: "BOREAL CLUB - PARADISE EDITION",
  date: "15 de Agosto, 2025",
  time: "19:00 - 07:00",
  venue: "Paradise Beach Club",
  location: "Copacabana, Rio de Janeiro",
  attendees: "3.500+",
  capacity: "4.000",
  status: "Próximo Evento",
  description:
    "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar.",
  highlights: [
    "6 DJs de renome nacional",
    "Sistema de som de última geração",
    "Show de luzes e lasers",
    "Área VIP exclusiva",
    "Welcome drink premium",
    "Meet & Greet com os artistas",
  ],
  lineup: [
    {
      name: "DJ AURORA",
      genre: "Progressive House",
      time: "23:00 - 01:00",
      image: "/assets/artists/dj-aurora.jpg",
    },
    {
      name: "NEON BEATS",
      genre: "Techno",
      time: "01:00 - 03:00",
      image: "/assets/artists/neon-beats.jpg",
    },
    {
      name: "CYBER WAVE",
      genre: "Synthwave",
      time: "03:00 - 05:00",
      image: "/assets/artists/cyber-wave.jpg",
    },
    {
      name: "ELECTRIC SOUL",
      genre: "Deep House",
      time: "21:00 - 23:00",
      image: "/assets/artists/electric-soul.jpg",
    },
    {
      name: "DIGITAL DREAMS",
      genre: "Trance",
      time: "19:00 - 21:00",
      image: "/assets/artists/digital-dreams.jpg",
    },
    {
      name: "BASS GALAXY",
      genre: "Dubstep",
      time: "05:00 - 07:00",
      image: "/assets/artists/bass-galaxy.jpg",
    },
  ],
  gallery: [
    "/assets/events/paradise-1.jpg",
    "/assets/events/paradise-2.jpg",
    "/assets/events/paradise-3.jpg",
    "/assets/events/paradise-4.jpg",
    "/assets/events/paradise-5.jpg",
    "/assets/events/paradise-6.jpg",
  ],
  stats: {
    ticketsSold: "2.800",
    daysLeft: "45",
    price: "R$ 150",
    originalPrice: "R$ 200",
  },
};

export default function ParadiseEditionPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={30} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-4">
                PRÓXIMO EVENTO
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-glow-blue font-advent">
              PARADISE
            </h1>
            <h2 className="text-3xl md:text-6xl font-light mb-8 text-glow-purple font-advent">
              EDITION
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-cyan-300 max-w-4xl mx-auto">
              {event.description}
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-lg font-bold text-glow-cyan">
                  {event.date}
                </div>
                <div className="text-sm text-gray-400">Data</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-lg font-bold text-glow-purple">
                  {event.time}
                </div>
                <div className="text-sm text-gray-400">Horário</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-lg font-bold text-glow-cyan">
                  {event.venue}
                </div>
                <div className="text-sm text-gray-400">Local</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-lg font-bold text-glow-purple">
                  {event.capacity}
                </div>
                <div className="text-sm text-gray-400">Capacidade</div>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <GlassButton variant="accent" size="lg" glow>
                Comprar Ingressos
              </GlassButton>
              <GlassButton variant="neon" size="lg">
                Ver Line-up
              </GlassButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-glow-cyan mb-2">
                  {event.stats.ticketsSold}
                </div>
                <div className="text-gray-400">Ingressos Vendidos</div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-glow-purple mb-2">
                  {event.stats.daysLeft}
                </div>
                <div className="text-gray-400">Dias Restantes</div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-glow-cyan mb-2">
                  {event.stats.price}
                </div>
                <div className="text-gray-400">Preço Atual</div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-glow-purple mb-2">
                  6
                </div>
                <div className="text-gray-400">DJs Confirmados</div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Line-up Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            LINE-UP
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.lineup.map((dj, index) => (
              <motion.div
                key={dj.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <GlassCard className="p-6 text-center" glow>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-glow-cyan">
                    {dj.name}
                  </h3>
                  <p className="text-purple-300 mb-2">{dj.genre}</p>
                  <p className="text-sm text-gray-400">{dj.time}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-glow-cyan">
                        {highlight}
                      </h3>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GALERIA
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassCard className="p-4">
                  <div className="w-full h-64 rounded-lg bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                      <p className="text-gray-300">Imagem {index + 1}</p>
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
                Compartilhe o Evento
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ajude a divulgar o {event.name}
              </p>
              <ShareButtons
                title={`${event.name} - Boreal Club`}
                description={event.description}
                url={`https://borealclub.com/ultimoseventos/paradiseedition`}
                artistName="Paradise Edition"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
