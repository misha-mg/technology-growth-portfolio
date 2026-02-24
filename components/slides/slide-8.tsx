"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide8({ isActive }: SlideProps) {
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

  const scenarios = [
    { name: "Консервативный", range: "8–12%", min: 8, max: 12, note: "Акции, без плеча", color: "#c4a574" },
    { name: "Базовый", range: "15–25%", min: 15, max: 25, note: "Акции, активное управление", color: "#a67c52" },
    { name: "Агрессивный", range: "25–45%", min: 25, max: 45, note: "Умеренное плечо 1:2–1:3", color: "#f99c00" },
  ]
  const scaleMax = 50

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
          Сценарии доходности
        </h2>
        <p className="text-center text-white/70 mb-10 text-lg">
          Диапазоны на 30–45 дней: без плеча и с умеренным плечом по согласованию
        </p>

        <motion.div className="bg-black/35 border border-white/20 rounded-xl p-6" variants={itemVariants}>
          <div className="space-y-5">
            {scenarios.map((scenario, index) => (
              <div key={scenario.name} className="grid grid-cols-[200px_1fr_90px] gap-3 items-center">
                <div>
                  <p className="text-[18px] text-white font-semibold">{scenario.name}</p>
                  <p className=" text-white/70 leading-[1]">{scenario.note}</p>
                </div>
                <div className="relative h-10 rounded-full bg-black/20 border border-white/20 overflow-hidden">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 h-5 rounded-full"
                    style={{
                      left: `${(scenario.min / scaleMax) * 100}%`,
                      width: `${((scenario.max - scenario.min) / scaleMax) * 100}%`,
                      backgroundColor: scenario.color,
                    }}
                    initial={{ width: 0 }}
                    animate={
                      isActive
                        ? { width: `${((scenario.max - scenario.min) / scaleMax) * 100}%` }
                        : { width: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
                  />
                </div>
                <p className="text-right text-white font-bold">{scenario.range}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[200px_1fr_90px] gap-3 mt-5">
            <div />
            <div className="flex justify-between text-xs text-white/70">
              <span>0%</span>
              <span>10%</span>
              <span>20%</span>
              <span>30%</span>
              <span>40%</span>
              <span>50%</span>
            </div>
            <div />
          </div>
        </motion.div>

        <motion.p className="mt-6 text-center text-sm italic text-white/70" variants={itemVariants}>
          Диапазоны зависят от рынка и волатильности
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}
