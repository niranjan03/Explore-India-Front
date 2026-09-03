import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import jsonData from '../data.json';

const Explore = () => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get('state') || '';
  const place = searchParams.get('place') || '';
  const query = (searchParams.get('q') || '').trim().toLowerCase();
  const destinations = jsonData.destinations || [];
  const results = destinations.filter((destination) => {
    const matchesState = !state || destination.location.state === state;
    const matchesPlace = !place || destination.name === place;
    const searchable = `${destination.name} ${destination.location.state} ${destination.location.city} ${destination.category}`.toLowerCase();
    return matchesState && matchesPlace && (!query || searchable.includes(query));
  });

  const heading = place || state || (query ? `Search results for "${query}"` : 'Explore India');

  return (
    <main className="min-h-screen bg-amber-50/40 px-5 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-orange-700 hover:text-orange-900">← Back home</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Destinations</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-zinc-900 md:text-5xl">{heading}</h1>
        <p className="mt-3 text-zinc-600">{results.length} place{results.length === 1 ? '' : 's'} to discover</p>

        {results.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((destination) => (
              <Link key={destination.name} to={`/place/${encodeURIComponent(destination.name)}`} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-52 overflow-hidden bg-zinc-200">
                  <img src={destination.images?.mainBanner} alt={destination.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{destination.category}</p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-zinc-900">{destination.name}</h2>
                  <p className="mt-1 text-sm text-zinc-500">{destination.location.city}, {destination.location.state}</p>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600">{destination.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : <p className="mt-10 rounded-2xl bg-white p-8 text-zinc-600 shadow-sm">No destinations matched your search. Try another place or state.</p>}
      </div>
    </main>
  );
};

export default Explore;