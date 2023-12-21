import React, { useEffect, useState } from 'react'
import './OurProducts.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid,Autoplay } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import "swiper/css";
// import 'swiper/css/grid';

const OurProducts = () => {
  const [AllproductsData, setAllproductsData] = useState([])
  useEffect(() => {
    const fetchAllproductsData = async () => {
      try {
        const res = await fetch('http://localhost:5000/Allproducts');
        const jsonAllproductsData = await res.json();
        setAllproductsData(jsonAllproductsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
}
fetchAllproductsData()
},[]);
  return (
    <section className='ourproducts'>
        <div className='ourproducts_container'>
        <div className='ourproducts_title'>
        <div className='ourproducts_title_left'>
           <div className='ourproducts_OURPROUCTS'>
           <span></span>
            <p>Our Products</p>
           </div>
           <div className='ourproducts_OURPROUCTS_title'>
                <h2>Explore Our Products</h2>
               
            </div>
            </div> 
            <div className='ourproducts_title_right'>
            
            </div> 
        </div>
        <div className='ourproducts_products'>
        <Swiper
        slidesPerView={4}
        // grid={{
        //   rows: 2,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
       
        grabCursor={true}
       
        modules={[Autoplay,Grid]}
        className="mySwiper"
      >
        {AllproductsData && AllproductsData.map((item)=>(
 <SwiperSlide className='ourproducts_cards' >
 <div className='background_img'style={{width:'270px',height:'250px'}}>
 {item.discountRate && <span className='discountRate'>{item.discountRate}</span>}
                {item.newproduct && <span className='newProduct'>{item.newproduct}</span>}
<img src={item.image} alt="" style={{width:'210px',height:'180px'}}/>
<button className='Allproducts_addtowishlist'><FaRegHeart /></button>
<button className='Allproducts_seeDetails'><IoEyeOutline /></button>
<button className='Allproducts_addtocard'>Add to card</button>
</div>

<div className='Allproducts-txt'>
<h4>{item.productName}</h4>
<div className='prices'>
<h2 style={{color:'#DB4444'}}>${item.newprice}</h2>
<del style={{color:'#cfcfcf',}}>{item.oldprice}</del>
</div>
</div>
</SwiperSlide>
        ))}
      </Swiper>
        </div>
        </div>
    </section>
  )
}

export default OurProducts