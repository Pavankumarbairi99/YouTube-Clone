import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import LiveMessage from './LiveMessage';
import ButtonList from './ButtonList';
import SideSuggestVideo from './SideSuggestVideo';
 
const WatchPage = () => {
      let dispatch = useDispatch()
      let [searchparams] = useSearchParams();
      let videoid = searchparams.get("v")
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='videoContainer-bg'>
    <div className='flex w-full '>
      <div className='p-5 ml-1  '>
        <iframe width="770" height="400"  className=' rounded-lg'
        src={`https://www.youtube.com/embed/${videoid}?autoplay=1` }
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowFullscreen>
        </iframe>
       
     </div>
      <div className='p-2 mt-3 w-full pr-5'>
        <LiveMessage />
      </div>
  
    </div>

      <div className="grid grid-cols-12 gap-4 mx-5">
      <div className="px-3 col-span-12 md:col-span-7 mt-[-20px]">
        <CommentCard />
      </div>
       <div className="mx-3 col-span-12 md:col-span-5 ">
        <div className='liveMessage-bg'>
            <ButtonList />
        </div>
        <div>
          <SideSuggestVideo id={videoid} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default WatchPage