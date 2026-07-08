import React, { useEffect, useRef } from 'react';
import {indiaStatesData} from '../context/indiaStatesData'

export default function StateCarousel({ onSelectState }) {
  const scrollContainerRef = useRef(null);

  // Manual scroll controls for horizontal sliding navigation
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of container width
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const nextLeft = scrollLeft + scrollAmount;

      if (nextLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollTo({ left: nextLeft, behavior: 'smooth' });
      }
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-full mx-auto px-20 py-16 bg-amber-50/30">
      
      {/* Section Header Layout */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 font-serif">
            Explore India by State
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-1">
            Pick a state to dynamically update your heritage exploration filter.
          </p>
        </div>
        
        {/* Navigation Action Arrow Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-800 shadow-sm hover:bg-orange-50 hover:text-orange-600 transition-all"
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-800 shadow-sm hover:bg-orange-50 hover:text-orange-600 transition-all"
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL CARD STRIP CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {Object.values(indiaStatesData || {}).map((state) => (
          <div
            key={state.id}
            onClick={() => onSelectState && onSelectState(state.name)}
            className="flex-none w-64 md:w-72 snap-start group cursor-pointer"
          >
            {/* Image Frame Utilities */}
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-md">
              <img
                src={state.image}
                alt={state.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Dynamic Atmospheric Linear Bottom Shadow Shading Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />
              
              {/* Overlay Text Presentation Elements */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-white">
                {/* <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 drop-shadow-md">
                  {state.tagline}
                </span> */}
                <h3 className="text-xl font-bold font-serif tracking-wide drop-shadow-lg">
                  {state.name}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore places</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}