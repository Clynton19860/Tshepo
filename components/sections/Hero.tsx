"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MouseIcon } from "@/components/ui/MouseIcon";
import Galaxy from "@/components/effects/Galaxy";
import { GradientBackground } from "@/components/effects/GradientBackground";
import { fadeInUp, slideInLeft } from "@/lib/animations";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const current = personalInfo.roles[currentRole];

    if (!isDeleting && displayText.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % personalInfo.roles.length);
    }
  }, [displayText, isDeleting, currentRole]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Heading with 3D Effect */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold gradient-text px-4"
              style={{
                textShadow: "0 0 40px rgba(0, 217, 255, 0.5)",
              }}
            >
              {personalInfo.name}
            </motion.h1>
            
            {/* Typing Effect */}
            <motion.div
              variants={slideInLeft}
              className="h-12 sm:h-16 flex items-center justify-center px-4"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-semibold text-white text-center">
                I&apos;m a{" "}
                <span className="gradient-text inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[400px]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl px-4 text-center"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 px-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-futuristic hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={scrollToNext}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group glass hover:bg-primary/10 hover:border-primary transition-all w-full sm:w-auto"
              onClick={() => window.open(personalInfo.resume, "_blank")}
            >
              <span className="flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </span>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Floating Geometric Shapes - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-secondary/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: 360,
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-20 w-16 h-16 border-2 border-accent/30"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>
    </section>
  );
}

