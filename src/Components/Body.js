import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import Header from "./Header";

let Body=()=>{
    return(
        <div>
            <Header />
        <div className="flex">
             
            <SideBar />
           <Outlet />
        </div>
        </div>
    )
}
export default Body;