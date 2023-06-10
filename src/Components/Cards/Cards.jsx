import React, {useEffect} from 'react'
import './Cards.scss'
import nnp from '../assets/nnp.jpeg'
import diani from '../assets/diani.jpeg'
import lake from '../assets/lake.jpeg'
import { AiOutlineSwapRight } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Cards() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={nnp} alt=''/>
          </div>
          <h4 className="textDiv">
            National Parks
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={diani} alt=''/>
          </div>
          <h4 className="textDiv">
            Coast Beaches
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={lake} alt=''/>
          </div>
          <h4 className="textDiv">
            Serene Lakes
          </h4>
        </div>
      </div>
      <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon' />
      </div>
    </div>
  )
}
