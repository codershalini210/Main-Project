import React from 'react'
import { useRef } from 'react'
export default function Regeg() {
    let nameref = useRef()
    let msgref = useRef()
    let showmsg =()=>
    {
        let username = nameref.current.value
      let  msg = "welcome "+username
        msgref.current.innerHTML = msg
        nameref.current.value=""
    }
    return (
    <div>
    <label htmlFor="">Enter name</label>
    <input type='text' ref={nameref} className='border-2'/>
        <input type="button" value="Click here" 
        onClick={()=>showmsg()} />
        <p ref={msgref}></p>
    </div>
  )
}
