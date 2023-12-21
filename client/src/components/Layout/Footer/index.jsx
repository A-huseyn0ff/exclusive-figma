import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import Qrcode from './../../../assets/Qrcode.png'
import appstore from './../../../assets/download-appstore.png'
import playstore from './../../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
const Footer = () => {
  return (
    <>
    <footer>
      <div className='footer_container'>
        <div className='subscribe'>
        <Link to={"/"}>Exclusive</Link>
        <h2>Subscribe</h2>
        <p>Get 10% off your first order</p>
        <form>
         <input type="email" placeholder='Enter your email'/>
         <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
        </form>
        </div>
        <div className='col'>
        <h2>Support</h2>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
        </div>
        <div className='col'>
        <h2>Account</h2>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
        </div>
        <div className='col'>
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className='downloadapp'>
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className='logos'>
          <img src={Qrcode} alt="" className='div1'/>
          <img src={playstore} alt="" className='div2'/>
          <img src={appstore} alt="" className='div3'/>
          </div>
          
          
        </div>
      </div>
      <div className='copyright'>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
