import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-bar'>
            <h1 className="main-head">SBC Assistant</h1>
            <Link className='link' to='/'>Homepage</Link>
            <Link className='link' to='/design'>Design</Link>
            <Link className='link' to='/theory'>Theory</Link>
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/art'>Art</Link>
            <Link className='link' id='assist-link' to='/assistant'>Assistant</Link>
            
    </nav>
  )
}

export default Navbar;
