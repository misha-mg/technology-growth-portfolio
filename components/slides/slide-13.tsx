"use client"

import { motion } from "framer-motion"
import Beams from "@/components/Beams"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide13({ isActive }: SlideProps) {
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

  const summaryPoints = [
    "100 000 USD в ликвидных лидерах AI-цикла",
    "Горизонт 30–45 дней, целевой диапазон 15–25%",
    "Жёсткий риск-менеджмент: лимиты просадки, playbook на волатильность",
    "Еженедельная отчётность и прозрачный лог сделок",
  ]

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
        <h1 className="text-4xl md:text-6xl mb-3 text-white">
          AI &amp; Technology Growth Portfolio
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 text-white/80">
          Готовы к старту за 48 часов
        </p>

        <motion.ul className="space-y-4 mb-12 text-left max-w-2xl mx-auto" variants={containerVariants}>
          {summaryPoints.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-[18px] text-white/70"
              variants={itemVariants}
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-[#f99c00] flex-shrink-0" />
              {point}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p className="text-sm text-white/70 italic" variants={itemVariants}>
          Подтвердите сумму и модель — запуск в течение 1–3 торговых сессий
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}
