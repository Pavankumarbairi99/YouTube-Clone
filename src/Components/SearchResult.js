import { useEffect, useState } from "react";
import { search_key, search_Youtube_Videos } from "../Utils/Constents";
import { useSelector } from "react-redux";
import SearchResultCard from "./SearchResultCard";
import { Link } from "react-router-dom";

let SearchResults =()=>{
    let [searchdata,setsearchdata] =useState()
    let searchText = useSelector(store=>store.search.searchText)
   
  useEffect(()=>{
    searchApi()
  },[searchText])
  let searchApi=async()=>{
    let data = await fetch(search_Youtube_Videos+searchText+search_key);
    let josn = await data.json()
    setsearchdata(josn?.items)
    
  }
 
  if(!searchdata) return null;
    return (
        <div className="videoContainer-bg">
            {searchdata.map(items=>(
            <Link to={"/watch?v="+items?.id.videoId} key={items.id}>
                <SearchResultCard  data={items}/>
            </Link>
           

            ))}
        </div>
    )
}
export default SearchResults;