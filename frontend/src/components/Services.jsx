import React from 'react'
// import Service from './Service'
import { services } from '../data'
import { Link } from 'react-router-dom'
export default function Services() {

let ui = services.map((ser)=>{
    return <div className='w-1/4'>
      <img src={ser.image} />
      <div>{ser.name}</div>
      <div>{ser.rating}</div>
      <Link to={"/Service/"+ser.id}>View Details</Link>
    </div>
})
  return (
    <div className='text-center mx-auto w-4/5 '>
        <h1 className='text-3xl text-cyan-500 font-bold'>Services</h1>
        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing <br></br>elit. Atque delectus tenetur molestiae praesentium iusto corrupti ex ut rerum dolorum aut, <br></br>fugiat, autem blanditiis. Quos aliquid, magni facilis molestiae suscipit tenetur?

        </p>
    <div className='flex gap-5 flex-wrap 
    align-middle items-center justify-center py-10'>
        {ui}
    </div>
    </div>
  )
}
