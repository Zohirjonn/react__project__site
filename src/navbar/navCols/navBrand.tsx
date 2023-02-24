import React from 'react'
import logoImage from '../../images/photo_2023-02-15_17-28-13.jpg'
import {Link,Outlet} from 'react-router-dom'

export default function NavBrand(){
    return(
        <div className="nav__brand nav__1">
            <Link to="/">
             <img src={logoImage} alt="Z"/>
            </Link>
            <Outlet/>
        </div>
    )
}