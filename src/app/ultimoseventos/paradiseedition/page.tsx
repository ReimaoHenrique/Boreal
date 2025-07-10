"use client";
import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import EventInfo from "@/components/EventInfo";
import HeroVideo from "@/components/HeroVideo";
import ImageCarousel from "@/components/ImageCarousel";
import ArtistCard from "@/components/ArtistCard";

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
      bio: "DJ e produtor brasileiro conhecido por suas batidas energéticas e sets imersivos que transportam o público para outra dimensão.",
      image: "/assets/artists/Alfa.jpeg",
      href: "/artists/alfa",
    },
    {
      id: "bybrothers",
      name: "ByBrothers",
      genre: "House / Tech House",
      bio: "Duo de DJs que revolucionou a cena eletrônica brasileira com suas produções inovadoras e performances eletrizantes.",
      image: "/assets/artists/ByBrothers.jpeg",
      href: "/artists/bybrothers",
    },
    {
      id: "seven",
      name: "Seven",
      genre: "Trance / Progressive",
      bio: "DJ internacional que já se apresentou nos maiores festivais do mundo, trazendo energia única e conexão profunda com o público.",
      image: "/assets/artists/seven.jpeg",
      href: "/artists/seven",
    },
    {
      id: "snow",
      name: "Snow",
      genre: "Deep House / Melodic",
      bio: "Produtor e DJ que combina melodias profundas com ritmos contagiantes, criando uma experiência sonora única e memorável.",
      image: "/assets/artists/snow.jpeg",
      href: "/artists/snow",
    },
    {
      id: "kauffmanndj",
      name: "Kauffmann DJ",
      genre: "Minimal / Tech House",
      bio: "Especialista em minimal techno, conhecido por seus sets precisos e atmosfera hipnótica que mantém o público em transe.",
      image: "/assets/artists/kauffmanndj.jpg",
      href: "/artists/kauffmanndj",
    },
    {
      id: "necrophos",
      name: "Necrophos",
      genre: "Hard Techno / Industrial",
      bio: "DJ que explora os limites do techno industrial, criando experiências intensas e inesquecíveis para os amantes do gênero.",
      image: "/assets/artists/necrophos.jpeg",
      href: "/artists/necrophos",
    },
  ],
};

export default function ParadiseEditionPage() {
  return (
    <div className="relative overflow-x-hidden">
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
            <div className="mb-8 mt-89">
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
      </HeroVideo>

      {/* Seção de Detalhes do Evento */}
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
              DETALHES DO EVENTO
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Descubra tudo que o Paradise Edition tem para oferecer
            </p>
          </motion.div>

          {/* Grid de Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {event.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Carrossel de Imagens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow-purple font-advent">
              GALERIA
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto mb-12">
              Momentos inesquecíveis dos nossos eventos
            </p>
          </motion.div>

          <ImageCarousel images={event.gallery} />
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
                bio={artist.bio}
                image={artist.image}
                href={artist.href}
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
          >
            <GlassButton variant="accent" size="lg" glow>
              Ver Line-up Completo
            </GlassButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
