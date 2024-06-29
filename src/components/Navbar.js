import React from 'react'
import {FaSearch} from "react-icons/fa"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-border">
            <a className="navbar-brand brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active active-item">
                        <a className="nav-link item-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Workshops
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reach IIITK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <form className="form-inline search-form">
                            <input class="search-bar" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="search-btn" type="submit"><FaSearch /></button>
                        </form>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-dark login-btn">LOGIN</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
