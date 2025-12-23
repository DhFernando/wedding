"use client";

import { motion } from "framer-motion";
import { Text, Divider, Icon } from "../atoms";
import { GalleryItem } from "../molecules";
import { weddingConfig } from "@/app/config/wedding.config";

export function GallerySection() {
  const { gallery, couple } = weddingConfig;

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-background via-wedding-cream to-wedding-blush/40" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-32 right-16 opacity-15"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="heart" size="xl" className="text-wedding-primary" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-10 opacity-15"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Icon name="flower" size="xl" className="text-wedding-accent" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Icon name="heart" size="lg" className="text-wedding-accent mb-4" animate />
          </motion.div>
          <Text variant="h2" className="text-wedding-text mb-4" animate>
            Our Moments
          </Text>
          <Divider variant="flower" className="my-8" />
          <Text variant="body" className="text-wedding-text/70 max-w-2xl mx-auto" animate>
            A glimpse into our journey together
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-wedding-gold-light/50 border border-wedding-primary/20">
            <Icon name="instagram" size="sm" className="text-wedding-primary" />
            <Text variant="caption" className="text-wedding-primary font-medium">
              Share your photos with us using {couple.hashtag}
            </Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
