"use client";

import { motion } from "framer-motion";
import { Text, Button, Divider, Icon } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function EventDetails() {
  const { venue, date } = weddingConfig;

  return (
    <section id="details" className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Elegant layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream via-wedding-background to-wedding-blush/30" />
      
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10zM10 10c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10c0 5.5-4.5 10-10 10S0 25.5 0 20s4.5-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-16 opacity-15"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon name="church" size="xl" className="text-wedding-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-12 opacity-15"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Icon name="party" size="xl" className="text-wedding-accent" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20">
              <Icon name="calendar" size="md" className="text-wedding-primary" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Text variant="h2" className="text-wedding-text mb-2">
              Wedding Celebrations
            </Text>
            <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.25em] text-xs">
              Two ceremonies, one beautiful love
            </Text>
          </motion.div>
          <Divider variant="flower" className="my-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Text variant="body" className="text-wedding-text/70 max-w-2xl mx-auto">
              We would be honored to have you celebrate this special day with us
            </Text>
          </motion.div>
        </div>

        {/* Two Event Cards with enhanced design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-14">
          {/* Church Ceremony Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-br from-wedding-primary/20 to-wedding-accent/20 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div 
              className="relative card-elegant rounded-3xl p-8 md:p-10 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onClick={() => window.open(venue.googleMapsChurch, "_blank")}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-wedding-primary to-transparent rounded-full" />
              
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-wedding-gold-light via-white to-wedding-blush flex items-center justify-center shadow-lg border border-wedding-primary/20"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="church" size="lg" className="text-wedding-primary" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-3">
                <Text variant="caption" className="text-wedding-accent uppercase tracking-[0.2em] text-xs font-medium">
                  Church Ceremony
                </Text>
                <Text variant="h3" className="text-wedding-text">
                  {venue.ceremony.name}
                </Text>
                <Text variant="body" className="text-wedding-text/70">
                  {venue.ceremony.location}
                </Text>
                
                {/* Time badge */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wedding-gold-light/50 border border-wedding-primary/15">
                    <Icon name="clock" size="sm" className="text-wedding-primary" />
                    <Text variant="caption" className="text-wedding-primary font-semibold">
                      {venue.ceremony.time}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-wedding-primary/60 group-hover:text-wedding-primary transition-colors">
                <Icon name="location" size="sm" />
                <Text variant="caption" className="text-xs">Click for directions</Text>
              </div>
            </div>
          </motion.div>

          {/* Poruwa & Reception Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-br from-wedding-accent/20 to-wedding-primary/20 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div 
              className="relative card-elegant rounded-3xl p-8 md:p-10 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onClick={() => window.open(venue.googleMapsReception, "_blank")}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-wedding-accent to-transparent rounded-full" />
              
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-wedding-blush via-white to-wedding-gold-light flex items-center justify-center shadow-lg border border-wedding-accent/20"
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="party" size="lg" className="text-wedding-accent" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-3">
                <Text variant="caption" className="text-wedding-primary uppercase tracking-[0.2em] text-xs font-medium">
                  Poruwa & Reception
                </Text>
                <Text variant="h3" className="text-wedding-text">
                  {venue.reception.name}
                </Text>
                <Text variant="body" className="text-wedding-text/70">
                  {venue.reception.location}
                </Text>
                
                {/* Time badge */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wedding-blush/50 border border-wedding-accent/15">
                    <Icon name="clock" size="sm" className="text-wedding-accent" />
                    <Text variant="caption" className="text-wedding-accent font-semibold">
                      {venue.reception.time}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-wedding-accent/60 group-hover:text-wedding-accent transition-colors">
                <Icon name="location" size="sm" />
                <Text variant="caption" className="text-xs">Click for directions</Text>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Links Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            onClick={() => window.open(venue.googleMapsChurch, "_blank")}
          >
            <span className="flex items-center gap-2">
              <Icon name="location" size="sm" />
              Church Location
            </span>
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open(venue.googleMapsReception, "_blank")}
          >
            <span className="flex items-center gap-2">
              <Icon name="location" size="sm" />
              Reception Venue
            </span>
          </Button>
        </motion.div>

        {/* Additional Info Cards with enhanced design */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Date Card */}
          <motion.div
            className="card-elegant rounded-2xl p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-primary/30 to-transparent" />
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-wedding-gold-light to-wedding-blush flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Icon name="calendar" size="md" className="text-wedding-primary" />
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-xs mb-1">Date</Text>
            <Text variant="h4" className="text-wedding-primary font-semibold">{date.displayDate}</Text>
          </motion.div>

          {/* Time Card */}
          <motion.div
            className="card-elegant rounded-2xl p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-accent/30 to-transparent" />
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-wedding-blush to-wedding-gold-light flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Icon name="clock" size="md" className="text-wedding-accent" />
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-xs mb-1">Time</Text>
            <Text variant="h4" className="text-wedding-accent font-semibold">{date.displayTime}</Text>
          </motion.div>

          {/* Dress Code Card */}
          <motion.div
            className="card-elegant rounded-2xl p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-secondary/30 to-transparent" />
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-wedding-cream to-wedding-blush flex items-center justify-center shadow-md group-hover:scale-110 transition-transform text-2xl">
              👔
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-xs mb-1">Dress Code</Text>
            <Text variant="h4" className="text-wedding-secondary font-semibold">Formal Attire</Text>
            <Text variant="caption" className="text-wedding-text/50 text-xs mt-1">Traditional or Western</Text>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
