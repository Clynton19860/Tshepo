"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: personalInfo.socialLinks.linkedin,
    color: "text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    url: personalInfo.socialLinks.github,
    color: "text-white",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: personalInfo.socialLinks.twitter,
    color: "text-blue-300",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <StaggerContainer>
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let&apos;s talk!
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <StaggerItem>
              <Card className="glass-dark border-primary/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-display gradient-text">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg glass border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg glass border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg glass border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-primary/20">
                    <p className="text-sm text-gray-400 mb-4">Follow me on</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-lg glass border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                          >
                            <Icon className={`w-6 h-6 ${social.color}`} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Contact Form */}
            <StaggerItem>
              <Card className="glass-dark border-primary/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-display gradient-text">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and I&apos;ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary min-h-[120px]"
                        placeholder="Your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-futuristic hover:opacity-90 transition-opacity"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

