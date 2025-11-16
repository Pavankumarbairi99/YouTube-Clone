import React, { useEffect } from 'react'
import commentsData from './commentsData'
import { search_key, search_Youtube_Videos } from '../Utils/Constents';

let Comments=({data})=>{
    let {img,name,text}= data;
    return(
 <div className='flex flex-row align-center rounded-sm px-3 py-1 my-2 bg-gray-100'>
       <div className='mx-2'>
         <img className='my-1 w-10 rounded-full' src={img} alt='use-icon'>
        </img>
       </div>
        <div className='mx-2 flex flex-col justify-center'>
            <h5 className='font-bold'>{name}</h5>
        <p className='text-sm text-gray-500 my-1'>{text}
        </p>
        </div>
       </div>

    )
}

let CommentsList = ({comments})=>{
    return comments.map((comment,index)=>(
        <div>
            <Comments key={index} data={comment} />
            <div className='pl-5 ml-5 border-l border-l-black'>
            <CommentsList comments={comment?.replays} />

            </div>
        </div>
    ))
}

const CommentCard = () => {
 
  return (
    <div className='my-4 px-3'>
       <h1 className='font-bold text-lg my-3'>Comments</h1> 
         { /*commentsData.map((items,index)=>(<Comments data={items} key={index} />))*/}
         <CommentsList comments={commentsData} />
        </div>
  )
}

export default CommentCard