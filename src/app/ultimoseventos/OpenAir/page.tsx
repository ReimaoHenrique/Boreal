"use client";
import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import EventInfo from "@/components/EventInfo";
import HeroVideo from "@/components/HeroVideo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventTimeline from "@/components/EventTimeline";
import { useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

// Dados do evento
const event = {
  name: "Boreal  Open Air",
  date: "16 de Março, 2025",
  time: "09:00 - 22:00",
  location: "Jauá , Camaçari - BA",
  status: "Ultimo Evento",
  capacidade: "500",

  highlights: [
    "6 DJs de renome nacional",
    "Sistema de som de última geração",
    "Show de luzes e lasers",
    "Área VIP exclusiva",
    "Welcome drink premium",
    "Meet & Greet com os artistas",
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

  // Timeline do evento
  timeline: [
    {
      time: "08:00",
      title: "Abertura dos Portões",
      description:
        "Chegue cedo para garantir o melhor lugar e aproveitar o welcome drink premium.",
    },
    {
      time: "09:00",
      title: "Batativiz",
    },
    {
      time: "10:00",
      title: "Dolphin",
    },
    {
      time: "11:00",
      title: "Fly",
    },
    {
      time: "12:00",
      title: "ByBrothers",
    },
    {
      time: "13:00",
      title: "Alfa Beats",
    },
    {
      time: "14:00",
      title: "Kauffmann",
    },
    {
      time: "15:00",
      title: "Rajj",
    },
    {
      time: "16:00",
      title: "Haze",
    },
    {
      time: "17:00",
      title: "Seven",
    },
    {
      time: "18:00",
      title: "Boulevard",
    },
    {
      time: "19:00",
      title: "Japex",
    },

    {
      time: "20:00",
      title: "Bragi x Highlit",
    },
    {
      time: "21:00",
      title: "Zerk",
    },
    {
      time: "22:00",
      title: "Snow",
    },
    {
      time: "23:00",
      title: "Fim de festa",
    },
  ],
};

export default function OpenAirPage() {
  const lineupRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <ParticleBackground particleCount={30} />

      {/* Hero Section com Vídeo */}
      <HeroVideo videoUrl="/assets/events/OpenAir/OpenAir.mp4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-glow-blue font-appears">
              {event.name}
            </h1>

            <EventInfo
              date={event.date}
              time={event.time}
              showAnimation={false}
              venue={event.location}
              capacity="500"
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <GlassButton
                variant="accent"
                size="lg"
                onClick={() => {
                  lineupRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
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
              GALERIA
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto mb-12">
              Reviva os momentos mais incríveis dos nossos eventos anteriores
            </p>
            <div className="columns-2 gap-4 sm:columns-3 max-w-5xl mx-auto">
              {[
                "/assets/events/OpenAir/OpenAir.mp4",
                "/assets/events/OpenAir/OpenAir_foto1.jpg.jpg",
                "/assets/events/OpenAir/OpenAir_foto2.jpg",
                "/assets/events/OpenAir/OpenAir_foto2.webp",
                "/assets/events/OpenAir/OpenAir_foto3.webp",
                "/assets/events/OpenAir/openair.jpg",
                "/assets/events/OpenAir/openair2.jpg",
                "/assets/events/OpenAir/OpenAir2.mp4",
                "/assets/events/OpenAir/OpenAir4.mp4",
              ].map((mediaUrl, idx) => (
                <BlurFade key={mediaUrl} delay={0.25 + idx * 0.05} inView>
                  {mediaUrl.endsWith(".mp4") ? (
                    <div className="mb-4 w-full rounded-lg overflow-hidden">
                      <video
                        className="w-full h-full object-contain"
                        src={mediaUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="false"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 w-full rounded-lg overflow-hidden">
                      <Image
                        src={mediaUrl}
                        alt={`Foto ou vídeo do evento ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full rounded-lg object-contain"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={idx < 2}
                      />
                    </div>
                  )}
                </BlurFade>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow-purple font-advent">
              Sobre a Boreal Open
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
                A primeira edição da Boreal Open Air foi uma experiência
                inesquecível de união, arte e celebração. Com a sensação de
                dever cumprido, agradecemos a todos que tornaram esse sonho
                possível — desde a produção até cada setor envolvido. Ver o
                público vibrando em harmonia, com conforto e respeito, foi nossa
                maior recompensa. Gratidão imensa a todos os colaboradores e
                presentes. Até a próxima! – Equipe Boreal 🌌✨
              </p>
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
                    <span className="text-gray-300">Espaço com piscina</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Como Chegar e Timeline */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className=" mt-9 text-4xl md:text-6xl font-bold mb-8 text-glow-purple font-advent">
              INFORMAÇÕES DO EVENTO
            </h2>
          </motion.div>

          {/* Seção da Timeline */}
          <motion.div
            ref={lineupRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-glow-cyan font-advent">
                Line-up{" "}
              </h3>
              <p className="text-lg text-gray-300">
                Uma noite completa de música eletrônica
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <EventTimeline items={event.timeline} />
            </div>
          </motion.div>

          {/* Informações adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-6 text-glow-purple font-advent">
                INFORMAÇÕES IMPORTANTES
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h5 className="text-lg font-bold text-cyan-300 mb-3">
                    Como Chegar:
                  </h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Uber/Taxi: Ponto de referência disponível</li>
                    <li>• Estacionamento disponível</li>
                    <li>• Segurança dorante todo evento</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-purple-300 mb-3">
                    O que Trazer:
                  </h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Documento de identidade</li>
                    <li>• Ingresso impresso ou digital</li>
                    <li>• Roupas confortáveis</li>
                    <li>• Energia positiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Seção do Mapa */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      ></motion.div>

      <Footer />
    </div>
  );
}
