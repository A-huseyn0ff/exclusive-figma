import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
const Error = () => {
  return (
    <>

<div className="page-not-found">
      <div className="container">
        
        <div className="image-container">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-4498491-3737274.png?f=webp" alt="404 Illustration" />
        </div>
        <div className="cta-container">
        <h1>Oops! Page Not Found</h1>
        <p>
          It seems like the page you are looking for does not exist. Let's get you back on track.
        </p>
          
          <Link to="/" className="btn btn-primary">
            Go to HomePage
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Error