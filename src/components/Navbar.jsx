import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';


function Navbar() {
  return <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="Logo" className="navbar_logo-image" />
            </div>
            <div>
                <h1 className="navbar_title">CV Builder</h1>
            </div> 
        </nav>

}    

export default Navbar;