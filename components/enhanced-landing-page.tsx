"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Droplet, Zap, Cog, ChevronDown, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import DynamicBackground from "@/components/ui/dynamic_background"

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 relative">
      <DynamicBackground />
      <Header />

      <main className="flex-1 pt-14">
        <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="relative z-10 container max-w-6xl px-4 md:px-6">
            <FadeInSection>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-400">
                    Maximize Efficiency, Minimize Waste — Tech-Driven Sustainability for the Future
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    We create smarter systems that optimize resource use, boost productivity, and ensure your operations are as sustainable as they are profitable. Efficiency and sustainability? We make &apos;em inseparable. 🌱⚡
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Game-Changing Innovations</h2>
            </FadeInSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FadeInSection>
                <ProjectCard
                  icon={<Droplet className="h-8 w-8 text-blue-400 mb-2" />}
                  title="HydroFarm"
                  description="Grow More with Less—Hydroponics Reimagined for Maximum Efficiency"
                  content="HydroFarm isn&apos;t just another farming system. It's a precision-engineered, resource-efficient solution that uses AI and IoT to maximize crop yield while slashing water and energy use. Every drop, every watt, optimized to perfection. 🌾💧"
                  learnMoreLink="/projects/hydrofarm"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  icon={<Zap className="h-8 w-8 text-yellow-400 mb-2" />}
                  title="EcoFuel"
                  description="Waste? What Waste? We Turn It Into Clean Energy"
                  content="We take sewage waste, process it in our high-tech facilities, and deliver clean, compressed biogas straight to you. No need for fancy systems or complicated setups—just pure, efficient energy ready to use. ♻️💥"
                  learnMoreLink="/projects/ecofuel"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  icon={<Cog className="h-8 w-8 text-gray-400 mb-2" />}
                  title="Autonomous Lawn Mower"
                  description="Automated, Efficient, and Sustainable Lawn Care"
                  content="Our autonomous mower does more than just cut grass—it cuts energy use and emissions too. Powered by cutting-edge tech, it delivers precision lawn care with zero human intervention. Maximum efficiency, minimum impact. 🌿⚙️"
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-400">Who We Are: The Sustainability Mavericks</h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At Farmience, we&apos;re not just playing the sustainability game—we&apos;re rewriting the rules. Our mission is simple: maximize resource efficiency while minimizing negative environmental impact. With our tech-driven solutions, we help industries reduce waste, conserve resources, and boost productivity. From clean energy to smarter farming, we fuse AI, IoT, and automation to create systems that work harder, faster, and greener. 🌍🔧
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">We Don&apos;t Just Talk the Talk—We Walk the Walk!</h2>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-400">Ready to transform your farm into a tech-powered beast? Let&apos;s make it happen!</h2>
                  <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                    Power your future with next-gen tech, contact us to learn more about our cutting-edge solutions or to schedule a demo that&apos;ll blow your mind! 🤯⚡
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
      <Footer />
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
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object, snagging the data right from the form
    const formData = new FormData(e.currentTarget);

    // Convert form data into URL-encoded format that Netlify craves
    const data = new URLSearchParams(
      Array.from(formData.entries()).reduce((obj, [key, value]) => {
        obj[key] = value.toString();
        return obj;
      }, {} as Record<string, string>)
    ).toString();

    try {
      // Here’s the sneaky fetch to trick Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      });

      // Mark as submitted if everything didn’t blow up
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending form data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-green-400 font-semibold">
        Thank you for your message! We&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit}
      data-netlify="true"
      method="POST"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input
        name="name"
        placeholder="Your Name"
        className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400"
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400"
        required
      />
      <Input
        name="subject"
        placeholder="Subject"
        className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 text-gray-100 placeholder-gray-400"
        required
      />
      <textarea
        name="message"
        className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 bg-opacity-80 backdrop-blur-sm px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        placeholder="Your Message"
        required
      />
      <Button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
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
