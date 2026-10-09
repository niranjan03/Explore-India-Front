import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import jsonData from '../data.json';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim();
  const normalizedQuery = query.toLocaleLowerCase();
  const results = normalizedQuery
    ? (jsonData.destinations || []).filter((destination) => (
      [destination.Name, destination.State]
        .some((value) => typeof value === 'string' && value.toLocaleLowerCase().includes(normalizedQuery))
    ))
    : [];

  const heading = query ? `Search results for "${query}"` : 'Search destinations';

  return (
    <main className="relative min-h-screen bg-green px-5 py-16 md:px-16 z-auto">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-orange-700 hover:text-orange-900">← Back home</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Destinations</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-zinc-900 md:text-5xl">{heading}</h1>

        {!query && <p className="mt-8 text-zinc-600">Enter a palace or state name to find destinations.</p>}
        {query && (
          <>
            <p className="mt-3 text-zinc-600">{results.length} place{results.length === 1 ? '' : 's'} to discover</p>
            {results.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((destination) => {
                  const name = destination.Name;
                  const locationText = [destination.City, destination.State].filter(Boolean).join(', ');
                  const image = destination.images?.[0]?.original || destination.images?.[0]?.url;

                  return (
                    <Link key={destination.placeKey || name} to={`/place/${encodeURIComponent(name)}`} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="h-52 overflow-hidden bg-zinc-200">
                        {image && <img src={image} alt={destination.images?.[0]?.alt || name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{destination.Type}</p>
                        <h2 className="mt-2 font-serif text-2xl font-bold text-zinc-900">{name}</h2>
                        {locationText && <p className="mt-1 text-sm text-zinc-500">{locationText}</p>}
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600">{destination.Summary}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : <p className="mt-10 rounded-2xl bg-white p-8 text-zinc-600 shadow-sm">No destinations matched your search. Try another keyword.</p>}
          </>
        )}
      </div>
    </main>
  );
};

export default Search;