'use client'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface Links {
    id:     number
    url:    string
    title:  string
  }
  export const links:Links[] = [
    { id: 1, title: "Clube do Livro", url: "/" },
    { id: 2, title: "Revista Valete", url: "/menu" },
    { id: 3, title: "Fundadores",     url: "/" },
  ]
  export const cursos:Links[] = [
    { id: 1, title: "Filosofia", url: "/" },
    { id: 2, title: "História", url: "/menu" },
    { id: 3, title: "Escrita",     url: "/" },
    { id: 4, title: "Debate",     url: "/" },

  ]
  const user = false

export const MenuMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='cursor-pointer'>
        {!open ?(
          <MenuIcon color='#ffff' size={24} onClick={() => setOpen(true)}/>
        ) : (
          <MenuIcon color='#ffff' size={24} onClick={() => setOpen(false)}/>
        )}
        
        {open && (
            <div className='bg-[#d11303] absolute top-[70px] right-5 w-52 rounded-l-2xl flex flex-col py-4 text-[16px]'>
                {links.map((link) => (
                    <Link 
                    key={link.id}
                    href={link.url}
                    className='flex flex-col  text-white text-left px-4 py-2 font-bold hover:text-red-950 transition-colors ease-linear delay-75' 
                >{link.title}</Link>
                ))}
                {cursos.map((link) => (
                    <Link 
                    key={link.id}
                    href={link.url}
                    className='flex  text-white text-left px-4 py-2 hover:text-red-950 transition-colors ease-linear delay-75'
                >
                    Curso de <span className='font-bold ml-1 delay-[30ms] transition-colors ease-linear'> { link.title}</span>
                </Link>
                ))}
                <button className='cursor-pointer mt-2 self-center bg-white w-[180px] h-[55px] px-4 py-5 rounded-md flex items-center justify-center font-bold'>Login</button>
            </div>
        )}
            
    </div>
  )
}

export const MenuCompleto = () => {
  const [open, setOpen] = useState(false)

  return(
    
    <div className='hidden sm:flex justify-center gap-9 w-full text-[16px]'>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className='font-bold flex justify-evenly text-zinc-400 hover:text-zinc-950 transition-colors ease-linear'
        >
          {link.title}
        </Link>
      ))}
      <div>
        
        {!open ?(
          <p className='font-bold flex justify-evenly text-zinc-400 hover:text-zinc-950 transition-colors ease-linear cursor-pointer' onClick={() => setOpen(true)}>Cursos</p>
        ):(
          <p className='font-bold flex justify-evenly text-zinc-400 hover:text-zinc-950 transition-colors ease-linear cursor-pointer' onClick={() => setOpen(false)}>Cursos</p>
        )}
        {open && (
          <ul className=' absolute translate-x-14 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-[255px] h-[364px] bg-[#d11313] flex flex-col items-center  text-center justify-evenly  text-white '>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link 
                href={curso.url} 
                className='text-xl  hover:text-red-950 transition-colors ease-linear delay-75  '
                >
                  Curso de <span className='font-bold ml-1 delay-[30ms] transition-colors ease-linear'> {curso.title}</span>
                </Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  )
}