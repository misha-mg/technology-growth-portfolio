"use client"

import { motion } from "framer-motion"
import Beams from "@/components/Beams"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide1({ isActive }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <SlideFrame
      isActive={isActive}
      variants={containerVariants}
      background={
        <div className="absolute inset-0 bg-[#06090f]" aria-hidden="true">
          <div className="w-full h-full">
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#f99c00"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={40}
            />
          </div>
          <div className="absolute inset-0 bg-black/55" />
        </div>
      }
      className="bg-[#06090f]"
    >
      <motion.div className="relative text-center max-w-5xl w-full mx-auto" variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl mb-10 text-white">AI &amp; Technology <br /> Growth Portfolio</h1>
        {/* <p className="text-lg md:text-2xl font-light mb-8 text-white/80">
          США • 100 000 USD • Горизонт 30–45 дней • Active Management
        </p> */}

        <motion.div className="grid md:grid-cols-2 gap-4 mb-8" variants={containerVariants}>
          <motion.div className="bg-black/35 border border-white/20 backdrop-blur-sm rounded-xl p-4 text-center" variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65 mb-2">Capital</p>
            <p className="text-xl font-bold text-white">100 000 USD</p>
          </motion.div>
          <motion.div className="bg-black/35 border border-white/20 backdrop-blur-sm rounded-xl p-4 text-center" variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65 mb-2">Horizon</p>
            <p className="text-xl font-bold text-white">30–45 дней</p>
          </motion.div>
          <motion.div className="bg-black/35 border border-white/20 backdrop-blur-sm rounded-xl p-4 text-center" variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65 mb-2">Instruments</p>
            <p className="text-xl font-bold text-white">US Equities</p>
          </motion.div>
          <motion.div className="bg-black/35 border border-white/20 backdrop-blur-sm rounded-xl p-4 text-center" variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65 mb-2">Focus</p>
            <p className="text-xl font-bold text-white">AI • Cloud • Semis</p>
          </motion.div>
        </motion.div>

        <motion.p className="mt-8 text-sm text-white/70 italic" variants={itemVariants}>
          Короткий горизонт, ликвидные лидеры AI-цикла, активное управление и дисциплина риска.
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}