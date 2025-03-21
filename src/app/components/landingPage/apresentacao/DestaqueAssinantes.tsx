import Image from 'next/image'
import React from 'react'

export const DestaqueAssinantes = () => {
  return (
    <div className='bg-black flex p-2 rounded-full w-80'>
        <div className='flex '>
            <Image src={'/assinante1.avif'} alt='foto do assinante' width={28} height={28} className='z-10 rounded-full'/>
            <Image src={'/assinante2.avif'} alt='foto do assinante' width={28} height={28} className='z-20 rounded-full relative right-3'/>
            <Image src={'/assinante3.avif'} alt='foto do assinante' width={28} height={28} className='z-30 rounded-full relative right-6'/>
        </div>
        <div>
            <p className='text-[16px] text-white font-bold'>Mais De 10 Mil Assinantes</p>
        </div>
    </div>
  )
}

