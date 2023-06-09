import React from 'react'
import './Tours.scss'
import { AiFillStar } from 'react-icons/ai'
import masaiMara from '../assets/Marasafaris.jpg'
import lnakuru from '../assets/nakuru.jpg'

export default function Tours() {
  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Popular Excursions
        </span>
        <div className="tourContainer">
          <div className="singleTour grid">
            <div className="imgDiv">
              <img src={masaiMara} alt='' />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Maasai Mara National Park, Narok.
              </span>
              <div className="stars_review flex">
                <div className="stars">
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                </div>
              </div>
              <small className="custReview">
                1,296 Tourists Review
              </small>
            <p>
              Situated in the heart of East Africa, 
              the Maasai Mara needs no introduction as 
              the loveliest game reserve in Africa. 
              Host to the Great Migration, one of the most 
              astounding wildlife spectacles on the planet, 
              this captivating destination never fails to leave 
              visitors in awe. Nestled in southwestern Kenya, 
              the Maasai Mara boasts breathtaking landscapes 
              and a rich diversity of wildlife that draws 
              nature enthusiasts from around the globe.
            </p>
            <button className="btn">
              Purchase this tour
            </button>
            <span className="price">
              $80
            </span>
          </div>
          </div>
          <div className="singleTour grid">
            <div className="imgDiv">
              <img src={lnakuru} alt='' />
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
                Lake Nakuru, Nakuru.
              </span>
              <div className="stars_review flex">
                <div className="stars">
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                <AiFillStar className='icon'/>
                </div>
              </div>
              <small className="custReview">
                748 Tourists Review
              </small>
            <p>
              One of the most iconic sights in all of Africa 
              is the vast flock of bright pink flamingos that 
              live in Lake Nakuru. Instantly recognizable, they 
              make for some fabulous photos with white rhinos and 
              Rothschild’s giraffes also regularly spied nearby.
              Stretching almost endlessly away into the distance, 
              its reflective waters lie within the Great Rift Valley. 
              Now a national park, it protects over 450 bird species 
              alongside a handful of lions, cheetahs and leopards.
              At times, more than a million of the fantastic 
              flamingos flock here due to its abundant algae.
            </p>
            <button className="btn">
              Purchase this tour
            </button>
            <span className="price">
              $80
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
