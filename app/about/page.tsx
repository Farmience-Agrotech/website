"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Cog, Rocket, Target, Lightbulb, Recycle, Users, Brain, Sparkles, TrendingUp, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import DynamicBackground from "@/components/ui/dynamic_background"

export default function AboutPage() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 relative">
      <DynamicBackground />
      <Header currentPage="about" />

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
                &quot;Innovation isn&apos;t a trend; it&apos;s our obsession—and we&apos;re only getting warmed up&quot;
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
                    At Farmience, we're not just following trends—we&apos;re setting them. Founded in May 2024, our mission is clear: to create technology that slashes resource waste and pushes sustainability to new heights. We may be a small team, but we&apos;ve got the vision, the expertise, and the grit to make a real impact. With a relentless focus on cutting-edge innovation and an unyielding commitment to sustainability, we&apos;re paving the way for a smarter, greener future.
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
                      <Sparkles className="h-6 w-6 text-green-400 mr-2" />
                      <span className="text-white">Impactful</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-800 bg-opacity-50">
          <div className="container max-w-6xl px</div>-4 md:px-6 mx-auto">
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
                    <p className="text-white">It all started with a no-bull vision: disrupt the status quo and reshape sustainability from the roots up.</p>
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
                    <p className="text-white">We brought together a squad of tech experts, green visionaries, and zero patience for half-measures.</p>
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
                    <p className="text-white">May 2024: Farmience hits the ground running with a mission to redefine the future through tech, resource efficiency, and sheer determination.</p>
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
                &quot;Setting a new standard for a sustainable future&quot;
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
                    To lead a transformative shift across industries, setting a new standard where sustainability and resource efficiency are essential and achievable. We&apos;re creating intelligent, scalable solutions that redefine what&apos;s possible, empowering every sector we touch to operate smarter, cleaner, and with greater impact.
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
                &quot;Driving impact through innovation and technology&quot;
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
                  Farmience is on a mission to drive meaningful change through technology. We&apos;re dedicated to developing advanced, scalable tools that solve critical challenges in resource efficiency and sustainability. By harnessing AI, IoT, and automation, we aim to reshape industries from agriculture to energy, delivering solutions that meet today&apos;s demands while safeguarding tomorrow. With each innovation, we&apos;re not just meeting needs—we&apos;re building a sustainable future.
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
                &quot;Engineering solutions today that shape a smarter, sustainable tomorrow&quot;
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
                    <p className="text-white">We challenge every norm, design every breakthrough to solve what others ignore.</p>
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
                    <p className="text-white">We&apos;re never &quot;done&quot;; our obsession with refining means there&apos;s always another level to hit.</p>
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
                    <p className="text-white">Partnerships with purpose—because true change takes a global team effort.</p>
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
                &quot;Focused on results, driven by innovation—we build for the future, not the status quo&quot;
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
                      Strategy Built Smart
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">Every tool, every solution, is made to maximize impact and waste nothing.</p>
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
                    <p className="text-white">We&apos;re ruthless in efficiency—constantly re-engineering to do more with less.</p>
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
                    <p className="text-white">From AI to autonomous systems, we&apos;re bringing next-gen tech to next-gen problems.</p>
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
                &quot;We&apos;re here to make an impact—and we do it the right way&quot;
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
                      <span className="text-white">Resource Efficiency: Embedded in our DNA. Every solution we design prioritizes optimizing resources—be it water, energy, or materials—without compromise.</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white">Purpose-Driven Innovation: We don&apos;t innovate for the sake of it. Every breakthrough addresses real-world challenges, with sustainability at the heart of everything we do.</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white">Collaboration: We know the importance of unity. That&apos;s why we align with partners who share our commitment to a sustainable, tech-driven future.</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-400">The Founding Team</h2>
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
                    <h2 className="text-xl font-semibold mb-2 text-green-400">Tejas</h2>
                    <h4 className="text-xl font-semibold mb-2 text-green-200">Founder & CEO</h4>
                    <p className="text-white text-center">&quot;Driving innovation with bold ideas and a relentless pursuit of impact&quot;</p>
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
                    <h4 className="text-xl font-semibold mb-2 text-green-200">Chief Technical Officer</h4>
                    <p className="text-white text-center">Creative problem-solver, passionate about driving sustainable change</p>
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
                    <h4 className="text-xl font-semibold mb-2 text-green-200">Chief Operations Officer</h4>
                    <p className="text-white text-center">Strategic thinker, focused on transforming challenges into opportunities</p>
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
      <Footer />
    </div >
  )
}