"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import MarqueeArtistGroup from "@/components/MarqueeArtistGroup";

export default function Home() {
  // Data do evento - 20 de Setembro, 2025 às 20:00

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Handler para bloquear menu de contexto
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden select-none"
      onContextMenu={handleContextMenu}
    >
      {/* Navigation */}
      <Header onScrollToSection={scrollToSection} />

      {/* Hero Section com Vídeo */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Vídeo Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ clipPath: "inset(0 0 50px 0)" }}
          onLoadStart={() => console.log("Vídeo começando a carregar")}
          onCanPlay={() => {
            console.log("Vídeo pronto para reproduzir");
          }}
          onError={(e) => console.error("Erro no vídeo:", e)}
        >
          <source src="/assets/boreal2.mp4" type="video/mp4" />
        </video>

        {/* Fallback caso o vídeo não carregue */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 z-0 opacity-50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              BOREAL
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-cyan-300 drop-shadow-2xl">
              Crew
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white max-w-2xl mx-auto drop-shadow-lg">
              Uma jornada mística através da música eletrônica
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-lg font-bold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Próximo Evento
            </motion.button>
          </motion.div>
        </div>
      </section>

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
              key="BorealParadiseEdition"
              name="BOREAL CREW - Paradise Edition"
              date="5 de Julho, 2025"
              location="Paradise Beach Club"
              destaques="DJ now, Neon Beats, Cyber Wave"
              image="/assets/events/ParadiseEdition/CapaParadiseEdition.jpg"
              index={0}
              href="/ultimoseventos/ParadiseEdition"
            />
            <EventCard
              key="BorealOpenAir"
              name="BOREAL CREW - Open Air"
              date="16 de Março, 2025"
              location=" Jauá Camaçari/BA "
              destaques="DJ now, Neon Beats, Cyber Wave"
              image="/assets/events/OpenAir/CapaOpenAir.jpeg"
              index={1}
              href="/ultimoseventos/OpenAir"
            />
            <EventCard
              key="BorealFirstDance"
              name="BOREAL CREW - First Dance"
              date="16 de Março, 2025"
              location=" Jauá Camaçari/BA "
              destaques="DJ now, Neon Beats, Cyber Wave"
              image="/assets/events/FirstDance/CapaFirstDance.webp"
              index={1}
              href="/ultimoseventos/FirstDance"
            />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Nossos Artistas Convidados Section */}
      <section id="convidados" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Artistas que Já Brilharam Aqui
          </motion.h2>

          <motion.div
            className="flex flex-col gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Marquee indo da esquerda para a direita (right) */}
            <MarqueeArtistGroup
              direction="right"
              artists={[
                {
                  artist: "Snow",
                  genre: "Psytrance",
                  description: "This artist is great!",
                  image: "/assets/artists/snow.jpeg",
                },
                {
                  artist: "ByBrothers",
                  genre: "Techno",
                  description: "Energetic and hypnotic sets.",
                  image: "/assets/artists/ByBrothers.jpeg",
                },
                {
                  artist: "kauffmanndj",
                  genre: "Trance",
                  description: "Futuristic and immersive experience.",
                  image: "/assets/artists/kauffmanndj.jpg",
                },
                {
                  artist: "wisllow",
                  genre: "Electro House",
                  description: "Bringing the party to the next level.",
                  image: "/assets/artists/wisllow.webp",
                },
              ]}
            />
            {/* Marquee indo da direita para a esquerda (left) */}
            <MarqueeArtistGroup
              direction="left"
              artists={[
                {
                  artist: "necrophos",
                  genre: "Progressive House",
                  description: "Atmospheric and magical transitions.",
                  image: "/assets/artists/necrophos.jpeg",
                },
                {
                  artist: "Seven",
                  genre: "Electro House",
                  description: "Bringing the party to the next level.",
                  image: "/assets/artists/seven.jpeg",
                },
                {
                  artist: "Alfa",
                  genre: "Progressive House",
                  description: "Atmospheric and magical transitions.",
                  image: "/assets/artists/Alfa.jpeg",
                },
                {
                  artist: "zerk",
                  genre: "Electro House",
                  description: "Bringing the party to the next level.",
                  image: "/assets/artists/zerk.jpeg",
                },
              ]}
            />
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
