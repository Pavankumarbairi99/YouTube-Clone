import React, { useEffect } from 'react'
import Profile from "../Utils/Images/profile.png"
import useCountwords from './useCountwords';

const VideoCard = ({videos}) => {
    let {snippet,statistics,id} = videos;
    let{thumbnails,title, channelTitle}= snippet;
     let views = statistics?.viewCount;
     let views_words= useCountwords(views);
     let likes = statistics?.likeCount;
    let likes_words= useCountwords(likes)
    if(!thumbnails?.maxres?.url) return null;
  return (
    <div className='w-88 m-2 hover:shadow-lg rounded-xl'>
         <img className='rounded-xl' src={thumbnails?.maxres?.url} alt='Thamnails'></img>
       <div  className='p-2'>
        <div className='mt-3 mb-1 grid grid-flow-col'>
        <div className='col-span-4 flex items-center'>
            <img src={Profile} alt='profile'className='mr-2 w-8 h-8'></img>
        </div>
       <div className='col-span-8 flex flex justify-start items-center'>
         <h2 className='title-text'>{title}</h2>
       </div>
       </div>
        <h3 className='channel-title'>{channelTitle}</h3>
        <div className='flex my-1 views-bg'>
            <p className='like-views-para'>{views_words} Views</p>
        <p className='like-views-para'>{likes_words} Likes</p>
        </div>
       </div>
    </div>
  )
}
export const AddVideorecommend= ({videos})=>{
  return (<div className="border border-red-700">
    <VideoCard videos={videos}/>
    <p className='-mt-5 text-gray-600 pl-5'><span className='font-bold'>Add:</span> Recommended</p>
  </div>)
}
export default VideoCard