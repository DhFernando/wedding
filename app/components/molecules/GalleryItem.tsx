"use client";

import { motion } from "framer-motion";
import { Image } from "../atoms";

interface GalleryItemProps {
  src: string;
  alt: string;
  credit?: string;
  delay?: number;
}

export function GalleryItem({ src, alt, credit, delay = 0 }: GalleryItemProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl aspect-[3/2] 
                 border sm:border-2 border-white/50"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="transition-all duration-700 group-hover:brightness-95"
        />
      </motion.div>
      
      {/* Elegant overlay on hover - Simplified on mobile */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-wedding-primary/60 via-transparent to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   hidden sm:flex items-end p-3 sm:p-5"
      >
        {credit && (
          <span className="text-white/90 text-[10px] sm:text-xs font-sans tracking-wide">{credit}</span>
        )}
      </motion.div>
      
      {/* Decorative corner accents - Hidden on mobile */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-t sm:border-t-2 border-l sm:border-l-2 border-white/0 
                      group-hover:border-white/60 rounded-tl-md sm:rounded-tl-lg transition-all duration-300 pointer-events-none hidden sm:block" />
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-t sm:border-t-2 border-r sm:border-r-2 border-white/0 
                      group-hover:border-white/60 rounded-tr-md sm:rounded-tr-lg transition-all duration-300 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-b sm:border-b-2 border-l sm:border-l-2 border-white/0 
                      group-hover:border-white/60 rounded-bl-md sm:rounded-bl-lg transition-all duration-300 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-b sm:border-b-2 border-r sm:border-r-2 border-white/0 
                      group-hover:border-white/60 rounded-br-md sm:rounded-br-lg transition-all duration-300 pointer-events-none hidden sm:block" />
    </motion.div>
  );
}
