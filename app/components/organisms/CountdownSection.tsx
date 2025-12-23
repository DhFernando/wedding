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

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-wedding-blush/30 via-wedding-cream to-wedding-background">
        <div className="max-w-4xl mx-auto text-center">
          <Text variant="h2" className="text-wedding-text mb-4 text-2xl sm:text-3xl md:text-4xl">
            Counting Down To Forever
          </Text>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mt-8 sm:mt-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-white/50 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Beautiful layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-blush/50 via-wedding-gold-light/40 to-wedding-cream" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-4"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20 mb-3 sm:mb-4">
            <Icon name="heart" size="md" className="text-wedding-accent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Text variant="h2" className="text-wedding-text mb-1 sm:mb-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            Counting Down To Forever
          </Text>
          <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs">
            The beginning of our forever
          </Text>
        </motion.div>
        
        <Divider variant="ornate" className="my-6 sm:my-10" />

        {/* Countdown items */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10"
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

        {/* Bottom text */}
        <motion.div
          className="mt-8 sm:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm border border-wedding-primary/10 shadow-lg">
            <Text variant="script" className="text-wedding-primary text-base sm:text-xl md:text-2xl">
              Until we say &ldquo;I Do&rdquo;
            </Text>
            <div className="flex items-center gap-2 sm:gap-3">
              <Icon name="calendar" size="sm" className="text-wedding-accent" />
              <Text variant="caption" className="text-wedding-text/80 font-medium text-xs sm:text-sm">
                {date.displayDate}
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
