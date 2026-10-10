// Task 2: Student Marks Calculator
// Concept: Multiple state variables and dependencies.
// Create a component named StudentMarks.
// Requirements:
// - Create three states: maths, science, and total.
// - Set Maths marks to 70 and Science marks to 80.
// - Add buttons to increase or decrease each subject's marks.
// - Use useEffect() to calculate the total marks.
// - The total should update whenever either subject's marks change.
// - Display the total and percentage out of 200.
import React, { useEffect, useState } from 'react'

export default function Effecteg() {
    const [count,setcount] = useState(0)
    const [count1,setcount1] = useState(100)
    const [total,settotal] = useState(0)
    useEffect(()=>
    {
        console.log("Effect called")
        settotal(count * 100)
    },[count])
  return (
    <div>Effecteg
        
        <input type="text"  onBlur={(e)=>setcount(e.target.value)}/>
        <p>
           Item quantity  <input type="button" className='border p-2 bg-blue-400 text-2xl' value="-" onClick={()=>setcount(count-1)} />
             {count} <input type="button" value="+" onClick={()=>setcount(count+1)} className='border p-2 bg-blue-400 text-2xl'/>
             price : {total}
        </p>
          <p>
             <input type="button" value="-" onClick={()=>setcount1(count1-1)} className='border p-2 bg-blue-400 text-2xl' />
             {count1} <input type="button" value="+" onClick={()=>setcount1(count1+1)} className='border p-2 bg-blue-400 text-2xl'/>
        </p>
    </div>
  )
}
