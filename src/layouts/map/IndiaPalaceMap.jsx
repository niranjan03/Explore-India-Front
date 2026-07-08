import React, { useState } from 'react';

import { indiaStatesData } from '../../context/indiaStatesData';
// Static Data Object containing coordinates and palace info for the interactive states


// Helper positioning function for text labels and circle centers.
// If a state provides explicit center coordinates, use those.


export default function IndiaPalaceMap() {
  const [selectedStateCode, setSelectedStateCode] = useState('RJ');
  const [activeCategory, setActiveCategory] = useState('heritage');

  const currentState = indiaStatesData[selectedStateCode] || indiaStatesData.RJ;
  
  // Safe extraction of the category context with universal premier palace fallback
  const destinationData = currentState.categories?.[activeCategory] || currentState.categories?.heritage;

  const categoriesConfig = [
    { id: 'heritage', label: '🛕 Heritage & Palaces' },
    { id: 'spiritual', label: '🙏 Spiritual/Temples' },
    { id: 'nature', label: '🏔️ Nature/Mountains' },
    { id: 'coastal', label: '🏖️ Coastal/Beaches' },
    { id: 'wildlife', label: '🐅 Wild India' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-amber-50 min-h-screen font-sans">
      
      {/* LEFT SECTION: Interactive SVG Map & Controls */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-emerald-800 mb-2">Explore Incredible India</h1>
          <p className="text-gray-600 text-sm mb-6">Select an interest metric below and tap on any state to unlock regional gems instantly.</p>
          
          {/* Categories Selector Strip */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categoriesConfig.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full shadow-sm transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-amber-100/60 text-gray-800 hover:bg-amber-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scalable Map Frame */}
        <div className="w-full flex justify-center items-center py-4 bg-amber-50/40 rounded-xl border border-dashed border-amber-200">
          <svg viewBox="0 0 600 600" className="w-full max-h-[450px] drop-shadow-lg">
            {Object.values(indiaStatesData).map((state) => (
              <path
                key={state.id}
                d={state.path}
                fill={selectedStateCode === state.id ? '#ea580c' : state.color}
                onClick={() => setSelectedStateCode(state.id)}
                className="cursor-pointer transition-all duration-300 stroke-white stroke-[1.5] hover:fill-orange-400 hover:opacity-90"
              >
                <span className='text-2xl font-serif font-bold mb-2'>{state.id}</span>
                <title>{state.name}</title>
              </path>
            ))}
          </svg>
        </div>
      </div>

      {/* RIGHT SECTION: Dynamic Split Panel (State Context + Selected Interest Destination) */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        
        {/* Module A: State Spotlight Card */}
        <div className="bg-emerald-800 text-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
          <div className="relative h-40">
            <img 
              src={currentState.image} 
              alt={currentState.name} 
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
            <span className="absolute bottom-3 left-4 bg-orange-600 px-3 py-1 text-xs rounded-md uppercase font-bold tracking-wider">
              State Profile
            </span>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-serif font-bold mb-2">{currentState.name}</h2>
            <p className="text-xs text-emerald-100 leading-relaxed">{currentState.description}</p>
          </div>
        </div>

        {/* Module B: Dynamic Category Destination Focus Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 flex-1 flex flex-col justify-between">
          <div>
            <div className="relative h-48 bg-gray-100">
              <img 
                src={destinationData.image} 
                alt={destinationData.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shadow-sm">
                🎯 {categoriesConfig.find(c => c.id === activeCategory)?.label.split(' ')[1]} Choice
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {destinationData.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {destinationData.description}
              </p>
            </div>
          </div>

          <div className="p-5 bg-amber-50/40 border-t border-amber-100 flex justify-between items-center">
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {currentState.name}
            </span>
            <button className="text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}