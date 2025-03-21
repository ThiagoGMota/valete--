

import Image from 'next/image'
import Link from 'next/link'
import { MenuCompleto, MenuMobile } from './Menu'




export const Navbar = () => {
  
  return (
    <div className=' flex py-2 px-5 items-center justify-between md:px-32 lg:px-40 md:py-4 border-2'>
      <Link href={'/'} className='md:w-1/6'>
        <Image src={'/logo.avif'} alt='Logo Valete+' width={28} height={28} className='md:w-9'/>
      </Link>
      <div className='lg:w-4/6 hidden lg:flex'>
        <MenuCompleto />
      </div>
      <div className='lg:w-1/6 lg:flex justify-end hidden '>
        <button className=' hidden md:flex bg-[#d11303] text-white font-bold hover:bg-red-700 transition-colors ease-linear w-[70,64px] h-[45,5px] px-[14px] py-[10px] rounded-[5px] cursor-pointer'>Login</button>
      </div>
      <div className='bg-[#d11303] w-[52px] h-[44px] px-[14px] py-[10px] rounded-[4px] lg:hidden cursor-pointer'>
        <MenuMobile />
      </div>
    </div>
    
  )
}
/* 
<div className='py-4 px-8 flex justify-between items-center'>
        <Link href={'/'}>
            <Image src={'/logo.avif'} alt='Logo Valete+' width={36} height={36} className='hover:font-black'/>
        </Link>
        <div>
            
        </div>
        <button className='bg-red-600 text-white px-4 py-3 rounded-lg font-semibold'>Login</button>
    </div>  */