"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Code, Palette, Rocket, Heart } from "lucide-react";
import { about } from "@/lib/data";

const iconMap: Record<string, typeof Code> = {
  Code,
  Palette,
  Rocket,
  Heart,
};

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <FadeInView className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Main About Card */}
            <StaggerItem>
              <Card className="glass-dark border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl font-display gradient-text">
                    Who I Am
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {about.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {about.secondParagraph}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Skills Preview */}
            <StaggerItem>
              <Card className="glass-dark border-secondary/20 hover:border-secondary/40 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl font-display gradient-text">
                    What I Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {about.whatIDo.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass px-4 py-2 rounded-lg text-center text-sm font-medium text-white hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            <h3 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
              
              <div className="space-y-8">
                {about.journey.map((item, index) => {
                  const icons = [Code, Rocket, Palette, Heart];
                  const Icon = icons[index % icons.length];
                  const isEven = index % 2 === 0;
                  
                  return (
                    <StaggerItem key={item.year}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center gap-6 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Timeline Dot */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 rounded-full glass border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <Card className="flex-1 glass-dark border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl font-display">
                                {item.title}
                              </CardTitle>
                              <span className="text-primary font-bold">{item.year}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-300">
                              {item.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </div>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

