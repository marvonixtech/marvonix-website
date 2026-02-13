"use client"

import * as React from "react"
import { ArrowRight, Mail, MapPin, Phone, Code, Palette, Smartphone, Sparkles, Zap, Target, Eye, Database, Cloud, Cpu, Server, Globe, Github, Instagram, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Scalable, high-performance web applications built with the latest frameworks and industry best practices.",
  },
  {
    icon: Cpu,
    title: "AI & ML Models",
    description: "Advanced artificial intelligence and machine learning solutions to power intelligent decision making.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creative, user-centric interfaces designed to provide intuitive and engaging digital experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Robust mobile applications for iOS and Android, ensuring seamless performance across all devices.",
  },
]

const features = [
  { icon: Sparkles, label: "Innovation First" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Target, label: "Precision Focused" },
]

const technologies = [
  { icon: Code, label: "Full Stack" },
  { icon: Cpu, label: "AI & Models" },
  { icon: Palette, label: "Modern Design" },
  { icon: Smartphone, label: "Mobile Tech" },
  { icon: Cloud, label: "Cloud Infra" },
  { icon: Database, label: "Big Data" },
]

const projects = [
  {
    title: "Mail Tantra",
    description: "Email campaign management platform with AI-driven content generation, advanced analytics, and seamless integration for personalized marketing strategies.",
    technologies: ["Next.js", "Python", "Flask API", "PostgreSQL"],
    category: "SaaS",
    icon: Cpu,
  },
  {
    title: "E-Commerce Website",
    description: "Feature-rich application with seamless shopping experience, integrated payment gateway, and personalized recommendations for enhanced user engagement.",
    technologies: ["Next.js", "Node.js", "Shopify Headless"],
    category: "Web Development",
    icon: Smartphone,
  },
]

export function HomePage() {
  const [activeSection, setActiveSection] = React.useState("home")
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState("")
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 150
      let currentSection = "home"

      // Find which section we're currently viewing
      navItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            currentSection = item.id
          }
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll() // Initialize on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitError("Name is required")
      return false
    }
    if (!formData.email.trim()) {
      setSubmitError("Email is required")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Please enter a valid email")
      return false
    }
    if (!formData.message.trim()) {
      setSubmitError("Message is required")
      return false
    }
    return true
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setSubmitError("")
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitSuccess(false)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const WEB_APP_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBAPP_URL || ""
      
      const formElement = document.getElementById("contactForm") as HTMLFormElement
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        body: new FormData(formElement),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError("Failed to submit form. Please try again.")
      }
    } catch (error) {
      setSubmitError("An error occurred. Please check the web app URL.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden text-foreground">
      {/* Floating Header */}
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-2"
            : ""
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`flex h-14 items-center justify-between px-6 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-md border shadow-lg"
              : "bg-background/40 backdrop-blur-sm border border-border/40"
          }`}>
            <a href="#home" className="flex items-center gap-2" onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg">Marvonix</span>
            </a>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                    activeSection === item.id 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                size="sm"
                className="hidden md:inline-flex rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Intelligent Solutions for
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-1">
                  Modern Business
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Marvonix delivers excellence in Web Development, AI/ML Models, UI/UX Design, and Mobile Applications to transform your vision into reality.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-4 py-4 text-sm">
                    <feature.icon className="h-4 w-4 mr-2" />
                    {feature.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("about")}>
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experts in Web Development, AI/ML Intelligence, and Mobile Experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-base">
                    Empowering businesses with intelligent digital ecosystems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We specialize in crafting bespoke web platforms, advanced AI models, and 
                    intuitive mobile apps that drive tangible growth and efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-base">
                    Pioneering the next era of intelligent technology
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to bridge the gap between human creativity and artificial intelligence, 
                    building a smarter, more connected future for businesses worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: "15+", label: "Projects Completed" },
                { value: "8+", label: "Happy Clients" },
                { value: "12+", label: "Team Members" },
                { value: "3+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border-2"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 space-y-6"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Technologies We Use</h3>
                <p className="text-muted-foreground">Integrating the latest tech to build the future</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-all hover:border-primary/50 border-2">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <tech.icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{tech.label}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Our Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Showcasing our recent projects and innovative solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-2xl group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm font-semibold text-foreground">Technologies Used:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Let's work together to bring your vision to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Feel free to reach out through any of these channels, and we'll get back
                    to you as soon as possible.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "marvonix.tech@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+44 75703 12715" },
                    { icon: MapPin, label: "Location", value: "London, UK | Surat, India" },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors border-2"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{contact.label}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll be in touch soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="h-10"
                          value={formData.name}
                          onChange={handleFormChange}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="h-10"
                          value={formData.email}
                          onChange={handleFormChange}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={5}
                          className="resize-none"
                          value={formData.message}
                          onChange={handleFormChange}
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      {submitError && (
                        <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                          {submitError}
                        </div>
                      )}
                      {submitSuccess && (
                        <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm">
                          ✓ Message sent successfully! We'll get back to you soon.
                        </div>
                      )}
                      <Button type="submit" variant="outline" className="w-full h-10" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg">Marvonix</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 Marvonix. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/marvonixtech" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919726492494?text=Hi%20MARVONIX" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/marvonix.tech/" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Background Pattern Overlay */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.1] dark:opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} 
      />
    </div>
  )
}
