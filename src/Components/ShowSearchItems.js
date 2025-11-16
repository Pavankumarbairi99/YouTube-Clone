import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchResults } from '../Utils/searchSlice';
import { useNavigate } from 'react-router-dom';

const ShowSearchItems = ({ items,searchcalllist }) => {
    const [searchvideos, setsearchVideos] = useState("video");
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const searchConsoleApiCall = () => {
       
           console.log("hello this is ok")
    };
     
    return (
        <div>
           <li
      className='px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer'
      onClick={() => searchcalllist(items)}  >
      <i className="fa-solid fa-magnifying-glass px-2 text-gray-500"></i>
      {items}
    </li>
        </div>
    );
};

export default ShowSearchItems;
