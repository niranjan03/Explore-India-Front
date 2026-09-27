import React from 'react'
import logo from '../../assests/Images/Explore_India.png'
import {Link} from 'react-router-dom'
import { quicklink, policies } from '../../context/Content'

const Footer = () => {
  return (
    <div className='relative  bg-gray-800 text-white '>
      <div className=' mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className=' md:justify-items-stretch md:justify-between md:flex p-4'>
          <div className='mb-6 md:mb-0 p-10 mx-2 '>
            <Link to="/" className='m-1 p-1  items-center justify-center
            '>
            <img src={logo} alt="logo" className='h-28'/>
            <span className='text-heading self-center text-2xl font-semibold whitespace-nowrap'>Explore India</span>
            
          </Link>
          </div>
        
        <div className='grid grid-cols-2  sm:grid-cols-3 sm:gap-6 gap-8 justify-center p-6'>
          <div className='py-1 px-2' >
            <h2 className='mb-6 text-sm  uppercase text-heading font-semibold'>Quick Link</h2>
            <ul className='text-body font-medium'>
              {quicklink.map((items,index)=>(
                <li className='mb-4'>
                  <Link to={items.link} key={index} className='hover:underline'>{items.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='py-1 px-2'>
            <h2 className='mb-6 text-sm  uppercase text-heading font-semibold'>Policies</h2>
            <ul className='text-body font-medium'>
              {policies.map((items,index)=>(
                <li className='mb-4'>
                  <Link to={items.link} key={index} className='hover:underline'>{items.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        </div>

      
      <hr></hr>
      <div className=' mx-auto text-center'>
        <p className='text-sm md:text-base'>© 2026 Explore India. All rights reserved.</p>
        <p className='text-sm md:text-base'>Follow us on
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline ml-1'>Facebook</a>,
          <a href="https://www.pinterest.com/ExploringIndia20/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline ml-1'>Pinterest</a>, and
          <a href="https://www.instagram.com/exploringindia202/" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:underline ml-1'>Instagram</a>.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Footer