"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Music,
  Users,
  Ticket,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import GlassButton from "@/components/GlassButton";
import GlassCard from "@/components/GlassCard";
import ParticleBackground from "@/components/ParticleBackground";
import CountdownTimer from "@/components/CountdownTimer";
import VinylRecord from "@/components/VinylRecord";

export default function Home() {
  // Data do evento - 15 de Agosto, 2025 às 19:00
  const eventDate = new Date("2025-08-15T19:00:00-03:00");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={30} />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold text-glow-cyan"
              whileHover={{ scale: 1.05 }}
            >
              BOREAL
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "Line-up",
                "Artistas",
                "Ingressos",
                "Local",
                "Contato",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace("-", ""))
                  }
                  className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            <GlassButton variant="accent" size="sm">
              Comprar Ingresso
            </GlassButton>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 hero-bg"
      >
        <VinylRecord delay={2.5} />
        <div className="container mx-auto px-6 text-center hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-blue font-advent">
              BOREAL
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-glow-purple font-advent">
              CLUB
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-300 font-advent">
              PARADISE EDITION
            </p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>15 de Agosto, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Paradise Beach Club</span>
              </div>
            </motion.div>

            {/* Contador Regressivo */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <CountdownTimer
                targetDate={eventDate}
                eventName="BOREAL CLUB - PARADISE EDITION"
                promoText="EARLY BIRD - ÚLTIMOS DIAS"
                originalPrice={200}
                promoPrice={150}
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <GlassButton className="mb-5" variant="accent" size="lg" glow>
                Comprar Ingressos
              </GlassButton>
              <GlassButton className="mb-5" variant="neon" size="lg">
                Ver Line-up
              </GlassButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Line-up Section */}
      <section id="lineup" className="py-20 relative">
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
            {[
              {
                name: "DJ AURORA",
                genre: "Progressive House",
                time: "23:00 - 01:00",
              },
              { name: "NEON BEATS", genre: "Techno", time: "01:00 - 03:00" },
              { name: "CYBER WAVE", genre: "Synthwave", time: "03:00 - 05:00" },
              {
                name: "ELECTRIC SOUL",
                genre: "Deep House",
                time: "21:00 - 23:00",
              },
              {
                name: "DIGITAL DREAMS",
                genre: "Trance",
                time: "19:00 - 21:00",
              },
              { name: "BASS GALAXY", genre: "Dubstep", time: "05:00 - 07:00" },
            ].map((dj, index) => (
              <motion.div
                key={dj.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
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
            Conheça os talentos que fazem do Boreal Club a experiência mais
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

      {/* Tickets Section - Single Ticket */}
      <section id="ingressos" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            INGRESSOS
          </motion.h2>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 text-center" glow>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  PARADISE EDITION
                </div>

                <Ticket className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
                <h3 className="text-3xl font-bold mb-4 text-glow-cyan">
                  BOREAL CLUB
                </h3>
                <div className="text-5xl font-bold mb-8 text-glow-purple">
                  R$ 150
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Entrada VIP até 00h
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Welcome Drink Premium
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Acesso a todas as áreas
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Brinde exclusivo Boreal
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Meet & Greet com DJs
                  </li>
                </ul>

                <GlassButton
                  variant="accent"
                  className="w-full text-lg py-4"
                  glow
                >
                  Comprar Agora
                </GlassButton>
              </GlassCard>
            </motion.div>
          </div>
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
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <span>
                      Av. Atlântica, 1500 - Copacabana, Rio de Janeiro
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-400" />
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
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
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
      <footer className="py-12 relative">
        <div className="container mx-auto px-6">
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-glow-cyan">
                  BOREAL CLUB
                </h3>
                <p className="text-gray-300">
                  A experiência mais imersiva de música eletrônica do Brasil.
                  Prepare-se para uma noite inesquecível.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-purple-300">
                  Contato
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>contato@borealclub.com</p>
                  <p>+55 (21) 99999-9999</p>
                  <p>WhatsApp: +55 (21) 88888-8888</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-cyan-300">
                  Redes Sociais
                </h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Boreal Club. Todos os direitos reservados.</p>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
}
