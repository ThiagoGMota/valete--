"use client"
import { jost } from "@/app/fonts"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

const Colunas = () => {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)
  const animationTriggered = useRef(false)

  useEffect(() => {
    setMounted(true)

    // Captura o valor atual da ref para usar na função de limpeza
    const currentElement = containerRef.current

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        // Verifica se o elemento está visível e se a animação ainda não foi iniciada
        if (entry.isIntersecting && !animationTriggered.current) {
          // Marca que a animação já foi iniciada para não repetir
          animationTriggered.current = true

          // Executa a animação 
          gsap.from(".valores-aumentando", {
            innerText: 0,
            snap: { innerText: 1 },
            duration: 2,
            ease: "power1.out",
          })
        }
      },
      {
        // Opções do observer - elemento será considerado visível quando 20% dele estiver na tela
        threshold: 0.2,
      },
    )

    // Observa o elemento container
    if (currentElement) {
      observer.observe(currentElement)
    }

    // Cleanup: para de observar quando o componente é desmontado
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [mounted])

  if (!mounted) {
    return <div></div>
  }

  return (
    <div
      ref={containerRef}
      className={`${jost.className} text-center flex items-center justify-center flex-col gap-8 lg:gap-20 md:flex-row `}
    >
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-extrabold text-[#d11303] text-[50px]">
          +<span className="valores-aumentando">2000</span>
        </h1>
        <p className="text-[20px] font-bold text-zinc-500">Páginas de conteúdos</p>
        <div className="w-80 bg-zinc-400 h-[2px] mt-3 md:hidden"></div>
      </div>

      <div className="h-32 w-[2px] hidden md:block bg-zinc-400"></div>

      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-extrabold text-[#d11303] text-[50px]">
          +<span className="valores-aumentando">60</span>
        </h1>
        <p className="text-[20px] font-bold text-zinc-500">
          Horas de conteúdos
          <br className="md:hidden" /> exclusivos
        </p>
        <div className="w-80 bg-zinc-400 h-[2px] mt-3 md:hidden"></div>
      </div>

      <div className="h-32 w-[2px] hidden md:block bg-zinc-400"></div>

      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-extrabold text-[#d11303] text-[50px]">
          +<span className="valores-aumentando">20</span>
        </h1>
        <p className="text-[20px] font-bold text-zinc-500">Documentários</p>
      </div>
    </div>
  )
}

export default Colunas

