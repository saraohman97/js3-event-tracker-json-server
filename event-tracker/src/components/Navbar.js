import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <Link to='/' className='nav-brand'>Event tracker</Link>

            <ul className='nav-links'>
                <li> <NavLink to='/create' className='nav-link'>Add new event</NavLink> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
