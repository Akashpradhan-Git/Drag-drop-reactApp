import React from 'react'

function Navbar() {
    return (
        <nav className="a">
        <a href="#" className="logo">
            {/* <img src={logo} alt=""/> */}
            </a> 
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn" >
                <span className='nav-icon'></span>
            </label>

            <ul className="menu">
                <li><a href="#details">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
