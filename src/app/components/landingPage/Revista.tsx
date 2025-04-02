import { jost } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import BtnAssinatura from './BtnAssinatura'

const Revista = () => {
  return (
    <div className={`py-12 ${jost.className} flex flex-col justify-center items-center`}>
        <div className='flex flex-col justify-center items-center text-center gap-3 md:pb-5'>
            <h1 className='text-[#d11313] text-[28px] font-extrabold md:text-5xl'>
                Receba Uma Revista Todos os Meses Com Frete Grátis!
            </h1>
            <p className='text-[18px]'>
                A tecnologia é o futuro, isso é inegável.
                Mas poder ter em mãos, sentir o papel e deixar-se levar<br className='hidden lg:block'/> por uma boa leitura, não tem preço. 
                E, exatamente por isso, enviaremos uma Revista Valete para o <br/>conforto da sua casa com o frete totalmente grátis!
            </p>
        </div>
        <div className='flex flex-col items-center justify-center md:flex-row 2xl:px-32'>
            <div className='md:w-3/5'>
                <Image
                    src={'/aRevista.avif'}
                    alt='Revista Valete'
                    height={481}
                    width={591}
                    className=''
                />
            </div>
            
            <div className='text-center md:text-left md:w-2/5 flex flex-col items-center md:items-start'>
                <h1 className='text-[#d11313] text-[32px] font-extrabold md:text-4xl'>REVISTA VALETE</h1>
                <h3 className={`${jost.className} text-2xl text-black font-extrabold mb-4`}>- EDIÇÃO 21</h3>
                <h2 className={`${jost.className} text-[28px] text-black font-extrabold md:text-[32px]`}>POR QUE O BRASILEIRO <br/>DEU ERRADO?</h2>
                <p className='text-[16px] text-black font-medium pb-8'>
                    São mais de 70 páginas recheadas de conteúdos que abordam os mais diversos temas. 
                    De economia a filosofia, de política a história, de cultura pop a culinária. 
                    Serão mais de 20 artigos onde você poderá ler os textos, apreciar a história, e aprender muito no conforto da sua casa.
                </p>
                <BtnAssinatura />
            </div>
        </div>
        <Image
            src={'/bannerComunidade.avif'}
            alt='comunidade'
            width={795}
            height={152}
            className='w-[430] mt-8'
        />
        <p className='text-center text-[18px]'>
            Já imaginou um lugar com debates de alto nível, onde você pode expressar sua opinião sem medo e encontrar pessoas que pensam igual a você?
             <br/><b>Esse lugar é aqui!</b>
        </p>
    </div>
  )
}

export default Revista