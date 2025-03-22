'use client'

import React from 'react'
import Iphones from './Iphones'
import { Span_1, Span_2 } from './Span'

const imagem1 = '/imgPCarcaca.avif'
const AppApresentacao = () => {
  return (
    <div id='vitrine' className='border-2 border-violet-600'>
        <div className='md:hidden relative'>
            <div className='absolute top-10  left-16 sm:left-48 z-20'>
                <Span_1 />
            </div>

            <div className='flex items-center justify-center rotate-[28deg] '>
                <Iphones img={imagem1} />
            </div>

            <div className='absolute bottom-32 right-52 sm:right-80 z-20'>
                <Span_2 />
            </div>
            
        </div>
        
    </div>
  )
}

export default AppApresentacao