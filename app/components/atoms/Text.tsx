"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "script";
  className?: string;
  animate?: boolean;
}

const variantStyles = {
  h1: "font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide",
  h2: "font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide",
  h3: "font-serif text-2xl md:text-3xl font-light tracking-wide",
  h4: "font-serif text-xl md:text-2xl font-light",
  body: "font-sans text-base md:text-lg leading-relaxed",
  caption: "font-sans text-sm md:text-base text-opacity-70",
  script: "font-script text-2xl md:text-3xl lg:text-4xl italic",
};

export function Text({
  children,
  variant = "body",
  className = "",
  animate = false,
}: TextProps) {
  const Component = animate ? motion.p : "p";

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" },
      }
    : {};

  if (variant === "h1") {
    const H1Component = animate ? motion.h1 : "h1";
    return (
      <H1Component
        className={`${variantStyles[variant]} ${className}`}
        {...animationProps}
      >
        {children}
      </H1Component>
    );
  }

  if (variant === "h2") {
    const H2Component = animate ? motion.h2 : "h2";
    return (
      <H2Component
        className={`${variantStyles[variant]} ${className}`}
        {...animationProps}
      >
        {children}
      </H2Component>
    );
  }

  if (variant === "h3") {
    const H3Component = animate ? motion.h3 : "h3";
    return (
      <H3Component
        className={`${variantStyles[variant]} ${className}`}
        {...animationProps}
      >
        {children}
      </H3Component>
    );
  }

  if (variant === "h4") {
    const H4Component = animate ? motion.h4 : "h4";
    return (
      <H4Component
        className={`${variantStyles[variant]} ${className}`}
        {...animationProps}
      >
        {children}
      </H4Component>
    );
  }

  return (
    <Component className={`${variantStyles[variant]} ${className}`} {...animationProps}>
      {children}
    </Component>
  );
}

