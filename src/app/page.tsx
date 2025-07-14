"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import MarqueeArtistGroup from "@/components/MarqueeArtistGroup";
import { BlurFade } from "@/components/magicui/blur-fade";

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
          <source src="/assets/boreal.mp4" type="video/mp4" />
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
                  genre: "Progressive psytrance",
                  description: "Apresentações criativas ",
                  image: "/assets/artists/snow.jpeg",
                },
                {
                  artist: "ByBrothers",
                  genre: "Progressive Offbeat",
                  description: "Melancólico e emocionante.",
                  image: "/assets/artists/ByBrothers.jpeg",
                },
                {
                  artist: "Kauffman",
                  genre: "Prog Club",
                  description: "Sonoridade marcante e explosivo.",
                  image: "/assets/artists/kauffmanndj.jpg",
                },
                {
                  artist: "Wisllow",
                  genre: "Progressive",
                  description: "Som único e com personalidade .",
                  image: "/assets/artists/wisllow.webp",
                },
              ]}
            />
            {/* Marquee indo da direita para a esquerda (left) */}
            <MarqueeArtistGroup
              direction="left"
              artists={[
                {
                  artist: "Necrophos",
                  genre: "Progressive Psytrance",
                  description: "Som imersivo e psicodélico.",
                  image: "/assets/artists/necrophos.jpeg",
                },
                {
                  artist: "Seven",
                  genre: "Progressive Offbeat",
                  description: "Som mélancolico e explosivo ",
                  image: "/assets/artists/seven.jpeg",
                },
                {
                  artist: "Alfa Beats",
                  genre: "Minimal Prog",
                  description: "Carisma e mixagem de qualidade.",
                  image: "/assets/artists/Alfa.jpeg",
                },
                {
                  artist: "Zerk",
                  genre: "Progressive",
                  description: "Eletrizante ",
                  image: "/assets/artists/zerk.jpeg",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Galeria de Eventos Section */}
      <section id="galeria" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow-cyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Galeria de Eventos
          </motion.h2>
          <div className="columns-2 gap-4 sm:columns-3">
            {[
              // Fotos FirstDance
              "/assets/events/FirstDance/CapaFirstDance.webp",
              "/assets/events/FirstDance/478638833_17845098600417524_5436293515917825999_n.jpg",
              // Fotos ParadiseEdition
              "/assets/events/ParadiseEdition/CapaParadiseEdition.jpg",
              "/assets/events/ParadiseEdition/necro.webp",
              "/assets/events/ParadiseEdition/zerks.webp",
              "/assets/events/ParadiseEdition/alfa.webp",
              "/assets/events/ParadiseEdition/dj4.webp",
              "/assets/events/ParadiseEdition/dj3.webp",
              "/assets/events/ParadiseEdition/djSevem.webp",
              "/assets/events/ParadiseEdition/djsnow.webp",
              // Fotos OpenAir
              "/assets/events/OpenAir/CapaOpenAir.jpeg",
              // Vídeos ParadiseEdition
              "/assets/events/ParadiseEdition/videoParadise.mp4",
              // Vídeos gerais
              "/assets/events/videos/hero.mp4",
              "/assets/events/videos/video-pista-parad.mp4",
            ].map((mediaUrl, idx) => (
              <BlurFade key={mediaUrl} delay={0.25 + idx * 0.05} inView>
                {mediaUrl.endsWith(".mp4") ? (
                  <video
                    className="mb-4 w-full rounded-lg object-contain"
                    src={mediaUrl}
                    controls
                    preload="none"
                    style={{ maxHeight: 400 }}
                  />
                ) : (
                  <img
                    className="mb-4 w-full rounded-lg object-contain"
                    src={mediaUrl}
                    alt={`Foto ou vídeo do evento ${idx + 1}`}
                  />
                )}
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
