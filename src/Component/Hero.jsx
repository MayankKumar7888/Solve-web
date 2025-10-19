import { NavLink } from "react-router-dom"
import Navbar from "../Component/Navbar"

export default function Hero(){
    return(
        <>
          <div className="hero">
            <Navbar navColor="var(--txt2-clr)" />
            <div className="hero-inner">
              <h1 className="hero-heading">
                <span>DESIGN</span> <span>FURNITURE</span>
              </h1>
              <NavLink className="btn" to="/shop">Shop Now</NavLink>
            </div>
          </div>
        </>
    )
}