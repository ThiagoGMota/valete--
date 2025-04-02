import Image from 'next/image'
import React from 'react'

export const CardNovidades = ({title, text}:{title:string, text:string}) => {
    return(
        <div className='bg-black p-6 text-white flex flex-col gap-4 rounded-3xl w-full'>
            <h1 className='font-extrabold text-[20px]'>{title}</h1>
            <p className='text-[#f2f2f299] text-[18px]'>{text}</p>
        </div>
    )
}

const Novidades = () => {
  return (
    <div className=' w-full '>
        <div className='text-center flex flex-col gap-4'>
            <h1 className='font-extrabold text-[28px] md:text-4xl'>O Valete Plus é Projetado Para Oferecer <br/>Mais a Cada Dia.
            </h1>
            <p className='text-[18px] font-medium'>O Valete Plus está sempre evoluindo para oferecer mais valor aos assinantes. 
                As próximas <br className='hidden md:block'/>atualizações trarão inovações que vão transformar ainda mais a experiência no aplicativo,<br className='hidden md:block'/> tornando-o um hub completo para conhecimento, cultura e conexão. 
                Confira o que está por vir:
            </p>
        </div>
        <div className='relative flex justify-center items-center'>
            <Image src={'/valeteAppNovidade.avif'} alt='app da valete' height={548} width={299}/>
            <div className='absolute top-96 bg-[#FFFFEA] py-4 w-full lg:static lg:flex flex-col justify-evenly lg:h-[548px]' >
                <h1 className='text-[28px] text-center font-extrabold md:text-4xl py-6 mb-4'>Em breve os assinantes terão<br className='md:hidden'/> acesso a:</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  2xl:px-32">
                    <CardNovidades 
                        title='Acompanhamento em Tempo Real' 
                        text='Veja o status de entrega da sua Revista Valete diretamente no aplicativo.'
                    />
                    <CardNovidades 
                        title='IA Personalizada' 
                        text='Descubra conteúdos que se alinham aos seus interesses e facilitam sua jornada de conhecimento.'
                    />
                    <CardNovidades 
                        title='Rede Social Integrada'
                        text='Um espaço para compartilhar ideias, artigos e interagir em discussões relevantes.'
                    />
                    <CardNovidades 
                        title='Eventos e Lives Exclusivos'
                        text='Participe de lives interativas e discussões ao vivo sobre os temas dos dossiês, cursos.'
                    />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Novidades