import { jost } from '@/app/fonts'
import React from 'react'

export const TextoSection = () => {
  return (
    <section className={`flex flex-col items-center justify-center px-3 gap-3 ${jost.className}`}>
        <article className='font-bold text-[28px] lg:text-5xl flex text-center'>
            <p className='text-5xl'>
                <span className='text-[#d11303]'>Valete Plus </span>
                --- O Aplicativo Que Reúne<br className='hidden lg:flex'/> Conhecimento e Cultura<br className='lg:hidden'/> em Um Só Lugar    
            </p>
            
        </article>
        <article className='text-center text-[18px] '>
            <p>O Valete Plus reúne tudo em uma única plataforma, pensada para quem deseja se<br className=''/> aprofundar em temas relevantes e transformadores.</p>
        </article>
    </section>
  )
}


