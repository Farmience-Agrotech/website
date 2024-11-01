"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Cog, Menu, Facebook, Instagram, BookOpen, Rocket, Target, Lightbulb, Recycle, Users, Brain, Coffee, Sparkles, TrendingUp } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

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

export default function AboutPage() {
  const [activeSection] = useState("about")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 relative">
      <DynamicBackground />
      <header className="fixed top-0 left-0 right-0 h-14 flex items-center border-b border-gray-700 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link className="flex items-center" href="/">
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
                className={`text-sm font-medium hover:text-green-400 transition-colors ${activeSection === section ? "text-green-400" : "text-gray-400"
                  }`}
                href={section === "home" ? "/" : `/#${section}`}
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
                    className={`text-sm font-medium hover:text-green-400 transition-colors ${activeSection === section ? "text-green-400" : "text-gray-400"
                      }`}
                    href={section === "home" ? "/" : `/#${section}`}
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
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <div className="flex justify-center mb-12">
              <Image
                src="/logo.png"
                alt="Farmience Logo"
                width={150}
                height={150}
                className="h-[150px] w-[150px]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-center mb-8 text-green-400">
                Who We Are
              </h1>
              <p className="text-xl text-center mb-12 text-white font-semibold">
                &quot;You think you&apos;ve seen innovation? Nah, we&apos;re just getting started!&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <p className="text-lg text-center mb-6 text-white">
                    At Farmience, we&apos;re the rebels of resource efficiency and sustainability. Founded in May 2024, we&apos;re on a mission to create technology that slashes resource waste and boosts sustainability like never before. We may be a small team, but we&apos;ve got the guts, the brains, and just enough caffeine in our veins to change the world. We&apos;re combining cutting-edge tech, innovative solutions, and an obsession with sustainability to bring about a greener, smarter future. 🌱💡
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center">
                      <Rocket className="h-6 w-6 text-green-400 mr-2" />
                      <span className="text-white">Innovative</span>
                    </div>
                    <div className="flex items-center">
                      <Recycle className="h-6 w-6 text-green-400 mr-2" />
                      <span className="text-white">Sustainable</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-6 w-6 text-green-400 mr-2" />
                      <span className="text-white">Caffeinated</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Story</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Sparkles className="h-6 w-6 mr-2" />
                      The Spark
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">It all kicked off at a humble tea stall. Over piping hot chai and biscuits, we realized that solving the world&apos;s environmental mess didn&apos;t need suits and boardrooms. It needed tech, grit, and people who gave a damn.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Users className="h-6 w-6 mr-2" />
                      The Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">We brought together a diverse team of innovators, each with unique skills but a shared passion for sustainability, resource-efficiency, and automation. Our differences became our strength.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Rocket className="h-6 w-6 mr-2" />
                      The Launch
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">In May 2024, we officially launched Farmience. Our mission: to revolutionize industries through innovative, sustainable technologies that maximize efficiency and minimize negative environmental impact.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Vision</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;We&apos;re not here to blend in; we&apos;re here to lead the change!&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <p className="text-lg text-center mb-6 text-white">
                    Our vision? It&apos;s simple: To lead the world towards a future where technology and sustainability go hand-in-hand. We&apos;re creating tech solutions that are not just efficient, but game-changing in reducing waste and conserving resources, all while maximizing productivity. Imagine a world where your business runs at full throttle without leaving a huge carbon footprint behind. Yeah, we&apos;re building that future.
                  </p>
                  <div className="flex justify-center">
                    <Target className="h-16 w-16 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Mission</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;Less talk, more action. Let&apos;s build a better, cleaner world—one byte at a time.&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <p className="text-lg text-center mb-6 text-white">
                    We&apos;re on a mission to make sustainability a reality through practical, tech-driven solutions. Our goal is to give businesses the tools they need to minimize waste, optimize resources, and enhance productivity. No fluff. Just tech that works. From energy conservation to efficient use of raw materials, we&apos;re making sure that sustainability is more than a buzzword—it&apos;s how the future is built. 🔥
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex flex-col items-center">
                      <Lightbulb className="h-12 w-12 text-green-400 mb-2" />
                      <span className="text-white">Innovate</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Cog className="h-12 w-12 text-green-400 mb-2" />
                      <span className="text-white">Optimize</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Zap className="h-12 w-12 text-green-400 mb-2" />
                      <span className="text-white">Energize</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Approach</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;Solving tomorrow&apos;s problems, today!&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Brain className="h-6 w-6 mr-2" />
                      Innovative Thinking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">We approach every challenge with fresh eyes and innovative ideas. Our team thrives on thinking outside the box to create solutions that others might overlook.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <TrendingUp className="h-6 w-6 mr-2" />
                      Continuous Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">We&apos;re never satisfied with the status quo. Our approach involves constant iteration and improvement, always pushing the boundaries of what&apos;s possible.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Users className="h-6 w-6 mr-2" />
                      Collaborative Efforts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">We believe in the power of collaboration. By working closely with our clients and partners, we ensure our solutions are tailored to real-world needs and challenges.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Why We&apos;re Different</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;Because mediocrity is for amateurs, and we&apos;re here to disrupt!&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Users className="h-6 w-6 mr-2" />
                      Scrappy but Smart
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">We&apos;re a small team, but we&apos;re nimble and laser-focused on building the future of tech-driven sustainability. We move fast, innovate faster, and leave bureaucracy in the dust.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Recycle className="h-6 w-6 mr-2" />
                      Relentless Focus on Resource Efficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">Everything we do centers on maximizing efficiency. Whether it&apos;s reducing energy consumption, cutting water waste, or finding new ways to recycle materials, we&apos;re always thinking about how to do more with less.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Zap className="h-6 w-6 mr-2" />
                      Tech-Powered Sustainability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">From AI to IoT to autonomous systems, we&apos;re leveraging the latest tech to create smarter, more efficient solutions.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Values</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;We believe in doing things that make a difference.&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Recycle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white">Resource Efficiency: It&apos;s in our DNA. Every solution we create is designed to optimize the use of resources—whether it&apos;s water, energy, or materials.</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white">Innovation with Purpose: We&apos;re not just innovating for the sake of it. Every breakthrough we make is aimed at solving real-world problems, with sustainability at the core.</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white">Collaboration: We know we can&apos;t do this alone. That&apos;s why we partner with others who share our vision for a sustainable, tech-driven future.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Team</h2>
              <p className="text-xl text-center mb-6 text-white font-semibold">
                &quot;Three brains, one mission.&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/tejas.jpg?height=128&width=128"
                        alt="Tejas"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Tejas</h3>
                    <p className="text-white text-center">The visionary, the hustler, and your favorite problem solver. Leading the charge with bold ideas and a &apos;make it happen&apos; attitude. 🧠💪</p>
                    <div className="flex space-x-4 mt-4">
                      <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Gmail" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Mail className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/lalit.jpg?height=128&width=128"
                        alt="Lalithesh"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Lalithesh</h3>
                    <p className="text-white text-center">The wizard of tech, bringing the vision to life. If it&apos;s broken, he&apos;ll fix it; if it&apos;s impossible, he&apos;ll make it possible. 🔧👨‍💻</p>
                    <div className="flex space-x-4 mt-4">
                      <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Gmail" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Mail className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/pragati.jpg?height=128&width=128"
                        alt="Pragati"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Pragati</h3>
                    <p className="text-white text-center">The strategist, always 10 steps ahead. From operations to partnerships, she&apos;s the glue holding it all together. 🗣️🔥</p>
                    <div className="flex space-x-4 mt-4">
                      <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Gmail" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Mail className="h-5 w-5" />
                      </Link>
                      <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section >
      </main >

      <footer className="relative w-full py-12 bg-gray-900 border-t border-gray-700">
        <div className="container max-w-6xl px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center" href="/">
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
                <Link className="text-sm  text-gray-400 hover:text-green-400 transition-colors" href="/">Home</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="/#projects">Projects</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="/about">About</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="/#achievements">Achievements</Link>
                <Link className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="/#contact">Contact</Link>
              </nav>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-green-400">Newsletter</h3>
              <p className="text-sm text-gray-400">Stay updated with our latest innovations and sustainability efforts.</p>
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
    </div >
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
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
      />
      <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 text-white">
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
import { Mail } from "lucide-react"
import { SiLinkedin as Linkedin, SiGitter as Twitter } from "react-icons/si"
