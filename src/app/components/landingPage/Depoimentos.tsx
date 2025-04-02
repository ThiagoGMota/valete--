"use client"
import { CardDepoimento } from "./depoimentos/CardDepoimento"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

interface Avaliacao {
  id: number
  text: string
  name: string
  img:  string//apenas o nome da img
}

const avaliacoes: Avaliacao[] = [
  {
    name: "Luiz Amâncio",
    text: "Assino, sigo e compartilho, o conteúdo da Valete é o único que me representa.",
    img: "1.avif",
  },
  {
    name: "Arthur Caetano",
    text: "Sou fã da Valete, os documentos e dossiês que recebo no Valete Plus são excelentes.",
    img: "2.avif",
  },
  {
    name:'Pedro Arthur',
    text:"Tenho muito orgulho de assinar o Valete Plus e colaborar nesse grande projeto de formação política.",
    img:'3.avif'
  },
  {
    name:'Victor Rattes',
    text:"Entrei no Valete Plus por causa do Kim e do Renan, hoje acompanha todo o MBL.",
    img:'4.avif'
  },
  {
    name:'Luciano Dias',
    text:"O Valete Plus mudou completamente minha maneira de acompanhar a política.",
    img:'5.avif'
  },
  {
    name:'Hebert Porto',
    text:"O Valete Plus tem aberto um mundo de novos conhecimentos para mim.",
    img:'6.avif'
  }
].map((avaliacao, index) => ({ ...avaliacao, id: index + 1 }))//id automatico

const Depoimentos = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <div className="bg-black text-white py-12 pb-20">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-5xl pb-8 font-bold text-zinc-200">O Que Nossos Assinantes Dizem</h1>
        <p className="text-[18px] max-w-3xl mx-auto">
          No Valete Plus, cada assinante é parte de um movimento maior, que transforma não só vidas individuais, mas a
          sociedade como um todo. Seja o próximo a descobrir conteúdos que inspiram e elevam o aprendizado.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 ">
            {avaliacoes.map((i) => (
              <CarouselItem key={i.id} className="pl-20 md:pl-44 lg:pl-16 lg:basis-1/2 xl:basis-1/3 xl:pl-6 2xl:pl-0 2xl:px-20">
                <CardDepoimento text={i.text} name={i.name} img={i.img} />
                {/* {i.id} */}
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div> */}
        </Carousel>
      </div>
    </div>
  )
}

export default Depoimentos

