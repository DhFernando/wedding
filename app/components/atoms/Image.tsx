"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  hoverEffect?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  animate = false,
  hoverEffect = false,
}: ImageProps) {
  const imageElement = (
    <NextImage
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={`object-cover ${className}`}
      unoptimized={src.startsWith("http")}
    />
  );

  if (animate || hoverEffect) {
    return (
      <motion.div
        className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}
        initial={animate ? { opacity: 0, scale: 0.95 } : undefined}
        whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={hoverEffect ? { scale: 1.05 } : undefined}
      >
        {imageElement}
      </motion.div>
    );
  }

  return imageElement;
}

