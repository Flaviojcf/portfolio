import { cn } from '@/app/lib/utils'

interface ISeparatorComponent {
  className?: string
}

export function SeparatorComponent({ className }: ISeparatorComponent) {
  return (
    <div
      className={cn('w-full my-8 border-b border-b-gray-800', className)}
    ></div>
  )
}
