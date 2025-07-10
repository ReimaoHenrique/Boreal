"use client";
import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import EventInfo from "@/components/EventInfo";
import HeroVideo from "@/components/HeroVideo";
import ArtistCard from "@/components/ArtistCard";
import VinylRecord from "@/components/VinylRecord";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dados do evento Paradise Edition
const event = {
  name: "BOREAL CLUB - Paradise EDITION",
  date: "5 de Julho, 2025",
  time: "19:00 - 07:00",
  location: "Copacabana, Rio de Janeiro",
  attendees: "3.500+",
  status: "Próximo Evento",

  highlights: [
    "6 DJs de renome nacional",
    "Sistema de som de última geração",
    "Show de luzes e lasers",
    "Área VIP exclusiva",
    "Welcome drink premium",
    "Meet & Greet com os artistas",
  ],

  gallery: [
    "/assets/events/boreal.jpg",
    "/assets/events/boreal.jpg",
    "/assets/events/boreal.jpg",
    "/assets/events/boreal.jpg",
    "/assets/events/boreal.jpg",
    "/assets/events/boreal.jpg",
  ],
  artists: [
    {
      id: "alfa",
      name: "Alfa",
      genre: "Techno / Progressive",
      image: "/assets/artists/Alfa.jpeg",
    },
    {
      id: "bybrothers",
      name: "ByBrothers",
      genre: "House / Tech House",
      image: "/assets/artists/ByBrothers.jpeg",
    },
    {
      id: "seven",
      name: "Seven",
      genre: "Trance / Progressive",
      image: "/assets/artists/seven.jpeg",
    },
    {
      id: "snow",
      name: "Snow",
      genre: "Deep House / Melodic",
      image: "/assets/artists/snow.jpeg",
    },
    {
      id: "kauffmanndj",
      name: "Kauffmann DJ",
      genre: "Minimal / Tech House",
      image: "/assets/artists/kauffmanndj.jpg",
    },
    {
      id: "necrophos",
      name: "Necrophos",
      genre: "Hard Techno / Industrial",
      image: "/assets/artists/necrophos.jpeg",
    },
  ],
};

export default function ParadiseEditionPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <ParticleBackground particleCount={30} />

      {/* Hero Section com Vídeo */}
      <HeroVideo>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="mb-8 mt-40">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-4">
                PRÓXIMO EVENTO
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-glow-blue font-appears">
              PARADISE
            </h1>
            <h2 className="text-3xl md:text-6xl font-light mb-8 text-glow-purple font-appears">
              EDITION
            </h2>

            <EventInfo
              date={event.date}
              time={event.time}
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
      </HeroVideo>

      {/* Seção de Descrição do Evento */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow-purple font-advent">
              SOBRE O PARADISE EDITION
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto mb-12">
              Uma experiência única que combina música eletrônica de alta
              qualidade com um ambiente paradisíaco
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-3xl font-bold mb-6 text-glow-blue font-advent">
                A EXPERIÊNCIA
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                O Paradise Edition é mais que um evento de música eletrônica - é
                uma jornada sensorial completa. Imagine estar em um ambiente
                paradisíaco à beira-mar, com as melhores batidas eletrônicas
                pulsando através de um sistema de som de última geração,
                enquanto lasers e luzes criam uma atmosfera mágica ao seu redor.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Durante 12 horas ininterruptas, você será transportado para
                outra dimensão através da música dos melhores DJs da cena
                nacional e internacional. Cada set foi cuidadosamente
                selecionado para criar uma progressão perfeita de energia e
                emoção.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Além da música, oferecemos uma experiência gastronômica premium,
                áreas VIP exclusivas e a oportunidade de conhecer pessoalmente
                os artistas que fazem a história da música eletrônica.
              </p>

              {/* Vinyl Record decorativo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-20 -right-20 hidden lg:block"
              >
                <VinylRecord size={120} speed={2} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-glow-purple font-advent">
                  O QUE ESPERAR
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Sistema de som de 50.000 watts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Show de luzes e lasers profissional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Área VIP com vista privilegiada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Welcome drink premium incluído
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Meet & Greet com os artistas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">✦</span>
                    <span className="text-gray-300">
                      Food trucks com gastronomia especial
                    </span>
                  </li>
                </ul>
              </div>

              {/* Vinyl Record decorativo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-16 -left-16 hidden lg:block"
              >
                <VinylRecord size={100} speed={1.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Artistas */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow-purple font-advent">
              ARTISTAS CONFIRMADOS
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Os melhores DJs da cena eletrônica brasileira e internacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.artists.map((artist, index) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                genre={artist.genre}
                image={artist.image}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          ></motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
