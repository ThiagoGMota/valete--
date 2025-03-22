'use client'

import React, { useEffect, useState } from 'react'
import Iphones from './Iphones'
import { Span_1, Span_2 } from './Span'
import gsap from 'gsap'

const imagem1 = '/imgPCarcaca.avif'
const imagem2 = '/loginScreen.avif'
const imagem3 = '/dossieScreen.avif'

const AppApresentacao = () => {

    const [mounted, setMounted] = useState(false); 

    useEffect(() => {
        setMounted(true);
    
        if (mounted) {
          gsap.from('#iphone_sm',{
            rotate: 0,
            opacity: 0
          })  


          gsap.from("#vitrine_2", {
            opacity: 0,
            scale:0.5,
            duration:0.5
          })
          gsap.from('.iphone',{ rotate:0 })
          gsap.fromTo('.span_animado', {
            opacity: 0,
          },{
            opacity:1,
            stagger:.5,
            delay:.3,
          })
        }
    }, [mounted])
    
    if (!mounted) {
        return <div></div>;
    }
    
    return (
        <div className='border-2 border-violet-600 '>
            <div id='vitrine_1' className='md:hidden relative'>
                <div className='absolute top-10  left-16 sm:left-48 z-20  span_animado'>
                    <Span_1 />
                </div>

                <div id='iphone_sm' className='flex items-center justify-center rotate-[28deg] '>
                    <Iphones img={imagem1} />
                </div>

                <div className='absolute bottom-32 right-52 sm:right-80 z-20 span_animado'>
                    <Span_2 />
                </div>
                
            </div>
            <div id='vitrine_2' className='hidden md:flex items-center justify-center gap-52 mt-28'>
                <div className='-rotate-[20deg] scale-[1.4] iphone'>
                    <Iphones img={imagem3} />
                </div>
                <div className='flex '>
                    <div className='relative   right-28 z-20 span_animado'>
                        <Span_1 />
                    </div>

                    <div className='scale-[1.6]'>
                        <Iphones img={imagem2} />
                    </div>
                    
                    <div className='relative bottom-2 left-4  z-20 span_animado'>
                        <Span_2 />
                    </div>
                </div>
                
                <div className='rotate-[20deg] scale-[1.4] iphone'>
                    <Iphones img={imagem1} />
                </div>
            </div>
            
        </div>
  )
}

export default AppApresentacao