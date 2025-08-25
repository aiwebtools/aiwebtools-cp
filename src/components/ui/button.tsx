
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 interactive-button max-w-full text-center whitespace-normal break-words relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white hover:from-purple-500 hover:via-blue-500 hover:to-purple-500 glow-effect shadow-lg hover:shadow-purple-500/25 border border-purple-500/20",
        destructive:
          "bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white hover:from-red-500 hover:via-pink-500 hover:to-red-500 shadow-lg hover:shadow-red-500/25 border border-red-500/20",
        outline:
          "border-2 border-purple-500/60 bg-transparent text-purple-300 hover:bg-purple-500/10 hover:text-white hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 shadow-lg hover:shadow-gray-500/25 border border-gray-600/20",
        ghost: "text-purple-300 hover:bg-purple-500/10 hover:text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20",
        link: "text-purple-400 underline-offset-4 hover:underline hover:text-purple-300 rounded-xl p-0 h-auto",
        gold: "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black font-semibold hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 gold-glow shadow-lg hover:shadow-amber-500/25 border border-amber-500/30",
        premium: "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30 glow-effect animate-pulse",
        neon: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 shadow-xl hover:shadow-pink-500/40 border-2 border-pink-500/40 animate-pulse"
      },
      size: {
        default: "h-11 px-6 py-3 text-sm font-medium",
        sm: "h-9 rounded-lg px-4 py-2 text-xs font-medium",
        lg: "min-h-14 rounded-2xl px-8 py-4 text-base font-semibold",
        icon: "h-11 w-11 rounded-xl",
        xs: "h-8 rounded-lg px-3 py-1.5 text-xs",
        xl: "min-h-16 rounded-2xl px-10 py-5 text-lg font-bold"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
