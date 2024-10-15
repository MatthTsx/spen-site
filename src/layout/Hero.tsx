import React from 'react'
import Data from './Data'
import Image from 'next/image'

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque, massa nec tincidunt elementum, turpis neque eleifend elit, ut consequat orci neque in sem. Pellentesque fermentum placerat nibh vel rutrum. "

function Hero() {

  return (
    <div className='h-screen w-full text-gray-800 px-8 md:px-20 bg-white relative overflow-hidden'>
        <div className='w-full h-full absolute overflow-hidden right-0 pointer-events-none'>
            {[1,2].map((d) => 
                <div key={d} className={`h-[100%] aspect-[0.75] blur-[85px] rotate-45 absolute ${d==1 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-GreenDark to-GreenLight/40`} style={{
                    top: d == 1 ? "-50%" : "50%",
                    right: d == 1 ? "75%" : "-20%",
                }}/>
            )}
        </div>
        <div className='w-full flex items-center justify-center flex-col px-8 md:px-20 my-[10%] mb-[8.5%] z-[100] relative'>
          {/* <Image src="/pictures/model.png" width={500} height={500} alt='Modelo Meteorológico' className='z-10 w-[75%] object-contain relative mt-[4%] -right-[20%]'/> */}
            <Image src={"SN.svg"} alt='sla' width={2000} height={2000} className='object-contain w-full'/>
            <div className='w-full mt-24'>
                <div className='w-[33.3%] flex flex-col items-center justify-center'>
                    <Image src={"cloud.svg"} width={500} height={500} alt='C' className='absolute -z-[10] object-contain w-[50%]'/>
                    <h5>{texto}</h5>
                    <div className='w-full flex items-center mt-6 Hero_btn_holder gap-5'>
                        <button>Sign-Up</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
        <Image src={"Group12.svg"} width={2000} height={1000} alt='G' className='w-full absolute -bottom-[12.5%] right-0 z-[200]'/>
    </div>
  )
}

export default Hero