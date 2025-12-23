"use client";

import { motion } from "framer-motion";
import { Text, Divider, Icon } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function Footer() {
  const { couple, footer, date } = weddingConfig;

  return (
    <footer className="py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-blush/40 via-wedding-gold-light/50 to-wedding-primary/30" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8b4513 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text variant="script" className="text-wedding-primary text-4xl md:text-5xl mb-6">
            {couple.groomShort} & {couple.brideShort}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="body" className="text-wedding-text/80 mb-2 font-medium">
            {date.displayDate}
          </Text>
        </motion.div>

        <Divider variant="ornate" className="my-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text variant="h3" className="text-wedding-text mb-8">
            {footer.message}
          </Text>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#"
            className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center
                       text-wedding-primary hover:bg-wedding-primary hover:text-white
                       shadow-lg transition-all duration-300 border border-wedding-primary/20"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="instagram" size="md" />
          </motion.a>
          <motion.a
            href="#"
            className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center
                       text-wedding-primary hover:bg-wedding-primary hover:text-white
                       shadow-lg transition-all duration-300 border border-wedding-primary/20"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="facebook" size="md" />
          </motion.a>
        </motion.div>

        {/* Hashtag */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-block px-6 py-2 rounded-full bg-white/60 border border-wedding-primary/20 shadow-sm">
            <Text variant="caption" className="text-wedding-primary font-medium">
              {couple.hashtag}
            </Text>
          </span>
        </motion.div>

        <motion.div
          className="text-wedding-text/50 text-sm space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Text variant="caption" className="flex items-center justify-center gap-2">
            {footer.copyright}
          </Text>
          <Text variant="caption" className="text-xs opacity-70">
            Celebrating love in Sri Lanka
          </Text>
        </motion.div>
      </div>
    </footer>
  );
}
