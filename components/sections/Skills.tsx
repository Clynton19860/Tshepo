"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useState } from "react";
import { skills } from "@/lib/data";

const skillCategories = [
  {
    name: "Frontend",
    skills: skills.frontend.map(s => ({ ...s, color: "primary" })),
  },
  {
    name: "Backend",
    skills: skills.backend.map(s => ({ ...s, color: "secondary" })),
  },
  {
    name: "Tools & Others",
    skills: skills.tools.map(s => ({ ...s, color: "accent" })),
  },
];

interface SkillBarProps {
  skill: { name: string; level: number; color: string };
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full ${colorClasses[skill.color as keyof typeof colorClasses]} rounded-full relative`}
        >
          <motion.div
            animate={isHovered ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-white/30"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  return (
    <StaggerItem>
      <Card className="glass-dark border-primary/20 hover:border-primary/40 transition-all duration-300 group h-full">
        <CardHeader>
          <CardTitle className="text-2xl font-display gradient-text">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={skillIndex}
            />
          ))}
        </CardContent>
      </Card>
    </StaggerItem>
  );
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <FadeInView className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </FadeInView>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.name} category={category} index={index} />
            ))}
          </div>

          {/* All Skills Badges */}
          <FadeInView>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                All Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="cursor-pointer"
                  >
                    <Badge
                      variant="outline"
                      className="glass border-primary/30 hover:border-primary hover:bg-primary/10 px-4 py-2 text-base"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>
        </StaggerContainer>
      </div>
    </section>
  );
}

