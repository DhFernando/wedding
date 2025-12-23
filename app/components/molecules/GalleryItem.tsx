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
      className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[3/2] 
                 border-2 border-white/50"
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
      
      {/* Elegant overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-wedding-primary/60 via-transparent to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   flex items-end p-5"
      >
        {credit && (
          <span className="text-white/90 text-xs font-sans tracking-wide">{credit}</span>
        )}
      </motion.div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/0 
                      group-hover:border-white/60 rounded-tl-lg transition-all duration-300 pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/0 
                      group-hover:border-white/60 rounded-tr-lg transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/0 
                      group-hover:border-white/60 rounded-bl-lg transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/0 
                      group-hover:border-white/60 rounded-br-lg transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
