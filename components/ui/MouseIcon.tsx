"use client";

import { motion } from "framer-motion";

interface MouseIconProps {
  onClick?: () => void;
  className?: string;
}

export function MouseIcon({ onClick, className = "" }: MouseIconProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer relative ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="32"
        height="48"
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-12 md:w-10 md:h-14"
      >
        {/* Mouse body */}
        <rect
          x="4"
          y="4"
          width="24"
          height="36"
          rx="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
        {/* Scroll wheel */}
        <rect
          x="14"
          y="12"
          width="4"
          height="6"
          rx="2"
          fill="currentColor"
          className="text-primary"
        />
        {/* Animated scroll indicator inside mouse */}
        <motion.rect
          x="14"
          y="20"
          width="4"
          height="8"
          rx="2"
          fill="currentColor"
          className="text-primary/70"
          animate={{
            y: [20, 28, 20],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}

