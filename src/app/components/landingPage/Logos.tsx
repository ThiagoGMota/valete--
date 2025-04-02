import React from 'react'
import { SliderAll, SliderImage } from './Slider'

const images:SliderImage[] = [
    {
        id: 1,
      src: "/carrosel/clubeLivro.avif?height=100&width=100",
      alt: "Clube do Livro",
    },
    {
        id: 2,
      src: "/carrosel/mbl.avif?height=100&width=100",
      alt: "MBL",
    },
    {
        id: 3,
      src: "/carrosel/valete.png?height=100&width=100",
      alt: "Revista Valete",
    },
    {
        id: 4,
      src: "/carrosel/clubeLivro.avif?height=100&width=100",
      alt: "Clube do Livro",
    },
    {
        id: 5,
      src: "/carrosel/mbl.avif?height=100&width=100",
      alt: "MBL",
    },
    {
        id: 6,
      src: "/carrosel/valete.png?height=100&width=100",
      alt: "Revista Valete",
    },
    {
        id: 7,
      src: "/carrosel/clubeLivro.avif?height=100&width=100",
      alt: "Clube do Livro",
    },
    {
        id: 8,
      src: "/carrosel/mbl.avif?height=100&width=100",
      alt: "MBL",
    },
    {
        id: 9,
      src: "/carrosel/valete.png?height=100&width=100",
      alt: "Revista Valete",
    },
  ]

const Logos = () => {
  return (
    <div className='pb-10'>
        <SliderAll images={images} gap={128} speed={30} imageWidth={100}/>
    </div>
  )
}

export default Logos