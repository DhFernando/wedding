"use client";

import { motion } from "framer-motion";
import { Text, Button, Icon, Divider } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function HeroSection() {
  const { couple, date, heroImage } = weddingConfig;

  const scrollToRSVP = () => {
    const element = document.getElementById("rsvp");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStory = () => {
    const element = document.getElementById("story");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-wedding-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        
        {/* Decorative overlay pattern - hidden on mobile */}
        <div 
          className="absolute inset-0 opacity-10 hidden md:block" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* Floating Decorative Elements - Hidden on mobile for cleaner look */}
      <motion.div
        className="absolute top-16 left-8 md:left-16 text-white/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="flower" size="xl" />
      </motion.div>
      <motion.div
        className="absolute top-28 right-12 md:right-24 text-wedding-accent/40 hidden md:block"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Icon name="ring" size="xl" />
      </motion.div>
      <motion.div
        className="absolute bottom-36 right-8 md:right-16 text-white/20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Icon name="flower" size="xl" />
      </motion.div>
      <motion.div
        className="absolute bottom-48 left-12 md:left-20 text-wedding-accent/30 hidden md:block"
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Icon name="heart" size="lg" />
      </motion.div>

      {/* Decorative corner frames - Hidden on mobile */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl hidden lg:block" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-3xl hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-3xl hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-12 sm:pt-16 pb-28 sm:pb-32">
        {/* Pre-title - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Text variant="caption" className="text-white/95 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm">
              Together with their families
            </Text>
          </div>
        </motion.div>

        {/* Names with elegant animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          {/* Groom's name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text variant="h1" className="text-white mb-1 sm:mb-2 drop-shadow-2xl font-script text-[3rem] sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
              {couple.groomShort}
            </Text>
          </motion.div>
          
          {/* Heart divider */}
          <motion.div
            className="my-3 sm:my-4 md:my-6 flex items-center justify-center gap-4 sm:gap-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <motion.span 
              className="w-12 sm:w-16 md:w-28 h-px bg-gradient-to-r from-transparent via-white/60 to-wedding-accent/80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon name="heart" size="md" className="text-wedding-accent drop-shadow-lg sm:hidden" />
              <Icon name="heart" size="lg" className="text-wedding-accent drop-shadow-lg hidden sm:block" />
            </motion.div>
            <motion.span 
              className="w-12 sm:w-16 md:w-28 h-px bg-gradient-to-l from-transparent via-white/60 to-wedding-accent/80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
          
          {/* Bride's name */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Text variant="h1" className="text-white drop-shadow-2xl font-script text-[3rem] sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
              {couple.brideShort}
            </Text>
          </motion.div>
        </motion.div>

        {/* Small decorative heart - Mobile only */}
        <motion.div
          className="flex justify-center my-4 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Icon name="heart" size="sm" className="text-wedding-accent/60" />
        </motion.div>

        {/* Elegant divider - Hidden on mobile, shown on larger screens */}
        <motion.div
          className="my-6 sm:my-8 md:my-10 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Divider variant="ornate" />
        </motion.div>

        {/* Date and invite text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-2 sm:space-y-3"
        >
          <Text variant="caption" className="text-wedding-accent uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs md:text-sm font-medium">
            Request the pleasure of your company
          </Text>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="w-6 sm:w-8 h-px bg-white/40" />
            <Text variant="h3" className="text-white font-light tracking-wide text-xl sm:text-2xl md:text-3xl">
              {date.displayDate}
            </Text>
            <span className="w-6 sm:w-8 h-px bg-white/40" />
          </div>
          <Text variant="body" className="text-white/70 italic text-xs sm:text-sm">
            Save the Date
          </Text>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 sm:mt-10"
        >
          <Button 
            variant="outline" 
            size="md" 
            onClick={scrollToRSVP} 
            className="border-2 border-white/70 text-white hover:bg-white hover:text-wedding-primary backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base tracking-wider sm:tracking-widest"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Icon name="heart" size="sm" />
              RSVP NOW
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Better positioned for mobile */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToStory}
      >
        <Text variant="caption" className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          Scroll
        </Text>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="arrowDown" size="sm" className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
