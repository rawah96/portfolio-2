import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                {/* <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
