import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../data'
export default function Service() {
  let params = useParams()
  let id = params.id
  let service = services.find((s)=>s.id==id)
  return (
    <>
    {/* this is service  {id} */}

    <div className='flex flex-col  border-2 border-gray-300 text-center p-2 '>
        <div className='text-lg font-bold'>{service.name}</div>
        <hr />
        <div className='text-sm pt-2'>{service.description}</div>

    </div>
    </>
  )
}
