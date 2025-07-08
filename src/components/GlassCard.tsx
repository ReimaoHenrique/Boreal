import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "strong" | "subtle";
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      variant = "default",
      className = "",
      hover = true,
      glow = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = "rounded-xl transition-all duration-300";

    const variants = {
      default: "glass",
      strong: "glass-strong",
      subtle: "glass-subtle",
    };

    const hoverClasses = hover ? "hover-glow hover:scale-[1.02]" : "";
    const glowClasses = glow ? "neon-blue" : "";

    const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${glowClasses} ${className}`;

    return (
      <motion.div
        ref={ref}
        className={classes}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
