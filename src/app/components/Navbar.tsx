import { Menu, User2 } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  p-4 xl:p-6'>
        {/* menu lateral */}
        <div>
            <Menu />
        </div>
        {/* logo */}
        <div className='border-2 border-red-400'>
            <p className='uppercase font-semibold text-xl'>valete</p>
        </div>
        {/* user */}
        <div className='border-2 border-white rounded-full '>
            <User2 size={26}/>
        </div>
    </div>
  )
}

export default Navbar