"use client";

import { motion } from "framer-motion";
import { Text, Divider, Icon } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function StorySection() {
  const { story, couple } = weddingConfig;

  return (
    <section id="story" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Beautiful layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-background via-wedding-cream to-wedding-blush/30" />
      
      {/* Decorative background pattern - Hidden on mobile */}
      <div 
        className="absolute inset-0 opacity-[0.03] hidden sm:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating decorative elements - Hidden on mobile */}
      <motion.div 
        className="absolute top-20 left-[5%] opacity-20 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Icon name="flower" size="xl" className="text-wedding-primary" />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-[8%] opacity-15 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="heart" size="lg" className="text-wedding-accent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-[10%] opacity-20 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Icon name="flower" size="xl" className="text-wedding-accent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-[8%] opacity-15 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Icon name="ring" size="lg" className="text-wedding-primary" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated ring icon */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-wedding-gold-light via-white to-wedding-blush shadow-xl border border-wedding-primary/20">
            <Icon name="ring" size="md" className="text-wedding-primary sm:hidden" />
            <Icon name="ring" size="lg" className="text-wedding-primary hidden sm:block" />
          </div>
        </motion.div>

        {/* Title with elegant styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Text variant="h2" className="text-wedding-text mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {story.title}
          </Text>
          <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
            Where it all began
          </Text>
        </motion.div>

        <Divider variant="flower" className="my-6 sm:my-10" />

        {/* Story content card with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative corners - Hidden on mobile */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-wedding-primary/30 rounded-tl-2xl hidden sm:block" />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-wedding-primary/30 rounded-tr-2xl hidden sm:block" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-wedding-primary/30 rounded-bl-2xl hidden sm:block" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-wedding-primary/30 rounded-br-2xl hidden sm:block" />
          
          <div className="card-elegant rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            {/* Subtle shimmer effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-primary/20 to-transparent" />
            
            {/* Opening quote mark - Smaller on mobile */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:left-10 text-wedding-primary/10 text-5xl sm:text-6xl md:text-8xl font-serif leading-none select-none">
              ❝
            </div>
            
            <Text variant="body" className="text-wedding-text/85 leading-relaxed sm:leading-loose whitespace-pre-line relative z-10 text-sm sm:text-base md:text-lg px-2 sm:px-4">
              {story.content}
            </Text>
            
            {/* Closing quote mark - Smaller on mobile */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:right-10 text-wedding-primary/10 text-5xl sm:text-6xl md:text-8xl font-serif leading-none select-none">
              ❞
            </div>
          </div>
        </motion.div>

        {/* Beautiful quote section */}
        <motion.div
          className="relative mt-10 sm:mt-16 mb-6 sm:mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative line before quote */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="w-10 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-wedding-primary/40" />
            <Icon name="heart" size="sm" className="text-wedding-accent" />
            <span className="w-10 sm:w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-wedding-primary/40" />
          </div>
          
          <blockquote className="relative px-2 sm:px-4 md:px-8">
            <Text variant="script" className="text-wedding-primary text-lg sm:text-2xl md:text-4xl leading-relaxed">
              {story.quote}
            </Text>
          </blockquote>
        </motion.div>

        {/* Couple names signature */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-8 sm:w-12 h-px bg-wedding-primary/40" />
            <Text variant="body" className="text-wedding-primary font-medium tracking-wide text-sm sm:text-base">
              {couple.groomShort} & {couple.brideShort}
            </Text>
            <span className="w-8 sm:w-12 h-px bg-wedding-primary/40" />
          </div>
        </motion.div>

        {/* University badge with enhanced design */}
        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="inline-flex flex-col items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-wedding-gold-light/60 via-white/80 to-wedding-blush/60 border border-wedding-primary/15 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🎓</span>
              <Text variant="caption" className="text-wedding-text/80 text-xs sm:text-sm">
                Where our story began:
              </Text>
            </div>
            <Text variant="body" className="text-wedding-primary font-semibold text-xs sm:text-sm md:text-base text-center">
              University of Sabaragamuwa, Sri Lanka
            </Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
