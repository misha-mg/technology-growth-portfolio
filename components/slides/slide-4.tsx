"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide4({ isActive }: SlideProps) {
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
          <span className="text-[#f99c00] text-5xl">Механика доходности:</span><br />
          фундамент + тактика
        </h2>

        <motion.div className="grid grid-cols-2 gap-4 auto-rows-min items-start" variants={itemVariants}>
          <div className="row-span-2 col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4">KPI ежедневного мониторинга</h3>
            <ul className="space-y-2 text-[18px] text-white/70 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Динамика лидеров AI-цепочки (semis, cloud)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Рыночный импульс и ширина рынка (risk-on / risk-off)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Объёмы и реакция на новости / отчётность
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Волатильность и корреляции внутри портфеля
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Сигналы перегрева (резкие движения, слабая реакция на позитив)
              </li>
            </ul>
          </div>

          <div className="row-span-1 col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Фундаментальный тезис</h3>
            <ul className="space-y-3 text-[18px] text-white/70">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                AI-инфраструктура и облако формируют ядро текущего технологического цикла
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Портфель строится вокруг ликвидных лидеров с фундаментальной поддержкой
              </li>
            </ul>
          </div>

          <div className="row-span-1 col-span-1">
            <span className="block text-lg font-normal text-white mb-3">Events timeline</span>
            <div className="flex flex-wrap gap-3">
              {["Earnings", "Macro", "News", "Guidance", "Rates"].map((event) => (
                <span
                  key={event}
                  className="inline-flex items-center rounded-full border border-white/30 bg-black/35 px-4 py-2 text-sm font-medium text-white"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          <div className="row-span-1 col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4 line-height-1">Тактическое управление <br />
              <span className="text-xl">(30–45 дней)</span></h3>
            <ul className="space-y-3 text-[18px] text-white/70">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Вход и добавления при подтверждении тренда и достаточной ликвидности
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Управление вокруг отчётности и макро-событий (ставки, инфляция, guidance)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Частичная фиксация прибыли, перезаходы и ребалансировка долей
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#f99c00] flex-shrink-0"></span>
                Риск-лимиты: одна позиция не должна сломать портфель
              </li>
            </ul>
          </div>


        </motion.div>
      </motion.div>
    </SlideFrame>
  )
}

