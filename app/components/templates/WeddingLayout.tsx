"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface WeddingLayoutProps {
  children: ReactNode;
}

export function WeddingLayout({ children }: WeddingLayoutProps) {
  return (
    <motion.main
      className="min-h-screen bg-wedding-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.main>
  );
}

