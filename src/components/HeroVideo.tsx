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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Verificar se o vídeo está tocando
    const checkPlayback = () => {
      if (video.paused) {
        setShowPlayButton(true);
        setIsPlaying(false);
      } else {
        setShowPlayButton(false);
        setIsPlaying(true);
      }
    };

    // Event listeners
    video.addEventListener("play", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));
    video.addEventListener("canplay", checkPlayback);
    video.addEventListener("error", () => setShowPlayButton(true));

    // Verificar após um tempo se o autoplay funcionou
    const timeout = setTimeout(checkPlayback, 2000);

    return () => {
      video.removeEventListener("play", () => setIsPlaying(true));
      video.removeEventListener("pause", () => setIsPlaying(false));
      video.removeEventListener("canplay", checkPlayback);
      video.removeEventListener("error", () => setShowPlayButton(true));
      clearTimeout(timeout);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        })
        .catch(() => {
          setShowPlayButton(true);
        });
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
