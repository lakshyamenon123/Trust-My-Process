import { cn } from '@/lib/cn'

export default function Card({ className = '', children, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-border/60 bg-surface shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
