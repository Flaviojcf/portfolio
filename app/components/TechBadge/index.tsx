'use client'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type ITechBadge = ComponentProps<typeof motion.span> & {
  name: string
}

export function TechBadge({ name, ...props }: ITechBadge) {
  return (
    <motion.span
      className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg"
      {...props}
    >
      {name}
    </motion.span>
  )
}
