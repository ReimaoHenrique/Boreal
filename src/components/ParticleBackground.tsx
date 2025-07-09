import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  particleCount?: number;
}

const auroraColors = [
  "rgba(0,255,180,0.18)", // verde água
  "rgba(0,180,255,0.15)", // azul claro
  "rgba(170,0,255,0.13)", // roxo
  "rgba(0,255,120,0.16)", // verde
  "rgba(0,255,255,0.13)", // ciano
  "rgba(255,0,255,0.10)", // magenta
];

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 18,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < particleCount; i++) {
      const aurora = document.createElement("div");
      aurora.className = "aurora-particle";
      const color = auroraColors[i % auroraColors.length];
      aurora.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
      aurora.style.left = Math.random() * 90 + "%";
      aurora.style.width = 120 + Math.random() * 180 + "px";
      aurora.style.height = 40 + Math.random() * 80 + "px";
      aurora.style.top = 10 + Math.random() * 70 + "%";
      aurora.style.filter = "blur(12px) brightness(1.3)";
      aurora.style.opacity = (0.25 + Math.random() * 0.25).toString();
      aurora.style.position = "absolute";
      aurora.style.borderRadius = "80%";
      aurora.style.pointerEvents = "none";
      aurora.style.zIndex = "-1";
      aurora.style.animation = `auroraMove${i % 4} ${
        8 + Math.random() * 8
      }s ease-in-out infinite alternate`;
      container.appendChild(aurora);
    }
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className="aurora-boreal-bg fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticleBackground;
