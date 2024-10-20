"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Droplet, Zap, Cog, Menu, ChevronDown, Award, Facebook, Twitter, Instagram, Linkedin, Mail, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { motion } from "framer-motion"

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return { ref, isVisible }
}

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>, targetId: string) => {
  e.preventDefault()
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth"
  })
}

export function EnhancedLandingPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)

      const sections = ["home", "projects", "about", "achievements", "contact"]
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 relative">
      <DynamicBackground />
      
      <header className="fixed top-0 left-0 right-0 h-14 flex items-center border-b border-gray-700 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Image
              src="/logo.png"
              alt="Farmience"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="ml-2 text-2xl font-bold text-gray-100">Farmience</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            {["home", "projects", "about", "achievements", "contact"].map((section) => (
              <Link
                key={section}
                className={`text-sm font-medium hover:text-green-400 transition-colors ${
                  activeSection === section ? "text-green-400" : "text-gray-400"
                }`}
                href={`#${section}`}
                onClick={(e) => smoothScroll(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-900 text-gray-100">
              <SheetHeader>
                <SheetTitle className="text-green-400">Menu</SheetTitle>
                <SheetDescription className="text-gray-400">Navigate through our site</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {["home", "projects", "about", "achievements", "contact"].map((section) => (
                  <Link
                    key={section}
                    className={`text-sm font-medium hover:text-green-400 transition-colors ${
                      activeSection === section ? "text-green-400" : "text-gray-400"
                    }`}
                    href={`#${section}`}
                    onClick={(e) => {
                      smoothScroll(e, section);
                      // Close the sheet
                      const closeEvent = new Event('click');
                      document.querySelector('[data-state="open"]')?.dispatchEvent(closeEvent);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      
      <div className="h-1 bg-green-600 fixed top-14 left-0 z-50 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />
      
      <main className="flex-1 pt-14">
        <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <FadeInSection>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-400">
                    Engineering Sustainable Solutions for a Resource-Efficient Future
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">At Farmience, we&apos;re revolutionizing industries with technology that maximizes resource efficiency and sustainability. Whether it’s AI-driven automation, IoT-powered solutions, or renewable energy integration, we’re leading the charge for a smarter, greener world. Our projects tackle global challenges like waste reduction, energy optimization, and environmental impact by creating tech that’s scalable, accessible, and incredibly efficient.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => smoothScroll(e, "about")}>Learn More</Button>
                  <Button variant="outline" className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => smoothScroll(e, "contact")}>Contact Us</Button>
                </div>
              </div>
            </FadeInSection>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Link href="#projects" onClick={(e) => smoothScroll(e, "projects")}>
                <ChevronDown className="h-8 w-8 text-green-400 animate-bounce" />
              </Link>
            </div>
          </div>
        </section>
        
        <section id="projects" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <FadeInSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Projects</h2>
            </FadeInSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FadeInSection>
                <ProjectCard
                  icon={<Droplet className="h-8 w-8 text-blue-400 mb-2" />}
                  title="HydroFarm"
                  description="Advanced hydroponic farming solutions"
                  content="Maximize crop yields with minimal resource usage through our state-of-the-art hydroponic systems. Our HydroFarm technology integrates AI-driven climate control, precision nutrient delivery, and real-time monitoring to create the perfect environment for plant growth."
                  learnMoreLink="/projects/hydrofarm"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  icon={<Zap className="h-8 w-8 text-yellow-400 mb-2" />}
                  title="EcoFuel"
                  description="Sustainable biofuel production"
                  content="Transform wastewater into clean, renewable energy with EcoFuel. Using advanced biotechnology, we convert muncipal and industrial wastewater into compressed biogas (CBG) through an efficient anaerobic digestion process. EcoFuel is scalable, sustainable, and turns waste into a powerful resource, reducing environmental impact while fueling a cleaner future. It's not just green energy; it's the future of resource-efficient innovation. 💥🌱⚡"
                  learnMoreLink="/projects/ecofuel"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  icon={<Cog className="h-8 w-8 text-gray-400 mb-2" />}
                  title="Autonomous Lawn Mower"
                  description="Smart landscaping solution"
                  content="Automate lawn maintenance with AI-driven precision. Our smart mower is packed with advanced sensors and machine learning algorithms, ensuring maximum efficiency with minimum energy. Perfect for urban spaces that demand sustainable landscaping solutions."
                  learnMoreLink="/projects/autonomous-mower"
                />
              </FadeInSection>
            </div>
          </div>
        </section>
        
        <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeInSection>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-400">About Farmience</h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Farmience was born out of a passion to solve global challenges with tech that transforms industries. From sustainable urban farming to cutting-edge energy solutions, we combine AI, IoT, and automation to build a future where resource efficiency isn’t just an option — it’s the standard. Every project we tackle is designed to make a measurable impact, while being scalable, sustainable, and accessible.
                  </p>
                  <Link href="/about" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-fit">
                    Learn More About Us
                  </Link>
                </div>
              </FadeInSection>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <AnimatedListItem text="Relentlessly focused on cutting resource waste and maximizing sustainability through advanced tech solutions" />
                  <AnimatedListItem text="Delivering tech-driven, scalable solutions for industries, from agriculture to clean energy, with the power of AI, automation, and biotech" />
                  <AnimatedListItem text="A team of tech wizards and eco-innovators, blending expertise in AI, biotech, and automation to redefine sustainability across industries. 💻⚡" />
                  <AnimatedListItem text="Always innovating, always pushing boundaries. Our R&D focuses on next-gen solutions that make sustainability scalable, efficient, and impactful. 🔬🧠" />
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="achievements" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-950 bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <FadeInSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Recognitions & Achievements</h2>
            </FadeInSection>
            <div className="flex justify-center">
              <FadeInSection>
                <AchievementCard
                  icon={<Award className="h-12 w-12 text-green-400" />}
                  title="Startup India Recognized"
                  imageSrc="/startup_india.png?height=100&width=200"
                  imageAlt="Startup India Badge"
                  content="Recognized by Startup India for pushing boundaries in sustainable technology and innovation"
                />
              </FadeInSection>
            </div>
          </div>
        </section>
        
        <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <FadeInSection>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-400">Get in Touch</h2>
                  <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Wanna power your future with next-gen tech? Contact us to learn more about our cutting-edge solutions or to schedule a demo that’ll blow your mind! 🤯⚡
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  
                  <ContactForm />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      
      <footer className="relative w-full py-12 bg-gray-900 border-t border-gray-700">
        <div className="relative z-10 container max-w-6xl px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center" href="#">
                <Image
                  src="/logo.png"
                  alt="Farmience Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="ml-2 text-2xl font-bold text-gray-100">Farmience</span>
              </Link>
              <p className="text-sm text-gray-400">
              Shaping a greener, smarter future with tech that slays inefficiency and powers up sustainability. 💪🌍
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#home" onClick={(e) => smoothScroll(e, "home")}>Home</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#projects" onClick={(e) => smoothScroll(e, "projects")}>Projects</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#about" onClick={(e) => smoothScroll(e, "about")}>About</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#achievements" onClick={(e) => smoothScroll(e, "achievements")}>Achievements</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#contact" onClick={(e) => smoothScroll(e, "contact")}>Contact</Link>
              </nav>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-green-400">Newsletter</h3>
              <p className="text-sm text-gray-400">Wanna stay ahead of the curve? Subscribe now for the latest in tech, sustainability, and mind-blowing innovations straight from the eco-future we&apos;re building. 🌱💻🔥</p>
              <NewsletterForm />
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Email" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Medium" className="text-gray-400 hover:text-green-400 transition-colors">
                  <BookOpen className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 Farmience. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

import { ReactNode } from "react";

function FadeInSection({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  learnMoreLink: string;
}

function ProjectCard({ icon, title, description, content, learnMoreLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card 
      className={`bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg shadow-green-500/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        {icon}
        <CardTitle className="text-gray-100">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-gray-300">
        <p className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-20 overflow-hidden'}`}>
          {content}
        </p>
        <div className="mt-4 flex justify-between items-center">
          {!isExpanded && (
            <Button variant="link" className="text-green-400" onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(true)
            }}>
              Read More
            </Button>
          )}
          <Link href={learnMoreLink} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Learn More
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
}

function AchievementCard({ icon, title, imageSrc, imageAlt, content }: AchievementCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card 
      className={`bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg shadow-green-500/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        <div className="mx-auto mb-4">
          {icon}
        </div>
        <CardTitle className="text-center text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={200}
            height={100}
            className="mx-auto mb-4"
          />
        )}
        <p className={`text-gray-300 transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-20 overflow-hidden'}`}>
          {content}
        </p>
        {!isExpanded && (
          <Button variant="link" className="mt-2 text-green-400" onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(true)
          }}>
            Read More
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function AnimatedListItem({ text }: { text: string }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <li ref={ref} className={`flex items-center space-x-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
      <CheckIcon className="h-6 w-6 text-green-400" />
      <span className="text-gray-300">{text}</span>
    </li>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="text-green-400 font-semibold">
        Thank you for your message! We&apos;ll get back to you soon.
      </div>
    )
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <Input placeholder="Your Name" className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400" required />
      <Input type="email" placeholder="Your Email" className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400" required />
      <Input placeholder="Subject" className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400" required />
      <textarea
        className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-80 backdrop-blur-sm px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        placeholder="Your Message"
        required
      />
      <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <p className="text-sm text-green-400">Thank you for subscribing to our newsletter!</p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        required
        className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
      />
      <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 text-white">
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

import { SVGProps } from "react";

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
