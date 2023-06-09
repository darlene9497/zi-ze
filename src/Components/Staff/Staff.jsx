import React, {useEffect} from 'react'
import './Staff.scss'
import woman2 from '../assets/woman2.jpeg'
import man2 from '../assets/man2.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Staff() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  
  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className="secTitle">
          Different people - One mission
        </span>
        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={man2} alt="" />
            </div>
            <span className="name">
              Brolin Kinyanjui
            </span>
            <span className="jobTitle">
              CEO Ziara Zetu
            </span>
            <span className="contact">
              +254 789 456 123
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2500' className="singleStaff">
            <div className="imgDiv">
              <img src={woman2} alt="" />
            </div>
            <span className="name">
              Darlene Nyambura
            </span>
            <span className="jobTitle">
              Software Engineer
            </span>
            <span className="contact">
              +254 123 456 789
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
