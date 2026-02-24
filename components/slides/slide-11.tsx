"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide11({ isActive }: SlideProps) {
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

  const playbook = [
    {
      trigger: "−6% по портфелю",
      action: "Режим снижения риска: частичное сокращение наиболее волатильных позиций",
    },
    {
      trigger: "−8…−10%",
      action: "Стресс-режим: приоритет сохранения капитала, рост доли кэша/защитной структуры",
    },
    {
      trigger: "Volatility spike / risk-off",
      action: "Action set C: Cash 20–40%, смещение в mega-cap и снижение плеча",
    },
  ]

  const defenseItems = [
    "Ограничение концентрации: одна позиция не должна сломать портфель",
    "Фиксация прибыли ступенчато, чтобы не отдавать рост в откатах",
    "Перед ключевыми событиями пересматривается экспозиция и плечо",
    "В стресс-режиме целевой кэш: 20–40%",
  ]

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
          <span className="text-[#f99c00] text-5xl">Риск-менеджмент</span><br />
          Правила, которые защищают капитал
        </h2>

        <motion.div className="grid md:grid-cols-[1] gap-1" variants={itemVariants}>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Триггеры просадки</h3>
            <div className="grid grid-cols-3 gap-4">
              {playbook.map((step, index) => (
                <motion.div
                  key={step.trigger}
                  className="flex items-start gap-3 flex-col bg-black/35 border border-white/20 rounded-xl p-5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.12 }}
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#f99c00] text-black text-sm font-semibold flex items-center justify-center flex-shrink-0">
                      <span>{index + 1}</span>
                    </div>
                    <p className="text-white font-medium text-[20px] mb-1">{step.trigger}</p>
                  </div>
                  <div className="flex-1 min-w-0 ">
                    <p className="text-white/70 text-base">{step.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Система защиты</h3>
            <ul className="space-y-3 text-[18px] text-white/70">
              {defenseItems.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </SlideFrame>
  )
}

