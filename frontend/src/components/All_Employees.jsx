import React from 'react'
import useravatar from "../assets/images/user1.jfif"
import { employees } from '../data'
export default function All_Employees() {
    let emps_ui = employees.map((employee)=>{
        return <div className=' p-4 bg-gray-200'>
            <img src={useravatar} className='rounded-full border-4 aspect-square w-3/4' alt="" srcset="" />
            <div>{employee.name}</div>
            <div>{employee.department}</div>
            
        </div>
    })
  return (
    <div>Our Employees <hr />
    <div className='grid grid-cols-4'>
        {emps_ui}
        </div></div>
  )
}
