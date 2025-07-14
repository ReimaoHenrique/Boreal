"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassButton from "@/components/GlassButton";

interface HeaderProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const menuItems = [
    "Home",
    "Eventos",
    "Artistas",
    "Galeria de Eventos",
    "Contato",
  ];

  const handleMenuClick = (item: string) => {
    if (onScrollToSection) {
      const sectionId = item.toLowerCase().replace("-", "").replace(" ", "-");
      onScrollToSection(sectionId);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 header-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold text-glow-cyan cursor-pointer font-appears "
              whileHover={{ scale: 1.05 }}
            >
              BOREAL
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) =>
              item === "Contato" ? (
                <a
                  key={item}
                  href="https://wa.me/SEUNUMEROAQUI" // Substitua pelo número desejado
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ) : (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <Link
            href="https://www.sympla.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlassButton variant="accent" size="sm">
              Comprar Ingresso
            </GlassButton>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
