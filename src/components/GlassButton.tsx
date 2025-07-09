import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "neon";
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      glow = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "glass rounded-lg font-semibold transition-all duration-300 hover-glow border-0 cursor-pointer";

    const variants = {
      primary: "text-white hover:bg-white/10",
      secondary: "text-white hover:bg-white/5",
      accent:
        "text-black bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300",
      neon: "text-white border border-cyan-400 hover:bg-cyan-400/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    };

    const glowClasses = glow ? "glow-reduced" : "";

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${glowClasses} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
        suppressContentEditableWarning
      >
        {children}
      </motion.button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;
