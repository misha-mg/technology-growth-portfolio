"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide9({ isActive }: SlideProps) {
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

  const returns = [
    { ticker: "NVDA", value: 1950 },
    { ticker: "AMD", value: 1140 },
    { ticker: "AVGO", value: 650 },
    { ticker: "GOOGL", value: 565 },
    { ticker: "MSFT", value: 450 },
    { ticker: "TSLA", value: 350 },
    { ticker: "AMZN", value: 300 },
  ]
  const maxValue = 1950

  return (
    <SlideFrame
      isActive={isActive}
      variants={containerVariants}
      background={
        <div className="absolute inset-0 bg-[#06090f]" aria-hidden="true">
          <Plasma color="#5c2e2e" speed={0.6} direction="forward" scale={1.1} opacity={0.8} mouseInteractive={true} />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      }
      className="bg-[#06090f]"
      innerClassName="relative z-10"
    >
      <motion.div className="max-w-5xl w-full mx-auto" variants={itemVariants}>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white text-center">
          Исторический контекст: <br /> лидеры AI-цикла умеют расти
        </h2>
        <p className="text-center text-white/70 mb-10 text-lg">5-летняя динамика ключевых бумаг (2021–2026)</p>

        <motion.div className="bg-black/35 border border-white/30 rounded-xl px-6 py-8" variants={itemVariants}>
          <div className="space-y-3">
            {returns.map((item, index) => (
              <div key={item.ticker} className="grid grid-cols-[72px_1fr_80px] gap-3 items-center">
                <p className="font-semibold text-white text-[18px]">{item.ticker}</p>
                <div className="h-8 rounded-full bg-black/20 border border-white/20 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[#f99c00]"
                    initial={{ width: 0 }}
                    animate={isActive ? { width: `${(item.value / maxValue) * 100}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 + index * 0.08 }}
                  />
                </div>
                <p className="text-right text-base font-semibold text-white/70">+{item.value}%</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p className="mt-6 text-center text-sm italic text-white/70" variants={itemVariants}>
          Прошлая доходность не гарантирует будущие результаты.
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}

