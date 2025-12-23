"use client";

import { motion, type Transition } from "framer-motion";
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
  const transition: Transition = { duration: 0.6, ease: "easeOut" };
  
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition,
      }
    : {};

  const combinedClassName = `${variantStyles[variant]} ${className}`;

  if (variant === "h1") {
    if (animate) {
      return (
        <motion.h1
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          {children}
        </motion.h1>
      );
    }
    return <h1 className={combinedClassName}>{children}</h1>;
  }

  if (variant === "h2") {
    if (animate) {
      return (
        <motion.h2
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          {children}
        </motion.h2>
      );
    }
    return <h2 className={combinedClassName}>{children}</h2>;
  }

  if (variant === "h3") {
    if (animate) {
      return (
        <motion.h3
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          {children}
        </motion.h3>
      );
    }
    return <h3 className={combinedClassName}>{children}</h3>;
  }

  if (variant === "h4") {
    if (animate) {
      return (
        <motion.h4
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          {children}
        </motion.h4>
      );
    }
    return <h4 className={combinedClassName}>{children}</h4>;
  }

  if (animate) {
    return (
      <motion.p
        className={combinedClassName}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={combinedClassName}>{children}</p>;
}
