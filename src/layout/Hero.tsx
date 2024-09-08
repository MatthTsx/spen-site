import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import Image from 'next/image'

function Hero() {
    const ref = useRef<HTMLElement>()

    useGSAP(() => {
        gsap.to(ref.current!, {
            rotation: "+=360",
            x: 20,
            repeat: -1,
            duration: 1
        })
    })

  return (
    <div className='h-screen w-screen flex items-center justify-between text-white'>
      <div className='w-[50%] pl-20 pt-8 flex flex-col items-start aspect-[1.25] '>
        <h4>S.P.E.N</h4>
        A
      </div>
      <div className='w-[45%] aspect-square justify-center items-center flex relative top-[10%]'>
        <div className='absolute w-[60%] aspect-square bg-green-500 rounded-full'/>
        <div className='absolute w-[30%] aspect-square bottom-10 -right-1 bg-green-500 rounded-full'/>
        <Image src={"/pictures/model.png"} width={1000} height={1000} alt='model' className='z-10'/>
      </div>
    </div>
  )
}



export default Hero