import React, {useEffect} from 'react'
import './Footer.scss'
import { HiPhone } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaLocationArrow, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='footer'>
      <div className="secContainer container">
        <div className="content grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              CONTACT US
            </div>
            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+254 222 111 333</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>ziarazetu254@gmail.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className='icon'/>
                <span>+254 222 111 333</span>
              </span>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              POPULAR NEWS
            </div>
            <div className="singleNews">
              <span className="text">
               Embark on an extraordinary expedition across 
               the diverse landscapes of Kenya
              </span>
              <p>
                Jun 09, 2023
              </p>
            </div>
            <div className="singleNews">
              <span className="text">
               Immerse yourself in the magic of the Maasai 
               Mara, where the Great Wildebeest Migration unfolds 
               with its dramatic river crossings and vast herds of 
               wildlife. 
              </span>
              <p>
                August 14, 2023
              </p>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              QUICK LINKS
            </div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomDiv flex">
          <p data-aos='fade-up' data-aos-duration='2000'>Copyright 2023 Darlene - All rights reserved</p>
          <div className="social flex">
            <FaFacebookF className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <AiFillInstagram className='icon' />
          </div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
