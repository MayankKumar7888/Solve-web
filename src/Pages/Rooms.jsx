import { NavLink } from "react-router-dom"
import Navbar from "../Component/Navbar"

export default function Rooms(){
    return(
        <>
           <div className="rooms">
                <Navbar navColor="var(--txt2-clr)" />
                <div className="rooms-inner">
                    <h2 className="rooms-heading">Oslo</h2>
                    <NavLink className="btn" to="/room1">Explore Now</NavLink>
                </div>
           </div>
        </>
    )
}