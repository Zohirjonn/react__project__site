import { Link } from "react-router-dom"
import "./style.scss"


export default function NavBtn(){
    return(
        <>
        <ul className="too"> 
            <li>
                <Link to="/">Discovery</Link>
            </li>
            <li>
                <Link to="/">Animation</Link>
            </li>
            <li>
                <Link to="/">Illustration</Link>
            </li>
            <li>
                <Link to="/">Mobile</Link>
            </li>
            <li>
                <Link to="/">Print</Link>
            </li>
            <li>
                <Link to="/">Product Manager</Link>
            </li>
            <li>
                <Link to="/">Typography</Link>
            </li>
            <li>
                <Link to="/">Web Design</Link>
            </li>
        </ul>
        </>
    )
}