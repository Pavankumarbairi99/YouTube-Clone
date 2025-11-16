import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

let SideBar=()=>{
    let isMenu = useSelector(store=>store.app.isMenuOpen);
    if(!isMenu) return null;
    return(
        <div className="  w-32 p-3 shadow-lg mr-2  hidden md:block ">
            <ul className="text-sm text-gray-600">
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black"><Link to={"/"}> Home</Link></li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Shorts</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Videos</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Likes</li>

            </ul>
            <h1 className="font-bold text-gray-700 text-sm mt-3">Subscriptions</h1>
            <ul className="text-sm text-gray-600">
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Music</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Sports</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Movies</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Gaming</li>

            </ul>
             <h1 className="font-bold text-gray-700 mt-3 text-sm">You</h1>
            <ul className="text-sm text-gray-600">
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">History</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">PlayList</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Liked Videos</li>
                <li className="py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black">Watch Later</li>

            </ul>
        </div>
    )
}
export default SideBar;