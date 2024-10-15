import React from 'react'
import Cloud from './Cloud'

function NavBar() {
  return (
    <div className='fixed w-screen text-[#0b0a0ef] top-0 left-0 p-4 px-20 flex items-center justify-between font-bold z-[1000] text-[16px]'>
        <div className='flex items-center gap-20'>
            <div className='flex items-end relative'>
                <div className='absolute -z-[2] left-[-.5em]'>
                    <Cloud/>
                </div>
                <p><span className='text-black'>SP</span>EN</p>
            </div>
            {/* <p>Data</p>
            <p>About</p>
            <p>Contact</p> */}
        </div>
        <p>ETEC Rosa</p>
    </div>
  )
}

export default NavBar