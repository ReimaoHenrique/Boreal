"use client";

import {
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ShareButtonsProps {
  title: string;
  description: string;
  url: string;
  artistName: string;
}

export default function ShareButtons({
  title,
  description,
  url,
  artistName,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: title,
    text: description,
    url: url,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Erro ao compartilhar:", error);
      }
    } else {
      // Fallback para navegadores que não suportam Web Share API
      handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Erro ao copiar:", error);
    }
  };

  const shareToInstagram = () => {
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(
      url
    )}`;
    window.open(instagramUrl, "_blank");
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} - ${description}`
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Botão principal de compartilhamento */}
      <motion.button
        onClick={handleShare}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-105 transition-transform text-white font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 className="w-5 h-5" />
        Compartilhar
      </motion.button>

      {/* Botão de seguir */}
      <motion.button
        onClick={() =>
          window.open(
            `https://instagram.com/${artistName
              .toLowerCase()
              .replace(" ", "_")}`,
            "_blank"
          )
        }
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:scale-105 transition-transform text-white font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram className="w-5 h-5" />
        Seguir
      </motion.button>

      {/* Botões específicos de rede social */}
      <div className="flex gap-2 mt-4">
        <motion.button
          onClick={shareToInstagram}
          className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Compartilhar no Instagram"
        >
          <Instagram className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          onClick={shareToFacebook}
          className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Compartilhar no Facebook"
        >
          <Facebook className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          onClick={shareToTwitter}
          className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Compartilhar no Twitter"
        >
          <Twitter className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          onClick={handleCopy}
          className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Copiar link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </div>

      {/* Feedback de cópia */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          Link copiado!
        </motion.div>
      )}
    </div>
  );
}
