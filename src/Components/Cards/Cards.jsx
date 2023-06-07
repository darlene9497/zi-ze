import React from 'react'
import './Cards.scss'
import nnp from '../assets/nnp.jpeg'
import diani from '../assets/diani.jpeg'
import lake from '../assets/lake.jpeg'
import { AiOutlineSwapRight } from 'react-icons/ai'

export default function Cards() {
  return (
    <div className='cards'>
      <div className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={nnp} />
          </div>
          <h4 className="textDiv">
            National Parks
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={diani} />
          </div>
          <h4 className="textDiv">
            Coast Beaches
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={lake} />
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
