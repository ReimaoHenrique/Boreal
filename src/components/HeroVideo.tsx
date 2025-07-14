"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HeroVideoProps {
  videoUrl?: string;
  children?: React.ReactNode;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  videoUrl = "/assets/events/videos/hero.mp4",
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detectar se é dispositivo móvel
    const checkMobile = () => {
      const userAgent =
        navigator.userAgent ||
        navigator.vendor ||
        (window as unknown as { opera?: string }).opera ||
        "";
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    const video = videoRef.current;
    if (!video) return;

    // Função para tentar reproduzir o vídeo
    const attemptAutoplay = async () => {
      try {
        // Garantir que o vídeo está mutado para autoplay funcionar
        video.muted = true;
        video.volume = 0;

        // Tentar reproduzir
        await video.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.log("Autoplay falhou, mostrando botão de play:", error);
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    };

    // Event listeners
    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      if (isMobile) {
        setShowPlayButton(true);
      }
    };

    const handleCanPlay = () => {
      // Tentar autoplay quando o vídeo estiver pronto
      if (!isPlaying) {
        attemptAutoplay();
      }
    };

    const handleError = () => {
      setShowPlayButton(true);
      setIsPlaying(false);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("loadeddata", handleCanPlay);

    // Tentar autoplay inicial
    attemptAutoplay();

    // Verificar após um tempo se o autoplay funcionou
    const timeout = setTimeout(() => {
      if (video.paused) {
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    }, 3000);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadeddata", handleCanPlay);
      clearTimeout(timeout);
    };
  }, [isPlaying]);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        // Garantir que está mutado
        video.muted = true;
        video.volume = 0;

        await video.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.log("Falha ao reproduzir vídeo:", error);
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Vídeo de fundo ocupando toda a tela */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          src={videoUrl}
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
        {/* Overlay para escurecer o vídeo */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Botão de Play para Mobile */}
        {showPlayButton && !isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
          >
            <svg
              className="w-8 h-8 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        )}
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default HeroVideo;
