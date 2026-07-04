import React from 'react'
import IndiaPalaceMap from '../layouts/map/IndiaPalaceMap'

const About = () => {
  return (
    <div>
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>About Explore India</h1>
            <p className='text-lg md:text-xl text-center max-w-3xl mb-6'>
                Explore India is your ultimate travel companion, offering a comprehensive guide to the diverse and vibrant destinations across India. Our platform provides detailed information on historical sites, cultural landmarks, natural wonders, and hidden gems, helping travelers plan their journeys with ease.
            </p>
            <p className='text-lg md:text-xl text-center max-w-3xl mb-6'>
                Whether you're seeking adventure, relaxation, or cultural immersion, Explore India has something for everyone. Our user-friendly interface allows you to filter destinations by state, explore popular attractions, and discover unique experiences that make each trip unforgettable.
            </p>
            <p className='text-lg md:text-xl text-center max-w-3xl'>
                Join us in celebrating the rich heritage and breathtaking landscapes of India. Start your journey today and let Explore India be your guide to an unforgettable adventure!
            </p>
        </div>
        <div>
            <IndiaPalaceMap />
        </div>
    </div>
  )
}

export default About