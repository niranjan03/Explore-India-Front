import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { indiaStatesData } from '../context/indiaStatesData';
import jsonData from '../data.json';

const regionFilters = [
  { label: 'All', value: 'All' },
  { label: 'North', value: 'Northern' },
  { label: 'South', value: 'Southern' },
  { label: 'West', value: 'Western' },
  { label: 'East', value: 'Eastern' },
  { label: 'North-East', value: 'North Eastern' },
  { label: 'Islands', value: 'Islands' },
];

const landscapes = [
  { label: 'Any landscape', value: 'all' },
  { label: 'Heritage & forts', value: 'heritage' },
  { label: 'Nature & mountains', value: 'nature' },
  { label: 'Coast & islands', value: 'coast' },
  { label: 'Wildlife', value: 'wildlife' },
];

const landscapeTerms = {
  heritage: ['fort', 'palace', 'monument', 'tomb', 'heritage', 'temple', 'historical', 'museum'],
  nature: ['mountain', 'hill', 'valley', 'lake', 'waterfall', 'garden', 'nature', 'park'],
  coast: ['beach', 'coast', 'island', 'sea', 'marine'],
  wildlife: ['wildlife', 'zoo', 'sanctuary', 'national park', 'tiger', 'bird'],
};

const regionColors = {
  Northern: '#1B4965',
  Southern: '#2D5A27',
  Western: '#C85A32',
  Eastern: '#4A7C59',
  'North Eastern': '#7B5C9E',
  Central: '#E09F3E',
};

const allDestinations = jsonData.destinations || [];

function normalizedState(value) {
  return (value || '').toLowerCase().replace('maharastra', 'maharashtra').trim();
}

