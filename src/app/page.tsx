"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Ticket, Instagram, Facebook, Twitter } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import GlassCard from "@/components/GlassCard";
import ParticleBackground from "@/components/ParticleBackground";
import HeroAurora from "@/components/HeroAurora";
import EventInfo from "@/components/EventInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // Data do evento - 20 de Setembro, 2025 às 20:00
  const eventDate = new Date("2025-09-20T20:00:00-03:00");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={30} />

      {/* Navigation */}
      <Header onScrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroAurora />

      {/* Últimos Eventos Section */}
      <section id="eventos" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ÚLTIMOS EVENTOS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "BOREAL CREW - WINTER EDITION",
                date: "15 de Dezembro, 2024",
                location: "Paradise Beach Club",
                attendees: "2.500+",
                highlights: "DJ Aurora, Neon Beats, Cyber Wave",
                image: "/assets/events/winter-edition.jpg",
              },
              {
                name: "BOREAL CREW - SUMMER VIBES",
                date: "20 de Janeiro, 2025",
                location: "Paradise Beach Club",
                attendees: "3.000+",
                highlights: "Electric Soul, Digital Dreams, Bass Galaxy",
                image: "/assets/events/summer-vibes.jpg",
              },
              {
                name: "BOREAL CREW - NEON NIGHT",
                date: "10 de Março, 2025",
                location: "Paradise Beach Club",
                attendees: "2.800+",
                highlights: "Cyber Wave, Neon Beats, DJ Aurora",
                image: "/assets/events/neon-night.jpg",
              },
              {
                name: "BOREAL CREW - DEEP HOUSE SESSION",
                date: "25 de Abril, 2025",
                location: "Paradise Beach Club",
                attendees: "2.200+",
                highlights: "Electric Soul, Digital Dreams",
                image: "/assets/events/deep-house.jpg",
              },
              {
                name: "BOREAL CREW - TRANCE EXPERIENCE",
                date: "5 de Maio, 2025",
                location: "Paradise Beach Club",
                attendees: "2.600+",
                highlights: "Digital Dreams, DJ Aurora",
                image: "/assets/events/trance-exp.jpg",
              },
              {
                name: "BOREAL CREW - BASS NIGHT",
                date: "15 de Junho, 2025",
                location: "Paradise Beach Club",
                attendees: "2.900+",
                highlights: "Bass Galaxy, Neon Beats, Cyber Wave",
                image: "/assets/events/bass-night.jpg",
              },
            ].map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <GlassCard
                  className="p-6 text-center cursor-pointer group"
                  glow
                >
                  <div className="w-full h-48 mb-6 rounded-lg bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <span className="text-4xl">📅</span>
                      <p className="text-lg text-gray-300">Evento Passado</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-glow-cyan group-hover:text-cyan-300 transition-colors">
                    {event.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-purple-400">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-cyan-400">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-purple-400">👥</span>
                      <span>{event.attendees} pessoas</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 border-t border-white/10 pt-3">
                    <p className="font-medium text-cyan-300 mb-1">Destaques:</p>
                    <p>{event.highlights}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassButton variant="neon" size="lg">
              Ver Galeria Completa
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* Artistas da Casa Section */}
      <section id="artistas" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ARTISTAS DA CASA
          </motion.h2>

          <motion.p
            className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conheça os talentos que fazem do Boreal Crew a experiência mais
            imersiva de música eletrônica do Brasil
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: "dj-aurora",
                name: "DJ AURORA",
                genre: "Progressive House",
                bio: "Pioneira do Progressive House no Brasil, conhecida por suas transições suaves e atmosferas mágicas.",
                featured: true,
              },
              {
                id: "neon-beats",
                name: "NEON BEATS",
                genre: "Techno",
                bio: "Mestre do Techno brasileiro, combina batidas pulsantes com elementos futuristas.",
                featured: true,
              },
              {
                id: "cyber-wave",
                name: "CYBER WAVE",
                genre: "Synthwave",
                bio: "A rainha do Synthwave nacional, traz o melhor dos anos 80 com roupagem moderna.",
                featured: true,
              },
            ].map((artist, index) => (
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
                    <div className="text-cyan-400 text-sm font-medium">
                      Ver Perfil →
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/artistas">
              <GlassButton variant="accent" size="lg" glow>
                Ver Todos os Artistas
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="local" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            LOCALIZAÇÃO
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-glow-purple">
                  Paradise Beach Club
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
                    <span>
                      Av. Atlântica, 1500 - Copacabana, Rio de Janeiro
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">👥</span>
                    <span>Capacidade para 2000 pessoas</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-cyan-300">
                    Como Chegar:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Metro: Estação Copacabana (Linha 1)</li>
                    <li>• Ônibus: Linhas 415, 474, 583</li>
                    <li>• Uber/Taxi: Ponto de referência disponível</li>
                    <li>• Estacionamento próprio disponível</li>
                  </ul>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-4 h-96">
                <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">📍</span>
                    <p className="text-xl text-gray-300">Mapa Interativo</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Clique para abrir no Google Maps
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
