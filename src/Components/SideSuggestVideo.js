import React, { useEffect, useState } from 'react'
import SideSuggestCard from './SideSuggestCard'
import {   youtube_Apis } from '../Utils/Constents'
import { Link } from 'react-router-dom'

const SideSuggestVideo = ({id}) => {
    let [sidesuggest, setSideSuggest]= useState("")
    useEffect(()=>{
        SideSuggestionAPI()
    },[])
    
    let SideSuggestionAPI=async()=>{
    let data = await fetch(youtube_Apis);
    let josn = await data.json()
    setSideSuggest(josn?.items)
    }
    if(!sidesuggest) return null
  return (
    <div className='w-full'>
        {
            sidesuggest.map(items=>(
                <Link to={"/watch?v="+items?.id} key={items?.id}>
                    <SideSuggestCard videos={items} />

                </Link>
            ))
        }
     

    </div>
  )
}

export default SideSuggestVideo