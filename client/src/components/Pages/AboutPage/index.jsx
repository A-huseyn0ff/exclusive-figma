import React from 'react'
import { CiShop } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import OurService from '../../Layout/OurService/index'
import './About.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import TomCruise from '../../../assets/Screenshot 2023-12-21 074639.png'
import WillSmith from '../../../assets/Screenshot 2023-12-21 074838.png'
import EmmaWatson from '../../../assets/Screenshot 2023-12-21 074912.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const AboutPage = () => {
  return (
    <>
   <section className='OurStory'>
   <div className='OurStory_container'>
    <div className='txt'>
      <h2>Our Story</h2>
      <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
  <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1704067200&Signature=n-oha2AnFe24Xlahn9mfXnUsQ7NJ~Rxhd6LyYnB~5E~WaplxN6KvsDmjT-NNu~aWyLW--KyycE5B9h0jvfIOCVrxLIu5gkIPQYx2kH08COI4wIp2q1veGYfsX0T3gZ8K0aq0hpQVnB7qMqXuP3JuA3EArl~q4K~3GljTCOoWp7~DLLFCxAh9YNmpn9CA~hWzhVgnllp3sjihsZV0eQ-2~lKcPZ9hgvjUEwvmTdaZtnQbnCtC3~-mKoDBJgoGPD0QjJkAI7yxCQQTwmDlzwiY0KKqw46E4mvR0m9pI4dOOdMMOkZ49hy6ovl1mbCmAeivhDtxvG~xCS3gNNFVfL2AbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
  </div>
   </section>
   <section className='e-commerce'>
    <div className='e-commerce_container'>
      <div className='col'>
<span>
  <div className='icons'>
    <CiShop/>
  </div>
</span>
<h2>10.5k</h2>
<p>Sallers active our site</p>
      </div>
      <div className='col'>
      <span>
  <div className='icons'>
    <AiOutlineDollarCircle/>
  </div>
</span>
<h2>33k</h2>
<p>Mopnthly Produduct Sale</p>
      </div>
      <div className='col'>
      <span>
  <div className='icons'>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" >
<path d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z" />
</svg>
  </div>
</span>
<h2>45.5k</h2>
<p>Customer active in our site</p>
      </div>
      <div className='col'>
      <span>
  <div className='icons'>
    <FaSackDollar/>
  </div>
</span>
<h2>25k</h2>
<p>Anual gross sale in our site</p>
      </div>
    </div>
   </section>
   <section className='OurPersonals'>
    <div className='OurPersonals_container'>
    <Swiper
        slidesPerView={3}
        spaceBetween={140}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
          <img src={WillSmith} alt="" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={EmmaWatson} alt="" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className='social_medias'>
            <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={TomCruise} alt="" />
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className='social_medias'>
            <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={WillSmith} alt="" />
        <h2>Will Smith</h2>
        <p>Product Designer</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={EmmaWatson} alt="" />
        <h2>Emma Watson</h2>
        <p>Managing Director</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={TomCruise} alt="" />
        <h2>Tom Cruise</h2>
        <p>Founder & Chairman</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
   </section>
   <OurService/>
   </>
  )
}

export default AboutPage
