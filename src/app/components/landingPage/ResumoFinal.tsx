
import React from 'react'
import GreenCheckIcon from '../ui/checkGreen'
import Image from 'next/image'
import Link from 'next/link'
import IphonesFinal from './resumoFinal/IphonesFinal'

export const CardDownload = (
    {link, img, alt, text_1, text_2}:{link:string, img:string, alt:string, text_1:string, text_2:string}
) =>{
    return(
        <Link href={link} className='bg-black rounded-lg p-4 w-44 flex items-center justify-center text-white gap-4'>
            <Image src={img} alt={alt} width={32} height={32}/>
            <div className='flex flex-col'>
                <p>{text_1}</p>
                <p className='font-bold text-[16px]'>{text_2}</p>
            </div>
        </Link>
    )
}

const ResumoFinal = () => {
  return (
    <div>
        <div className='text-center '>
            <h1 className='text-5xl font-extrabold pb-4'>Conhecimento e Cultura Na<br/> Palma da Sua Mão.</h1>
            <p className='text-[18px] font-medium'>Baixe o Valete Plus no seu dispositivo Android ou iOS e descubra um universo<br/> de conteúdos exclusivos, cultura enriquecedora e uma<br/> comunidade engajada.</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-6 px-6 py-8 items-center justify-between text-xl text-zinc-500 font-medium md:px-10 lg:px-48 xl:px-96'>
            <div className='flex justify-start gap-2'><GreenCheckIcon/> <p>+2.000 Páginas <br className='md:hidden'/>De Conteúdo</p></div>
            <div className='flex justify-center gap-2'><GreenCheckIcon/> <p>20 Documentários</p></div>
            <div className='flex justify-end gap-2'><GreenCheckIcon/> <p>Cursos</p></div>
            <div className='flex justify-end gap-2'><GreenCheckIcon/> <p>Dossiês em Áudio</p></div>
            <div className='flex justify-end gap-2'><GreenCheckIcon/> <p>Filmes Originais MBL</p></div>
            <div className='flex justify-end gap-2'><GreenCheckIcon/> <p>Clube do Livro</p></div>
        </div>
        <div className='flex items-center justify-center gap-10 pb-12'>
            <CardDownload link='https://play.google.com/store/apps/details?id=br.valete.app' text_1='Disponivel no' text_2='Google Play' img='/playStore.svg' alt='Link de acessoa play store'/>
            <CardDownload link='https://apps.apple.com/br/app/valete/id6737577447' text_1='Disponivel na' text_2='App Store' img='/appleStore.avif' alt='Link de acessoa apple store'/>
        </div>
        <div className='pt-52'>
            <IphonesFinal/>
        </div>
    </div>
  )
}

export default ResumoFinal