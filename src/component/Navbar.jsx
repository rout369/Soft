import React from 'react';
import { Link } from 'react-scroll';
import logo from '../image/logo4.png';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo'>
            <img src={logo} alt="logo"
            height={80}
            width={150} />
        </Link>
        <input className='menu-btn' type="checkbox"id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
        <li><Link to='main' className='active'>Home</Link></li>
        <li><Link to='features'className='box' >About Us</Link></li>
        <li><Link to='services'className='box' >Online Courses</Link></li>
        <li><Link to='subscribe'className='box'>Sign Up</Link></li>
        </ul>
        <li><Link className='box'>To App</Link></li>
      </nav>
    </div>
  )
}

export default Navbar