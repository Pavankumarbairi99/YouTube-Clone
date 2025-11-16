import React from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux'

const ButtonList = () => {
    let toggle= useSelector(store=>store.app.isMenuOpen)
   
    let ButtonsItems=["All", "Musice", " Cinema", "Live","Gaming","JukeBok","Development","Watched", " liked", "Horror","Songs","Coding","Fact's","playlist"]
  return (
    <div className='p-2 flex my-2' id="button-id">
        {ButtonsItems.map(items=>(
             <Buttons names={items} />
        ))}
       
    </div>
  )
}

export default ButtonList