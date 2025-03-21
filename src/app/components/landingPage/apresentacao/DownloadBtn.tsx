import { InfoIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DownloadBtn = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-6 justify-center'>
        <div className='flex gap-2 items-center'>
            <InfoIcon size={28} color='gray'/>
            <p className='text-xl text-zinc-500 md:text-2xl lg:text-3xl'>Download Disponível Para</p>
        </div>
        <div className='bg-black rounded-full flex items-center justify-center px-4 py-6 w-[147px] h-[71px] gap-2'>
          <Image src={'/playStore.svg'} alt='play store logo' width={37} height={37}/>
          <p className='text-white text-xl pr-1'>| </p>
          <Image src={'/appleStore.avif'} alt='apple store logo' width={36} height={36}/>
        </div>
    </div>
  )
}

export default DownloadBtn