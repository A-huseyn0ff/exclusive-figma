import React, { useEffect, useState } from 'react'
import "./flashsales.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';


const FlashSales = () => {
  const [productData, setproductData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/products');
        const jsonProductData = await res.json();
        setproductData(jsonProductData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
}
fetchData()
},[]);
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
    <>
   <section className='flashsales'>
    <div className='flashsales_container'>
        <div className='flashsales_title'>
        <div className='flashsales_title_left'>
           <div className='flashsales_todays'>
           <span></span>
            <p>Today's</p>
           </div>
           <div className='flashsales_todays_title'>
                <h2>Flash Sales</h2>
                <div className='flashsales_ends'>
                <div className='days'>
                <p>Days</p>
                <h2>{timeLeft.days}</h2>
              </div>
              <h2 style={{ color: '#DB4444' }}>:</h2>
              <div className='hours'>
                <p>Hours</p>
                <h2>{timeLeft.hours}</h2>
              </div>
              <h2 style={{ color: '#DB4444' }}>:</h2>
              <div className='minutes'>
                <p>Minutes</p>
                <h2>{timeLeft.minutes}</h2>
              </div>
              <h2 style={{ color: '#DB4444' }}>:</h2>
              <div className='seconds'>
                <p>Seconds</p>
                <h2>{timeLeft.seconds}</h2>
              </div>
                </div>
            </div>
            </div> 
            <div className='flashsales_title_right'>
            
            </div> 
        </div>
        <div className='flashsales_products'>
        <Swiper
        slidesPerView={4}
        
        spaceBetween={300}
       
        grabCursor={true}
        
       modules={[Navigation]}
        className="mySwiper"
      >
        {productData && productData.map((item)=>(
          <SwiperSlide className='flashsale_cards'>
            <div className='bg-img'style={{width:'270px',height:'250px'}}>
            <span>{item.discountRate}</span>
<img src={item.image} alt="" style={{width:'210px',height:'180px'}}/>
<button className='addtowishlist'><FaRegHeart /></button>
<button className='seeDetails'><IoEyeOutline /></button>
<button className='addtocard'>Add to card</button>
</div>

<div className='flashsale-txt'>
<h4>{item.productName}</h4>
<div className='prices'>
<h2 style={{color:'#DB4444'}}>${item.newprice}</h2>
<del style={{color:'#cfcfcf',}}>${item.oldprice}</del>
</div>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      
        </div>
        <div className='viewallproducts'>
      <button>View All Products</button>
      </div>
    </div>
    
    </section>
   
    </>
  )
}

export default FlashSales