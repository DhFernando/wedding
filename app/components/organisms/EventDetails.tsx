"use client";

import { motion } from "framer-motion";
import { Text, Button, Divider, Icon } from "../atoms";
import { weddingConfig } from "@/app/config/wedding.config";

export function EventDetails() {
  const { venue, date } = weddingConfig;

  return (
    <section id="details" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Elegant layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream via-wedding-background to-wedding-blush/30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20">
              <Icon name="calendar" size="md" className="text-wedding-primary" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Text variant="h2" className="text-wedding-text mb-1 sm:mb-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
              Wedding Celebrations
            </Text>
            <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs">
              Two ceremonies, one beautiful love
            </Text>
          </motion.div>
          <Divider variant="flower" className="my-6 sm:my-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Text variant="body" className="text-wedding-text/70 max-w-2xl mx-auto text-sm sm:text-base">
              We would be honored to have you celebrate this special day with us
            </Text>
          </motion.div>
        </div>

        {/* Two Event Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-14">
          {/* Church Ceremony Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="relative card-elegant rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onClick={() => window.open(venue.googleMapsChurch, "_blank")}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-wedding-primary to-transparent rounded-full" />
              
              {/* Icon */}
              <motion.div
                className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-wedding-gold-light via-white to-wedding-blush flex items-center justify-center shadow-lg border border-wedding-primary/20"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="church" size="lg" className="text-wedding-primary" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <Text variant="caption" className="text-wedding-accent uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-medium">
                  Church Ceremony
                </Text>
                <Text variant="h3" className="text-wedding-text text-lg sm:text-xl md:text-2xl">
                  {venue.ceremony.name}
                </Text>
                <Text variant="body" className="text-wedding-text/70 text-sm sm:text-base">
                  {venue.ceremony.location}
                </Text>
                
                {/* Time badge */}
                <div className="pt-3 sm:pt-4">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-wedding-gold-light/50 border border-wedding-primary/15">
                    <Icon name="clock" size="sm" className="text-wedding-primary" />
                    <Text variant="caption" className="text-wedding-primary font-semibold text-xs sm:text-sm">
                      {venue.ceremony.time}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-wedding-primary/60 group-hover:text-wedding-primary transition-colors">
                <Icon name="location" size="sm" />
                <Text variant="caption" className="text-[10px] sm:text-xs">Click for directions</Text>
              </div>
            </div>
          </motion.div>

          {/* Poruwa & Reception Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="relative card-elegant rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onClick={() => window.open(venue.googleMapsReception, "_blank")}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-wedding-accent to-transparent rounded-full" />
              
              {/* Icon */}
              <motion.div
                className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-wedding-blush via-white to-wedding-gold-light flex items-center justify-center shadow-lg border border-wedding-accent/20"
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="party" size="lg" className="text-wedding-accent" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <Text variant="caption" className="text-wedding-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-medium">
                  Poruwa & Reception
                </Text>
                <Text variant="h3" className="text-wedding-text text-lg sm:text-xl md:text-2xl">
                  {venue.reception.name}
                </Text>
                <Text variant="body" className="text-wedding-text/70 text-sm sm:text-base">
                  {venue.reception.location}
                </Text>
                
                {/* Time badge */}
                <div className="pt-3 sm:pt-4">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-wedding-blush/50 border border-wedding-accent/15">
                    <Icon name="clock" size="sm" className="text-wedding-accent" />
                    <Text variant="caption" className="text-wedding-accent font-semibold text-xs sm:text-sm">
                      {venue.reception.time}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-wedding-accent/60 group-hover:text-wedding-accent transition-colors">
                <Icon name="location" size="sm" />
                <Text variant="caption" className="text-[10px] sm:text-xs">Click for directions</Text>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Links Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(venue.googleMapsChurch, "_blank")}
            className="w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <Icon name="location" size="sm" />
              Church Location
            </span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(venue.googleMapsReception, "_blank")}
            className="w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <Icon name="location" size="sm" />
              Reception Venue
            </span>
          </Button>
        </motion.div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {/* Date Card */}
          <motion.div
            className="card-elegant rounded-xl sm:rounded-2xl p-3 sm:p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-wedding-gold-light to-wedding-blush flex items-center justify-center shadow-md">
              <Icon name="calendar" size="md" className="text-wedding-primary" />
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-[8px] sm:text-xs mb-0.5 sm:mb-1 block">Date</Text>
            <Text variant="h4" className="text-wedding-primary font-semibold text-[10px] sm:text-base md:text-lg">{date.displayDate}</Text>
          </motion.div>

          {/* Time Card */}
          <motion.div
            className="card-elegant rounded-xl sm:rounded-2xl p-3 sm:p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-wedding-blush to-wedding-gold-light flex items-center justify-center shadow-md">
              <Icon name="clock" size="md" className="text-wedding-accent" />
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-[8px] sm:text-xs mb-0.5 sm:mb-1 block">Time</Text>
            <Text variant="h4" className="text-wedding-accent font-semibold text-[10px] sm:text-base md:text-lg">{date.displayTime}</Text>
          </motion.div>

          {/* Dress Code Card */}
          <motion.div
            className="card-elegant rounded-xl sm:rounded-2xl p-3 sm:p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-wedding-cream to-wedding-blush flex items-center justify-center shadow-md text-base sm:text-2xl">
              👔
            </div>
            <Text variant="caption" className="text-wedding-text/60 uppercase tracking-wider text-[8px] sm:text-xs mb-0.5 sm:mb-1 block">Dress Code</Text>
            <Text variant="h4" className="text-wedding-secondary font-semibold text-[10px] sm:text-base md:text-lg">Formal</Text>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
