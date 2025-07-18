"use client";

import { useRef, useEffect, useState } from "react";

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
}

export default function AutoPlayVideo({
  src,
  className = "",
  poster,
  preload = "metadata",
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Tentar reproduzir o vídeo quando entrar na viewport
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Se falhar, tentar novamente após um delay
              setTimeout(() => {
                videoRef.current?.play().catch(() => {});
              }, 100);
            });
          }
        } else {
          setIsVisible(false);
          // Pausar o vídeo quando sair da viewport
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Garantir que o vídeo esteja configurado corretamente
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;

      // Tentar reproduzir
      videoRef.current.play().catch(() => {
        // Se falhar, tentar novamente
        setTimeout(() => {
          videoRef.current?.play().catch(() => {});
        }, 200);
      });
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload={preload}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
    />
  );
}
