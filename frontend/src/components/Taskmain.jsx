import React, { useEffect, useRef, useState } from 'react'

export default function Taskmain() {
    let reftaskname = useRef()
    let reftaskdetails = useRef()
    const [tasklist,settasklist] = useState([])
    const [ui,setui] = useState()
    let divref = useRef()
    const [n,setn] = useState(0)
    useEffect(()=>
    {   
      let tempui = tasklist.map((t)=>
    {
        return <tr><td>{t.taskname}</td>
        <td>{t.des}</td>
        <td>{t.status}</td></tr>
    })
        setui(tempui)
    },[n])
    let additem = ()=>
    {
        let task = {taskname:reftaskname.current.value,
            des:reftaskdetails.current.value,status:"pending"}      
        tasklist.push(task)        
        setn(n+1)
            reftaskname.current.value=""
            reftaskdetails.current.value=""
    }

  return (
    <div>Taskmain
        <p>Task: <input type="text" ref={reftaskname} /></p>
        <p>Details: <input type="text" ref={reftaskdetails} /></p>
        <input type="button" value="+" onClick={()=>additem()} />
        <table>
<tr><th>TAsk</th> <th>Details</th> <th>Status</th> <th>Markcomplete</th> <th>Delete</th></tr>
{ui}
        </table>
    </div>
  )
}
