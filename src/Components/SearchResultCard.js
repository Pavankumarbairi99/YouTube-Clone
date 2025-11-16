import React from 'react'
import Profile from "../Utils/Images/profile.png"

const SearchResultCard = ({data}) => {
    
    let {snippet,id}=data;
    let{channelTitle,title,thumbnails,description,publishTime}=snippet;

  return (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 m-2 py-3 p-4">

  <div className="md:col-span-5 ">
    <img src={thumbnails?.medium?.url} className="w-[100%] rounded-lg" alt="searchImage" />
  </div>

  <div className="md:col-span-6 flex flex-col px-3 my-2 py-2">
    <h4 className="text-lg font-semibold w-full">{title}</h4>
       <div className='flex my-5'>
         <div className='col-span-4 flex items-center'>
            <img src={Profile} alt='profile'className='mr-2 w-8 h-8  ' ></img>
        </div>
       <div className='col-span-8 flex flex justify-start items-center'>
         <h2 className='text-sm text-gray-500s'>{channelTitle}</h2>
       </div>
       </div>
    <p className="text-sm text-gray-500 py-2">{description}</p>
  </div>
</div>

  )
}

export default SearchResultCard