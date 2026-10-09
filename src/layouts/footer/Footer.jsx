import React from 'react'
import logo from '../../assests/Images/Explore_India.png'
import {Link} from 'react-router-dom'
import { quicklink, policies } from '../../context/Content'

const Footer = () => {
  return (
    <footer className='relative bg-charcoal text-white'>
      <div className='mx-auto w-full max-w-7xl px-5 py-10 md:px-8 lg:py-14'>
        <div className='flex flex-col justify-between gap-10 p-4 md:flex-row'>
          <div className='mx-2 mb-6 md:mb-0'>
            <Link to="/" className='inline-flex flex-col items-start'>
            <img src={logo} alt="" className='h-20'/>
            <span className='self-center whitespace-nowrap font-serif text-2xl font-semibold'>Exploring India</span>
            
          </Link>
          </div>
        
        <div className='grid grid-cols-2 justify-center gap-8 p-6 sm:grid-cols-3 sm:gap-10'>
          <div className='py-1 px-2' >
            <h2 className='mb-6 text-sm font-semibold uppercase tracking-wider text-marigold'>Quick links</h2>
            <ul className='font-medium text-white/70'>
              {quicklink.map((items,index)=>(
                <li className='mb-4' key={index}>
                  <Link to={items.link} className='transition hover:text-white'>{items.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='py-1 px-2'>
            <h2 className='mb-6 text-sm font-semibold uppercase tracking-wider text-marigold'>Policies</h2>
            <ul className='font-medium text-white/70'>
              {policies.map((items,index)=>(
                <li className='mb-4' key={index}>
                  <Link to={items.link} className='transition hover:text-white'>{items.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        </div>

      
      <hr className='border-white/15' />
      <div className='mx-auto mt-6 text-center text-white/70'>
        <p className='text-sm md:text-base'>© 2026 Exploring India. All rights reserved.</p>
        <p className='text-sm md:text-base'>Follow us on
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline ml-1'>Facebook</a>,
          <a href="https://www.pinterest.com/ExploringIndia20/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline ml-1'>Pinterest</a>, and
          <a href="https://www.instagram.com/exploringindia202/" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:underline ml-1'>Instagram</a>.
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer