"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Text, Divider } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function Footer() {
  const { couple, footer, date } = weddingConfig;

  return (
    <footer className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-blush/40 via-wedding-gold-light/50 to-wedding-primary/30" />
      
      {/* Decorative pattern - Hidden on mobile */}
      <div 
        className="absolute inset-0 opacity-5 hidden sm:block" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #8b4513 1px, transparent 0)', 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text variant="script" className="text-wedding-primary text-2xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            {couple.groomShort} & {couple.brideShort}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="body" className="text-wedding-text/80 mb-2 font-medium text-sm sm:text-base">
            {date.displayDate}
          </Text>
        </motion.div>

        <Divider variant="ornate" className="my-6 sm:my-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text variant="h3" className="text-wedding-text mb-6 sm:mb-8 text-lg sm:text-2xl md:text-3xl">
            {footer.message}
          </Text>
        </motion.div>

        {/* Social Links - Clean and simple */}
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center
                       text-wedding-primary hover:bg-wedding-primary hover:text-white
                       shadow-md hover:shadow-lg transition-all duration-300 border border-wedding-primary/20"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center
                       text-wedding-primary hover:bg-wedding-primary hover:text-white
                       shadow-md hover:shadow-lg transition-all duration-300 border border-wedding-primary/20"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>

        {/* Hashtag */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/60 border border-wedding-primary/20 shadow-sm">
            <Text variant="caption" className="text-wedding-primary font-medium text-xs sm:text-sm">
              {couple.hashtag}
            </Text>
          </span>
        </motion.div>

        <motion.div
          className="text-wedding-text/50 text-xs sm:text-sm space-y-1 sm:space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Text variant="caption" className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            {footer.copyright}
          </Text>
          <Text variant="caption" className="text-[10px] sm:text-xs opacity-70">
            Celebrating love in Sri Lanka 🇱🇰
          </Text>
        </motion.div>
      </div>
    </footer>
  );
}
