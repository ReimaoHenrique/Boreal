import React from "react";

interface HeroVideoProps {
  videoUrl?: string;
  children?: React.ReactNode;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  videoUrl = "/assets/events/videos/video-pista-parad.mp4",
  children,
}) => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Vídeo de fundo ocupando toda a tela */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="object-cover w-full h-full"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay para escurecer o vídeo */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default HeroVideo;
