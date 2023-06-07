import React from 'react'
import './Navbar.scss'
import { AiFillCloseCircle, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'
import { useState } from 'react'

export default function Navbar() {
  //display the navbar
  const[active, setActive] = useState('menuDiv')
  const showNavBar = () => {
    setActive('menuDiv activeNavbar')
  }
  
  //remove the navbar
  const removeNavBar = () => {
    setActive('menuDiv closeNavbar')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Ziara Zetu</h3>
        </div>
        <div className= {active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Home</a>
            </li>
            <li className="navItem">
              <a href="/about" onClick={removeNavBar} className="menuLinks">About</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Contact</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Pages</a>
            </li>
          </ul>
          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div className="socialIcon flex">
          <BsFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube className='icon' />
          <AiFillInstagram className='icon' />
        </div>
        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </div>
  )
}
