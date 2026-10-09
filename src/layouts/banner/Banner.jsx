import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { bannerSlides } from './bannerData';

const Banner = () => {
  const navigate = useNavigate();
  // Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  //Automatically cycle banner images and text every 5 sec
  useEffect(()=>{
    const sliderTimer = setInterval(()=>{
      setCurrentSlide((prev)=>(prev + 1)%bannerSlides.length);

    },5000);
    return () => clearInterval(sliderTimer);
  },[]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    navigate(`/Search${params.size ? `?${params.toString()}` : ''}`);
  };

  return (
    <div id="top" className='relative flex min-h-[680px] w-full flex-col items-center justify-center overflow-hidden bg-charcoal px-4 py-20 md:min-h-[740px]'>
      {/* background image carousel layout */}
      <div className="absolute inset-0 z-0">
      {bannerSlides.map((slide, index)=>(
      <div
      key={slide.id}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index===currentSlide ? 'opacity-65' : 'opacity-0'}`}
      >
        <img 
        src={slide.image}
        alt={slide.title}
        className="h-full w-full scale-105 object-cover transition-transform duration-[5000ms] ease-linear"
        />
      </div>      
      ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      {/* Main Typography Header Section */}{/* DYNAMIC TEXT DISPLAY SECTION */}

      <div className="relative z-10 text-center px-4 max-w-4xl mb-10 min-h-[180px] flex flex-col justify-center">
        <span className="text-orange-400 font-semibold tracking-widest text-xs md:text-sm uppercase block mb-3 transintion-all duration-500">
          Timeless India, thoughtfully explored
        </span>
        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md font-serif mb-4 transintion-all duration-500">
          Discover the soul of India
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-light transintion-all duration-500">
          Curated journeys across storied heritage, sacred rivers, and wild landscapes.
        </p>
      </div>
      
      {/* SEARCH BAR WIDGET - Positioned lower middle */}
      <div className="relative z-20 w-full max-w-4xl px-4 mt-2">
        <form 
          onSubmit={handleSearchSubmit}
          className="bg-white/95 backdrop-blur-md p-4 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-white/20"
        >
          
          {/* Text Input Fields */}
          <div className="w-full md:flex-1 px-3 py-2 md:py-0">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Where to?
            </label>
            <input
              type="text"
              placeholder="Search a palace, place, or state"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 font-medium focus:outline-none"
            />
          </div>

          {/* Submit Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-terracotta px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:bg-terracotta-dark md:rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="md:hidden">Search</span>
          </button>

        </form>
      </div>

      {/* CAROUSEL SLIDE INDICATOR DOTS */}
      <div className='absolute bottom-6 z-20 flex gap-2'>
        {bannerSlides.map((_, idx)=>(
        <button
        key={idx}
        onClick={() => setCurrentSlide(idx)}
        className={`h-2 transition-all rounded-full ${
          idx=== currentSlide ? 'w-6 bg-orange-500' : 'w-2 bg-white/40'
        }`}
        />
        ))}
      </div>
      
    </div>
  )
}

export default Banner