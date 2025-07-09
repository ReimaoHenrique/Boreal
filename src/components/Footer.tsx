"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <GlassCard className="p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-glow-cyan">
                BOREAL CREW
              </h3>
              <p className="text-gray-300 mb-4">
                A experiência mais imersiva de música eletrônica do Brasil.
                Prepare-se para uma noite inesquecível com os melhores DJs da
                cena nacional.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-purple-300">
                Contato
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contato@borealcrew.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+55 (21) 99999-9999</span>
                </div>
                <div className="text-sm">
                  <p>WhatsApp: +55 (21) 88888-8888</p>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-cyan-300">
                Links Rápidos
              </h4>
              <div className="space-y-2 text-gray-300">
                <Link
                  href="/proximoevento/mysticedition"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Próximo Evento
                </Link>
                <Link
                  href="/artistas"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Artistas
                </Link>
                <Link
                  href="/ultimoseventos"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Últimos Eventos
                </Link>
                <Link
                  href="/local"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Localização
                </Link>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; 2025 Boreal Crew. Todos os direitos reservados.
                </p>
              </div>

              {/* Desenvolvido por Datasynk */}
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">Desenvolvido por</span>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-8 flex items-center justify-center">
                    <Image
                      src="/assets/datasynk.svg"
                      alt="Datasynk Logo"
                      className="w-full h-full object-contain"
                      width={40}
                      height={32}
                    />
                  </div>
                  <span className="text-shadow-cyan-800 font-semibold">
                    Datasynk
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
