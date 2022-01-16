import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header({historial}){

    return(
        <nav className="header">
            
            <h2 className="logo">
             <Link to="/">ConversorApp </Link>
            </h2>
            
            <ul className="menu">
                <li className="menu-item">
                    <NavLink to="/" activeclassname="active">Inicio</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/historial" activeclassname="active">Historial</NavLink>
                    {historial?<span className="cantidad">{historial}</span>:null}
                </li> 
            </ul>
        </nav>
    )
}