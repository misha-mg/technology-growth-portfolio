"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Activity, GitBranch, Gauge } from "lucide-react"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide10({ isActive }: SlideProps) {
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

  const risks = [
    {
      title: "Волатильность",
      text: "Высокая волатильность tech-сектора на коротком горизонте.",
      highlight: "VIX: повышен",
      icon: Activity,
    },
    {
      title: "Корреляция",
      text: "Корреляции внутри AI-цепочки растут в режиме risk-off.",
      highlight: "Бета: высокая при risk-off",
      icon: GitBranch,
    },
    {
      title: "Риск событий",
      text: "Отчётность, макро-решения и новости меняют динамику резко.",
      highlight: "Драйвер: события",
      icon: AlertTriangle,
    },
    {
      title: "Плечо",
      text: "Плечо усиливает амплитуду колебаний и требует строгих лимитов.",
      highlight: "Лимит: 1:2–1:3 (по согласованию)",
      icon: Gauge,
    },
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
          Риски: волатильность <br /> и концентрация в tech
        </motion.h2>
        <motion.p
          className="text-center font-light text-white/70 mb-10 text-lg"
          variants={itemVariants}
        >
          Риск управляется через лимиты и структуру портфеля
        </motion.p>

        <motion.div className="grid md:grid-cols-2 gap-10" variants={containerVariants}>
          {risks.map((risk) => {
            const Icon = risk.icon
            return (
              <motion.div key={risk.title} variants={itemVariants}>
                <div className="border border-white/20 rounded-xl px-5 py-8">
                  <div className="flex items-center justify-start gap-2 mb-3">
                    <Icon size={30} className="text-[#f99c00]" />
                    <h3 className="text-3xl font-bold text-white">{risk.title}</h3>
                  </div>
                  <p className="text-base text-white/70">{risk.text}</p>
                  <p className="mt-4 text-white">
                    <span className="text-[#f99c00]">{risk.highlight}</span>
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-8 border border-white/20 rounded-xl px-5 py-6"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between">
            <span className="text-white/70">Рейтинг риска</span>
            <span className="text-white font-bold">Умеренно–высокий (краткосрочно)</span>
          </div>
        </motion.div>

        <motion.p className="mt-6 text-center text-sm italic text-white/70" variants={itemVariants}>
          Риск управляется через лимиты просадки и диверсификацию.
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}
