"use client";

import { motion } from "framer-motion";
import { Music, Sparkles } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import ShareButtons from "@/components/ShareButtons";
import EventInfo from "@/components/EventInfo";

// Dados do evento Mystic Edition
const event = {
  name: "BOREAL CLUB - MYSTIC EDITION",
  date: "20 de Setembro, 2025",
  time: "20:00 - 06:00",
  venue: "Paradise Beach Club",
  location: "Copacabana, Rio de Janeiro",
  attendees: "3.800+",
  capacity: "4.000",
  status: "Próximo Evento",
  description:
    "Uma jornada mística através da música eletrônica. O Boreal Club apresenta Mystic Edition, uma experiência transcendental com os melhores DJs da cena nacional em um ambiente místico e envolvente.",
  longDescription:
    "Prepare-se para uma noite de magia e mistério no Boreal Club - Mystic Edition. Uma experiência única que combina música eletrônica de alta qualidade com elementos místicos e atmosferas transcendentais. Em um ambiente cuidadosamente projetado com iluminação especial, efeitos visuais hipnóticos e decoração mística, você será transportado para um universo paralelo de sensações e emoções.",
  highlights: [
    "6 DJs de renome nacional",
    "Sistema de som de última geração",
    "Show de luzes e lasers místicos",
    "Área VIP exclusiva com decoração especial",
    "Welcome drink místico",
    "Meet & Greet com os artistas",
    "Efeitos visuais hipnóticos",
    "Atmosfera transcendental",
  ],
  lineup: [
    {
      name: "DJ AURORA",
      genre: "Progressive House",
      time: "00:00 - 02:00",
      image: "/assets/artists/dj-aurora.jpg",
      description: "Abertura mística com Progressive House envolvente",
    },
    {
      name: "NEON BEATS",
      genre: "Techno",
      time: "02:00 - 04:00",
      image: "/assets/artists/neon-beats.jpg",
      description: "Batidas pulsantes para elevar o espírito",
    },
    {
      name: "CYBER WAVE",
      genre: "Synthwave",
      time: "04:00 - 06:00",
      image: "/assets/artists/cyber-wave.jpg",
      description: "Fechamento místico com Synthwave nostálgico",
    },
    {
      name: "ELECTRIC SOUL",
      genre: "Deep House",
      time: "22:00 - 00:00",
      image: "/assets/artists/electric-soul.jpg",
      description: "Grooves profundos para conectar com o universo",
    },
    {
      name: "DIGITAL DREAMS",
      genre: "Trance",
      time: "20:00 - 22:00",
      image: "/assets/artists/digital-dreams.jpg",
      description: "Abertura transcendental com Trance épico",
    },
    {
      name: "BASS GALAXY",
      genre: "Dubstep",
      time: "18:00 - 20:00",
      image: "/assets/artists/bass-galaxy.jpg",
      description: "Warm-up místico com frequências que vibram a alma",
    },
  ],
  gallery: [
    "/assets/events/mystic-1.jpg",
    "/assets/events/mystic-2.jpg",
    "/assets/events/mystic-3.jpg",
    "/assets/events/mystic-4.jpg",
    "/assets/events/mystic-5.jpg",
    "/assets/events/mystic-6.jpg",
  ],
  stats: {
    ticketsSold: "2.900",
    daysLeft: "75",
    price: "R$ 180",
    originalPrice: "R$ 220",
  },
};

export default function MysticEditionPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={40} />

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
              MYSTIC
            </h1>
            <h2 className="text-3xl md:text-6xl font-light mb-8 text-glow-purple font-advent">
              EDITION
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-cyan-300 max-w-4xl mx-auto">
              {event.description}
            </p>

            <EventInfo
              date={event.date}
              time={event.time}
              venue={event.venue}
              capacity={event.capacity}
              showAnimation={false}
            />

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

      {/* Description Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A EXPERIÊNCIA MÍSTICA
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {event.longDescription}
                </p>
              </div>
            </GlassCard>
          </motion.div>
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
            LINE-UP MÍSTICO
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
                  <p className="text-sm text-gray-400 mb-3">{dj.time}</p>
                  <p className="text-xs text-cyan-300 italic">
                    {dj.description}
                  </p>
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
            DESTAQUES MÍSTICOS
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
                      <Sparkles className="w-6 h-6 text-white" />
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
            GALERIA MÍSTICA
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
                      <Sparkles className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                      <p className="text-gray-300">
                        Imagem Mística {index + 1}
                      </p>
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
                Compartilhe a Magia
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ajude a divulgar o {event.name}
              </p>
              <ShareButtons
                title={`${event.name} - Boreal Club`}
                description={event.description}
                url={`https://borealclub.com/proximoevento/mysticedition`}
                artistName="Mystic Edition"
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
