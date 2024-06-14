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
      <div className=''>
        {data.status == "success" &&
        <>
          <p>Nome do local: {data?.data[0]?.localeName}</p>
          <p>Data 1: {data?.data[0]?.Data1}</p>
          <p>Data 2: {data?.data[0]?.Data2}</p>
          <p>Data 3: {data?.data[0]?.Data3}</p>
          <p>Temperatura: {data?.data[0]?.temperature}</p>
          <p>Temperatura: {data?.dataUpdatedAt}</p>
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