'use client'
import React, { useEffect, useState } from 'react'
import { DestaqueAssinantes } from './apresentacao/DestaqueAssinantes'
import { TextoSection } from './apresentacao/texto'
import BtnAssinatura from './BtnAssinatura'
import DownloadBtn from './apresentacao/DownloadBtn'
import gsap from 'gsap'


function Apresentacao() {
  const [mounted, setMounted] = useState(false);  

  useEffect(() => {
    setMounted(true);

    if (mounted) {
      gsap.from("#assinantes", {
        opacity: 0,
        y: "-10",
        ease: "power1.inOut",
        duration: 0.5,
        delay:0.5
      })
      gsap.fromTo(".texto-apresentacao",{
        opacity: 0,
        y: 40
      },{
        opacity: 1,
        y: 0,
        stagger: .1,
        duration: 0.5,
        delay:0.5
      })
    }
  }, [mounted])

  if (!mounted) {
    return <div></div>;
  }

  return (
    <div id='apresentacao' className='flex justify-center items-center flex-col gap-4 pt-4'>
      <div id='assinantes' className=''><DestaqueAssinantes/></div>
      <div className='texto-apresentacao'><TextoSection /></div>
      <div className='texto-apresentacao'><BtnAssinatura /></div>
      <div className='texto-apresentacao'><DownloadBtn /></div>
    </div>
  )
}

export default Apresentacao
