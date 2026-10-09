import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../layouts/banner/Banner';
import Categorize from '../components/Categorize';
import HomeBlogs from '../components/HomeBlogs';
import Newsletter from '../components/Newsletter';
import jsonData from '../data.json';

const regions = [
  { name: 'North', zones: ['Northern'], note: 'Himalayan horizons, Mughal landmarks, and lively old cities.' },
  { name: 'South', zones: ['Southern'], note: 'Temple towns, tropical coastlines, and green backwater country.' },
  { name: 'East', zones: ['Eastern'], note: 'River landscapes, historic quarters, and rich living traditions.' },
  { name: 'West', zones: ['Western'], note: 'Desert forts, royal cities, and sunlit shores.' },
  { name: 'Central', zones: ['Central'], note: 'Forest reserves, ancient pilgrimage routes, and historic heartlands.' },
  { name: 'North-East', zones: ['North Eastern'], note: 'Mountain cultures, tea country, and extraordinary biodiversity.' },
];

const routeIdeas = [
  { title: 'The Golden Triangle', route: 'Delhi · Agra · Jaipur', state: 'Delhi', days: 'A classic first journey' },
  { title: 'Kerala, Slowly', route: 'Kochi · Munnar · Alleppey', state: 'Kerala', days: 'A gentle southern escape' },
  { title: 'Himalayan High Roads', route: 'Leh · Nubra · Pangong', state: 'Ladakh', days: 'A mountain adventure' },
];

const travelGuides = [
  { title: 'When to go', text: 'India’s seasons vary by region. Plan around the dry winter months for many northern journeys, and check local monsoon conditions before you travel.' },
  { title: 'Local customs', text: 'Dress respectfully at sacred sites, remove footwear where requested, and ask before photographing people or ceremonies.' },
  { title: 'Getting around', text: 'Book popular train routes ahead, allow extra time between stops, and compare domestic flights for longer distances.' },
  { title: 'Eat with curiosity', text: 'Explore regional food at a comfortable pace. Share dietary needs clearly and ask about spice levels when ordering.' },
];

const getImage = (place) => place?.images?.[0]?.original || place?.images?.[0]?.url;

function RegionExplorer() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const places = useMemo(
    () => (jsonData.destinations || []).filter((place) => selectedRegion.zones.includes(place.Zone)).slice(0, 3),
    [selectedRegion],
  );

  return (
    <section id="regions" className="bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">A country of many worlds</p>
          <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">Find your corner of India</h2>
          <p className="mt-4 max-w-lg leading-7 text-charcoal/70">
            Choose a region to discover places and experiences from across the local collection.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {regions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region)}
                aria-pressed={selectedRegion.name === region.name}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  selectedRegion.name === region.name
                    ? 'border-peacock bg-peacock text-white'
                    : 'border-charcoal/10 bg-ivory text-charcoal hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
          <p className="mt-6 leading-7 text-charcoal/70">{selectedRegion.note}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {places.map((place) => (
            <Link
              key={place.placeKey || place.Name}
              to={`/place/${encodeURIComponent(place.Name)}`}
              className="group overflow-hidden rounded-2xl bg-ivory shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden bg-peacock/10">
                {getImage(place) && (
                  <img src={getImage(place)} alt={place.images?.[0]?.alt || place.Name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">{place.State}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-charcoal">{place.Name}</h3>
              </div>
            </Link>
          ))}
          {!places.length && <p className="rounded-xl bg-ivory p-6 text-charcoal/70 sm:col-span-3">More destinations for this region are coming soon.</p>}
        </div>
      </div>
    </section>
  );
}

function ItineraryIdeas() {
  return (
    <section id="itineraries" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Start with a route</p>
          <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">A few ways to see more</h2>
        </div>
        <Link to="/Explore" className="font-semibold text-terracotta hover:text-terracotta-dark">Explore all destinations <span aria-hidden="true">→</span></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {routeIdeas.map((idea) => {
          const place = (jsonData.destinations || []).find((destination) => (
            destination.State?.toLowerCase() === idea.state.toLowerCase()
          ));
          const image = getImage(place);
          const name = place?.Name || idea.state;
          return (
            <article key={idea.title} className="group overflow-hidden rounded-2xl bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Link to={place ? `/place/${encodeURIComponent(name)}` : '/Explore'} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-peacock/10">
                  {image && <img src={image} alt={place?.images?.[0]?.alt || name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1.5 text-xs font-semibold text-charcoal">{idea.days}</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-terracotta">{idea.route}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-charcoal">{idea.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">Explore this journey <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TravelGuides() {
  return (
    <section id="guides" className="bg-peacock py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-marigold">Good to know before you go</p>
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">A little preparation goes a long way</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travelGuides.map((guide, index) => (
            <article key={guide.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <span className="font-serif text-3xl text-marigold">0{index + 1}</span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{guide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">{guide.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationNotes() {
  const notes = (jsonData.destinations || []).filter((place) => getImage(place)).slice(5, 9);
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">The places stay with you</p>
        <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">A glimpse of the journey</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {notes.map((place, index) => (
          <Link key={place.placeKey || place.Name} to={`/place/${encodeURIComponent(place.Name)}`} className={`group relative overflow-hidden rounded-2xl bg-charcoal ${index === 1 ? 'md:mt-10' : ''}`}>
            <div className="aspect-[4/5]">
              <img src={getImage(place)} alt={place.images?.[0]?.alt || place.Name} loading="lazy" className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-14 text-white">
              <p className="text-xs uppercase tracking-wider text-marigold">{place.State}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold">{place.Name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const Home = () => (
  <>
    <Banner />
    <Categorize />
    <RegionExplorer />
    <ItineraryIdeas />
    <TravelGuides />
    <DestinationNotes />
    <section id="journal">
      <HomeBlogs />
    </section>
    <Newsletter />
  </>
);

export default Home;
