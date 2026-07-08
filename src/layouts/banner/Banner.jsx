import React, { useEffect } from 'react' 
import { useState } from 'react';
import { filterData, bannerSlides } from './bannerData';
const Banner = () => {
  // Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
// State to track selected values
  const [selectedState, setSelectedState] = useState("Rajasthan");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
 
  //Automatically cycle banner images and text every 5 sec
  useEffect(()=>{
    const sliderTimer = setInterval(()=>{
      setCurrentSlide((prev)=>(prev + 1)%bannerSlides.length);

    },5000);
    return () => clearInterval(sliderTimer);
  },[]);


  // Get the list of places based on the currently selected/hovered state
  const availablePlaces = filterData[selectedState]?.places || [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", {
      state: selectedState,
      place: selectedPlace,
      text: searchQuery
    });
    // Link this to your search results page/routing logic later
  };

  return (
    <div className='relative h-[90vh] w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden'>
      {/* background image carousel layout */}
      <div className="absolute inset-0 z-0">
      {bannerSlides.map((slide, index)=>(
      <div
      key={slide.id}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index===currentSlide ? 'opacity-60' : 'opacity-0'}`}
      >
        <img 
        src={slide.image}
        alt={slide.title}
        className="w-full h-full objet-cover scale-105 transition-transform duration-[5000ms] ease-linear"
        />
      </div>      
      ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      {/* Main Typography Header Section */}{/* DYNAMIC TEXT DISPLAY SECTION */}

      <div className="relative z-10 text-center px-4 max-w-4xl mb-10 min-h-[180px] flex flex-col justify-center">
        <span className="text-orange-400 font-semibold tracking-widest text-xs md:text-sm uppercase block mb-3 transintion-all duration-500">
          {bannerSlides[currentSlide].tagline}
        </span>
        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md font-serif mb-4 transintion-all duration-500">
          {bannerSlides[currentSlide].title}
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-light transintion-all duration-500">
          {bannerSlides[currentSlide].description}
        </p>
      </div>
      
      {/* SEARCH BAR WIDGET - Positioned lower middle */}
      <div className="relative z-20 w-full max-w-4xl px-4 mt-2">
        <form 
          onSubmit={handleSearchSubmit}
          className="bg-white/95 backdrop-blur-md p-4 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-white/20"
        >
          
          {/* Dropdown 1: State Selection */}
          <div className="w-full md:w-1/4 relative group px-3 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Select State
            </label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedPlace(""); // Reset 2nd dropdown when 1st changes
              }}
              className="w-full bg-transparent text-gray-800 font-medium focus:outline-none cursor-pointer appearance-none"
            >
              {Object.keys(filterData).map((stateKey) => (
                <option 
                  key={stateKey} 
                  value={stateKey}
                  // Changes 2nd dropdown data dynamically when mouse hovers over an option
                  onMouseEnter={() => {
                    setSelectedState(stateKey);
                    setSelectedPlace("");
                  }}
                >
                  {filterData[stateKey].label}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown 2: Dynamic Places Selection */}
          <div className="w-full md:w-1/4 relative px-3 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Explore Palace/Site
            </label>
            <select
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              className="w-full bg-transparent text-gray-800 font-medium focus:outline-none cursor-pointer appearance-none"
              disabled={availablePlaces.length === 0}
            >
              <option value="">All Destinations</option>
              {availablePlaces.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          {/* Text Input Fields */}
          <div className="w-full md:flex-1 px-3 py-2 md:py-0">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Keywords
            </label>
            <input
              type="text"
              placeholder="e.g. Temple, Beach, Trek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 font-medium focus:outline-none"
            />
          </div>

          {/* Submit Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl md:rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-orange-500/20 flex items-center justify-center gap-2"
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