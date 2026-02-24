"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"

type SlideFrameProps = {
  isActive: boolean
  variants: Variants
  children: React.ReactNode
  background?: React.ReactNode
  className?: string
  innerClassName?: string
}

export default function SlideFrame({
  isActive,
  variants,
  children,
  background,
  className = "",
  innerClassName = "",
}: SlideFrameProps) {
  return (
    <motion.section
      className={`relative h-[100svh] w-full overflow-hidden ${isActive ? "block" : "hidden"} ${className}`}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
      variants={variants}
      aria-hidden={!isActive}
    >
      {background}
      <div className={`container-emaar h-full flex flex-col justify-center ${innerClassName}`}>{children}</div>
    </motion.section>
  )
}

