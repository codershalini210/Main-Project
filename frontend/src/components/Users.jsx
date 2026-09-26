import React from 'react'
import boyimg from "../assets/images/user1.jfif"
import girlimg from "../assets/images/user2.jfif"
export default function Users() {
    let usersAry = [
        {name:"Raman Shah",education:"B.com",img:boyimg},
        {name:"Maria Capner",education:"B.Tech",img:girlimg},
        {name:"Alex",education:"AI",img:boyimg},
        {name:"Olivia",education:"MA",img:girlimg}
    ]
    let usersUI = usersAry.map((u)=>{
        return <div className='flex flex-col gap-2 w-1/5 align-middle content-center
        items-center text-center'>
            <img src={u.img} className='w-4/5 aspect-square rounded-full border-2 border-amber-400'/>
            <div className='font-bold text-lg'>{u.name}</div>
            <div className='text-md'>{u.education}</div>
        </div>
    })
  return (
    <div className='flex flex-wrap gap-5 justify-center'>{usersUI}</div>
  )
}
