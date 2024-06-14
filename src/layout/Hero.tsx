import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

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
    <div className='h-screen w-screen bg-[#020509] flex items-center justify-center text-white'>Hero -{'>'} representação 3D
    <p ref={ref}>Sla</p>
    </div>
  )
}

export default Hero