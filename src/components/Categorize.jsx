import React from 'react';
import { travelCategories } from '../context/Content'

export default function Categorize({ onSelectCategory }) {
  return (
    <section id="themes" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-12">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-terracotta">
          Find your kind of India
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif tracking-tight">
          Journeys for every curiosity
        </h2>
        <p className="text-zinc-600 text-sm md:text-base mt-2 max-w-xl">
          From royal forts to quiet coastlines, start with the experiences that draw you in.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-5">
        {travelCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.title)}
            className={`group relative min-h-[280px] w-[80vw] flex-none snap-start cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br ${cat.bgStyle} p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto`}
          >
            {/* Ambient Background Decorative Element for texture */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            
            {/* Top Row: Icon Badge Utilities */}
            <div className="flex items-center justify-between relative z-10">
              <span className="select-none text-3xl drop-shadow-md">
                {cat.icon}
              </span>
              
            </div>

            {/* Bottom Row: Text Presentation Layer */}
            <div className="relative z-10 mt-6">
              <h3 className="mb-2 font-serif text-xl font-bold tracking-wide text-white drop-shadow-sm transition-colors group-hover:text-marigold">
                {cat.title}
              </h3>
              <p className="line-clamp-3 text-xs font-light leading-relaxed text-white/85 md:text-sm">
                {cat.description}
              </p>
              
              {/* Dynamic sliding line asset */}
              <div className="w-0 h-[2px] bg-white mt-4 group-hover:w-12 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}