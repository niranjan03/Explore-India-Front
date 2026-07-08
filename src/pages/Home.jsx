import React, { useState } from 'react'
import Banner from '../layouts/banner/Banner'
import StateCarousel from '../components/StateCarousel'
import Categorize from '../components/Categorize'
import HomeBlogs from '../components/HomeBlogs'
import Newsletter from '../components/Newsletter'

const Home = () => {
  
  const [activeStateFilter, setActiveStateFilter] = useState('');

  const handleStateSelectionFromCarousel = (stateName) =>{
    console.log("State card click in Carousel:", stateName);
    setActiveStateFilter(stateName);
  }


  return (
    <>
    <Banner externalSelectedState={activeStateFilter} />

    <StateCarousel onSelectState={handleStateSelectionFromCarousel} />
    <Categorize  />
    <HomeBlogs />
    <Newsletter />
    </>
  )
}

export default Home