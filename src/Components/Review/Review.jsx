import React, {useEffect} from 'react'
import './Review.scss'
import man1 from '../assets/man1.jpeg'
import woman1 from '../assets/woman1.jpeg'
import fam1 from '../assets/fam1.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Review() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>
        <div className="reviewContainer container grid">
          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={man1} alt="" />
            </div>
            <p>
              I recommend Ziara Zetu to anyone looking 
              for an authentic and unforgettable Kenyan adventure. 
              Their attention to detail, exceptional service, and 
              commitment to responsible tourism truly set them apart. 
              Thanks to their meticulous planning and warm hospitality, 
              my trip to Kenya became an experience of a lifetime. I am 
              grateful to the entire team for creating cherished memories 
              that will stay with me forever.
            </p>
            <div className="name">
              Benjamin Webb
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={fam1} alt="" />
            </div>
            <p>
              The transportation provided by Ziara Zetu was reliable 
              and comfortable. Our drivers were not only skilled but 
              also passionate about their country, offering fascinating 
              insights into the places we visited. They went above and 
              beyond to ensure our safety and comfort, making us feel 
              at ease throughout the journey. We highly recommend Ziara Zetu to 
              everyone of you, no regrets whatsoever from The Browns
            </p>
            <div className="name">
              The Browns
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={woman1} alt="" />
            </div>
            <p>
              Being a solo traveller, the highlight of my journey was visiting the 
              enchanting Amboseli National Park, where I was treated 
              to stunning views of Mount Kilimanjaro. The Ziara Zetu 
              team had arranged for me to meet the local Maasai people,
              and it was truly eye-opening to learn about their traditions and way of 
              life. It was a humbling experience that allowed me to connect with the heart and 
              soul of Kenya. Ziara Zetu on speed dial.
            </p>
            <div className="name">
              Isabella Thompson
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
