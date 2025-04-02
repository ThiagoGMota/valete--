import { jost } from '@/app/fonts'
import React from 'react'

const TextAbout = () => {
  return (
    <div className={`px-10 ${jost.className} `}>
        <h1 className={`text-[40px] font-extrabold text-center`}>O que é o<br className='sm:hidden'/> <span className='text-[#d11303]'>Valete Plus?</span></h1>
        <p className='text-center text-[18px] text-black mb-4'>O Valete Plus é mais do que um aplicativo - é a central onde conhecimento, cultura e aprendizado se encontram. Com dossiês investigativos, documentários exclusivos, cursos transformadores e uma revista física mensal, você tem acesso a conteúdos que informam, inspiram e conectam. Além disso, sua assinatura contribui para a democratização do conhecimento no Brasil e apoia a fundação da editora da Valete e do Café Valete, projetos que levarão cultura e impacto para ainda mais pessoas.</p>

        <p className='text-center text-[18px]'>Com uma audiência de mais de <b>2 milhões de pessoas alcançadas mensalmente</b> por meio de nossas lives e canais, o Valete Plus é um movimento para quem busca crescimento pessoal e deseja fazer parte de uma comunidade que transforma o cenário cultural do país.</p>
    </div>
  )
}

export default TextAbout