import React from 'react'
import TextAbout from './about/text'
import Colunas from './about/Colunas'

const About = () => {
  return (
    <div className='flex flex-col gap-6'>
        <TextAbout />
        <Colunas />
    </div>
  )
}

export default About