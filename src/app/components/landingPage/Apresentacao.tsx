/* 'use client' */

import React from 'react'
import { DestaqueAssinantes } from './apresentacao/DestaqueAssinantes'
import { TextoSection } from './apresentacao/texto'
import BtnAssinatura from './BtnAssinatura'
import DownloadBtn from './apresentacao/DownloadBtn'
/* import { useGSAP } from '@gsap/react'
import gsap from 'gsap' */

function Apresentacao() {
  /* useGSAP(() => {
    gsap.to("",{})
  }, []) */

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <DestaqueAssinantes/>
        <TextoSection />
        <BtnAssinatura />
        <DownloadBtn />
    </div>
  )
}

export default Apresentacao