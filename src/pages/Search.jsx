import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SEARCH_API = 'https://explore-india-server.onrender.com/api/search';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim();
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(query ? 'loading' : 'idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    if (!query) {
      setResults([]);
      setError('');
      setStatus('idle');
      return () => controller.abort();
    }

    setStatus('loading');
    setError('');

    fetch(`${SEARCH_API}?q=${encodeURIComponent(query)}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Search request failed (${response.status}).`);
        return response.json();
      })
      .then((payload) => {
        const items = Array.isArray(payload)
          ? payload
          : payload?.results ?? payload?.destinations ?? payload?.data?.results ?? payload?.data ?? [];
        setResults(Array.isArray(items) ? items : []);
        setStatus('success');
      })
      .catch((requestError) => {
        if (requestError.name === 'AbortError') return;
        setResults([]);
        setError(requestError.message || 'Unable to load search results.');
        setStatus('error');
      });

    return () => controller.abort();
  }, [query]);

  const heading = query ? `Search results for "${query}"` : 'Search destinations';

  return (
    <main className="relative min-h-screen bg-green px-5 py-16 md:px-16 z-auto">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-orange-700 hover:text-orange-900">← Back home</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Destinations</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-zinc-900 md:text-5xl">{heading}</h1>

        {status === 'loading' && <p role="status" className="mt-8 text-zinc-600">Searching destinations...</p>}
        {status === 'error' && <p role="alert" className="mt-8 rounded-xl bg-white p-6 text-red-700">{error}</p>}
        {status === 'idle' && <p className="mt-8 text-zinc-600">Enter a keyword to find destinations.</p>}
        {status === 'success' && (
          <>
            <p className="mt-3 text-zinc-600">{results.length} place{results.length === 1 ? '' : 's'} to discover</p>
            {results.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((destination, index) => {
                  const name = destination.placename || destination.name || destination.title || `Destination ${index + 1}`;
                  const location = destination.location;
                  const locationText = typeof location === 'string'
                    ? location
                    : [location?.city, location?.state].filter(Boolean).join(', ');
                  const image = destination.images?.mainBanner || destination.image || destination.imageUrl;

                  return (
                    <Link key={destination._id || destination.id || name} to={`/place/${encodeURIComponent(name)}`} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="h-52 overflow-hidden bg-zinc-200">
                        {image && <img src={image} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{destination.category}</p>
                        <h2 className="mt-2 font-serif text-2xl font-bold text-zinc-900">{name}</h2>
                        {locationText && <p className="mt-1 text-sm text-zinc-500">{locationText}</p>}
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600">{destination.summary || destination.description}</p>
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