
import { useDispatch, useSelector } from 'react-redux'
import { toggleSlide } from '../Utils/appSlice'
import { useEffect, useState } from 'react'
import { Suggestion_Api } from '../Utils/Constents'
import { addCache } from '../Utils/cacheStore'
import { Link, useNavigate } from 'react-router-dom'
import ShowSearchItems from './ShowSearchItems'
import { addSearchResults } from '../Utils/searchSlice'
 

const Header = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let [search,setsearch]=useState("")
    let [suggestion, setSuggestion]=useState([])
    let [showSuggetion,setShowSuggestion]=useState(false);
    let cachesfile = useSelector(store=>store.cache);
    let handleSideMenu=()=>{
        dispatch(toggleSlide())
    }
    useEffect(()=>{
       let timer= setTimeout(()=>{
            if(cachesfile[search]){
            setSuggestion(cachesfile[search]) 
            }else{
                searchSuggestionApi()
            }  
        },300)
       return()=>{
        clearTimeout(timer);
       }
       
    },[search])


    let searchSuggestionApi=async()=>{
        let data = await fetch(Suggestion_Api+search);
        let json = await data.json();
        setSuggestion(json[1])
        dispatch(addCache({[search]:json[1]}))
    }
  let searchcall=()=>{
    dispatch(addSearchResults(search))
    navigate("/Search")
  }
 let searchcalllist=(itemslist)=>{
    dispatch(addSearchResults(itemslist))
    navigate("/Search")
  }
 
  return (
    <div className="p-4 shadow-lg grid grid-flow-col">
        <div className='flex col-span-1 '>
            <button className='hidden md:block ' onClick={handleSideMenu}>
                <i className="text-2xl fa-solid fa-bars cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2"></i>
            </button>
          <div>
            <Link to={"/"}>  <img className='mx-2 w-26 h-6 my-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" alt="Logo">
          </img></Link>
          </div>
        </div>
        <div className='col-span-10  mx-auto hidden md:block'>
            <input type='text' 
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            placeholder='Search'
            className= 'w-110 px-3 border-1 py-1 border-black rounded-l-full '
            ></input>
             <button className='border rounded-r-full bg-gray-200 py-1 px-5 hover:bg-gray-300' onClick={searchcall}><i className="fa-solid fa-magnifying-glass"></i></button> 
            {showSuggetion && (
                <div className=' w-[28rem] fixed bg-white shadow-lg rounded-lg '>
            <ul>
             {suggestion.map((item, index) => (
                <ShowSearchItems 
                    key={index} 
                    items={item} 
                    searchcall={searchcalllist}  
                />
            ))}
        </ul>
        </div>
            )  }
        </div>
       
        <div className='flex col-span-1'>
            <button className=''>
                <i className="text-2xl fa-regular fa-bell cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2"></i>
                
            </button>
         <button className=''>
                <i className="text-2xl fa-solid  fa-user cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2"></i>
             
            </button>
        </div>
    </div>
  )
}

export default Header