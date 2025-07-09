import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface EventInfoProps {
  date: string;
  time: string;
  venue: string;
  capacity: string;
  className?: string;
  showAnimation?: boolean;
}

export default function EventInfo({
  date,
  time,
  venue,
  capacity,
  className = "",
  showAnimation = true,
}: EventInfoProps) {
  const content = (
    <div
      className={`grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto ${className}`}
    >
      <div className="text-center">
        <Calendar className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
        <div className="text-lg font-bold text-glow-cyan">{date}</div>
        <div className="text-sm text-gray-400">Data</div>
      </div>

      <div className="text-center">
        <Clock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
        <div className="text-lg font-bold text-glow-purple">{time}</div>
        <div className="text-sm text-gray-400">Horário</div>
      </div>

      <div className="text-center">
        <MapPin className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
        <div className="text-lg font-bold text-glow-cyan">{venue}</div>
        <div className="text-sm text-gray-400">Local</div>
      </div>

      <div className="text-center">
        <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
        <div className="text-lg font-bold text-glow-purple">{capacity}</div>
        <div className="text-sm text-gray-400">Capacidade</div>
      </div>
    </div>
  );

  if (!showAnimation) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1, delay: 0.8 }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.div>
  );
}
