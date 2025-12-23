"use client";

import { motion } from "framer-motion";
import { Text, Icon } from "../atoms";

interface InfoCardProps {
  icon: "church" | "party" | "calendar" | "clock" | "location" | "ring";
  title: string;
  description: string;
  subtext?: string;
  extra?: string;
  delay?: number;
  onClick?: () => void;
}

export function InfoCard({
  icon,
  title,
  description,
  subtext,
  extra,
  delay = 0,
  onClick,
}: InfoCardProps) {
  return (
    <motion.div
      className="card-elegant rounded-3xl p-8 md:p-10 text-center cursor-pointer
                 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="w-20 h-20 mx-auto mb-6 rounded-full 
                   bg-gradient-to-br from-wedding-gold-light to-wedding-blush
                   flex items-center justify-center shadow-lg"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon name={icon} size="lg" className="text-wedding-primary" />
      </motion.div>
      
      <Text variant="h4" className="text-wedding-text mb-3 font-semibold">
        {title}
      </Text>
      
      <Text variant="body" className="text-wedding-primary font-medium mb-2">
        {description}
      </Text>
      
      {subtext && (
        <Text variant="caption" className="text-wedding-text/70 mb-1">
          {subtext}
        </Text>
      )}

      {extra && (
        <div className="mt-4 pt-4 border-t border-wedding-primary/10">
          <Text variant="caption" className="text-wedding-accent font-medium uppercase tracking-wider">
            {extra}
          </Text>
        </div>
      )}
    </motion.div>
  );
}
