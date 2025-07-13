import { motion } from "framer-motion";
import Link from "next/link";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import CountdownTimer from "@/components/CountdownTimer";
import EventInfo from "@/components/EventInfo";
import { useEffect, useRef, useState } from "react";

interface HeroAuroraProps {
  eventDate?: Date;
}

export default function HeroAurora({
  eventDate = new Date("2025-09-20T20:00:00-03:00"),
}: HeroAuroraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        videoRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoError = () => {
    console.error("Erro ao carregar vídeo aurora.mp4");
    setVideoError(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 hero-bg overflow-hidden"
    >
      {/* Video Background com Parallax */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          style={{
            zIndex: 1,
            minWidth: "100vw",
            minHeight: "100vh",
            width: "auto",
            height: "auto",
          }}
          onError={handleVideoError}
        >
          <source src="/assets/aurora.mp4" type="video/mp4" />
        </video>
      ) : (
        /* Fallback se o vídeo não carregar */
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 via-cyan-900 to-purple-800 animate-pulse"
          style={{ zIndex: 1 }}
        >
          {/* Efeito de partículas no fallback */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      )}

      {/* Overlay mais sutil para garantir legibilidade */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        style={{ zIndex: 2 }}
      ></div>

      <ParticleBackground particleCount={60} />
      <div
        className="container mx-auto px-6 text-center hero-content"
        style={{ position: "relative", zIndex: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-8"></div>

          <h1 className=" text-6xl md:text-8xl font-bold mb-6 text-glow-blue font-appears">
            BOREAL
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-4 text-glow-purple font-appears">
            Crew
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-cyan-300 font-appears">
            Paradise Edition
          </p>

          <p className="text-lg md:text-xl mb-12 text-cyan-300 max-w-3xl mx-auto">
            Uma jornada mística através da música eletrônica. O Boreal Crew
            apresenta Mystic Edition, uma experiência transcendental com os
            melhores DJs da cena nacional em um ambiente místico e envolvente.
          </p>
          <EventInfo
            date="20 de Setembro, 2025"
            time="20:00 - 06:00"
            venue="Paradise Beach Club"
            capacity="4.000"
            className="p-6 raundon"
          />

          <Link href="/seu-destino">
            <span className=" inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-7 cursor-pointer">
              PRÓXIMO EVENTO
            </span>
          </Link>
          {/* Contador Regressivo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <CountdownTimer
              targetDate={eventDate}
              eventName="BOREAL CREW - MYSTIC EDITION"
              promoText="EARLY BIRD - ÚLTIMOS DIAS"
              originalPrice={220}
              promoPrice={180}
            />
          </motion.div>

          <motion.div
            className="md-7 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="/proximoevento/mysticedition">
              <GlassButton className="mb-5" variant="accent" size="lg" glow>
                Ver Detalhes do Evento
              </GlassButton>
            </Link>
            <GlassButton className="mb-5" variant="neon" size="lg">
              Comprar Ingressos
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
