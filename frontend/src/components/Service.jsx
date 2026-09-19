import React from 'react'

export default function Service(props) {
  return (
    <>
    
    <div className='flex flex-col w-1/4 border-2 border-gray-300 text-center p-2 '>
        <div className='text-lg font-bold'>{props.name}</div>
        <hr />
        <div className='text-sm pt-2'>{props.des}</div>
    </div>
    </>
  )
}
