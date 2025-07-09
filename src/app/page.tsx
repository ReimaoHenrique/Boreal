"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassButton from "@/components/GlassButton";
import GlassCard from "@/components/GlassCard";
import ParticleBackground from "@/components/ParticleBackground";
import HeroAurora from "@/components/HeroAurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import ArtistCard from "@/components/ArtistCard";

export default function Home() {
  // Data do evento - 20 de Setembro, 2025 às 20:00

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
            <EventCard
              key="paradiseedition"
              name="BOREAL CREW - Paradise Edition"
              date="5 de Julho, 2025"
              location="Paradise Beach Club"
              attendees="1783+"
              destaques="DJ now, Neon Beats, Cyber Wave"
              image="/assets/events/boreal.jpg"
              index={0}
              href="/ultimoseventos/paradiseedition"
            />
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
            <ArtistCard
              key="dj-aurora"
              id="dj-aurora"
              name="DJ AURORA"
              genre="Progressive House"
              bio="Pioneira do Progressive House no Brasil, conhecida por suas transições suaves e atmosferas mágicas."
              featured={false}
              index={0}
              href="/artists/dj-aurora"
            />
            <ArtistCard
              key="dj-snow"
              id="dj-snow"
              name="dj-snow"
              genre="Farofa"
              bio="Mestre do estilo Farofa brasileiro, combina batidas pulsantes com elementos normais."
              image="/assets/artists/snow.jpeg"
              featured={true}
              index={1}
              href="/artists/snow"
            />
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
