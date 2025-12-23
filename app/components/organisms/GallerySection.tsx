"use client";

import { motion } from "framer-motion";
import { Text, Divider, Icon } from "../atoms";
import { GalleryItem } from "../molecules";
import { weddingConfig } from "@/app/config/wedding.config";

export function GallerySection() {
  const { gallery, couple } = weddingConfig;

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-background via-wedding-cream to-wedding-blush/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20">
              <Icon name="heart" size="md" className="text-wedding-accent" />
            </div>
          </motion.div>
          <Text variant="h2" className="text-wedding-text mb-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl" animate>
            Our Moments
          </Text>
          <Divider variant="flower" className="my-5 sm:my-8" />
          <Text variant="body" className="text-wedding-text/70 max-w-2xl mx-auto text-sm sm:text-base" animate>
            A glimpse into our journey together
          </Text>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {gallery.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              alt={image.alt}
              credit={image.credit}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-8 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-wedding-gold-light/50 border border-wedding-primary/20">
            <Icon name="instagram" size="sm" className="text-wedding-primary" />
            <Text variant="caption" className="text-wedding-primary font-medium text-[10px] sm:text-sm">
              {couple.hashtag}
            </Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
