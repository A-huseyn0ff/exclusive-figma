import React, { useEffect, useState } from 'react'
import './OurProducts.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid,Autoplay } from 'swiper/modules';

import { IoEyeOutline } from "react-icons/io5";
import "swiper/css";
import  { wihlsitAdd } from '../../Pages/WishlistPage/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux';
// import 'swiper/css/grid';

const OurProducts = () => {
  const [AllproductsData, setAllproductsData] = useState([])
  // const [wishlist, setWishlist] = useState([]);
  const wishlistArr = useSelector((state) => state.wishlist.value)
  const dispatch=useDispatch()
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
<button className='Allproducts_addtowishlist' onClick={()=>dispatch(wihlsitAdd(item))}>

{
wishlistArr.find(x=>x._id === item._id) ? <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" fill="none" style={{color:'#DB4444',fill:'#DB4444',borderColor:'#DB4444'}}>
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={ {stroke:"#DB4444",fill:'#DB4444',borderColor:'#DB4444'} }/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" fill="none" style={{color:'black'}}>
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={ {stroke:"black",fill:'white',borderColor:'black'} }/>
</svg> 
}
</button>
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