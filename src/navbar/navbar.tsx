import React from "react";
import NavBrand from "./navCols/navBrand";
import Ijtimoiy from "./navCols/Ijtimoiy";
import NavHeader from "./navCols/navHeader";
import Fade from "react-reveal/Fade"
import './navStyle.scss'

export default function Navbar(){
    return(
        <>
        <Fade top>
            <nav className="nav">
               <NavBrand/> 
               <NavHeader/>
               <Ijtimoiy/>
            </nav>
        </Fade>
        </>
    )
}