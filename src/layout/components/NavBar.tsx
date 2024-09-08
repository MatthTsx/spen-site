import React from 'react'
import Cloud from './Cloud'

function NavBar() {
  return (
    <div className='fixed w-screen text-[#0b0a0ef] top-0 left-0 p-4 px-20 flex items-center justify-between font-bold'>
        <div className='flex items-center gap-20'>
            <div className='flex items-end relative'>
                <div className='scale-75 absolute -z-[2] left-[-.8em]'>
                    <Cloud/>
                </div>
                <p><span className='text-black'>SP</span>EN</p>
            </div>
            <p>Data</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <p>Sla</p>
    </div>
  )
}

export default NavBar