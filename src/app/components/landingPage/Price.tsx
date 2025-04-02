import React from 'react'
import CardPrice from './assinatura/CardPrice'
import { Garantia } from './assinatura/Garantia'
import { CircleCheck } from 'lucide-react'

const basicPlanFeatures = [
    { text: "Dossiês Investigativos", active: true },
    { text: "Documentários Exclusivos", active: true },
    { text: "Gravações dos Congressos do Movimento Brasil Livre", active: true },
    { text: "Acesso a Comunidade e a Notícias Exclusivas", active: true },
    { text: "Bastidores da Valete e do Congresso Nacional", active: true },
    { text: "Uma Revista Valete com Frete Grátis", active: true },
    { text: "Filmes Originais MBL", active: false },
    { text: "Todas as Aulas da Valete + Acesso aos Novos Cursos", active: false },
    { text: "Ingresso Para O Primeiro Festival do MBL", active: false },
  ]

  // Dados para o plano premium (todas as features ativas)
  const premiumPlanFeatures = [
    { text: "Dossiês Investigativos", active: true },
    { text: "Documentários Exclusivos", active: true },
    { text: "Gravações dos Congressos do Movimento Brasil Livre", active: true },
    { text: "Acesso a Comunidade e a Notícias Exclusivas", active: true },
    { text: "Bastidores da Valete e do Congresso Nacional", active: true },
    { text: "Uma Revista Valete com Frete Grátis", active: true },
    { text: "Filmes Originais MBL", active: true },
    { text: "Todas as Aulas da Valete + Acesso aos Novos Cursos", active: true },
    { text: "Ingresso Para O Primeiro Festival do MBL", active: true },
  ]

const Price = () => {
  return (
    <div className=''>
        <div className='text-center flex flex-col gap-4 mb-4'>
            <h1 className='font-extrabold text-[#d11313] text-[28px] md:text-5xl'>Descubra Conteúdos que Ninguém<br/> Mais Está Contando!</h1>
            <p className='text-[18px] font-medium'>Explore análises investigativas, cursos transformadores e uma revista física mensal com temas que<br/> ampliam sua visão de mundo. Assine agora mesmo!</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center mb-8'>
            <CardPrice
                features={basicPlanFeatures}
                planName='Básico'
                price='30'
                description='Ideal para quem busca conteúdos exclusivos e de qualidade.'
            />
            <CardPrice
                features={premiumPlanFeatures}
                planName='Revista'
                price='150'
                description='O Plano Revista é para quem deseja mergulhar no universo do Valete Plus.'
            />
        </div>
        <Garantia />
        <div className='flex flex-col justify-center items-center gap-6'>
            <div className='flex bg-black text-white text-[18px] p-4 rounded-full font-bold gap-2'>
                <CircleCheck size={26}/>
                <p>WhatsApp</p>
            </div>

            <div className='text-center'>
                <h2 className='text-2xl md:text-[28px] font-extrabold pb-4'>Ficou com alguma Dúvida?</h2>
                <h2 className='text-[32px] font-extrabold pb-8'>Entre em Contato Com Nosso Time!</h2>
                <p className='text-xl'>Finalize sua assinatura pelo WhasApp e tire todas suas dúvidas<br/> sobre nossos planos e produtos.</p>
            </div>

            <button className='text-white bg-[#d11313] p-4 text-2xl font-extrabold rounded-2xl px-6 hover:bg-black ease-in-out transition-colors duration-700'>Falar com atendente</button>
        </div>
    </div>
  )
}

export default Price