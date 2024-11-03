"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
    currentPage?: string
    activeSection?: string
}

export default function Header({ currentPage, activeSection }: HeaderProps) {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [currentSection, setCurrentSection] = useState("home")  // Set default to "home"
    const pathname = usePathname()
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
        projects: null,
        about: null,
        achievements: null,
        contact: null,
    })

    // Set up section refs on initial render
    useEffect(() => {
        sectionRefs.current.projects = document.getElementById("projects")
        sectionRefs.current.about = document.getElementById("about")
        sectionRefs.current.achievements = document.getElementById("achievements")
        sectionRefs.current.contact = document.getElementById("contact")
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight
            const currentScroll = window.scrollY
            setScrollProgress((currentScroll / totalScroll) * 100)

            if (pathname === "/") {
                let activeSection = "home" // Default to "home"

                // Check each section to see if it’s currently in view
                for (const [section, element] of Object.entries(sectionRefs.current)) {
                    if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
                        activeSection = section
                    }
                }

                // If no section matches, default back to "home"
                setCurrentSection(activeSection)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const isActive = (section: string) => {
        if (pathname === "/") {
            return currentSection === section
        }
        if (section === "home" && pathname === "/") return true
        return currentPage === section || pathname === `/${section}`
    }

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/#projects" },
        { name: "About", href: "/#about" },
        { name: "Achievements", href: "/#achievements" },
        { name: "Contact", href: "/#contact" },
    ]

    return (
        <>
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
                        {navItems.map((item) => (
                            <Link
                                key={item.name.toLowerCase()}
                                className={`text-sm font-medium hover:text-green-400 transition-colors ${isActive(item.name.toLowerCase()) ? "text-green-400" : "text-gray-400"
                                    }`}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="p-0 md:hidden" aria-label="Open menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-gray-900 text-gray-100">
                            <SheetHeader>
                                <SheetTitle className="text-green-400">Menu</SheetTitle>
                                <SheetDescription className="text-gray-400">Navigate through our site</SheetDescription>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name.toLowerCase()}
                                        className={`text-sm font-medium hover:text-green-400 transition-colors ${isActive(item.name.toLowerCase()) ? "text-green-400" : "text-gray-400"
                                            }`}
                                        href={item.href}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
            <div className="h-1 bg-green-600 fixed top-14 left-0 z-50 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />
        </>
    )
}