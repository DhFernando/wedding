"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface DividerProps {
  variant?: "simple" | "ornate" | "flower";
  className?: string;
}

export function Divider({ variant = "simple", className = "" }: DividerProps) {
  if (variant === "simple") {
    return (
      <motion.div
        className={`w-24 h-px bg-wedding-primary/30 mx-auto ${className}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    );
  }

  if (variant === "ornate") {
    return (
      <motion.div
        className={`flex items-center justify-center gap-4 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-wedding-primary/40" />
        <Icon name="heart" size="sm" className="text-wedding-accent" />
        <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-wedding-primary/40" />
      </motion.div>
    );
  }

  if (variant === "flower") {
    return (
      <motion.div
        className={`flex items-center justify-center gap-4 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-wedding-primary/30" />
        <Icon name="flower" size="md" className="text-wedding-accent" animate />
        <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-wedding-primary/30" />
      </motion.div>
    );
  }

  return null;
}

