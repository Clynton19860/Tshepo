"use client";

import { motion } from "framer-motion";
import { MouseIcon } from "@/components/ui/MouseIcon";

export function ScrollMouse() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
    >
      <MouseIcon onClick={scrollToNext} />
    </motion.div>
  );
}