function slugify(value) {
  const slug = (value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return slug === 'maharastra' ? 'maharashtra' : slug;
}

function getImage(destination) {
  return destination.images?.[0]?.original || destination.images?.[0]?.url;
}

function getRegion(destination) {
  if (destination.Zone) return destination.Zone;
  if ((destination.State || '').toLowerCase().includes('andaman')) return 'Islands';
  return '';
}

function getLandscape(destination) {
  const type = `${destination.Type || ''} ${destination.Name || ''}`.toLowerCase();
  return Object.entries(landscapeTerms).find(([, terms]) => terms.some((term) => type.includes(term)))?.[0] || '';
}

function DestinationCard({ destination, saved, onToggleSave }) {
  const placeName = destination.Name;
  const fee = Number(destination['Entrance Fee in INR']);
  return (
    <article className="group overflow-hidden rounded-2xl border border-charcoal/5 bg-surface transition duration-300 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-lg">
      <Link to={`/place/${encodeURIComponent(placeName)}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-peacock/10">
          {getImage(destination) && (
            <img src={getImage(destination)} alt={destination.images?.[0]?.alt || placeName} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          )}
          <span className="absolute left-3 top-3 rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-charcoal">{destination.State}</span>
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">{destination.Type}</p>
          <h2 className="mt-1 font-serif text-xl font-semibold text-charcoal">{placeName}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/70">{destination.Summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-charcoal/70">
            <span className="rounded-full bg-white px-2.5 py-1">{destination['Best Time to visit'] || 'Check local conditions'}</span>
            <span className="rounded-full bg-white px-2.5 py-1">
              {Number.isFinite(fee) ? (fee === 0 ? 'Free entry' : `Entry ₹${fee.toLocaleString('en-IN')}`) : 'Check entry details'}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between border-t border-charcoal/5 px-5 py-3">
        <Link to={`/destinations/${slugify(destination.State)}/${slugify(destination.City || placeName)}`} className="text-sm font-semibold text-peacock hover:text-terracotta">
          Explore city
        </Link>
        <button
          type="button"
          onClick={() => onToggleSave(placeName)}
          aria-pressed={saved}
          aria-label={`${saved ? 'Remove' : 'Save'} ${placeName} ${saved ? 'from' : 'to'} wishlist`}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${saved ? 'bg-terracotta/10 text-terracotta' : 'text-charcoal/70 hover:bg-terracotta/10 hover:text-terracotta'}`}
        >
          {saved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </article>
  );
}

function DestinationMap({ selectedState, onSelectState }) {
  const activeState = Object.values(indiaStatesData).find((state) => state.name === selectedState);
  const stateDestinations = activeState
    ? allDestinations.filter((destination) => normalizedState(destination.State) === normalizedState(activeState.name)).slice(0, 5)
    : [];

  return (
    <div className="grid gap-6 rounded-3xl bg-surface p-5 md:grid-cols-[1fr_320px] md:p-8">
      <div>
        <div className="mb-4 flex flex-wrap gap-3 text-xs font-medium text-charcoal/70" aria-label="Map region legend">
          {Object.entries(regionColors).map(([region, color]) => (
            <span key={region} className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
              {region}
            </span>
          ))}
        </div>
        <svg viewBox="0 0 600 600" role="img" aria-label="Interactive map of India by state" className="mx-auto max-h-[580px] w-full">
          {Object.values(indiaStatesData).map((state) => {
            const region = allDestinations.find((destination) => normalizedState(destination.State) === normalizedState(state.name))?.Zone;
            const selected = selectedState === state.name;
            return (
              <path
                key={state.id}
                d={state.path}
                fill={selected ? '#C85A32' : regionColors[region] || '#AEBBB5'}
                stroke="#FDFBF7"
                strokeWidth="2"
                role="button"
                tabIndex={0}
                aria-label={`Show destinations in ${state.name}`}
                aria-pressed={selected}
                onClick={() => onSelectState(state.name)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectState(state.name);
                  }
                }}
                className="cursor-pointer transition-opacity hover:opacity-75 focus:outline-none focus:opacity-75"
              >
                <title>{state.name}</title>
              </path>
            );
          })}
        </svg>
      </div>
      <aside className="rounded-2xl bg-ivory p-5" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Explore the map</p>
        <label htmlFor="map-state" className="mt-3 block font-serif text-2xl font-semibold text-charcoal">Choose a state</label>
        <select id="map-state" value={selectedState} onChange={(event) => onSelectState(event.target.value)} className="mt-3 w-full rounded-xl border border-charcoal/15 bg-white px-3 py-2 text-charcoal">
          <option value="">Select a state</option>
          {Object.values(indiaStatesData).map((state) => <option key={state.id} value={state.name}>{state.name}</option>)}
        </select>
        {selectedState && (
          <>
            <h2 className="mt-6 font-serif text-xl font-semibold text-charcoal">{selectedState}</h2>
            {stateDestinations.length ? (
              <ul className="mt-3 space-y-2">
                {stateDestinations.map((destination) => (
                  <li key={destination.placeKey || destination.Name}>
                    <Link to={`/place/${encodeURIComponent(destination.Name)}`} className="text-sm font-medium text-peacock hover:text-terracotta">{destination.Name}</Link>
                  </li>
                ))}
              </ul>
            ) : <p className="mt-3 text-sm leading-6 text-charcoal/70">Destination guides for this state are being added.</p>}
          </>
        )}
      </aside>
    </div>
  );
}

