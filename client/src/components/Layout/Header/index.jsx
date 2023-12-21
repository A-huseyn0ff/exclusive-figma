
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Header.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRight } from "react-icons/fa6";



import { Pagination,Autoplay } from 'swiper/modules';
const Header = () => {
  return (
    <>
    <header>
    <div className='header_container'>
        <ul className='header_submenu'>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <div className='header_swipper'>
        <Swiper pagination={true} modules={[Pagination,Autoplay]}  autoplay={{ delay: 3000 }}   className="mySwiper">
        <SwiperSlide className='col'>
            <div className='swiper-left'>
                <div className='swiper-left-top'>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <p>Iphone 14 Series</p>

                </div>
                <div className='swiper-left-middle'>
                <h2 style={{color:'white',fontSize:'44px'}}>
             Up to 10% off Vouncher
            </h2>   
            <a href='#'>Shop Now <FaArrowRight /></a>
                </div>
         
      
            </div>
            <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" alt="" className="swiper_right"/>
        </SwiperSlide>
        <SwiperSlide className='col' style={{backgroundColor:'#f5f3ff'}}>
        <div className='swiper-left'>
            <div className='swiper-left-top'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="" style={{backgroundColor:'#f5f3ff',width:'110px'}}/>
                
<p style={{color:'blue'}}>Galaxy Series</p>

            </div>
            <div className='swiper-left-middle' >
                <h2 style={{color:'blue',fontSize:'44px'}}>
                     Up to 20% off Voucher
                </h2>
                <a href='#'style={{color:'blue'}}>Shop Now <FaArrowRight /></a>
            </div>
        </div>
        <img src="https://promotions.co.th/wp-content/uploads/2022/11/update-samsung-galaxy-s22-latest-price.jpg" alt="" className="swiper_right"/>
        </SwiperSlide>
        {/* <SwiperSlide className='col' style={{backgroundColor:'#e4eafa'}}>
        <div className='swiper-left'>
            <div className='swiper-left-top'>
                <img src="data:image/jpeg;base64,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" alt="" />
<p>Iphone 14 Series</p>

            </div>
            <div className='swiper-left-middle'>
                <h2 style={{color:'white',fontSize:'44px'}}>
                     Up to 10% off Voucher
                </h2>
                <a href='#'>Shop Now <FaArrowRight /></a>
            </div>
        </div>
           <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8b7d60b3-153c-44db-a306-67213b7dabb2.__CR0,0,600,450_PT0_SX600_V1___.jpg" alt="" className="swiper_right"/>
        </SwiperSlide>
        <SwiperSlide className='col'>
        <div className='swiper-left'>
            <div className='swiper-left-top'>
                <img src="data:image/jpeg;base64,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" alt="" />
<p>Iphone 14 Series</p>

            </div>
            <div className='swiper-left-middle'>
                <h2 style={{color:'white',fontSize:'44px'}}>
                     Up to 10% off Voucher
                </h2>
                <a href='#'>Shop Now <FaArrowRight /></a>
            </div>
        </div>
            <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" alt="" className="swiper_right"/>
        </SwiperSlide>
        <SwiperSlide className='col'>
        <div className='swiper-left'>
            <div className='swiper-left-top'>
                <img src="data:image/jpeg;base64,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" alt="" />
<p>Iphone 14 Series</p>

            </div>
            <div className='swiper-left-middle'>
                <h2 style={{color:'white',fontSize:'44px'}}>
                     Up to 10% off Voucher
                </h2>
                <a href='#'>Shop Now <FaArrowRight /></a>
            </div>
        </div>
            <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" alt="" className="swiper_right"/>
        </SwiperSlide> */}
      </Swiper>
        </div>
    </div>
    </header>
    </>
  )
}

export default Header