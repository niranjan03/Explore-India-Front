import React from 'react'
import AboutImages from '../../assests/Images/About.png';

const About = () => {
  return (
    <div className='relative mx-2 my-4 p-2 justify-between '>
        <div className='md:flex gap-8 block '>
            <div className='p-2 m-2 '>
                <img src={AboutImages} className=' rounded-lg ' alt="" />
            </div>
            <div className='p-4 m-2'>
                <h2 className='font-bold text-2xl tracking-wider ' >The Story Behind Exploring India</h2>
                <p className=''>Welcome to Exploring India, your digital companion for discovering the subcontinent beyond the ordinary. Whether you are trekking Himalayan trails, admiring royal palaces, or unwinding on tropical beaches, we are here to help you explore India with ease. Let us be your guide as you set out to explore India and uncover its most breathtaking wonders.</p>
            </div>
        </div>
    </div>
  )
}

export default About