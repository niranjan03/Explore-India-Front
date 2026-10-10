import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import jsonData from '../data.json';

const itineraries = [
  {
    slug: 'golden-triangle-7-days',
    title: 'Golden Triangle: Delhi, Agra & Jaipur',
    route: ['Delhi', 'Agra', 'Jaipur'],
    duration: '7–10 days',
    days: 7,
    style: 'Mid-range road trip',
    pace: 'Balanced',
    best: 'November–February',
    audience: 'First-timers, families & couples',
    imageQuery: 'India Gate',
    summary: 'A classic first journey combining Delhi’s historic quarters, Agra’s Mughal landmarks, and Jaipur’s forts and bazaars.',
    plan: [
      { stop: 'Delhi', activity: 'Arrive, settle in, and explore a historic neighborhood at an easy pace.', transit: 'Arrival day; local transfers', distance: 'Local' },
      { stop: 'Delhi', activity: 'Visit major landmarks and leave time for a market or food walk.', transit: 'Local metro, taxi, or guided walk', distance: 'Local' },
      { stop: 'Agra', activity: 'Travel to Agra and explore the fort; plan the Taj Mahal visit around its opening schedule.', transit: 'Train or road, about 3–4 hours', distance: 'About 230 km' },
      { stop: 'Agra', activity: 'Visit the Taj Mahal and nearby heritage sites; check weekly closures before setting your day.', transit: 'Local transfers', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Continue to Jaipur and spend the evening in the old city.', transit: 'Road or train, about 4–5 hours', distance: 'About 240 km' },
      { stop: 'Jaipur', activity: 'Explore Amber Fort, City Palace, and the observatory, allowing time for transfers.', transit: 'Local taxi or guided transport', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Browse a local market or add a slower day before departure.', transit: 'Departure or onward transfer', distance: 'Flexible' },
    ],
    budget: [
      { label: 'Transport', amount: '₹8,000–₹20,000' },
      { label: 'Stay', amount: '₹14,000–₹42,000' },
      { label: 'Food', amount: '₹7,000–₹21,000' },
      { label: 'Entry & activities', amount: '₹4,000–₹12,000' },
    ],
  },
  {
    slug: 'kerala-10-days-route',
    title: 'Kerala, Slowly: Kochi, Munnar & Alleppey',
    route: ['Kochi', 'Munnar', 'Alleppey'],
    duration: '7–10 days',
    days: 10,
    style: 'Mid-range road trip',
    pace: 'Relaxed',
    best: 'October–March',
    audience: 'Families, couples & slow travelers',
    imageQuery: 'Kerala',
    summary: 'A slower southern route linking historic Kochi, Munnar’s tea country, and Kerala’s backwater landscapes.',
    plan: [
      { stop: 'Kochi', activity: 'Arrive and explore Fort Kochi’s waterfront and heritage streets.', transit: 'Arrival and local transfers', distance: 'Local' },
      { stop: 'Kochi', activity: 'Visit local markets, museums, or a cultural performance.', transit: 'Local taxi or walking', distance: 'Local' },
      { stop: 'Munnar', activity: 'Travel into the hills, allowing time for a scenic stop along the way.', transit: 'Road, about 4–5 hours', distance: 'About 130 km' },
      { stop: 'Munnar', activity: 'Explore tea country and choose a guided walk suited to current conditions.', transit: 'Local transport or guided tour', distance: 'Local' },
      { stop: 'Munnar', activity: 'Keep a flexible day for viewpoints, gardens, or a quieter rest.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Alleppey', activity: 'Travel down to the coast and settle in near the backwaters.', transit: 'Road, about 4–5 hours', distance: 'About 170 km' },
      { stop: 'Alleppey', activity: 'Arrange a responsible backwater cruise or stay and learn local routes.', transit: 'Boat or local transport', distance: 'Route dependent' },
      { stop: 'Alleppey', activity: 'Take a slower day by the water or visit nearby coastal communities.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Kochi', activity: 'Return toward Kochi with buffer time for the onward journey.', transit: 'Road or rail, allow several hours', distance: 'About 55 km' },
      { stop: 'Kochi', activity: 'Depart or extend your journey along the coast.', transit: 'Departure day', distance: 'Flexible' },
    ],
    budget: [
      { label: 'Transport', amount: '₹10,000–₹25,000' },
      { label: 'Stay', amount: '₹20,000–₹60,000' },
      { label: 'Food', amount: '₹10,000–₹30,000' },
      { label: 'Entry & activities', amount: '₹5,000–₹18,000' },
    ],
  },
  {
    slug: 'ladakh-high-roads',
    title: 'Ladakh High Roads: Leh, Nubra & Pangong',
    route: ['Leh', 'Nubra Valley', 'Pangong Lake'],
    duration: '7–10 days',
    days: 8,
    style: 'Backpacker',
    pace: 'Action-packed',
    best: 'June–September, subject to road access',
    audience: 'Experienced mountain travelers',
    imageQuery: 'Leh Palace',
    summary: 'A high-altitude journey through Ladakh. Allow time to acclimatize, check permits and road conditions, and avoid rushing.',
    plan: [
      { stop: 'Leh', activity: 'Arrive and rest to acclimatize; keep the first day light and follow medical guidance.', transit: 'Arrival day', distance: 'Local' },
      { stop: 'Leh', activity: 'Explore Leh at a gentle pace and confirm permits, transport, and local conditions.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Leh', activity: 'Use another day to acclimatize or take only a low-effort local outing.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Nubra Valley', activity: 'Cross Khardung La when road and weather conditions permit; take regular breaks.', transit: 'Road, allow 5–6 hours', distance: 'About 120 km' },
      { stop: 'Nubra Valley', activity: 'Explore the valley and nearby villages with a locally arranged guide or driver.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Pangong Lake', activity: 'Continue to Pangong using the route currently advised by local authorities.', transit: 'Road, route and time vary', distance: 'Route dependent' },
      { stop: 'Leh', activity: 'Return to Leh with buffer time for changing conditions and road delays.', transit: 'Road, allow a full day', distance: 'Route dependent' },
      { stop: 'Leh', activity: 'Keep a flexible departure day; avoid tight onward connections after mountain travel.', transit: 'Departure day', distance: 'Flexible' },
    ],
    budget: [
      { label: 'Transport', amount: '₹18,000–₹45,000' },
      { label: 'Stay', amount: '₹14,000–₹48,000' },
      { label: 'Food', amount: '₹8,000–₹20,000' },
      { label: 'Permits & activities', amount: '₹4,000–₹15,000' },
    ],
  },
  {
    slug: 'agra-jaipur-luxury-weekend',
    title: 'Heritage Weekend: Agra & Jaipur',
    route: ['Agra', 'Jaipur'],
    duration: '3–5 days',
    days: 4,
    style: 'Luxury heritage',
    pace: 'Relaxed',
    best: 'October–March',
    audience: 'Couples & short-break travelers',
    imageQuery: 'Agra Fort',
    summary: 'A short heritage-focused escape pairing Agra’s Mughal landmarks with Jaipur’s palaces, forts, and refined stays.',
    plan: [
      { stop: 'Agra', activity: 'Arrive and settle into your hotel; visit Agra Fort if time allows.', transit: 'Arrival and local transfers', distance: 'Local' },
      { stop: 'Agra', activity: 'Visit the Taj Mahal and leave time for a relaxed meal and rest.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Travel to Jaipur and check in before an evening in the old city.', transit: 'Road or train, about 4–5 hours', distance: 'About 240 km' },
      { stop: 'Jaipur', activity: 'Choose a fort or palace visit, then depart or extend your stay.', transit: 'Local transport and departure', distance: 'Flexible' },
    ],
    budget: [
      { label: 'Transport', amount: '₹8,000–₹22,000' },
      { label: 'Stay', amount: '₹24,000–₹80,000' },
      { label: 'Food', amount: '₹6,000–₹20,000' },
      { label: 'Entry & activities', amount: '₹3,000–₹10,000' },
    ],
  },
  {
    slug: 'north-india-two-week-route',
    title: 'Two Weeks in North India: Delhi to Varanasi',
    route: ['Delhi', 'Agra', 'Jaipur', 'Varanasi'],
    duration: '2 weeks+',
    days: 14,
    style: 'Backpacker',
    pace: 'Action-packed',
    best: 'October–March',
    audience: 'Independent travelers & culture seekers',
    imageQuery: 'Delhi',
    summary: 'A longer overland route linking North India’s historic cities with time in Varanasi. Keep transfer days flexible and confirm train schedules.',
    plan: [
      { stop: 'Delhi', activity: 'Arrive and recover from the journey.', transit: 'Arrival day', distance: 'Local' },
      { stop: 'Delhi', activity: 'Explore a historic district and local market.', transit: 'Metro or local transport', distance: 'Local' },
      { stop: 'Delhi', activity: 'Visit a major landmark and keep time for a food walk.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Agra', activity: 'Travel to Agra and visit Agra Fort.', transit: 'Train or road, about 3–4 hours', distance: 'About 230 km' },
      { stop: 'Agra', activity: 'Visit the Taj Mahal and plan around current opening information.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Transfer to Jaipur; allow time for delays and check in.', transit: 'Road or train, about 4–5 hours', distance: 'About 240 km' },
      { stop: 'Jaipur', activity: 'Explore the old city and its markets.', transit: 'Walking and local transport', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Visit a fort or palace and leave the afternoon flexible.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Jaipur', activity: 'Take a slower day, visit a museum, or add a nearby excursion.', transit: 'Local transport', distance: 'Flexible' },
      { stop: 'Varanasi', activity: 'Travel onward; use a confirmed train or flight connection.', transit: 'Long-distance transfer', distance: 'Route dependent' },
      { stop: 'Varanasi', activity: 'Explore the riverfront respectfully and ask about local customs.', transit: 'Walking and local transport', distance: 'Local' },
      { stop: 'Varanasi', activity: 'Visit a local neighborhood or cultural site with a knowledgeable guide.', transit: 'Local transport', distance: 'Local' },
      { stop: 'Varanasi', activity: 'Keep a flexible day for rest or a nearby excursion.', transit: 'Local transport', distance: 'Flexible' },
      { stop: 'Varanasi', activity: 'Depart or continue your journey with a buffer for onward travel.', transit: 'Departure day', distance: 'Flexible' },
    ],
    budget: [
      { label: 'Transport', amount: '₹12,000–₹32,000' },
      { label: 'Stay', amount: '₹14,000–₹56,000' },
      { label: 'Food', amount: '₹10,000–₹28,000' },
      { label: 'Entry & activities', amount: '₹5,000–₹16,000' },
    ],
  },
];

const durationOptions = ['all', '3–5 days', '7–10 days', '2 weeks+'];
const styleOptions = ['all', 'Backpacker', 'Mid-range road trip', 'Luxury heritage'];
const paceOptions = ['all', 'Relaxed', 'Balanced', 'Action-packed'];

function routeImage(query) {
  const destination = (jsonData.destinations || []).find((item) => `${item.Name || ''} ${item.State || ''}`.toLowerCase().includes(query.toLowerCase()));
  return destination?.images?.[0]?.original || destination?.images?.[0]?.url;
}

function RouteLine({ places }) {
  return (
    <ol className="flex flex-wrap items-center gap-2" aria-label={`Route: ${places.join(' to ')}`}>
      {places.map((place, index) => (
        <React.Fragment key={place}>
          {index > 0 && <li aria-hidden="true" className="font-bold text-terracotta">➔</li>}
          <li className="rounded-full bg-peacock/10 px-3 py-1.5 text-sm font-semibold text-peacock">{place}</li>
        </React.Fragment>
      ))}
    </ol>
  );
}

function ItineraryDetail({ itinerary }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: itinerary.title,
    description: itinerary.summary,
    touristType: itinerary.audience,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: itinerary.plan.map((day, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `Day ${index + 1}: ${day.stop}`,
        description: day.activity,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-ivory pb-16">
      <PageMeta
        title={`${itinerary.title} | India Travel Itinerary | Exploring India`}
        description={itinerary.summary}
        path={`/itineraries/${itinerary.slug}`}
        schema={schema}
      />
      <header className="relative min-h-[360px] overflow-hidden bg-peacock">
        {routeImage(itinerary.imageQuery) && <img src={routeImage(itinerary.imageQuery)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/20" />
        <div className="relative mx-auto max-w-7xl px-5 py-12 text-white md:px-8 md:py-16">
          <Link to="/itineraries" className="text-sm font-semibold text-marigold">← All itineraries</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-marigold">{itinerary.days} days · {itinerary.style}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold md:text-5xl">{itinerary.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">{itinerary.summary}</p>
          <div className="mt-6"><RouteLine places={itinerary.route} /></div>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-white/15 px-3 py-1.5">{itinerary.days} days</span>
            <span className="rounded-full bg-white/15 px-3 py-1.5">{itinerary.style}</span>
            <span className="rounded-full bg-white/15 px-3 py-1.5">{itinerary.audience}</span>
            <span className="rounded-full bg-white/15 px-3 py-1.5">Best: {itinerary.best}</span>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_320px]">
        <section>
          <h2 className="font-serif text-3xl font-semibold text-charcoal">Day-by-day route</h2>
          <ol className="mt-6 space-y-3">
            {itinerary.plan.map((day, index) => (
              <li key={`${day.stop}-${index}`}>
                <details className="group rounded-2xl border border-charcoal/10 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span><span className="mr-3 text-xs font-bold uppercase tracking-wider text-terracotta">Day {index + 1}</span><span className="font-serif text-xl font-semibold text-charcoal">{day.stop}</span></span>
                    <span className="text-sm font-semibold text-peacock group-open:rotate-180" aria-hidden="true">⌄</span>
                  </summary>
                  <p className="mt-4 leading-7 text-charcoal/75">{day.activity}</p>
                  <div className="mt-4 grid gap-3 border-t border-charcoal/10 pt-4 text-sm sm:grid-cols-2">
                    <p><strong>Transit:</strong> {day.transit}</p><p><strong>Distance:</strong> {day.distance}</p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-charcoal">Route overview</h2>
          <div className="mt-5 rounded-2xl bg-surface p-6"><RouteLine places={itinerary.route} /></div>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-charcoal">Estimated trip cost</h2>
          <p className="mt-2 text-sm leading-6 text-charcoal/65">Illustrative ranges in INR per person for this sample route, excluding international flights. Actual costs vary by season, group size, and choices.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {itinerary.budget.map((cost) => <div key={cost.label} className="flex justify-between rounded-xl bg-white p-4"><span className="text-charcoal/70">{cost.label}</span><strong className="text-charcoal">{cost.amount}</strong></div>)}
          </div>
          <p className="mt-4 rounded-xl bg-marigold/15 p-4 text-sm leading-6 text-charcoal/75">Travel times and access can change. Confirm current transport, attraction opening days, weather, and permit requirements before departure.</p>
        </section>
        <aside className="h-fit rounded-2xl bg-peacock p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Make it your own</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold">Customize this trip</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Browse destination guides and adapt the route to your dates, pace, and interests.</p>
          <Link to="/destinations/" className="mt-5 inline-flex rounded-full bg-terracotta px-5 py-3 font-semibold text-white hover:bg-terracotta-dark">Explore destinations</Link>
        </aside>
      </div>
    </main>
  );
}

export default function Itineraries() {
  const { routeSlug } = useParams();
  const [duration, setDuration] = useState('all');
  const [style, setStyle] = useState('all');
  const [pace, setPace] = useState('all');
  const itinerary = itineraries.find((item) => item.slug === routeSlug);
  const filtered = useMemo(() => itineraries.filter((item) => (
    (duration === 'all' || item.duration === duration)
    && (style === 'all' || item.style.toLowerCase() === style.toLowerCase())
    && (pace === 'all' || item.pace.toLowerCase() === pace.toLowerCase())
  )), [duration, style, pace]);

  if (routeSlug) {
    return itinerary ? <ItineraryDetail itinerary={itinerary} /> : (
      <main className="min-h-screen bg-ivory p-10 text-center">
        <h1 className="font-serif text-3xl font-bold text-charcoal">Itinerary not found</h1>
        <Link to="/itineraries" className="mt-4 inline-block font-semibold text-terracotta">Browse all itineraries</Link>
      </main>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Curated India Travel Itineraries',
    hasPart: itineraries.map((item) => ({
      '@type': 'TouristTrip',
      name: item.title,
      url: `https://www.exploring-india.com/itineraries/${item.slug}`,
      description: item.summary,
    })),
  };

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title="Curated India Itineraries: 5, 7, 10 & 14 Day Travel Routes | Exploring India"
        description="Ready-to-use, customizable travel itineraries across India. Detailed day-by-day routes, transit options, and cost breakdowns for every budget."
        path="/itineraries/"
        schema={schema}
      />
      <header className="bg-peacock px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Routes to get you started</p>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">India Travel Itineraries</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Filter sample routes by trip length, travel style, and pace. Adjust each plan to your dates and current travel conditions.</p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-3 rounded-2xl bg-surface p-4 sm:grid-cols-3">
          <label className="text-sm font-semibold text-charcoal">Duration
            <select value={duration} onChange={(event) => setDuration(event.target.value)} className="mt-2 block w-full rounded-xl border border-charcoal/10 bg-white px-3 py-2 font-normal">
              {durationOptions.map((option) => <option key={option} value={option}>{option === 'all' ? 'Any duration' : option}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-charcoal">Travel style
            <select value={style} onChange={(event) => setStyle(event.target.value)} className="mt-2 block w-full rounded-xl border border-charcoal/10 bg-white px-3 py-2 font-normal">
              {styleOptions.map((option) => <option key={option} value={option}>{option === 'all' ? 'Any style' : option}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-charcoal">Pacing
            <select value={pace} onChange={(event) => setPace(event.target.value)} className="mt-2 block w-full rounded-xl border border-charcoal/10 bg-white px-3 py-2 font-normal">
              {paceOptions.map((option) => <option key={option} value={option}>{option === 'all' ? 'Any pace' : option}</option>)}
            </select>
          </label>
        </div>
        {filtered.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-2xl bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Link to={`/itineraries/${item.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-peacock/10">
                    {routeImage(item.imageQuery) && <img src={routeImage(item.imageQuery)} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />}
                    <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1.5 text-xs font-semibold text-charcoal">{item.days} days</span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-serif text-2xl font-semibold text-charcoal">{item.title}</h2>
                    <p className="mt-3 line-clamp-2 leading-6 text-charcoal/70">{item.summary}</p>
                    <div className="mt-4"><RouteLine places={item.route} /></div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-charcoal/70">
                      <span className="rounded-full bg-white px-3 py-1.5">{item.style}</span>
                      <span className="rounded-full bg-white px-3 py-1.5">{item.audience}</span>
                      <span className="rounded-full bg-white px-3 py-1.5">Best: {item.best}</span>
                    </div>
                    <span className="mt-5 inline-flex font-semibold text-terracotta">View route details →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : <p className="mt-8 rounded-2xl bg-surface p-8 text-charcoal/70">No sample routes match all three filters. Adjust your choices to see more itineraries.</p>}
      </section>
    </main>
  );
}
