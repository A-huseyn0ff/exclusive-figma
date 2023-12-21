import React, { useEffect } from 'react'
import SignUpAndLoginImg from '../../../assets/7b0015a09a1402daee30760778e406eb.gif'
import './SignUpPage.scss'
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID', 
        });
      });
    };
  }, []);

  const handleSignIn = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      const idToken = googleUser.getAuthResponse().id_token;
      console.log(idToken);
      
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  
  return (
   <>
  <section className='SignUp'>
  <img src={SignUpAndLoginImg} alt="" />
    <div className='SignUp_container'>
     <div className='SignUp_title'>
      <h2 style={{fontSize:'48px'}}>Create an account</h2>
      <p style={{fontSize:'24px',marginTop:'20px'}}>Enter your details below</p>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email or Phone Number'/>
        <input type="password" placeholder='Password'/>
        <button className='CreateAccount'>Create an Account</button>
        <button onClick={handleSignIn} className='withGoogle'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" style={{height:'25px',width:'25px'}}/>Sign up with Google</button>

      </form>
      <p className='Login_txt'>Already have an account? <Link to={"/login"}>Login</Link></p>
     </div>
    </div>
  </section>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
   </>
  )
}

export default SignUpPage
