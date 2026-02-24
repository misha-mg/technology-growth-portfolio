"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide5 from "@/components/slides/slide-5"
import Slide6 from "@/components/slides/slide-6"
import Slide7 from "@/components/slides/slide-7"
import Slide8 from "@/components/slides/slide-8"
import Slide9 from "@/components/slides/slide-9"
import Slide10 from "@/components/slides/slide-10"
import Slide11 from "@/components/slides/slide-11"
import Slide12 from "@/components/slides/slide-12"
import Slide13 from "@/components/slides/slide-13"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)
  const totalSlides = 13

  const handleScroll = (direction: "up" | "down") => {
    if (isScrolling) return

    setIsScrolling(true)

    if (direction === "down" && activeSlide < totalSlides) {
      setActiveSlide((prev) => prev + 1)
    } else if (direction === "up" && activeSlide > 1) {
      setActiveSlide((prev) => prev - 1)
    }

    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        handleScroll("down")
      } else if (e.key === "ArrowUp") {
        handleScroll("up")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSlide, isScrolling])

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      handleScroll("down")
    } else {
      handleScroll("up")
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden" onWheel={handleWheel}>
      <div className="fixed top-5 right-5 z-50">
        <Navigation activeSlide={activeSlide} totalSlides={totalSlides} onNavigate={setActiveSlide} />
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        {activeSlide < totalSlides && (
          <motion.button
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            onClick={() => handleScroll("down")}
            className="p-2 rounded-full bg-[#4a5565] text-white mb-2"
          >
            <ChevronDown size={24} />
          </motion.button>
        )}
      </div>

      <div className="relative w-full">
        <Slide1 isActive={activeSlide === 1} />
        <Slide2 isActive={activeSlide === 2} />
        <Slide3 isActive={activeSlide === 3} />
        <Slide4 isActive={activeSlide === 4} />
        <Slide5 isActive={activeSlide === 5} />
        <Slide6 isActive={activeSlide === 6} />
        <Slide7 isActive={activeSlide === 7} />
        <Slide9 isActive={activeSlide === 8} />
        <Slide8 isActive={activeSlide === 9} />
        <Slide10 isActive={activeSlide === 10} />
        <Slide11 isActive={activeSlide === 11} />
        <Slide12 isActive={activeSlide === 12} />
        <Slide13 isActive={activeSlide === 13} />
      </div>
    </main>
  )
}