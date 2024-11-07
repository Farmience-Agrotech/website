"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, BookOpen, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault()
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
        behavior: "smooth"
    })
}

export default function Footer() {
    return (
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
                            <Link href="https://www.linkedin.com/company/farmience/" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="mailto:support@farmience.com" aria-label="Email" className="text-gray-400 hover:text-green-400 transition-colors">
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
    )
}

function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
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
