import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface GoldenStarProps {
  size?: number
  className?: string
}

export function GoldenStar({ size = 24, className }: GoldenStarProps) {
  return <Star color="#DAA520" fill="#FFD700" size={size} className={cn(className)} />
}

