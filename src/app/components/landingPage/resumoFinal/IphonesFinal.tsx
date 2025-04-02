
import React from 'react'
import Iphones from '../Iphones'

const IphonesFinal = () => {
  return (
    <div className='flex gap-12 justify-center h-56 '>
        <div className='hidden md:block'>
            <Iphones img='/imgPCarcaca.avif'/>
        </div>
        <div className='scale-125 relative bottom-16'>
            <Iphones img='/loginScreen.avif'/>
        </div>
        <div>
            <Iphones img='/dossieScreen.avif'/>
        </div>
    </div>
  )
}

export default IphonesFinal