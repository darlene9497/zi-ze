import React, {useEffect} from 'react'
import './Home.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='home'>
      <div className="homeText">
        <span data-aos='fade-up' data-aos-duration='2000' className="spanText">
          UNLOCK EXTRAORDINARY SAFARIS WITH ZIARA ZETU
        </span>
        <div className="homeTitle">
          Embrace Our Expertise, <strong>Embark on Unforgettable Voyages with us</strong>
        </div>
        <div className="btn">Get In Touch</div>
      </div>
    </div>
  )
}
