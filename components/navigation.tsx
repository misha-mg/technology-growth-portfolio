"use client"

import { motion } from "framer-motion"

interface NavigationProps {
  activeSlide: number
  totalSlides: number
  onNavigate: (slideNumber: number) => void
}

export default function Navigation({ activeSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <div className="bg-black/60 border border-white/15 backdrop-blur-sm p-3 rounded-xl shadow-lg">
      <div className="flex flex-col gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button key={index} onClick={() => onNavigate(index + 1)} className="relative w-4 h-4">
            <div
              className={`w-4 h-4 rounded-full ${activeSlide === index + 1 ? "bg-white" : "bg-[#f99c00]"}`}
            ></div>
            {activeSlide === index + 1 && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 w-4 h-4 rounded-full border-2 border-white"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

