import React from 'react'
import profile from "../Utils/Images/profile.png"

const LiveChat = ({name,message}) => {
  return (
    <div className='flex items-center my-2  '>
        <div className='mx-2'>
            <img src={profile} className='w-8 h-8' alt="profile" />
        </div>
        <div className=''>
            <h3 className='font-bold text-[14px] '>{name}</h3>
            <p className='text-[14px] text-gray-700'>{message}</p>
        </div>
    </div>
  )
}

export default LiveChat