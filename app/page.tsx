import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import ParallaxProvider from "@/components/shared/parallax-provider"
import BackgroundAnimation from "@/components/shared/background-animation"
import Skills from "@/components/sections/skills"

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio showcasing my work and experience",
}

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="min-h-screen bg-black text-white relative">
        <BackgroundAnimation />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

