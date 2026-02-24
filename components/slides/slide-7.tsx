"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"
import TickerIcon from "@/components/ticker-icon"

interface SlideProps {
  isActive: boolean
}

export default function Slide7({ isActive }: SlideProps) {
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

  const campaigns = [
    {
      tickers: ["NVDA"],
      description: "Лидер вычислительной инфраструктуры AI; максимальная чувствительность к позитивным данным",
    },
    {
      tickers: ["MSFT"],
      description: "Облако + корпоративное внедрение AI; устойчивые cash-flows и высокая ликвидность",
    },
    {
      tickers: ["AMD"],
      description: "Экспозиция на AI-ускорители и серверный сегмент; потенциал на квартальных апдейтах",
    },
    {
      tickers: ["AVGO"],
      description: "Semis + networking для дата-центров; прямой бенефициар инфраструктурного роста",
    },
    {
      tickers: ["AMZN", "GOOGL"],
      description: "Cloud-экспозиция и чувствительность к корпоративному спросу на AI-сервисы",
    },
    {
      tickers: ["TSLA"],
      description: "Growth add-on с повышенной волатильностью, управляется через лимиты риска",
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
          Логика по ключевым позициям
        </h2>
        <p className="text-center text-white/70 mb-10 text-lg">Лидеры с максимальной чувствительностью к AI-циклу</p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" variants={containerVariants}>
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.tickers.join("-")}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/20 bg-black/35 p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                {campaign.tickers.map((ticker) => (
                  <div key={ticker} className="inline-flex items-center justify-center rounded-md p-1.5">
                    <TickerIcon ticker={ticker} size={28} className="w-10 h-10" />
                  </div>
                ))}
                <p className="text-lg font-semibold text-white">
                  {campaign.tickers.join(", ")}
                </p>
              </div>

              <p className="text-base text-white/70 leading-relaxed">
                {campaign.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideFrame>
  )
}
