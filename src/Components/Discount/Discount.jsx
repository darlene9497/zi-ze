import React, {useEffect} from 'react'
import './Discount.scss'
import diani from '../assets/Diani.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Discount() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  
  return (
    <div className='discount section'>
      <div className="setContainer">
        <video src={diani} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span data-aos='fade-up' data-aos-duration='2000' className="title">
            Sign up for 35% discount
          </span>
          <p data-aos='fade-up' data-aos-duration='2500'>
            Get an instant discount for your next safari
            of your favorite destination.
          </p>
          <div data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
            <input type="text" placeholder='Enter your Email' />
            <button className='btn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
