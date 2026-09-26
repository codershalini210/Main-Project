import React, { useState } from 'react'

export default function TAkinvaluefromstate() {
    // const [username,setusername] = useState("Demo")
    const [a,seta] = useState(0)
    const [b,setb] = useState(0)
    const [r,setr] = useState("")
    return (
    <div>
        <p>Enter a : <input type="text" onBlur={(e)=>seta(parseInt(e.target.value))} /></p>
        <p>Enter b : <input type="text" onBlur={(e)=>setb(parseInt(e.target.value))} /></p>
     <p className='text-lg text-amber-600'>   {r}
        </p>
        <input type="button" value="+" onClick={()=>setr("sum is " +(a+b))} className='border border-2 border-blue-700 p-2' />
        <input type="button" value="-" onClick={()=>setr("diff is " +(a-b))} className='border border-2 border-blue-700 p-2' />
        <input type="button" value="*" onClick={()=>setr("multiplication is "+(a*b))} className='border border-2 border-blue-700 p-2' />
        <input type="button" value="/" onClick={()=>setr("Division is "+(a/b))} className='border border-2 border-blue-700 p-2' />
        {/* <p>Enter naem <input type="text" onBlur={(e)=>setusername(e.target.value)} /></p>
        welcome {username} */}
    </div>
  )
}

