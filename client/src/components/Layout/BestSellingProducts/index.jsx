import React, { useEffect, useState } from 'react'
import './BestSellingProducts.scss'

import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import  { wihlsitAdd } from '../../Pages/WishlistPage/wishlistSlice'
const BestSellingProducts = () => {
    const [BestSellingData, setBestSellingData] = useState([])
    // const [wishlist, setWishlist] = useState([]);
    const wishlistArr = useSelector((state) => state.wishlist.value)
    const dispatch=useDispatch()
  useEffect(() => {
    const fetchBestSellingData = async () => {
      try {
        const res = await fetch('http://localhost:5000/BestSelling');
        const jsonBestSellingData = await res.json();
        setBestSellingData(jsonBestSellingData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
}
fetchBestSellingData()
},[]);

  return (
    <section className='BestSellingProducts'>
        <div className='BestSellingProducts_container'>
        <div className='BestSellingProducts_title'>
        <div className='BestSellingProducts_title_left'>
           <div className='BestSellingProducts_Categories'>
           <span></span>
            <p>This Month</p>
           </div>
           <div className='BestSellingProducts_This_Month_title'>
                <h2>Best Selling Products</h2>
               
            </div>
            </div> 
            <div className='BestSellingProducts_title_right'>
            
            </div> 
        </div>
        <div className='BestSellingProducts_products'>
        <div className="myBestSellingProducts">
        {BestSellingData && BestSellingData.map((item)=>(
          <div className='BestSellingProducts_cards'>
            <div className='bg_image'style={{width:'270px',height:'250px'}}>
            
<img src={item.image} alt="" style={{width:'210px',height:'180px'}}/>
<button className='BestSellingProducts_addtowishlist'  onClick={()=>dispatch(wihlsitAdd(item))}>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" fill="none" style={wishlist.includes(item._id) ? {color:'#DB4444',fill:'#DB4444',borderColor:'#DB4444'} :{color:'black'}}>
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={wishlist.includes(item._id) ? {stroke:"#DB4444",fill:'#DB4444',borderColor:'#DB4444'} :{color:'black'}}/>
</svg> */}
{
wishlistArr.find(x=>x._id === item._id) ? <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" fill="none" style={{color:'#DB4444',fill:'#DB4444',borderColor:'#DB4444'}}>
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={ {stroke:"#DB4444",fill:'#DB4444',borderColor:'#DB4444'} }/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" fill="none" style={{color:'black'}}>
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={ {stroke:"black",fill:'white',borderColor:'black'} }/>
</svg> 
}
</button>
<button className='BestSellingProducts_seeDetails'><IoEyeOutline /></button>
<button className='BestSellingProducts_addtocard'>Add to card</button>
</div>

<div className='BestSellingProducts-txt'>
<h4>{item.productName}</h4>
<div className='prices'>
<h2 style={{color:'#DB4444'}}>${item.newprice}</h2>
<del style={{color:'#cfcfcf',}}>{item.oldprice}</del>
</div>
</div>
          </div>
        ))}
      </div>
      
      
        </div>
        </div>
    </section>
  )
}

export default BestSellingProducts