"use client";
import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import ParticleBackground from "@/components/ParticleBackground";
import EventInfo from "@/components/EventInfo";

// Dados do evento Paradise Edition
const event = {
  name: "BOREAL CLUB - PARADISE EDITION",
  date: "15 de Agosto, 2025",
  time: "19:00 - 07:00",
  venue: "Paradise Beach Club",
  location: "Copacabana, Rio de Janeiro",
  attendees: "3.500+",
  capacity: "4.000",
  status: "Próximo Evento",
  description:
    "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar.",
  highlights: [
    "6 DJs de renome nacional",
    "Sistema de som de última geração",
    "Show de luzes e lasers",
    "Área VIP exclusiva",
    "Welcome drink premium",
    "Meet & Greet com os artistas",
  ],

  gallery: [
    "/assets/events/paradise-1.jpg",
    "/assets/events/paradise-2.jpg",
    "/assets/events/paradise-3.jpg",
    "/assets/events/paradise-4.jpg",
    "/assets/events/paradise-5.jpg",
    "/assets/events/paradise-6.jpg",
  ],
  stats: {
    ticketsSold: "2.800",
    daysLeft: "45",
    price: "R$ 150",
    originalPrice: "R$ 200",
  },
};

export default function ParadiseEditionPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground particleCount={30} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-4">
                PRÓXIMO EVENTO
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-glow-blue font-advent">
              PARADISE
            </h1>
            <h2 className="text-3xl md:text-6xl font-light mb-8 text-glow-purple font-advent">
              EDITION
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-cyan-300 max-w-4xl mx-auto">
              {event.description}
            </p>

            <EventInfo
              date={event.date}
              time={event.time}
              venue={event.venue}
              capacity={event.capacity}
              showAnimation={false}
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <GlassButton variant="accent" size="lg" glow>
                Comprar Ingressos
              </GlassButton>
              <GlassButton variant="neon" size="lg">
                Ver Line-up
              </GlassButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
