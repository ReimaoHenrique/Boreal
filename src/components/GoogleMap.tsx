"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  // Link direto do Google Maps para Largo dos Aflitos
  const directMapsUrl =
    "https://www.google.com/maps/search/Largo+dos+Aflitos+-+Dois+de+Julho,+Salvador+-+BA,+Brasil";

  const handleClick = () => {
    console.log("Abrindo Google Maps:", directMapsUrl);

    try {
      // Tentar abrir o Google Maps
      const newWindow = window.open(
        directMapsUrl,
        "_blank",
        "noopener,noreferrer"
      );

      // Se não conseguir abrir, tentar uma URL alternativa
      if (!newWindow) {
        const alternativeUrl =
          "https://maps.google.com/maps?q=Largo+dos+Aflitos,+Salvador,+BA,+Brasil";
        window.open(alternativeUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Erro ao abrir Google Maps:", error);
      // Fallback: abrir em nova aba
      window.open("https://www.google.com/maps", "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      <GlassCard className="p-4 h-96">
        <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
          {/* Ícone de localização */}
          <div className="text-center mb-4">
            <span className="text-6xl mb-4 block">📍</span>
            <h3 className="text-xl font-bold text-glow-cyan mb-2">
              Largo dos Aflitos
            </h3>
            <p className="text-gray-300 text-sm max-w-xs">
              Dois de Julho, Salvador - BA
            </p>
          </div>

          {/* Botão para abrir no Google Maps */}
          <motion.button
            onClick={handleClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abrir no Google Maps
          </motion.button>

          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
      </GlassCard>
    </motion.div>
  );
}
