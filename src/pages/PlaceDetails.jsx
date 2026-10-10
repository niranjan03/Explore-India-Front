import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import NotFound from './NotFound';
import jsonData from '../data.json';

const PlaceDetails = () => {
  const { placename } = useParams();
  const destination = (jsonData.destinations || []).find((item) => (item.Name || item.placename) === placename);
  if (!destination) {
    return (
      <NotFound
        title="Destination not found"
        description="We couldn’t find that place in our destination guides. Browse all destinations or search for another place."
      />
    );
  }

  const name = destination.Name || destination.name || destination.placename;
  const city = destination.City || destination.location?.city;
  const state = destination.State || destination.location?.state;
  const category = destination.Type || destination.category;
  const images = destination.images;
  const image = images?.mainBanner || images?.[0]?.original || images?.[0]?.url;
  const summary = destination.Summary || destination.summary;
  const history = destination['Details (History, Architecture, Cultural Significance)'] || destination.details?.history;
  const highlights = destination['Key Highlights']
    ? destination['Key Highlights'].split('|').map((highlight) => highlight.trim()).filter(Boolean)
    : destination.keyHighlights || [];
  const bestTime = destination['Best Time to visit'] || destination.bestTimeToVisit;
  const mapsUrl = destination['Location (Google Map URL)'] || destination.location?.googleMapsUrl;
  const canonicalPath = `/place/${encodeURIComponent(name)}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name,
      description: summary,
      image,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: [city, state].filter(Boolean).join(', '),
      },
      touristType: category,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.exploring-india.com/' },
        { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.exploring-india.com/destinations/' },
        { '@type': 'ListItem', position: 3, name },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-ivory pb-16">
      <PageMeta
        title={`${name}${state ? `, ${state}` : ''} Travel Guide | Exploring India`}
        description={summary || `Plan a visit to ${name}${state ? ` in ${state}` : ''}. Explore highlights, practical tips, and the best time to visit.`}
        path={canonicalPath}
        schema={schema}
      />
      <div className="relative">
        <div className="relative h-[48vh] min-h-[360px] bg-zinc-900">
        {image && <img src={image} alt={name} className="h-full w-full object-cover opacity-75" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-10 text-white md:px-16">
          <Link to="/" className="text-sm font-semibold text-marigold">← Back home</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-marigold">{category}</p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-bold md:text-6xl">{name}</h1>
          <p className="mt-3 text-lg text-zinc-200">{[city, state].filter(Boolean).join(', ')}</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_320px] md:px-16">
        <section>
          <p className="text-lg leading-8 text-charcoal/85">{summary}</p>
          <h2 className="mt-10 font-serif text-3xl font-bold text-charcoal">A place with a story</h2>
          <p className="mt-4 leading-7 text-charcoal/75">{history}</p>
          <h2 className="mt-8 font-serif text-3xl font-bold text-charcoal">Highlights</h2>
          <ul className="mt-4 grid gap-3 text-charcoal sm:grid-cols-2">{highlights.map((highlight) => <li key={highlight} className="rounded-lg bg-surface p-4 shadow-sm">{highlight}</li>)}</ul>
        </section>
        <aside className="h-fit rounded-2xl bg-surface p-6 shadow-md">
          <h2 className="font-serif text-2xl font-bold text-charcoal">Plan your visit</h2>
          <p className="mt-5 text-sm text-charcoal/60">Best time</p><p className="font-semibold text-charcoal">{bestTime}</p>
          {mapsUrl && <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-6 block rounded-full bg-terracotta px-5 py-3 text-center font-semibold text-white hover:bg-terracotta-dark">Open in Maps</a>}
        </aside>
      </div>
    </div>
    </main>
  );
};

export default PlaceDetails;