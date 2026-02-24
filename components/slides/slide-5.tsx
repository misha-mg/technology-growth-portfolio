"use client"

import { motion } from "framer-motion"
import Plasma from "@/components/Plasma"
import SlideFrame from "@/components/slides/slide-frame"
import TickerIcon from "@/components/ticker-icon"

interface SlideProps {
  isActive: boolean
}

export default function Slide5({ isActive }: SlideProps) {
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

  const allocations = [
    { ticker: "NVDA", percent: 20, amount: "$20k", color: "#5c4033", segment: "Semis/AI infra" },
    { ticker: "MSFT", percent: 15, amount: "$15k", color: "#7d5c3a", segment: "Cloud platforms" },
    { ticker: "AVGO", percent: 15, amount: "$15k", color: "#8b6914", segment: "Semis/AI infra" },
    { ticker: "GOOGL", percent: 15, amount: "$15k", color: "#a67c52", segment: "Cloud platforms" },
    { ticker: "AMD", percent: 15, amount: "$15k", color: "#c4a574", segment: "Semis/AI infra" },
    { ticker: "AMZN", percent: 10, amount: "$10k", color: "#f99c00", segment: "Cloud platforms" },
    { ticker: "TSLA", percent: 10, amount: "$10k", color: "#d97706", segment: "Growth exposure" },
  ]
  const radius = 150
  const chartCenter = 240
  const labelRadius = radius + 70
  const circumference = 2 * Math.PI * radius
  let cumulativePercent = 0
  let cumulativeLength = 0
  const chartSlices = allocations.map((item) => {
    const segmentPercent = item.percent / 100
    const strokeLength = segmentPercent * circumference
    const strokeOffset = -cumulativeLength
    const startAngle = cumulativePercent * 360 - 90
    const middleAngle = startAngle + segmentPercent * 180
    const angleInRadians = (middleAngle * Math.PI) / 180
    const labelX = Math.round((chartCenter + Math.cos(angleInRadians) * labelRadius) * 100) / 100
    const labelY = Math.round((chartCenter + Math.sin(angleInRadians) * labelRadius) * 100) / 100

    cumulativePercent += segmentPercent
    cumulativeLength += strokeLength

    return {
      ...item,
      strokeLength,
      strokeOffset,
      labelX,
      labelY,
    }
  })

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
          <span className="text-5xl">Структура портфеля</span><br />
        </h2>

        <motion.div className="grid md:grid-cols-[0.95fr_1.05fr] gap-4 items-center" variants={itemVariants}>
          <div className="p-6 flex justify-center">
            <svg viewBox="0 0 480 480" width="560" height="560" aria-label="Portfolio donut chart">
              {chartSlices.map((item) => (
                <motion.circle
                  key={item.ticker}
                  cx={chartCenter}
                  cy={chartCenter}
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="90"
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${chartCenter} ${chartCenter})`}
                  strokeDasharray={`${item.strokeLength} ${circumference}`}
                  strokeDashoffset={item.strokeOffset}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={isActive ? { strokeDasharray: `${item.strokeLength} ${circumference}` } : { strokeDasharray: `0 ${circumference}` }}
                  transition={{ duration: 0.8 }}
                />
              ))}
              {chartSlices.map((item, index) => (
                <motion.g
                  key={`${item.ticker}-label`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.06 }}
                >
                  <text
                    x={item.labelX}
                    y={item.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-[18px] font-semibold"
                  >
                    {item.percent}%
                  </text>
                </motion.g>
              ))}
              <text x={chartCenter} y="232" textAnchor="middle" className="fill-white/70 text-[12px] uppercase tracking-[2px]">
                Capital
              </text>
              <text x={chartCenter} y="256" textAnchor="middle" className="fill-white text-[20px] font-bold">
                $100k
              </text>
            </svg>
          </div>

          <div className="bg-black/35 border border-white/20 rounded-xl px-6 py-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Allocation table</h3>
            <div className="space-y-2.5">
              {allocations.map((item) => (
                <div key={item.ticker} className="grid grid-cols-[auto_1fr_auto_auto] gap-3 items-center rounded-lg px-3 py-2 text-sm">
                  <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></span>
                  <div className="flex items-center gap-2">
                    <TickerIcon ticker={item.ticker} size={26} className="w-[26px] h-[26px]" />
                    <span className="text-lg font-semibold text-white">{item.ticker}</span>
                  </div>
                  <span className="text-[18px] text-white/80">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.p className="mt-7 text-center text-sm italic text-white/70" variants={itemVariants}>
          Сегменты: Semis/AI infra • Cloud platforms • Growth exposure
        </motion.p>
      </motion.div>
    </SlideFrame>
  )
}

