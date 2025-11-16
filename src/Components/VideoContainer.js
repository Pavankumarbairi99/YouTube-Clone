import React, { useEffect, useState } from 'react'
import {  Liked_Apis, youtube_Apis } from '../Utils/Constents'
import VideoCard, { AddVideorecommend } from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    let [videoList,setvideoList]= useState()
useEffect(()=>{
    youtube_videos_api()
},[])

let youtube_videos_api=async()=>{
    let data = await fetch(youtube_Apis);
    let data_josn = await data.json()
    let datalist = data_josn?.items;
    setvideoList(datalist)
}
if(videoList === undefined)return null;
  return  (
    <div className='flex flex-wrap videoContainer-bg p-2'>
     {/*videoList[41] && <AddVideorecommend videos={videoList[41]} /> */}
        {videoList.map((items)=>(
          <Link to={"/watch?v="+items?.id}>  <VideoCard key={items?.id}  videos={items} /></Link>
        ))}
        
    </div>
  )
}

export default VideoContainer