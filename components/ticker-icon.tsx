"use client"

import { useMemo, useState } from "react"

interface TickerIconProps {
  ticker: string
  size?: number
  className?: string
}

export default function TickerIcon({ ticker, size = 24, className = "" }: TickerIconProps) {
  const [sourceIndex, setSourceIndex] = useState(0)

  const sources = useMemo(
    () => [
      `/icons/${ticker}.svg`,
      `/icons/${ticker}.png`,
      `/icons/${ticker.toLowerCase()}.svg`,
      `/icons/${ticker.toLowerCase()}.png`,
    ],
    [ticker]
  )

  const source = sourceIndex < sources.length ? sources[sourceIndex] : null

  if (!source) {
    return (
      <span className="inline-flex items-center justify-center font-semibold text-white" style={{ width: size, height: size }}>
        {ticker}
      </span>
    )
  }

  return (
    <img
      src={source}
      alt={`${ticker} icon`}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={() => setSourceIndex((current) => current + 1)}
      loading="lazy"
      decoding="async"
    />
  )
}
