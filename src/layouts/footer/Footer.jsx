import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full bg-gray-800 text-white p-6'>
        <div className='container mx-auto text-center mb-4'>

        </div>
        <div className='container mx-auto text-center'>
            <p className='text-sm md:text-base'>© 2024 Explore India. All rights reserved.</p>
            <p className='text-sm md:text-base'>Follow us on 
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline ml-1'>Facebook</a>, 
                <a href="https://www.pinterest.com/ExploringIndia20/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline ml-1'>Pinterest</a>, and 
                <a href="https://www.instagram.com/exploringindia202/" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:underline ml-1'>Instagram</a>.
            </p>
        </div>
    </div>
  )
}

export default Footer