import React, { useEffect, useState } from 'react'
import LiveChat from './LiveChat'
import { RandomCommentsList, RandomNamesList } from '../Utils/datahelp'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/livemsgSlice'

const LiveMessage = () => {
    let [livecomment,setlivecomment]=useState("");
    let dispatch = useDispatch()
    let storeitems = useSelector(store=>store.chat.message)
    useEffect(()=>{
      let time=  setInterval(()=>{
              dispatch(addMessage({
                name: RandomNamesList(),
                message : RandomCommentsList()
              }))
        },1500)
        return ()=> clearInterval(time)
    },[])
  return (
    <div className='border border-black bg-gray-100 h-[400px] w-full p-3 rounded-lg '>
        <div className='h-[320px] liveMessage-bg flex flex-col-reverse' >
       {
        storeitems.map((items,index)=>(
        <LiveChat key={index} name={items?.name} message={items?.message}  />
        ))
        }
      </div>
      <form  className='px-5 my-2  ' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Pavan kumar",
            message: livecomment
        }))
        setlivecomment("")
        }}>
        <input type="text" name="text" placeholder='Text your Comments' 
        value={livecomment}
        onChange={(e)=>{setlivecomment(e.target.value)}}
        className='border-b border-gray-600 px-3 py-2 w-[50%]' />
        <button className='bg-green-500 rounded-lg px-4 mx-3 py-1'>Send</button>
      </form>
    </div>
  )
}

export default LiveMessage