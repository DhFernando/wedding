"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-gradient-to-r from-wedding-primary to-wedding-secondary text-white hover:from-wedding-secondary hover:to-wedding-primary shadow-lg hover:shadow-xl",
  secondary:
    "bg-gradient-to-r from-wedding-accent to-wedding-rose text-white hover:from-wedding-rose hover:to-wedding-accent shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-wedding-primary text-wedding-primary hover:bg-wedding-primary hover:text-white bg-white/50 backdrop-blur-sm",
  ghost:
    "text-wedding-primary hover:bg-wedding-gold-light/50",
};

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        font-sans font-semibold rounded-full
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-wedding-primary/50 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        tracking-wide
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {children}
    </motion.button>
  );
}
