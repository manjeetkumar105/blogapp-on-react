import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar