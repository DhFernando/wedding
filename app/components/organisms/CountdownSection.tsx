"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Text, Divider, Icon } from "../atoms";
import { CountdownItem } from "../molecules";
import { weddingConfig } from "@/app/config/wedding.config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownSection() {
  const { date } = weddingConfig;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2026-10-23T09:00:00");
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-wedding-blush/30 via-wedding-cream to-wedding-background">
        <div className="max-w-4xl mx-auto text-center">
          <Text variant="h2" className="text-wedding-text mb-4">
            Counting Down To Forever
          </Text>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/50 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Beautiful layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-blush/50 via-wedding-gold-light/40 to-wedding-cream" />
      
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-wedding-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-wedding-primary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8860b' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-24 right-20 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="heart" size="xl" className="text-wedding-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Icon name="flower" size="xl" className="text-wedding-accent" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20 mb-4">
            <Icon name="heart" size="md" className="text-wedding-accent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Text variant="h2" className="text-wedding-text mb-2">
            Counting Down To Forever
          </Text>
          <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.25em] text-xs">
            The beginning of our forever
          </Text>
        </motion.div>
        
        <Divider variant="ornate" className="my-10" />

        {/* Countdown items with enhanced styling */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CountdownItem value={timeLeft.days} label="Days" delay={0} />
          <CountdownItem value={timeLeft.hours} label="Hours" delay={0.1} />
          <CountdownItem value={timeLeft.minutes} label="Minutes" delay={0.2} />
          <CountdownItem value={timeLeft.seconds} label="Seconds" delay={0.3} />
        </motion.div>

        {/* Bottom text with enhanced styling */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center gap-3 px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-wedding-primary/10 shadow-lg">
            <Text variant="script" className="text-wedding-primary text-xl md:text-2xl">
              Until we say &ldquo;I Do&rdquo;
            </Text>
            <div className="flex items-center gap-3">
              <Icon name="calendar" size="sm" className="text-wedding-accent" />
              <Text variant="caption" className="text-wedding-text/80 font-medium">
                {date.displayDate}
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
