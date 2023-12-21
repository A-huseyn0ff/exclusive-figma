import React, { useEffect, useState } from 'react'
import './OurService.scss'
import { FaArrowUp } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const OurService = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollY = window.scrollY;

      
      setShowButton(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <>
    <section className='OurServices'>
        <div className='OurServices_container'>
            <div className='OurServices_col'>
                <span>
                <div className='icons'>
                <TbTruckDelivery className='icon'/>
                </div>
                </span>
                <div className='txt'>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className='OurServices_col'>
                <span>
                <div className='icons'>
                <TfiHeadphoneAlt className='icon'/>
                </div>
                </span>
            
                <div className='txt'>
                    <h3>24/7 CUSTOMER SERVICE</h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
            </div>
            <div className='OurServices_col'>
            <span>
            <div className='icons'>
                <IoShieldCheckmarkOutline className='icon'/>
                </div>
            </span>
                <div className='txt'>
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>We return money within 30 days</p>
                </div>
            </div>
        </div>
        
    </section>
    {showButton && (
        <button className="go-top-button" onClick={scrollToTop}>
          <FaArrowUp/>
        </button>
      )}
    </>
  )
}

export default OurService