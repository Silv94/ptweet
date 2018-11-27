import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/porntweet-logo.png'

const Navbar = () => {
  return (
    <nav className='nav-wrapper red darken-3' >
      <div className='container'>
        <NavLink to='/' className='brand-logo' style={{ marginLeft: 50 }}>PornTweet</NavLink>
        <img src={logo} />
        <div className='right'><NavLink to='/' className='btn btn-floating blue lighten-1'>SM</NavLink></div>

      </div>
    </nav>
  )
}
export default Navbar
