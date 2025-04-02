import Image from 'next/image'
import React from 'react'

export const Garantia = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 lg:flex-row pb-14'>
            <Image
                src={'/garantia.png'}
                alt='garantia de 7 dias'
                width={300}
                height={300}
            />
            <div className='text-center flex flex-col gap-4 lg:text-left' >
                <h1 className='font-extrabold text-[44px]'>GARANTIA DE 7 DIAS</h1>
                <p className='text-[18px]   font-medium'>É por isso que oferecemos a você <b>7 dias de garantia total</b> para testar<br className='hidden lg:block'/> nossa assinatura. Se, por qualquer motivo, você decidir que não é o<br className='hidden lg:block'/> momento certo, pode cancelar dentro desse período e receber um<br className='hidden lg:block'/> reembolso completo.</p>
            </div>
        </div>
  )
}
