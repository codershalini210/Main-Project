import React, { useEffect, useRef, useState } from 'react'

export default function Taskmain() {
    const [tasklist,settasklist] = useState([])
    let divref = useRef()
    const [n,setn] = useState(0)
    useEffect(()=>
    {   
        divref.current.innerHTML =JSON.stringify(tasklist)
        console.log("in effect")
    })
    let additem = ()=>
    {
        let temp = tasklist
        console.log(tasklist)
        temp.push({taskname:"first",des:"dummy des",status:"pending"})
        settasklist(temp)
        setn(n+1)
        console.log(tasklist)
        console.log("in add item")
    }
  return (
    <div>Taskmain
        <input type="button" value="+" onClick={()=>additem()} />
        <div ref={divref}>

        </div>
    </div>
  )
}
