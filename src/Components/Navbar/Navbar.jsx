import React from 'react'
import './Navbar.scss'
import { AiFillCloseCircle, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'

export default function Navbar() {
  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Ziara Zetu</h3>
        </div>
        <div className="menuDiv">
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" className="menuLinks">Home</a>
            </li>
            <li className="navItem">
              <a href="/about" className="menuLinks">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Contact</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Pages</a>
            </li>
          </ul>
          <div className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div className="socialIcon flex">
          <BsFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube className='icon' />
          <AiFillInstagram className='icon' />
        </div>
        <div className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </div>
  )
}
