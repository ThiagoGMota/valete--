import { jost } from '@/app/fonts'
import React from 'react'
import BtnAssinatura from './BtnAssinatura'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { SliderImage } from './Slider'
import Image from 'next/image'

const images:SliderImage[] = [
    {
        id:1,
        src:'/cursosLP/campanhaEleitoral.avif',
        alt:'Campanha Eleitoral',
    },
    {
        id:2,
        src:'/cursosLP/cultura.avif',
        alt:'Imaginação, Cidadania & Cultura',
    },
    {
        id:3,
        src:'/cursosLP/debate.avif',
        alt:'Debate e Oratoria com Kim Kataguiri',
    },
    {
        id:4,
        src:'/cursosLP/geopolitica.avif',
        alt:'Geopolitica com Renato Batista',
    },
    {
        id:5,
        src:'/cursosLP/gerenciandoWhats.avif',
        alt:'Gerenciando o WhatsApp',
    },
    {
        id:6,
        src:'/cursosLP/hackeando.avif',
        alt:'Hackeando o Sistema',
    },
    {
        id:7,
        src:'/cursosLP/lideranca.avif',
        alt:'Liderança com Renan Santos',
    },
    {
        id:8,
        src:'/cursosLP/mamaeFalei.avif',
        alt:'Mamãe Falei, Debate e Comunicação',
    },
    {
        id:9,
        src:'/cursosLP/marxismoCultural.avif',
        alt:'Marxismo Cultural com Ricardo Almeira',
    },
    {
        id:10,
        src:'/cursosLP/memistica.avif',
        alt:'Memistica, Redes Sociais como Armas Politicas com Pedro Deyrot',
    },
    {
        id:11,
        src:'/cursosLP/petismo.avif',
        alt:'Petismo e Literatura Politica',
    },
    
    
]

const CardCursos = () => {
  return (
    <div className={`flex flex-col items-center justify-evenly bg-black text-white rounded-3xl text-center lg:w-[960px] h-[805px] lg:h-[707px] ${jost.className}`}>
        <div className='flex flex-col gap-4 px-[30px]'>
            <h1 className='text-[25px] md:text-4xl font-extrabold'>Aprenda e Evolua com Mais de<br className='lg:hidden'/> 10 Cursos</h1>
            <p className='textx-[18px] '>
                Desde filosofia e história até técnicas de escrita e aprendizado criativo, os cursos do Valete Plus são projetados para oferecer uma experiência de aprendizado única. 
                Descubra conteúdos ricos, aprofundados e exclusivos que irão inspirar você a crescer pessoal e intelectualmente.
            </p>
        </div>
        <div className=' w-[93%]  '>
            <Carousel>
                <CarouselContent>
                    {images.map((img) => (                        
                        <CarouselItem key={img.id}  className='basis-1/2 md:basis-1/3 lg:basis-1/4 ' >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                height={350}
                                width={200}
                                className='rounded-xl'
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' bg-white text-black relative top-8 '/>
                <CarouselNext className=' bg-white text-black relative top-8 '/>
            </Carousel>
        </div>
        <div>
            <BtnAssinatura/>
        </div>
    </div>
  )
}

export default CardCursos