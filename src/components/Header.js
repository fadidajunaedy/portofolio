import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [navbar, setNavbar] = useState(true);
    const [bcolor, setBcolor] = useState(true);

    const handleToggle = () => {
        setNavbar(!navbar);  
        setBcolor(!bcolor);
    };

    const navLinkActive = ({ isActive }) => {
        return {
            color: isActive ? '#47C5D7': '#262642',
            borderBottom: isActive ? '1.5px solid #262642': 'none'
        }
    }


    return (
        <>
        <header>
            <NavLink to="/" className="logo">F.</NavLink>
            <nav className={navbar ? "nav" : "nav nav-open"}>
                <ul>
                    <li><NavLink style={navLinkActive} to="/" onClick={handleToggle}>Home</NavLink></li>
                    <li><NavLink style={navLinkActive} to="/about" onClick={handleToggle}>About</NavLink></li>
                    <li><NavLink style={navLinkActive} to="/skills" onClick={handleToggle}>Skills</NavLink></li>
                    <li><NavLink style={navLinkActive} to="/projects" onClick={handleToggle}>Projects</NavLink></li>
                    <li><NavLink style={navLinkActive} to="/contact" onClick={handleToggle}>Contact</NavLink></li>
                </ul>
            </nav>
            <AiOutlineAlignRight color={bcolor ? "#262642" : "#FFFFFF"} className="toggle-navbar" onClick={handleToggle}/>
        </header>
        </>
    )
};

export default Header;