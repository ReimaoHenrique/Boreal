"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VinylRecordProps {
  className?: string;
  size?: number;
  speed?: number;
  opacity?: number;
  delay?: number;
  position?: {
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
  };
}

export default function VinylRecord({
  className = "",
  size = 200,
  speed = 3,
  opacity = 0.3,
  delay = 2,
  position = { top: "20%", right: "10%" },
}: VinylRecordProps) {
  return (
    <motion.div
      className={`vinyl-record ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${speed}s`,
        opacity: opacity,
        top: position.top,
        right: position.right,
        left: position.left,
        bottom: position.bottom,
        position: "absolute",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: opacity, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: "easeOut",
      }}
    >
      <Image
        src="/assets/vinyl-record.png"
        alt="Vinyl Record"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        style={{
          animation: `spin ${speed}s linear infinite`,
        }}
      />
    </motion.div>
  );
}
