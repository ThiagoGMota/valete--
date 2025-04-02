"use client"

import { CheckCircle2 } from "lucide-react"

export default function GreenCheckIcon() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-green-500  rounded-full">
        <CheckCircle2 className="text-white" />
      </div>
    </div>
  )
}

