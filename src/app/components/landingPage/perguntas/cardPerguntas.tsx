"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CardPerguntasProps {
  pergunta: string
  resposta: string
}

export const CardPerguntas = ({ pergunta, resposta }: CardPerguntasProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between text-left font-medium focus:outline-none "
      >
        <h3 className="text-xl font-semibold text-gray-900">{pergunta}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-[#d11303]" /> : <ChevronDown className="h-5 w-5 text-[#d11303]" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p className="py-2">{resposta}</p>
        </div>
      )}
    </div>
  )
}

