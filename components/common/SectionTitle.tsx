import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        centered ? 'text-center' : '',
        className
      )}
      {...props}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}