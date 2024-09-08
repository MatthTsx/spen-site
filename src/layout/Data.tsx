import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { api } from '~/utils/api'

const btnTxt = ["Visão Geral", "Temperatura", "Umidade", "Pressão", "chuva?", "Velocidade", "Direção"]

function Data() {
  const data = api.Admin.getAll.useQuery()
  const loaded = React.useRef(false)
  const [Selected, changeSelection] = React.useState({
    prev: 0, next: 0
  })
  const ref = React.useRef<HTMLDivElement>()
  const timeline = React.useRef(gsap.timeline())

  useEffect(() => {
    // const pos = ref.current?.style.transform.split(",")[1]?.replace(")", "")

    timeline.current.fromTo(ref.current!,{
      // y: pos
      y: `${100 + 100*Selected.prev}%`
    } , {
      y: `${100 + 100*Selected.next}%`,
      duration: .2
    },)
  })

  useEffect(() => {
    if(loaded.current) return
    loaded.current = true
    setInterval(() => {
      data.refetch().catch((e) => console.log(e))
    }, 1000)

  }, [loaded])


  if (!data.data) return <div className='w-screen h-screen'/>

  console.log(data.data)

  const DataView = () => {
    if (Selected.next == 0) return <DVGeral/>
    else if (Selected.next == 1) return <DVTempe/>
    else if (Selected.next == 2) return <DVUmida/>
    else if (Selected.next == 3) return <DVPress/>
    else if (Selected.next == 4) return <DVChuva/>
    else if (Selected.next == 5) return <DVVeloc/>
    else return <DVDirec/>
  }

  const DVGeral = () => <div>Geral</div>
  const DVTempe = () => <div>{data.data[0]?.temperature}ºC</div>
  const DVUmida = () => <div>{data.data[0]?.umidade}%</div>
  const DVPress = () => <div>{data.data[0]?.pressao}</div>
  const DVChuva = () => <div>{data.data[0]?.chuva}</div>
  const DVVeloc = () => <div>{data.data[0]?.veloVent}km/h</div>
  const DVDirec = () => <div>{data.data[0]?.direVent}</div>

  function SelectedIndicator(){
    return (
      <div className='relative h-[8%] aspect-square flex items-center justify-center -left-[20%]' ref={ref as React.MutableRefObject<HTMLDivElement>}>
        <div className='w-[50%] aspect-square rounded-full bg-green-500'/>
      </div>
    )
  }


  return (
    <div className='h-screen w-screen flex items-center text-white flex-shrink-0 justify-center px-20 p-12'>
      <div className='w-full h-full flex items-center gap-4 justify-between p-8'>
        <div className='h-full w-[20%] flex flex-col items-start relative'>
          <h3 className='absolute'>{data.data[0]!.localeName}</h3>
          <SelectedIndicator/>
          {btnTxt.map((t,i) => 
            <button key={i} className='btn-Data' onClick={() => {
              changeSelection((e) => ({next: i, prev: e.next}));
              console.log(ref.current)
              // gsap.to(ref.current!, {
              //   y: `${125 + 100*Selected}%`,
              //   duration: 1,
              // })
              // timeline.current.to(ref.current!, {
              //   y: "+= 45"
              // })
            }}>{t}</button>
          )}
        </div>
        
        <div className='w-[80%] h-full px-4 bg-green-950/10 drop-shadow-md rounded-md'>
          <DataView/>
        </div>
      </div>
    </div>
  )
}

export default Data