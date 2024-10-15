import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import Image from 'next/image'
import Data from './Data'

function Hero() {
  const cloudRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(cloudRef.current!, {
      x: 20,
      y: 10,
      rotation: 5,
      repeat: -1,
      yoyo: true,
      duration: 10,
      ease: "power1.inOut"
    })
  })

  return (
    <div className='min-h-screen w-full text-gray-800 px-8 md:px-20'>
      <div className='w-full flex items-center justify-between px-8 md:px-20 my-[10%] mb-[12%]'>
        <div className='w-full md:w-1/2 flex flex-col items-start space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold'>S.P.E.N</h1>
          <h2 className='text-2xl md:text-3xl'>Sistema de Previsão e Estudo da Natureza</h2>
          <p className='text-lg'>Dados meteorológicos precisos e atualizados em tempo real.</p>
          <button className='bg-Navy-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300'>
            Explorar Dados
          </button>
        </div>
        <div className='md:flex w-1/2 justify-center relative flex items-start'>
          <Image src="/pictures/model.png" width={500} height={500} alt='Modelo Meteorológico' className='z-10 w-[75%] object-contain relative mt-[4%] -right-[20%]' ref={cloudRef}/>
          {/* <svg width="0" height="0">
            <filter id="cloud-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="1 1"/>
              </feComponentTransfer>
            </filter>
          </svg> */}
        </div>
      </div>
      <Data/>
    </div>
  )
}

export default Hero