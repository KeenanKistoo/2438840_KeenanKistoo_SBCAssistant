import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-bar'>
            <h1 className="main-head">SBC Assistant</h1>
            <Link className='link' to='/'>Homepage</Link>
            <Link className='link' to='/'>Design</Link>
            <Link className='link' to='/'>Theory</Link>
            <Link className='link' to='/'>Blog</Link>
            <Link className='link' to='/'>Art</Link>
            <Link className='link' to='/'>Assistant</Link>
        
    </nav>
  )
}

export default Navbar;
