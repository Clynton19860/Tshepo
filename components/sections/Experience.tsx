"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience as experiencesData } from "@/lib/data";

const experiences = experiencesData;

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <FadeInView className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
              Work Experience
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made
            </p>
          </FadeInView>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <StaggerItem key={experience.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-0 top-6 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />
                    </div>

                    <Card className="glass-dark border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-display text-white group-hover:text-primary transition-colors mb-2">
                              {experience.role}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-3">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <span className="font-medium">{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{experience.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <CardDescription className="text-gray-300 leading-relaxed">
                          {experience.description}
                        </CardDescription>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + idx * 0.1 }}
                                className="flex items-start gap-2 text-sm text-gray-300"
                              >
                                <span className="text-primary mt-1">▹</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

