import React, { useEffect, useState } from 'react'
import './EnhanceYourMusicExperience.scss'
import SpeakerImg from '../../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
const EnhanceYourMusicExperience = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const flashSaleEndDate = new Date('2023-12-31T23:59:59'); 
        const difference = flashSaleEndDate - now;
        let timeLeft = {};
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      }, [timeLeft]);
      
  return (
    <section className='EnhanceYourMusicExperience'>
        <div className='EnhanceYourMusicExperience_container'>
            <div className='txt'>
                <p style={{color:'#00ff66',fontWeight:'600'}}>Categories</p>
                <h2 style={{color:'white',fontSize:'48px'}}>Enhance Your Music Experience</h2>
                <div className='ends'>
                    <span className='col'>
                    <h2>{timeLeft.days}</h2>
                    <p>Days</p>
                    </span>
                    <span className='col'>
                    <h2>{timeLeft.hours}</h2>
                    <p>Hours</p>
                    </span>
                    <span className='col'>
                    <h2>{timeLeft.minutes}</h2>
                    <p>Minutes</p>
                    </span>
                    <span className='col'>
                    <h2>{timeLeft.seconds}</h2>
                    <p>Seconds</p>
                    </span>
                </div>
                <button>Buy Now!</button>
            </div>
            <div className='EnhanceYourMusicExperience_img'>
            <img src={SpeakerImg} alt="" />
            <div className='bg'></div>
            </div>
            
        </div>
    </section>
  )
}

export default EnhanceYourMusicExperience