import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
//change color to white
    const navStyle ={
        color: 'white'
    };

  return (
    <div className="App">
        <nav className="nav">
            <h2>YJ</h2>
            <ul className="navlinks">
            {/* <h2>YB</h2> */}
            <Link style={navStyle} to='/'>
            <li>Home</li>
            </Link>
           <Link style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navStyle} to='/projects'>
            <li>Projects</li>
            </Link>
            <Link style={navStyle} to='/resume'>
            <li>Resume</li>
            </Link>
            <Link style={navStyle} to='/contact'>
            <li>Contact</li>
            </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;