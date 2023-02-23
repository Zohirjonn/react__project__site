import React from 'react'
import {Link,Outlet} from 'react-router-dom'



export default function NavHeader(){
    return(
        <div className="nav__header nav__1">
            <Link to="/">Home<span></span></Link>
            <Link to="/about">About<span></span></Link>
            <Link to="/portfolio">Portfolio<span></span></Link>
            <Link to="/malumot">Malumot<span></span></Link>
            <Link to="/aloqa">Aloqa<span></span></Link>
            {/* <h1>About<span></span></h1>
            <h1>Home<span></span></h1>
            <h1>My portfolio<span></span></h1>
            <h1>Malumot<span></span></h1>
            <h1>Aloqa<span></span></h1> */}
            <Outlet/>
        </div>
    )
}