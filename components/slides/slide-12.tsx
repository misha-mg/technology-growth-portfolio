"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"

interface SlideProps {
  isActive: boolean
}

export default function Slide12({ isActive }: SlideProps) {
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
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white text-center">
          Как мы работаем и как стартуем <br /> за 48 часов
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="rounded-xl border border-white/20 bg-black/35 p-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">Reporting cadence</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
                <p className="text-[18px] text-white/70">Weekly отчёт: структура, сделки, текущий P&amp;L, риски, план</p>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
                <p className="text-[18px] text-white/70">Событийные апдейты: новости, отчётность, макро-факторы</p>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
                <p className="text-[18px] text-white/70">
                  Лог сделок: дата, актив, объём, цена входа/выхода, причина действия
                </p>
              </div>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
                <p className="text-[18px] text-white/70">Контроль лимитов: фиксированные пороги и стандартные действия</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="rounded-xl border border-white/20 bg-black/35 p-6" variants={itemVariants}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Next steps (48h)</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Подтвердить сумму и модель взаимодействия",
                "Согласовать риск-лимиты и плечо / без плеча",
                "Утвердить канал связи и операционный регламент",
                "Запуск и первичное распределение в 1–3 сессии",
              ].map((step) => (
                <li key={step} className="flex items-start gap-2 text-[18px] text-white/70">
                  <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div className="mt-6 rounded-xl border border-white/20 bg-black/35 p-5" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-white mb-3">Инфраструктура</h3>
          <p className="text-[18px] text-white/70 mb-6">
            Инвестиции через брокерскую платформу, удобную для инвестора (IBKR и аналоги). Доступ к средствам и полномочия определяются выбранной моделью
          </p>
          <h3 className="text-2xl font-semibold text-white mb-3">Модели взаимодействия</h3>
          <ul className="space-y-2 text-[18px] text-white/70">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
              <span>Инвестор действует сам по сигналам и регламенту</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
              <span>Доверительное управление / субсчёт (если возможно юридически)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f99c00] mt-2.5 flex-shrink-0" />
              <span>Совместный контроль: подтверждение ключевых операций</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </SlideFrame>
  )
}

