import React from 'react'


import  { SliderAll, SliderImage } from './Slider'


export const images:SliderImage[] = [
    {
      id: 1,
      src: "/documentariosLandingPage/argentina.avif",
      alt: "Dos juros ao tango",
    },
    {
      id: 2,
      src: "/documentariosLandingPage/bukele.avif",
      alt: "Sugurança Pública - Bukele",
    },
    {
      id: 3,
      src: "/documentariosLandingPage/indio.avif",
      alt: "Missão Guaira",
    },
    {
      id: 4,
      src: "/documentariosLandingPage/lula.avif",
      alt: "Primeiro ano de governo Lula",
    },
    {
      id: 5,
      src: "/documentariosLandingPage/musk.avif",
      alt: "Elon Musk, O homem mais importante do mundo ?",
    },
    {
      id: 6,
      src: "/documentariosLandingPage/oligarcas.avif",
      alt: "Os mais poderosos Oligarcas do Brasil",
    },
    {
      id: 7,
      src: "/documentariosLandingPage/putin.avif",
      alt: "3º Guerra Mundial",
    },
    {
      id: 8,
      src: "/documentariosLandingPage/rs.avif",
      alt: "O Pampa vai virar mar? RS",
    },
    {
      id: 9,
      src: "/documentariosLandingPage/senna.avif",
      alt: "O mito que inspirou uma geração",
    },
    {
      id: 10,
      src: "/documentariosLandingPage/trump.avif",
      alt: "A revolução de Donald Trump",
    },
    {
      id: 11,
      src: "/documentariosLandingPage/woke.jpg",
      alt: "Eles estão dominando tudo",
    },
    {
      id: 12,
      src: "/documentariosLandingPage/wpath.avif",
      alt: "Novo escandalo do complexo industrial transgênero",
    },
    {
      id: 13,
      src: "/documentariosLandingPage/x.avif",
      alt: "O maior escandalo da historia da justiça",
    },
  ]
  

const DocumentariosSlider = () => {
  return (
    <main className="mt-12 ">
        <SliderAll images={images} animation='ltr' speed={40} />
    </main>
  )
}

export default DocumentariosSlider