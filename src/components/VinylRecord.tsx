"use client";

import { motion } from "framer-motion";

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
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "linear-gradient(45deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)",
          border: "2px solid #666",
          position: "relative",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20%",
            height: "20%",
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
            border: "2px solid #ffd700",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
