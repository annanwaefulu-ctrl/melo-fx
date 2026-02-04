'use client';

import React from "react"

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  subtext?: string;
}

export function AnimatedButton({
  children,
  onClick,
  className = '',
  subtext,
}: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`animated-button-border relative px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-primary text-primary font-bold text-sm md:text-base hover:bg-primary hover:text-black hover:!border-primary transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {subtext && (
        <span className="text-xs md:text-sm text-gray-300 block mt-1">
          {subtext}
        </span>
      )}
    </motion.button>
  );
}
