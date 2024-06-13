import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

const arr = ["dan.jpg", "pedro.jpg", "rafael.jpg", "anaB.jpg", "matheus.jpg", "matheus.jpg", "matheus.jpg", "matheus.jpg"]

const CreditsData = [
    {
        ImagePath: "dan.jpg",
        Name: "Daniel Viado do Caralho",
        Text: "TODO: fazer o background (O girozinho de escolher as coisas vai virar um moinho e ter chuva)"
    },
    {
        ImagePath: "pedro.jpg",
        Name: "Pedro Henrique Gorzilo Rocha",
        Text: "Foda"
    },
    {
        ImagePath: "rafael.jpg",
        Name: "Rafael Henrique Belarmino",
        Text: "Gay"
    },
    {
        ImagePath: "anaB.jpg",
        Name: "Ana Beatriz da Silva",
        Text: "Foda"
    },
    {
        ImagePath: "matheus.jpg",
        Name: "Matheus Dedim",
        Text: "Dedim"
    },
    {
        ImagePath: "matheus.jpg",
        Name: "Mateus Almeida Oliveira",
        Text: "Foda"
    },
    {
        ImagePath: "matheus.jpg",
        Name: "Adelma Silva Beltrão",
        Text: "Foda"
    },
    {
        ImagePath: "matheus.jpg",
        Name: "Natália Santos Nascimento",
        Text: "Foda"
    },
]

function MadeBy() {
    const [hovered, setHovered] = React.useState(0)
    const ref1 = React.useRef<HTMLElement>()
    const tl = React.useRef<GSAPTimeline>()

    useGSAP(() => {
        tl.current = gsap.timeline()

        tl.current.to(ref1.current!, {
            rotate: "+=360",
            duration: 5,
            repeat: -1,
            ease: "linear"
        })
    })

  return (
    <div className='h-screen w-screen flex flex-col items-center p-8 px-24'>
        <div className='text-white h-[10%] items-end flex w-[100%] px-[5%]'>
            <h2>Creditos: </h2>
        </div>
        <div className='w-[100%] h-[90%] flex items-center text-white justify-between px-[5%]'>
            {GenerateComponentImage(["dan.jpg", "pedro.jpg", "rafael.jpg", "anaB.jpg", "matheus.jpg", "matheus.jpg", "matheus.jpg", "matheus.jpg"])}
            <div className='flex flex-col items-start gap-2 w-[25%] h-[80%]'>
                <Image src={`/pictures/${CreditsData[hovered]!.ImagePath}`} width={500} height={500} alt={CreditsData[hovered]!.Name} priority
                className='w-[70%] aspect-[.6] object-cover rounded-md'/>
                <h3 className='mt-[10%]'>{CreditsData[hovered]?.Name}</h3>
                <p>{CreditsData[hovered]?.Text}</p>
            </div>
        </div>
    </div>
  )

  function GenerateComponentImage(array: Array<string>){
    return <div className='relative w-[45%] aspect-square flex items-center justify-center group' ref={ref1} onMouseEnter={() => tl.current?.timeScale(0.10)} onMouseLeave={() => tl.current?.timeScale(1)}>
        {array.map((m,i) => 
            <Image src={`/pictures/${m}`} key={i} alt={m} width={200} height={200} style={{
                rotate: ( 360/array.length * (i + 1) ) + "deg",
                }}
                className='absolute translate-y-[-50%] object-cover w-[30%] aspect-[0.6] hover:z-10 opacity-75 hover:opacity-100 transition-all cursor-pointer group-hover:translate-y-[-40%] ImageHover  rounded-md'
                onClick={() => setHovered(i)}
                />
        )}
    </div>
  }
}

export default MadeBy