"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { ExternalLink, Github, Code } from "lucide-react";
import { useState } from "react";
import { projects as projectsData } from "@/lib/data";

const projects = projectsData;

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <FadeInView className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and creativity
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="glass-dark border-primary/20 hover:border-primary/40 transition-all duration-300 group h-full flex flex-col overflow-hidden">
                    {/* Project Image Placeholder */}
                    <div className="relative h-48 bg-gradient-futuristic overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-primary text-black">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="w-16 h-16 text-white/50" />
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-display text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 mt-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 glass border-primary/30 hover:bg-primary/10"
                              onClick={() => setSelectedProject(project)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass-dark border-primary/20 max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-display gradient-text">
                                {project.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-300">
                                {project.longDescription}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="border-primary/30 text-primary"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex gap-4 pt-4">
                                <Button
                                  variant="default"
                                  className="flex-1"
                                  onClick={() => window.open(project.live, "_blank")}
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Button>
                                <Button
                                  variant="outline"
                                  className="flex-1 glass border-primary/30"
                                  onClick={() => window.open(project.github, "_blank")}
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  View Code
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

