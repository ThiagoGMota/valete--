import Link from 'next/link'
import React from 'react'

const BtnAssinatura = () => {
  return (
    <Link 
        href={'/pay'}
        className='flex mt-5 items-center justify-center bg-[#d11303] text-white px-[14px]  w-[158px] h-[55px] rounded-xl font-bold text-[18px]'
    >
        Assinar Agora
    </Link>
  )
}

export default BtnAssinatura