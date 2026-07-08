import React from 'react';
import { travelCategories } from '../context/Content'

export default function Categorize({ onSelectCategory }) {
  return (
    <div className="w-full max-w-max mx-auto px-20 py-16 bg-amber-50/20">
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-12">
        <span className="text-orange-600 font-bold uppercase tracking-wider text-xs block mb-2">
          Choose Your Interest
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif tracking-tight">
          Explore India by Theme
        </h2>
        <p className="text-zinc-600 text-sm md:text-base mt-2 max-w-xl">
          Filter your journey across hand-picked destinations matching your exact travel vibe.
        </p>
      </div>

      {/* RECTANGLE CUBE GRID SYSTEM */}
      {/* Responsive layout: 1 block on mobile, 2 on tablets, and 3/2 asymmetric grid on desktops 
      */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {travelCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.title)}
            className={`relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br ${cat.bgStyle} 
              min-h-[150px] flex flex-col justify-content cursor-pointer group 
              transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02]
              shadow-lg hover:shadow-2xl border border-white/10`}
          >
            {/* Ambient Background Decorative Element for texture */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            
            {/* Top Row: Icon Badge Utilities */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-3xl filter drop-shadow-md select-none">
                {cat.icon}
              </span>
              
            </div>

            {/* Bottom Row: Text Presentation Layer */}
            <div className="relative z-10 mt-6">
              <h3 className="text-xl font-bold text-white font-serif tracking-wide mb-2 drop-shadow-sm group-hover:text-orange-200 transition-colors">
                {cat.title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                {cat.description}
              </p>
              
              {/* Dynamic sliding line asset */}
              <div className="w-0 h-[2px] bg-white mt-4 group-hover:w-12 transition-all duration-300" />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}