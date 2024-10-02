import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { api } from '~/utils/api'

const btnTxt = ["Visão Geral", "Temperatura", "Umidade", "Pressão", "Precipitação", "Velocidade do Vento", "Direção do Vento"]

function Data() {
  const data = api.Admin.getAll.useQuery()
  const [selected, setSelected] = React.useState(0)
  const indicatorRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(indicatorRef.current!, {
      y: `${120 * (selected+2)}%`,
      duration: 0.3,
      ease: "power2.out"
    })
  }, [selected])

  useEffect(() => {
    const interval = setInterval(() => {
      data.refetch().catch((e) => console.log(e))
    }, 60000) // Atualiza a cada minuto

    return () => clearInterval(interval)
  }, [])

  if (!data.data) return <div className='w-full h-screen flex items-center justify-center'>Carregando dados...</div>

  const DataView = () => {
    const currentData = data.data[0]
    switch (selected) {
      case 0: return <DVGeral data={currentData} />
      case 1: return <DVTempe temp={currentData?.temperature} />
      case 2: return <DVUmida umidade={currentData?.umidade} />
      case 3: return <DVPress pressao={currentData?.pressao} />
      case 4: return <DVChuva chuva={currentData?.chuva} />
      case 5: return <DVVeloc velocidade={currentData?.veloVent} />
      case 6: return <DVDirec direcao={currentData?.direVent} />
      default: return <DVGeral data={currentData} />
    }
  }

  return (
    <div className='min-h-[45%] w-full flex flex-col md:flex-row items-center my-[5%] text-gray-800 px-4 md:px-20 py-12'>
      <div className='w-full md:w-1/4 flex flex-col items-start relative mb-8 md:mb-0'>
        <h3 className='text-2xl font-bold mb-6'>{data.data[0]?.localeName}</h3>
          <div ref={indicatorRef} className='absolute h-8 w-1 bg-Navy-blue rounded-full -left-4'/>
        <div className='flex flex-col space-y-4 mt-4'>
          {btnTxt.map((t, i) => 
            <button 
              key={i} 
              className={`text-left hover:text-blue-500 transition-colors ${selected === i ? 'font-bold text-Navy-blue' : ''}`}
              onClick={() => setSelected(i)}
            >
              {t}
            </button>
          )}
        </div>
      </div>
      
      <div className='w-full md:w-3/4 h-full p-8 bg-white shadow-lg rounded-lg'>
        <DataView />
      </div>
    </div>
  )
}

// Componentes de visualização de dados
const DVGeral = ({ data }) => (
  <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
    <DataCard title="Temperatura" value={`${data?.temperature}°C`} />
    <DataCard title="Umidade" value={`${data?.umidade}%`} />
    <DataCard title="Pressão" value={`${data?.pressao} hPa`} />
    <DataCard title="Precipitação" value={`${data?.chuva} mm`} />
    <DataCard title="Velocidade do Vento" value={`${data?.veloVent} km/h`} />
    <DataCard title="Direção do Vento" value={data?.direVent} />
  </div>
)

const DataCard = ({ title, value }) => (
  <div className='bg-Champagne-Gold/40 p-4 rounded-lg'>
    <h4 className='text-sm text-Navy-blue/50'>{title}</h4>
    <p className='text-2xl font-bold'>{value}</p>
  </div>
)

const DVTempe = ({ temp }) => <DataCard title="Temperatura" value={`${temp}°C`} />
const DVUmida = ({ umidade }) => <DataCard title="Umidade" value={`${umidade}%`} />
const DVPress = ({ pressao }) => <DataCard title="Pressão" value={`${pressao} hPa`} />
const DVChuva = ({ chuva }) => <DataCard title="Precipitação" value={`${chuva} mm`} />
const DVVeloc = ({ velocidade }) => <DataCard title="Velocidade do Vento" value={`${velocidade} km/h`} />
const DVDirec = ({ direcao }) => <DataCard title="Direção do Vento" value={direcao} />

export default Data