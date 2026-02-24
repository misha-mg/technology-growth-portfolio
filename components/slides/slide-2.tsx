"use client"

import { motion } from "framer-motion"
import { BarChart3, ShieldCheck, Target, Wallet } from "lucide-react"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"
interface SlideProps {
  isActive: boolean
}

export default function Slide2({ isActive }: SlideProps) {
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
      <motion.div
        className="max-w-5xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-3 text-white text-center"
          variants={itemVariants}
        >
          Что вы получаете за 30–45 дней
        </motion.h2>
        <motion.p
          className="text-center font-light text-white/70 mb-10 text-lg"
          variants={itemVariants}
        >
          Чёткая цель, ликвидные активы, регламент риска и прозрачная отчётность
        </motion.p>

        <motion.div className="grid md:grid-cols-2 gap-10" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <div className="border border-white/20 rounded-xl px-5 py-8" >
              <div className="flex items-center justify-start gap-2 mb-3">
                <Target size={30} className="text-[#f99c00]" />
                <h3 className="text-3xl font-bold text-white">Цель</h3>
              </div>
              <p className="text-base text-white/70">
                Рост капитала на коротком горизонте на основе ликвидных лидеров AI-цикла
              </p>
              <p className="mt-4 text-white">Target range: <span className="text-[#f99c00]">15–25%</span></p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="border border-white/20 rounded-xl px-5 py-8">
              <div className="flex items-center justify-start gap-2 mb-3">
                <BarChart3 size={30} className="text-[#f99c00]" />
                <h3 className="text-3xl font-bold text-white">Стратегия</h3>
              </div>
              <p className="text-base text-white/70">
                Mega-cap + AI/semis с активным управлением на событиях (отчётность, новости, макро)
              </p>
              <p className="mt-4 text-white">Horizon: <span className="text-[#f99c00]">30–45d</span></p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="border border-white/20 rounded-xl px-5 py-8">
              <div className="flex items-center justify-start gap-2 mb-3">
                <ShieldCheck size={30} className="text-[#f99c00]" />
                <h3 className="text-3xl font-bold text-white">Риск-контроль</h3>
              </div>
              <p className="text-base text-white/70">Лимиты просадки и заранее заданный playbook действий в стресс-режимах</p>
              <p className="mt-4 text-white">Stress limit: <span className="text-[#f99c00]">8–12%</span></p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="border border-white/20 rounded-xl px-5 py-8">
              <div className="flex items-center justify-start gap-2 mb-3">
                <Wallet size={30} className="text-[#f99c00]" />
                <h3 className="text-3xl font-bold text-white">Прозрачность</h3>
              </div>
              <p className="text-base text-white/70">Weekly отчёт, лог сделок и текущий P&amp;L с понятной управленческой логикой</p>
              <p className="mt-4 text-white">Liquidity: <span className="text-[#f99c00]">Exit by market</span></p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p className="mt-8 text-center text-sm italic text-white/70" variants={itemVariants}>
          Целевые диапазоны — ориентиры; рынок несёт риск
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}