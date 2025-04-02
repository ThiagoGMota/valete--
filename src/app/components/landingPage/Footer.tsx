import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  const ano = new Date().getFullYear()
  return (
    <div className="w-full flex flex-col items-center justify-center px-20 pt-10   bg-[radial-gradient(27.2745%_35.9016%_at_50%_-2.77556e-14%,_rgb(19,19,21)_0%,_rgb(0,0,0)_100%)] ">
        <div className='flex flex-col items-center justify-center h-4/5 gap-8 py-8'>
            <Image 
                src={'/valeteTextoLogo.svg'}
                alt='Logo da Valete'
                width={176}
                height={66}
            />
            <p className='text-[20px] text-zinc-200 '>Cultura, Arte & Política Dissidente.</p>
            <div className='flex gap-4'>
                <Link href={''} className='bg-zinc-900 rounded-xl p-1 w-11 h-11 flex items-center justify-center shadow-2xl'>
                    <Image src={'/icons/x.svg'} alt='X logo' width={24} height={24}/>
                </Link>
                <Link href={''} className='bg-zinc-900 rounded-xl p-1 w-11 h-11 flex items-center justify-center shadow-2xl'>
                    <Image src={'/icons/instagram.svg'} alt='Instagram logo' width={24} height={24}/>
                </Link>
            </div>
            <button className='text-white bg-zinc-800 p-4 rounded-xl font-medium '>
                
                <a href="mailto:falecom@valete.org.br">falecom@valete.org.br</a>
            </button>
        </div>
        <div className='h-1/5 border-t  flex items-center pb-8 pt-6 justify-between w-full  border-zinc-600 text-zinc-500'>
            <p className='text-[17px]'>Todos os direitos reservados.</p>
            <p>© Valete {ano}</p>
        </div>
    </div>

  )
}

export default Footer