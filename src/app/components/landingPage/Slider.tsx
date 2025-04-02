"use client"

import Image from "next/image"
import type React from "react"
import { useId } from "react"

export interface SliderImage {
  id: number | string
  src: string
  alt: string
  width?: number
  height?: number
}

export type AnimationDirection = "rtl" | "ltr"

interface SliderAllProps {
  images: SliderImage[]
  animation?: AnimationDirection
  speed?: number
  imageWidth?: number
  imageHeight?: number
  className?: string
  imageClassName?: string
  gap?: number
  sliderKey?: string // Add a key prop for forcing re-renders
}

export const SliderAll: React.FC<SliderAllProps> = ({
  images,
  animation = "rtl",
  speed = 20,
  imageWidth = 139,
  imageHeight = 200,
  className = "",
  imageClassName = "rounded-3xl",
  gap = 4,
  sliderKey = "default", // Default key
}) => {
  const duplicatedImages = [...images, ...images]
  const uniqueId = useId().replace(/:/g, "") + "-" + sliderKey
  const animationName = `slide-${animation}-${speed}-${uniqueId}`

  const keyframes = `
    @keyframes ${animationName} {
      0% { transform: translateX(${animation === "rtl" ? "0" : "-50%"}); }
      100% { transform: translateX(${animation === "rtl" ? "-50%" : "0"}); }
    }
  `

  return (
    <div className={`slider-container overflow-hidden relative w-full ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      <div
        className="slider flex"
        style={{
          gap: `${gap}px`,
          width: "max-content",
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {duplicatedImages.map((img, index) => (
          <Image
            key={`${img.id}-${index}-${sliderKey}`}
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            width={img.width || imageWidth}
            height={img.height || imageHeight}
            className={imageClassName}
          />
        ))}
      </div>
    </div>
  )
}

