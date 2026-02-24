"use client"

import { motion } from "framer-motion"
import { Cloud, Cpu, Zap } from "lucide-react"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide6({ isActive }: SlideProps) {
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

  const cards = [
    {
      title: "AI-инфраструктура & Semis",
      icon: Cpu,
      iconSize: 22,
      tickers: ["NVDA", "AMD", "AVGO"],
      lines: ["Поставщики вычислений и сетевой инфраструктуры", "База CAPEX-цикла дата-центров"],
    },
    {
      title: "Cloud Platforms & Corporate AI",
      icon: Cloud,
      iconSize: 18,
      tickers: ["MSFT", "AMZN", "GOOGL"],
      lines: ["Рост корпоративных затрат на облако и AI-сервисы", "Высокая ликвидность и масштаб клиентской базы"],
    },
    {
      title: "Growth exposure",
      icon: Zap,
      iconSize: 20,
      tickers: ["TSLA"],
      lines: ["Робототехника, автономность, энергетика", "Высокая волатильность управляется лимитами"],
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
      <motion.div className="max-w-5xl w-full mx-auto" variants={itemVariants}>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white text-center">
          3 сегмента, которые «несут» AI-цикл
        </h2>
        <p className="text-center font-light text-white/70 mb-10 text-lg">Инфраструктура → облако → ростовая опция</p>

        <motion.div className="flex flex-col gap-6 w-full" variants={containerVariants}>
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div key={card.title} variants={itemVariants} className="w-full">
                <div className="w-full rounded-xl border border-white/20 bg-black/35 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={24} className="text-[#f99c00] shrink-0" />
                    <h3 className="text-3xl font-semibold text-white">{card.title}</h3>
                  </div>
                  <div>
                    <p className="text-base text-white/70">
                      {card.lines.join(". ")}
                    </p>
                    <p className="text-base mt-2 text-white">
                      Tickers: <span className="text-[#f99c00]">{card.tickers.join(", ")}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p className="mt-8 text-center text-sm italic text-white/70" variants={itemVariants}>
          Покрываем полную цепочку: железо + платформа + опциональность роста
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}
