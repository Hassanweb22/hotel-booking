import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <div className="navContainer limitWidth">
                <span className="logo" onClick={() => navigate("/")}>Booking.Com</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar