"use client";

import { motion } from "framer-motion";
import { Text } from "../atoms";

interface CountdownItemProps {
  value: number;
  label: string;
  delay?: number;
}

export function CountdownItem({ value, label, delay = 0 }: CountdownItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut", type: "spring" }}
    >
      <motion.div
        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Outer glow ring - Subtle on mobile */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-wedding-primary/10 sm:from-wedding-primary/20 to-wedding-accent/10 sm:to-wedding-accent/20 blur-sm sm:blur-md" />
        
        {/* Main circle with gradient */}
        <div className="absolute inset-0.5 sm:inset-1 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-gold-light shadow-lg sm:shadow-xl border sm:border-2 border-wedding-primary/20" />
        
        {/* Inner decorative ring - Hidden on mobile */}
        <div className="absolute inset-3 rounded-full border border-wedding-primary/10 hidden sm:block" />
        
        {/* Number display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-wedding-primary font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif">
              {value.toString().padStart(2, "0")}
            </span>
          </motion.div>
        </div>
        
        {/* Shimmer effect - Hidden on mobile for performance */}
        <div className="absolute inset-0 rounded-full overflow-hidden hidden sm:block">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
            animate={{ translateX: ["100%", "-100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: delay * 2 }}
          />
        </div>
      </motion.div>
      
      {/* Label */}
      <motion.div 
        className="mt-2 sm:mt-4 md:mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
      >
        <Text variant="caption" className="text-wedding-text/80 uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[9px] sm:text-xs md:text-sm font-medium">
          {label}
        </Text>
      </motion.div>
    </motion.div>
  );
}
