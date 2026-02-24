"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide3({ isActive }: SlideProps) {
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
          <Plasma color="#5c2e2e" speed={0.6} direction="forward" scale={1.1} opacity={0.8} mouseInteractive={true} />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      }
      className="bg-[#06090f]"
      innerClassName="relative z-10"
    >
      <motion.div className="max-w-5xl w-full mx-auto" variants={itemVariants}>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white text-center">
          <span className="text-[#f99c00] text-5xl">Почему сейчас?</span><br />
          AI-цикл = CAPEX-перестройка инфраструктуры
        </h2>


        <motion.div className="grid md:grid-cols-[1] gap-1" variants={itemVariants}>
          <div className="px-6">
            <h3 className="text-2xl font-semibold text-white mb-4">AI value chain</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Compute / Chips",
                "Networking / Storage",
                "Cloud Platforms",
                "Enterprise AI Adoption",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-3 bg-black/35 border border-white/20 rounded-xl p-5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.12 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#f99c00] text-black  text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1 text-[20px] rounded-lg px-4 py-3 text-white font-medium">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className=" p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Ключевые тезисы</h3>
            <ul className="space-y-3 text-[18px] text-white/70">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00]"></span>
                AI-цикл — капиталоёмкая перестройка инфраструктуры, а не краткосрочный хайп
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00]"></span>
                Big Tech продолжает наращивать CAPEX в вычисления и дата-центры
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00]"></span>
                Корпоративный спрос переходит из пилотов в фазу масштабирования
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00]"></span>
                Semiconductors и Cloud — наиболее устойчивые бенефициары текущего цикла
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00]"></span>
                Плотный новостной поток создаёт окно для активного управления позицией
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </SlideFrame>
  )
}

