import React, { useEffect, useState } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import gifImage from '../../assets/371905230_ECOMMERCE_400px.gif';
const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPage = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchPage();
  }, []);
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
   <>
   {loading ? 
   (
   <div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <img src={gifImage} alt="" style={{width:'500px',height:'500px'}}/>
   <h1 style={{position:'absolute',marginTop:'300px',color:'#DB4444'}}>Exclusive</h1>
   </div>
   ) : 
   (
   <div data-aos={loading ? "" : "aos-animate flip-down"}>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
   </div>
   )}
   
   </>
  )
}

export default MainLayout
