import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GroodButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline"
}

export function GroodButton({ children, className, variant = "primary", ...props }: GroodButtonProps) {
  const baseStyles = "font-medium rounded-md"

  const variantStyles = {
    primary: "bg-amber-400 hover:bg-amber-500 text-black",
    secondary: "bg-[#1b3a27] hover:bg-[#2a5a3d] text-white",
    outline: "border-2 border-amber-400 text-amber-600 hover:bg-amber-50",
  }

  return (
    <Button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Button>
  )
}
