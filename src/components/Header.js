import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header(){

    return(
        <nav className="header">
            
            <h2 className="logo">
             <Link to="/">ConversorApp </Link>
            </h2>
            
            <ul className="menu">
                <li className="menu-item">
                    <NavLink to="/" activeClassName="active">Inicio</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/historial" activeClassName="active">Historial</NavLink>
                </li> 
            </ul>
        </nav>
    )
}