"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Zap, Cog, Menu, Facebook, Twitter, Instagram, Linkedin, Mail, BookOpen } from "lucide-react"
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
              src="/website/logo.png"
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
                    className={`text-sm font-medium hover:text-green-400 transition-colors ${
                      activeSection === section ? "text-green-400" : "text-gray-400"
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
            <div className="flex justify-center mb-12">
                <Image
                    src="/website/logo.png"
                    alt="Farmience Logo"
                    width={400}
                    height={400}
                    className="h-400 w-400"
                />
            </div>
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-center mb-8 text-green-400">
              About Us: The Sustainability Mavericks
            </h1>
            <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
                At Farmience, we&apos;re not just playing the sustainability game—we&apos;re rewriting the rules. Our mission? Maximize resource efficiency while minimizing negative environmental impact.
            </p>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Story</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <p className="text-lg mb-4 text-gray-300">
                    Founded in May 2024, Farmience is still in its early days, but we&apos;re already making noise. What started with just a small team of innovators with a big dream—leveraging tech for sustainability—has quickly turned into a growing movement. We&apos;re not some huge corporation (yet), but our ambition is massive.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                    We may be small, but we&apos;re scrappy, and we&apos;re using our expertise in AI, IoT, automation, and robotics to make resource efficiency not just a goal but a reality.
                </p>
              </div>
              <div className="relative h-64 lg:h-full">
                <Image
                  src="/website/team.jpg?height=400&width=600"
                  alt="Farmience team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Mission</h2>
            <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <p className="text-xl text-center mb-6 text-gray-300">
                  &quot;To revolutionize industries through innovative, sustainable technologies that maximize efficiency and minimize negative environmental impact.&quot;
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Droplet className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Develop cutting-edge solutions for resource conservation</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Harness the power of AI and IoT for smarter, more efficient systems</span>
                  </li>
                  <li className="flex items-start">
                    <Cog className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Create scalable, adaptable technologies for diverse industries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Innovation</h3>
                  <p className="text-gray-300">We&apos;re all about finding new ways to solve old problems. We experiment, we adapt, and we move fast.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Sustainability</h3>
                  <p className="text-gray-300">Every decision we make is guided by its long-term impact on our planet and its resources.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Collaboration</h3>
                  <p className="text-gray-300">We&apos;re building something bigger than ourselves, and partnerships are key to making it happen.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Resource Efficiency</h3>
                  <p className="text-gray-300">We maximize the output with minimal input, making sure nothing goes to waste.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Integrity</h3>
                  <p className="text-gray-300">We don&apos;t cut corners or play dirty—everything we do is rooted in honesty and ethics.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Adaptability</h3>
                  <p className="text-gray-300">The world&apos;s always changing, and so are we. We evolve and pivot to stay ahead of the curve.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Meet Our Founding Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Tejas M K", role: "Founder & CEO", image: "/website/tejas.jpg?height=300&width=300" },
                { name: "Lalithesh K", role: "CTO", image: "/website/lalit.jpg?height=300&width=300" },
                { name: "Pragati Prithvi", role: "COO", image: "/website/pragati.jpg?height=300&width=300" },
              ].map((member) => (
                <Card key={member.name} className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-green-400">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-400">Join Us in Shaping a Sustainable Future</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              We&apos;re still growing, but if you&apos;re someone who&apos;s passionate about sustainability and loves the tech space, hit us up. This is just the beginning, and you can be part of the journey.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Be Part of the Revolution
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="relative w-full py-12 bg-gray-900 border-t border-gray-700">
        <div className="container max-w-6xl px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center" href="/">
                <Image
                  src="/website/logo.png"
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