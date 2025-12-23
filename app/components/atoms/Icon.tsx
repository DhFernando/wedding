"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaHeart,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GiDiamondRing, GiChurch, GiPartyPopper } from "react-icons/gi";
import { BsFlower1, BsArrowDown } from "react-icons/bs";

const iconMap: Record<string, IconType> = {
  heart: FaHeart,
  calendar: FaCalendarAlt,
  clock: FaClock,
  location: FaMapMarkerAlt,
  email: FaEnvelope,
  phone: FaPhone,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  ring: GiDiamondRing,
  church: GiChurch,
  party: GiPartyPopper,
  flower: BsFlower1,
  arrowDown: BsArrowDown,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

const sizeStyles = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

export function Icon({
  name,
  size = "md",
  className = "",
  animate = false,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  if (animate) {
    return (
      <motion.span
        className={`inline-flex items-center justify-center ${className}`}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <IconComponent className={sizeStyles[size]} />
      </motion.span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent className={sizeStyles[size]} />
    </span>
  );
}