export default function Explore() {
  const [region, setRegion] = useState('All');
  const [state, setState] = useState('');
  const [landscape, setLandscape] = useState('all');
  const [budget, setBudget] = useState('all');
  const [query, setQuery] = useState('');
  const [view, setView] = useState('grid');
  const [savedPlaces, setSavedPlaces] = useState(() => new Set());
  const [visibleCount, setVisibleCount] = useState(24);

  const stateOptions = useMemo(() => [...new Set(allDestinations.map((item) => item.State).filter(Boolean))].sort(), []);
  const filtered = useMemo(() => allDestinations.filter((destination) => {
    const regionMatch = region === 'All'
      || (region === 'Islands' ? (destination.State || '').toLowerCase().includes('island') : getRegion(destination) === region);
    const stateMatch = !state || normalizedState(destination.State) === normalizedState(state);
    const landscapeMatch = landscape === 'all' || getLandscape(destination) === landscape;
    const fee = Number(destination['Entrance Fee in INR']);
    const budgetMatch = budget === 'all'
      || (budget === 'value' && fee <= 100)
      || (budget === 'moderate' && fee > 100 && fee <= 500)
      || (budget === 'premium' && fee > 500);
    const searchText = `${destination.Name || ''} ${destination.State || ''} ${destination.City || ''} ${destination.Summary || ''}`.toLowerCase();
    return regionMatch && stateMatch && landscapeMatch && budgetMatch && searchText.includes(query.toLowerCase().trim());
  }), [region, state, landscape, budget, query]);
  useEffect(() => setVisibleCount(24), [region, state, landscape, budget, query]);

  const toggleSave = (placeName) => {
    setSavedPlaces((previous) => {
      const next = new Set(previous);
      if (next.has(placeName)) next.delete(placeName);
      else next.add(placeName);
      return next;
    });
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'India travel destinations',
    numberOfItems: Math.min(filtered.length, 20),
    itemListElement: filtered.slice(0, 20).map((destination, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.exploring-india.com/place/${encodeURIComponent(destination.Name)}`,
      name: destination.Name,
    })),
  };

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title="Destinations in India: Explore States, Cities & Offbeat Escapes | Exploring India"
        description="Discover the best travel destinations across India. Browse curated guides by region, state, and travel style from the Himalayas to the backwaters of Kerala."
        path="/destinations/"
        schema={itemListSchema}
      />
      <header className="bg-peacock px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Find your next stop</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold md:text-5xl">India Travel Destinations</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Browse the best places to visit in India by region, state, landscape, or entry cost.</p>
          <div className="mt-7 grid gap-3 rounded-2xl bg-white p-3 text-charcoal md:grid-cols-4">
            <label className="sr-only" htmlFor="destination-search">Search destinations</label>
            <input id="destination-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places or states" className="min-w-0 rounded-xl border border-charcoal/10 px-3 py-2 md:col-span-1" />
            <label className="sr-only" htmlFor="destination-state">Filter by state</label>
            <select id="destination-state" value={state} onChange={(event) => setState(event.target.value)} className="rounded-xl border border-charcoal/10 px-3 py-2">
              <option value="">All states</option>
              {stateOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <label className="sr-only" htmlFor="destination-landscape">Filter by landscape</label>
            <select id="destination-landscape" value={landscape} onChange={(event) => setLandscape(event.target.value)} className="rounded-xl border border-charcoal/10 px-3 py-2">
              {landscapes.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <label className="sr-only" htmlFor="destination-budget">Filter by entry fee</label>
            <select id="destination-budget" value={budget} onChange={(event) => setBudget(event.target.value)} className="rounded-xl border border-charcoal/10 px-3 py-2">
              <option value="all">Any entry fee</option>
              <option value="value">Value: free–₹100</option>
              <option value="moderate">Moderate: ₹101–₹500</option>
              <option value="premium">Premium: over ₹500</option>
            </select>
          </div>
          <p className="mt-2 text-xs text-white/70">Entry-fee filters reflect listed attraction admission prices, not the full cost of a trip.</p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2" aria-label="Filter by region">
            {regionFilters.map((filter) => (
              <button key={filter.value} type="button" onClick={() => { setRegion(filter.value); setState(''); }} aria-pressed={region === filter.value} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${region === filter.value ? 'bg-peacock text-white' : 'bg-surface text-charcoal hover:bg-peacock/10'}`}>
                {filter.label}
              </button>
            ))}
          </div>
          <div className="inline-flex self-start rounded-xl border border-charcoal/10 bg-surface p-1" aria-label="Destination display mode">
            <button type="button" onClick={() => setView('grid')} aria-pressed={view === 'grid'} className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === 'grid' ? 'bg-peacock text-white' : 'text-charcoal'}`}>Card grid</button>
            <button type="button" onClick={() => setView('map')} aria-pressed={view === 'map'} className={`rounded-lg px-4 py-2 text-sm font-semibold ${view === 'map' ? 'bg-peacock text-white' : 'text-charcoal'}`}>Interactive map</button>
          </div>
        </div>

        {view === 'map' ? (
          <div className="mt-8">
            <DestinationMap selectedState={state} onSelectState={(selected) => setState(selected)} />
          </div>
        ) : (
          <>
            <div className="mb-5 mt-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Curated guides</p>
                <h2 className="mt-1 font-serif text-2xl font-semibold text-charcoal">Explore India, one place at a time</h2>
              </div>
              <p className="text-sm text-charcoal/60">{filtered.length.toLocaleString()} places</p>
            </div>
            {filtered.length ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.slice(0, visibleCount).map((destination) => (
                  <DestinationCard key={destination.placeKey || destination.Name} destination={destination} saved={savedPlaces.has(destination.Name)} onToggleSave={toggleSave} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl bg-surface p-8 text-charcoal/75">No destinations match these filters. Try another region, landscape, or search term.</p>
            )}
            {visibleCount < filtered.length && (
              <button type="button" onClick={() => setVisibleCount((count) => count + 24)} className="mx-auto mt-8 block rounded-full bg-peacock px-6 py-3 font-semibold text-white transition hover:bg-peacock/90">
                Load more destinations
              </button>
            )}
          </>
        )}
      </section>

      <section className="bg-surface px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {[
            { title: 'Trending Offbeat Escapes', description: 'Find quieter paths through India’s valleys, river islands, and highlands.', query: 'Majuli' },
            { title: 'Classic First-Timer Stops', description: 'Start with celebrated cities, heritage landmarks, and welcoming gateways.', query: 'Agra' },
          ].map((collection) => (
            <article key={collection.title} className="rounded-2xl bg-ivory p-6 md:p-8">
              <h2 className="font-serif text-2xl font-semibold text-charcoal">{collection.title}</h2>
              <p className="mt-3 leading-7 text-charcoal/70">{collection.description}</p>
              <Link to={`/Search?q=${encodeURIComponent(collection.query)}`} className="mt-5 inline-flex font-semibold text-terracotta hover:text-terracotta-dark">Browse destinations →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function DestinationCity() {
  const { state: stateSlug, city: citySlug } = useParams();
  const [savedPlaces, setSavedPlaces] = useState(() => new Set());
  const destinations = allDestinations.filter((destination) => (
    slugify(destination.State) === stateSlug
    && slugify(destination.City || destination.Name) === citySlug
  ));
  const stateName = destinations[0]?.State || stateSlug.replace(/-/g, ' ');
  const cityName = destinations[0]?.City || destinations[0]?.Name || citySlug.replace(/-/g, ' ');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to visit in ${cityName}, ${stateName}`,
    itemListElement: destinations.map((destination, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristDestination',
        name: destination.Name,
        description: destination.Summary,
        url: `https://www.exploring-india.com/place/${encodeURIComponent(destination.Name)}`,
      },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.exploring-india.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.exploring-india.com/destinations/' },
      { '@type': 'ListItem', position: 3, name: `${cityName}, ${stateName}` },
    ],
  };
  const toggleSave = (placeName) => {
    setSavedPlaces((previous) => {
      const next = new Set(previous);
      if (next.has(placeName)) next.delete(placeName);
      else next.add(placeName);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title={`Places to Visit in ${cityName}, ${stateName} | Exploring India`}
        description={`Explore destination guides, practical tips, and places to visit in ${cityName}, ${stateName}.`}
        path={`/destinations/${stateSlug}/${citySlug}`}
        schema={[schema, breadcrumbSchema]}
      />
      <header className="bg-peacock px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link to="/destinations/" className="text-sm font-semibold text-marigold">← All destinations</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-marigold">{stateName}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Explore {cityName}</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Browse visitor guides and practical details for places in {cityName}.</p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {destinations.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => <DestinationCard key={destination.placeKey || destination.Name} destination={destination} saved={savedPlaces.has(destination.Name)} onToggleSave={toggleSave} />)}
          </div>
        ) : (
          <div className="rounded-2xl bg-surface p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">No city guides found</h2>
            <p className="mt-3 text-charcoal/70">Browse the destination index to find available places and regions.</p>
            <Link to="/destinations/" className="mt-5 inline-flex font-semibold text-terracotta">Browse destinations →</Link>
          </div>
        )}
      </section>
    </main>
  );
}
