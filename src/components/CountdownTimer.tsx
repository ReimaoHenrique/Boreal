"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Ticket, Zap } from "lucide-react";
import GlassCard from "./GlassCard";
import GlassButton from "./GlassButton";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  eventName?: string;
  promoText?: string;
  originalPrice?: number;
  promoPrice?: number;
}

export default function CountdownTimer({
  targetDate,
  eventName = "BOREAL CREW",
  promoText = "OFERTA LIMITADA",
  originalPrice = 200,
  promoPrice = 150,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const discount = Math.round(
    ((originalPrice - promoPrice) / originalPrice) * 100
  );

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto"
      >
        <GlassCard className="p-6 text-center" glow>
          <h3 className="text-2xl font-bold text-glow-cyan mb-4">
            🎉 O EVENTO COMEÇOU!
          </h3>
          <p className="text-gray-300">
            O {eventName} já está acontecendo! Ainda há ingressos disponíveis na
            porta.
          </p>
        </GlassCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <GlassCard className="p-6" glow>
        {/* Header com promoção */}
        <div className="text-center mb-6">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4" />
            {promoText}
            <Zap className="w-4 h-4" />
          </motion.div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-glow-cyan">FALTAM APENAS</h3>
          </div>
        </div>

        {/* Contador */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { value: timeLeft.days, label: "DIAS" },
            { value: timeLeft.hours, label: "HORAS" },
            { value: timeLeft.minutes, label: "MIN" },
            { value: timeLeft.seconds, label: "SEG" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/40 rounded-lg p-3 border border-cyan-400/40 backdrop-blur-sm">
                <motion.div
                  key={item.value}
                  className="text-2xl md:text-3xl font-bold text-glow-blue"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="text-xs text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promoção de preço */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="text-gray-400 line-through text-lg">
              R$ {originalPrice}
            </div>
            <div className="text-3xl font-bold text-glow-purple">
              R$ {promoPrice}
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-4">
            💥 Economia de R$ {originalPrice - promoPrice} por ingresso!
          </p>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <GlassButton
            variant="accent"
            size="lg"
            className="w-full text-lg py-4 mb-3"
            glow
          >
            <Ticket className="w-5 h-5 mr-2" />
            Garantir Ingresso Promocional
          </GlassButton>

          <p className="text-xs text-gray-400">
            ⚡ Oferta válida apenas durante a contagem regressiva
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
