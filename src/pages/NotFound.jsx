// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/Images/Explore_India.png'

const NotFound = () => {
  return (
    <div  className='text-center h-full  relative p-20 my-10 mx-5' >

      <div className='h-100vh'>
        <Link>
        <img src={logo} alt="Explore India" className='h-60 justify-self-center' />
        </Link>
        <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className='text-sky-400/75 underline' >
        Go Back to Home
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
