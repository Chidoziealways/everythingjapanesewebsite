import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">EverythingJapanese</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/photogallery">Photo Gallery</Link></li>
                <li><Link to="/videogallery">Video Gallery</Link></li>
                <li><Link to="/downloads">Downloads</Link></li>
                <li><Link to="/commands">Commands</Link></li>
                <li><Link to="/addons">Addons</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
