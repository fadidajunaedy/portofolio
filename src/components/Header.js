import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [navbar, setNavbar] = useState(true);
    const [bcolor, setBcolor] = useState(true);

    const handleToggle = () => {
        setNavbar(!navbar);  
        setBcolor(!bcolor);
    };


    return (
        <>
        <header>
            <Link to="/" className="logo">F.</Link>
            <nav className={navbar ? "nav" : "nav nav-open"}>
                <ul>
                    <li><Link to="/" onClick={handleToggle}>Home</Link></li>
                    <li><Link to="/about" onClick={handleToggle}>About</Link></li>
                    <li><Link to="/skills" onClick={handleToggle}>Skills</Link></li>
                    <li><Link to="/projects" onClick={handleToggle}>Projects</Link></li>
                    <li><Link to="/contact" onClick={handleToggle}>Contact</Link></li>
                </ul>
            </nav>
            <AiOutlineAlignRight color={bcolor ? "#262642" : "#FFFFFF"} className="toggle-navbar" onClick={handleToggle}/>
        </header>
        </>
    )
};

export default Header;