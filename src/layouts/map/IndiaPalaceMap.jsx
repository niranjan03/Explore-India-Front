import React, { useState } from 'react';
import { MapPin, X, Landmark } from 'lucide-react';
import { indiaStatesData } from '../../context/indiaStatesData';
// Static Data Object containing coordinates and palace info for the interactive states


// Helper positioning function for text labels and circle centers.
// If a state provides explicit center coordinates, use those.
function getCenterCoords(state) {
  if (state?.cx != null && state?.cy != null) {
    return { x: state.cx, y: state.cy };
  }

  const path = state?.path;
  if (!path) {
    return { x: 250, y: 250 };
  }

  const numbers = path.match(/-?\d*\.?\d+/g);
  if (!numbers || numbers.length < 2) {
    return { x: 250, y: 250 };
  }

  const points = [];
  for (let i = 0; i < numbers.length; i += 2) {
    const x = parseFloat(numbers[i]);
    const y = parseFloat(numbers[i + 1]);
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      points.push({ x, y });
    }
  }

  if (!points.length) {
    return { x: 250, y: 250 };
  }

  const total = points.reduce((acc, point) => {
    acc.x += point.x;
    acc.y += point.y;
    return acc;
  }, { x: 0, y: 0 });

  return {
    x: total.x / points.length,
    y: total.y / points.length,
  };
}

export default function IndiaPalaceMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
        
        {/* Header section */}
        <div className="border-b border-slate-100 pb-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">POLITICAL MAP OF INDIA</h1>
            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
              <Landmark className="w-4 h-4 text-indigo-500" /> Click on a highlighted state to discover its famous heritage palaces
            </p>
          </div>
          <div className="bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100 text-xs text-indigo-700 font-semibold hidden sm:block">
            Interactive Heritage Edition
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SVG Map Container */}
          <div className="lg:col-span-2 flex justify-center bg-sky-50/40 rounded-xl p-4 border border-sky-100/50 relative overflow-hidden">
            
            {/* Watermark/Sea labels */}
            <div className="absolute bottom-16 left-12 text-sky-800/40 font-bold tracking-widest text-xs pointer-events-none uppercase">Arabian Sea</div>
            <div className="absolute bottom-16 right-24 text-sky-800/40 font-bold tracking-widest text-xs pointer-events-none uppercase">Bay of Bengal</div>

            <svg 
              viewBox="0 0 500 550" 
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto max-h-[500px]"
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05))' }}
            >
              <defs>
                <linearGradient id="indiaBaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#eef2ff" />
                  <stop offset="100%" stopColor="#dbeafe" />
                </linearGradient>
              </defs>

              {/* India silhouette background */}
              <path
                d="M 120 90 C 105 145 100 190 110 235 C 115 260 135 290 140 315 C 135 350 135 390 155 420 C 148 435 148 455 167 475 C 180 492 205 505 235 505 C 260 505 280 495 295 485 C 315 470 335 450 345 430 C 355 410 365 390 375 360 C 395 340 410 315 415 285 C 425 260 430 240 440 220 C 445 200 445 185 440 170 C 430 150 420 135 405 120 C 390 105 370 95 345 90 C 320 85 300 85 280 90 C 255 100 235 100 215 95 C 190 90 170 95 150 105 C 135 110 125 115 120 90 Z"
                fill="url(#indiaBaseGradient)"
                stroke="#94a3b8"
                strokeWidth="2"
                opacity="0.55"
              />

              {/* Map Grid lines */}
              <g stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.25">
                <line x1="0" y1="100" x2="500" y2="100" />
                <line x1="0" y1="250" x2="500" y2="250" />
                <line x1="0" y1="400" x2="500" y2="400" />
                <line x1="150" y1="0" x2="150" y2="550" />
                <line x1="300" y1="0" x2="300" y2="550" />
              </g>

              {/* Dynamic State Paths (expanded fill + thin outline) */}
              {Object.values(indiaStatesData).map((state) => {
                const isSelected = selectedState?.id === state.id;
                const isHovered = hoveredState === state.id;
                const center = getCenterCoords(state);

                return (
                  <g key={state.id}>
                    {/* Expanded base to visually bridge gaps between neighboring shapes */}
                    <path
                      d={state.path}
                      fill={isSelected ? '#6366f1' : state.color}
                      stroke={isSelected ? (state.color || '#6366f1') : (state.color || '#475569')}
                      strokeWidth={6}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="transition-all duration-200 cursor-pointer"
                      onClick={() => setSelectedState(state)}
                      onMouseEnter={() => setHoveredState(state.id)}
                      onMouseLeave={() => setHoveredState(null)}
                      style={{
                        opacity: hoveredState && !isHovered && !isSelected ? 0.9 : 1,
                        transform: isHovered || isSelected ? 'scale(1.01)' : 'scale(1)',
                        transformOrigin: 'center'
                      }}
                    />

                    {/* Crisp outline on top */}
                    <path
                      d={state.path}
                      fill="none"
                      stroke={isSelected ? '#312e81' : '#475569'}
                      strokeWidth={isSelected ? 2 : 1}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      pointerEvents="none"
                    />

                    {/* Maps State Text Label (uses centroid or explicit cx/cy) */}
                    <text
                      x={center.x}
                      y={center.y}
                      textAnchor="middle"
                      className="pointer-events-none font-bold text-[10px] select-none fill-slate-800"
                    >
                      {state.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Palace Information Sidebar */}
          <div className="flex flex-col justify-start">
            {selectedState ? (
              <div className="bg-slate-900 text-white rounded-xl p-5 shadow-inner border border-slate-800 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Selected Region</span>
                    <h2 className="text-2xl font-bold flex items-center gap-2 mt-0.5">
                      <MapPin className="w-5 h-5 text-rose-500 fill-rose-500" /> {selectedState.name}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedState(null)}
                    className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-slate-400 mb-4">
                  Famous palaces to explore in this state:
                </p>

                <div className="space-y-3">
                  {selectedState.palaces.map((palace, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/50">
                      <h3 className="font-semibold text-amber-400 text-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {palace.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {palace.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[250px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center bg-slate-50/50">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-3">
                  <Landmark className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="font-bold text-slate-700 text-base">No State Selected</h3>
                <p className="text-xs text-slate-500 max-w-[220px] mt-1">
                  Interact with the colored state shapes on the map to reveal localized palace databases.
                </p>
              </div>
            )}

            {/* Quick Map Legend */}
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Quick Index</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#ffb366] border border-slate-400"></span> Rajasthan
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#99ccff] border border-slate-400"></span> Karnataka
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#e6ccb3] border border-slate-400"></span> Gujarat
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#cc99cc] border border-slate-400"></span> Uttar Pradesh
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}