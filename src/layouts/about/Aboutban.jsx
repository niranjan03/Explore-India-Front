import React from 'react'
import AboutImages from '../../assests/Images/About.png';

const AboutCon = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-initial items-center justify-center'>
                    <div>
                        <img src={AboutImages} alt='About Explore India' className='w-full h-96 object-cover' /> 
    
                    </div>
                    
                        <div className='bg-white py-12'>
                            <div className='text-center max-w-3xl px-6 py-12'>
                                <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>About Explore India</h1>
                                <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                                    Explore India is a curated travel platform dedicated to uncovering the hidden gems, rich heritage, and diverse landscapes of India. Our mission is to inspire travelers to explore beyond the usual tourist spots and discover the authentic essence of this incredible country.
                                </p>
                            </div>
                            <div className='max-w-4xl mx-auto px-6'>
                                <h2 className='text-3xl md:text-4xl font-semibold text-gray-800 mb-4'>Our Mission</h2>
                                <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                                    We aim to provide travelers with comprehensive guides, itineraries, and insights into India's cultural heritage, natural wonders, and off-the-beaten-path destinations. Our team of passionate explorers and local experts work tirelessly to bring you authentic experiences that celebrate the diversity and beauty of India.
                                </p>
                            </div>
                        </div>
                    
    
                </div>
    
  )
}

export default AboutCon