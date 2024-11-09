"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Droplet,
    Zap,
    Leaf,
    ChevronRight,
    Sprout,
    Maximize,
    BarChart3,
    PlayCircle,
    CheckCircle2,
    CloudRain,
    Thermometer,
    MapPin,
    Users,
    Cpu,
    Brain,
    Smartphone,
    Cloud,
    Handshake,
    Eye,
    Bot,
    Layers
} from "lucide-react"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import DynamicBackground from "@/components/ui/dynamic_background"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

function Model() {
    const { scene } = useGLTF("/assets/3d/duck.glb")
    return <primitive object={scene} />
}

import { LucideIcon } from "lucide-react";

interface DynamicCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    hoverColor?: string;
}

function DynamicCard({ icon: Icon, title, description, hoverColor = 'green-400' }: DynamicCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className={`bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700 h-full transition-all duration-300 ${isHovered ? `shadow-lg shadow-${hoverColor}/20` : ''}`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                    <Icon className={`h-12 w-12 mb-4 transition-colors duration-300 ${isHovered ? `text-${hoverColor}` : 'text-gray-400'}`} />
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isHovered ? `text-${hoverColor}` : 'text-gray-100'}`}>{title}</h3>
                    <p className="text-gray-300">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default function HydroFarmProject() {
    const [activeSection, setActiveSection] = useState("hero")
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

    const problemItems = [
        { icon: CloudRain, title: "Water Scarcity", description: "Traditional farming wastes water like it’s unlimited. We’re here to change that." },
        { icon: Thermometer, title: "Unpredictable Climate", description: "Random weather patterns keep screwing with crop yields. It’s time for control." },
        { icon: MapPin, title: "Shrinking Arable Land", description: "Farmable land is vanishing thanks to overuse. We need efficient, space-saving solutions." },
        { icon: Zap, title: "Resource Inefficiency", description: "Agriculture gobbles energy and materials like a monster. Let’s tame it." },
        { icon: Users, title: "Growing Demand", description: "Population boom means food demand is sky-high, and traditional methods can’t keep up." },
    ]


    const solutionItems = [
        { icon: Brain, title: "Intelligent Resource Optimization", description: "Advanced AI adapts to each plant's needs, saving resources and maximizing yield through predictive adjustments." },
        { icon: Smartphone, title: "Adaptive System Control", description: "Smart systems auto-adjust climate, light, and nutrients, responding instantly to environmental changes and plant needs." },
        { icon: Cloud, title: "Remote Access & Real-Time Monitoring", description: "Monitor and manage your entire farm remotely, anytime, anywhere, with seamless cloud connectivity." },
        { icon: Layers, title: "Modular & Scalable", description: "Customize, expand, or swap out components as you grow. HydroFarm is designed to scale up with your farm's ambitions." },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 relative">
            <DynamicBackground />
            <Header currentPage="project" />

            <div className="h-1 bg-green-600 fixed top-14 left-0 z-50 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />

            <main className="flex-1 pt-14">
                <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6 text-green-400">
                                HydroFarm: The Modular, Fully-Automated Farming Beast 🌍🌱
                            </h1>
                            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">Your all-in-one powerhouse for AI-driven resource optimization, precision hydroponics, IoT monitoring, and complete climate control. It&quot;s farming that&quot;s smarter, faster, and damn near self-aware</p>
                            <div className="flex justify-center space-x-4">
                                <Button className="bg-green-600 hover:bg-green-700 text-white">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="text-black border-green-400 hover:bg-green-400 hover:text-gray-900">
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id="problem" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-40">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-red-400">The Problem</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
                        >
                            {problemItems.map((item, index) => (
                                <DynamicCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    hoverColor="red-400"
                                />
                            ))}
                        </motion.div>-
                    </div>
                </section>

                <section id="solution" className="relative w-full py-12 md:py-24 lg:py-32">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">The Solution: HydroFarm</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
                        >
                            {solutionItems.map((item, index) => (
                                <DynamicCard key={index} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="features" className="relative w-full py-12 md:py-24 lg:py-32  bg-gray-800 bg-opacity-40">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Key Features</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="grid gap-6 md:grid-cols-3">
                                <DynamicCard
                                    icon={Leaf}
                                    title="Smart Nutrient & Resource Management"
                                    description="AI-driven adjustments to nutrient levels tailored to plant needs, growth stage, and environmental conditions. Say goodbye to over-fertilizing."
                                />

                                <DynamicCard
                                    icon={Thermometer}
                                    title="Full Climate Control"
                                    description="Total control over temperature, humidity, and CO₂ levels, ensuring plants thrive in their ideal environment, rain or shine."
                                />

                                <DynamicCard
                                    icon={Eye}
                                    title="Remote Monitoring & Control"
                                    description="Keep tabs on every part of your farm from anywhere. Access real-time data and control settings via your smartphone or computer."
                                />

                                <DynamicCard
                                    icon={Bot}
                                    title="Automated Farming"
                                    description="Hands-off farming with automated processes for watering, lighting, and nutrient delivery, all handled by smart AI-driven systems."
                                />

                                <DynamicCard
                                    icon={Layers}
                                    title="Modular & Scalable Design"
                                    description="Customize, expand, or swap out components as you grow. HydroFarm is designed to scale up with your farm&quot;s ambitions."
                                />
                                <DynamicCard
                                    icon={BarChart3}
                                    title="Yield Prediction & Harvest Scheduling"
                                    description="AI-driven yield prediction models and automated harvest scheduling ensure you know exactly when and how much to harvest, maximizing efficiency and profitability."
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id="tech" className="relative w-full py-12 md:py-24 lg:py-32">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Advantages</h2>
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
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Space Efficiency:</strong> HydroFarm's vertical farming design maximizes space usage, allowing for higher crop density in smaller areas.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Resource Conservation:</strong> The system uses up to 90% less water and fewer nutrients compared to traditional farming methods.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Sustainability:</strong> HydroFarm reduces the environmental impact of farming by minimizing resource use and enabling local food production.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Scalable:</strong> The modular design allows for easy expansion and customization to meet the needs of growing farms.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Low-Maintenance:</strong> Automated systems handle most of the work, reducing the need for manual labor and maintenance.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>Year-Round Growing:</strong> Controlled environments allow for continuous crop production regardless of external weather conditions.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                <section id="impact" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-40">
                    <div className="container max-w-6xl px-4 md:px-6  mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Real-World Impact</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="grid gap-6 md:grid-cols-3">
                                <DynamicCard
                                    icon={Droplet}
                                    title="Water Conservation"
                                    description="HydroFarm uses up to 90% less water than traditional farming methods, significantly reducing water waste."
                                />
                                <DynamicCard
                                    icon={Sprout}
                                    title="Increased Crop Yield"
                                    description="Our system can produce up to 30% more yield compared to traditional farming methods, enhancing food security."
                                />
                                <DynamicCard
                                    icon={Leaf}
                                    title="Reduced Carbon Footprint"
                                    description="By optimizing resource use and enabling local food production, HydroFarm significantly reduces the carbon footprint associated with agriculture."
                                />
                                <DynamicCard
                                    icon={MapPin}
                                    title="Access to Fresh Produce"
                                    description="HydroFarm ensures a steady supply of fresh, locally-grown produce, reducing the need for long-distance transportation."
                                />
                                <DynamicCard
                                    icon={Users}
                                    title="Support for Local Economy"
                                    description="By promoting local farming, HydroFarm helps boost the local economy and create job opportunities within the community."
                                />
                                <DynamicCard
                                    icon={Cpu}
                                    title="Increased Food Security"
                                    description="HydroFarm's efficient and reliable farming methods contribute to greater food security, ensuring a stable food supply even in challenging conditions."
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id="video" className="relative w-full py-12 md:py-24 lg:py-32">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">See HydroFarm in Action</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-green-400" />
                                </div>
                                <Image
                                    src="/placeholder.svg?height=720&width=1280"
                                    alt="HydroFarm Video Thumbnail"
                                    width={1280}
                                    height={720}
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id="experience" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-40">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Virtual Walkthrough</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Canvas>
                                        <ambientLight />
                                        <pointLight position={[10, 10, 10]} />
                                        <Model />
                                        <OrbitControls />
                                    </Canvas>
                                </Suspense>
                            </div>
                            <p className="text-center mt-4 text-gray-300">Interact with the 3D model to explore HydroFarm's setup</p>
                        </motion.div>
                    </div>
                </section>
        
                <section id="phase" className="relative w-full py-12 md:py-24 lg:py-32">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Project Phase</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-lg font-semibold text-green-400">Development Progress</span>
                                        <span className="text-lg font-semibold text-green-400">15%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                                    </div>
                                    <ul className="mt-6 space-y-2">
                                        <li className="flex items-center text-gray-300">
                                            <BarChart3 className="h-5 w-5 text-green-400 mr-2" />
                                            <span>Research Phase (In Progress)`</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Maximize className="h-5 w-5 text-gray-400 mr-2" />
                                            <span>Prototype Development</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Maximize className="h-5 w-5 text-gray-400 mr-2" />
                                            <span>Initial Field Testing</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Maximize className="h-5 w-5 text-gray-400 mr-2" />
                                            <span>AI Algorithm Refinement</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Maximize className="h-5 w-5 text-gray-400 mr-2" />
                                            <span>Large-Scale Implementation</span>
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Maximize className="h-5 w-5 text-gray-400 mr-2" />
                                            <span>Commercial Launch</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                <section id="cta" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-40">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Join the Future of Farming</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card className="bg-gray-800 bg-opacity-80 backdrop-blur-sm border-gray-700">
                                <CardContent className="p-6">
                                    <p className="text-lg text-center mb-6 text-gray-300">
                                        Be part of the agricultural revolution. Sign up for early access, request a demo, or partner with us to shape the future of sustainable farming.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                                            Sign Up for Early Access
                                        </Button>
                                        <Button variant="outline" className="text-black border-green-400 hover:bg-green-400 hover:text-gray-900">
                                            Request a Demo
                                        </Button>
                                        <Button variant="outline" className="text-black border-green-400 hover:bg-green-400 hover:text-gray-900">
                                            <Handshake className="mr-2 h-4 w-4" />
                                            Partner with Us
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                <section id="faq" className="relative w-full py-12 md:py-24 lg:py-32">
                    <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">Frequently Asked Questions</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-green-400">How does HydroFarm compare to traditional farming?</AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        HydroFarm uses up to 90% less water, produces 30% higher yields, and allows for year-round cultivation regardless of outdoor conditions. It's more efficient, sustainable, and predictable than traditional farming methods.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-green-400">What types of crops can be grown with HydroFarm?</AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        HydroFarm is suitable for a wide variety of crops, including leafy greens, herbs, tomatoes, peppers, and even some root vegetables. We're constantly expanding our crop database to support more varieties.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-green-400">How much technical knowledge is required to operate HydroFarm?</AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        HydroFarm is designed to be user-friendly. While some basic training is provided, the AI-driven system handles most of the complex decisions. You don't need to be a tech expert to successfully operate HydroFarm.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </div>
                </section>
            </main>
            < Footer />
        </div>
    )
}