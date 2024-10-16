import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disable, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,
          className
        )}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
