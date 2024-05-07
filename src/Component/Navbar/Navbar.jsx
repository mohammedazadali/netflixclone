import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../Assest/logo.png'
import search from '../../Assest/search_icon.svg'
import bell from '../../Assest/bell_icon.svg'
import profile from '../../Assest/profile_icon.png'
import logout_img from '../../Assest/logout.svg'
import { logout } from '../../firebase'

function Navbar() {
  const navref = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navref.current.classList.add('nav-dark')
      }else{
        navref.current.classList.remove('nav-dark')
      }

    })
  },[])
  return (
    <div className="nav_bar" ref={navref}>
    <div className="nav_left">
    <img src={logo} className="nav_logo" />
    <ul className="nav_links">
        <li className="nav_link">Home</li>
        <li className="nav_link">TV Shows</li>
        <li className="nav_link">Movies</li>
        <li className="nav_link">New & Popular</li>
        <li className="nav_link">My List</li>
        <li className="nav_link">Browse By Language</li>
    </ul>
    </div>
    <div className="nav_right">
                    <img src={search} className='search icon' />
                    <p>Childern</p>
                    <img src={bell} className='bell icon' />
                    <div className="profile">
                        <img src={profile} className='profile_img' />
                        <button className='logout' onClick={logout}><img src={logout_img} className='drop'/></button>
                      
                    </div>  
                </div>
   
    </div>
              
    
  )
}

export default Navbar