import React from 'react'
import './Discount.scss'
import diani from '../assets/Diani.mp4'

export default function Discount() {
  return (
    <div className='discount section'>
      <div className="setContainer">
        <video src={diani} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span className="title">
            Sign up for 35% discount
          </span>
          <p>
            Get an instant discount for your next safari
            of your favorite destination.
          </p>
          <div className="input_btn flex">
            <input type="text" placeholder='Enter your Email' />
            <button className='btn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
