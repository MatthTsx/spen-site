import React, { useEffect } from 'react'
import { api } from '~/utils/api'

function Data() {
  const data = api.Admin.getAll.useQuery()
  const loaded = React.useRef(false)

  useEffect(() => {
    if(loaded.current) return
    loaded.current = true
    setInterval(() => {
      data.refetch().catch((e) => console.log(e))
    }, 1000)

  }, [loaded])

  console.log(data.data)

  return (
    <div className='h-screen w-screen flex items-center text-white justify-between px-[5%]'>
      <div className='flex items-center flex-wrap w-[25%] gap-2'>
        {data.status == "success" &&
        <>
          <div className='data'><div className='data2'/><p>nome do local: {data?.data[0]?.localeName}</p></div>
          <div className='data'><div className='data2'/><p>altitude: {data?.data[0]?.altitude}</p></div>
          <div className='data'><div className='data2'/><p>chuva: {data?.data[0]?.chuva}</p></div>
          <div className='data'><div className='data2'/><p>direção do vento: {data?.data[0]?.direVent}</p></div>
          <div className='data'><div className='data2'/><p>temperatura: {data?.data[0]?.temperature}</p></div>
          <div className='data'><div className='data2'/><p>pressao: {data?.data[0]?.pressao}</p></div>
          <div className='data'><div className='data2'/><p>umidade: {data?.data[0]?.umidade}</p></div>
          <div className='data'><div className='data2'/><p>velocidade do vento: {data?.data[0]?.veloVent}</p></div>
        </>
        }
      </div>
      <div className='w-[55%] bg-red-500 h-[80%]'>
        Modelo 3D do projeto cm agua em baixo q sobe ou desce dependendo da potencia da chuva
      </div>
    </div>
  )
}

export default Data