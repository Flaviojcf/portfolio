'use client'
import { fadeUpAnimation } from '@/app/lib/animations'
import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'

interface ISectionTitle {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({ subtitle, title, className }: ISectionTitle) {
  const animateProps = { ...fadeUpAnimation }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className="font-mono text-sm text-emerald-400"
        {...animateProps}
        transition={{ duration: 0.5 }}
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        className="text-3xl font-medium"
        {...animateProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}
