import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import jsonData from '../data.json';

const themes = [
  {
    slug: 'heritage-royal-palaces',
    title: 'Heritage & Royal Palaces',
    kicker: 'Stories in stone',
    description: 'Walk through centuries of Indian history in forts, palaces, and old city quarters. Pair a landmark visit with nearby museums, markets, and local guides.',
    season: 'October to March is generally more comfortable across much of North India; check regional conditions.',
    budget: 'Indicative range: ₹2,500–₹8,000 per person per day, depending on stays and guided visits.',
    places: ['Rajasthan', 'Agra', 'Delhi'],
    query: 'Rajasthan',
    imageQuery: 'Jaipur',
  },
  {
    slug: 'spiritual-ayurvedic-wellness',
    title: 'Spiritual & Ayurvedic Wellness',
    kicker: 'Room to reconnect',
    description: 'Discover sacred river towns, temple traditions, and wellness stays. Respect local customs and confirm the credentials and practices of any wellness provider.',
    season: 'October to March is a popular window in many regions; coastal monsoon conditions vary.',
    budget: 'Indicative range: ₹2,000–₹9,000 per person per day, with retreats and accommodation shaping costs.',
    places: ['Rishikesh', 'Varanasi', 'Kerala'],
    query: 'Kerala',
    imageQuery: 'Kerala',
  },
  {
    slug: 'himalayan-treks-adventure',
    title: 'Himalayan Treks & Adventure',
    kicker: 'Beyond the foothills',
    description: 'Plan mountain journeys around altitude, weather, permits, and local operator advice. Build in acclimatization time before high-altitude routes.',
    season: 'Late spring through early autumn for many high routes; winter access depends on the specific trail.',
    budget: 'Indicative range: ₹3,000–₹10,000 per person per day, including guide and transport choices.',
    places: ['Spiti Valley', 'Leh-Ladakh', 'Auli'],
    query: 'Himachal Pradesh',
    imageQuery: 'Himachal Pradesh',
  },
  {
    slug: 'wildlife-safaris',
    title: 'Wildlife Safaris & National Parks',
    kicker: 'Wild India',
    description: 'Explore India’s forests and wetlands with responsible wildlife operators. Book permitted safaris ahead and follow park rules around animals.',
    season: 'Dry-season sightings can be easier in some parks; opening periods and conditions vary by reserve.',
    budget: 'Indicative range: ₹4,000–₹15,000 per person per day, depending on park fees, safaris, and stays.',
    places: ['Ranthambore', 'Jim Corbett', 'Kaziranga'],
    query: 'Assam',
    imageQuery: 'Assam',
  },
  {
    slug: 'culinary-trails-street-food',
    title: 'Culinary Trails & Street Food',
    kicker: 'A country on the table',
    description: 'Follow regional ingredients and food traditions from market breakfasts to family-run kitchens. Ask about allergens, spice, and drinking water as you go.',
    season: 'Food journeys are possible year-round; choose cooler hours for outdoor markets in hot months.',
    budget: 'Indicative range: ₹1,500–₹5,000 per person per day, depending on dining style and guided tastings.',
    places: ['Delhi', 'Kolkata', 'Tamil Nadu'],
    query: 'Delhi',
    imageQuery: 'Delhi',
  },
  {
    slug: 'coastal-retreats',
    title: 'Sun, Sand & Coastal Retreats',
    kicker: 'Follow the shoreline',
    description: 'Balance beach time with fishing villages, coastal food, and historic ports. Check local sea conditions and seasonal closures before planning water activities.',
    season: 'October to March is often a drier coastal travel window; monsoon conditions differ across the coast.',
    budget: 'Indicative range: ₹2,500–₹9,000 per person per day, with resort choice and season affecting rates.',
    places: ['Goa', 'Gokarna', 'Kerala'],
    query: 'Goa',
    imageQuery: 'Goa',
  },
];

function findImage(query) {
  const place = (jsonData.destinations || []).find((destination) => (
    `${destination.Name || ''} ${destination.State || ''}`.toLowerCase().includes(query.toLowerCase())
  ));
  return place?.images?.[0]?.original || place?.images?.[0]?.url;
}

export default function Experiences() {
  const { themeName } = useParams();
  const activeTheme = themes.find((theme) => theme.slug === themeName);
  const visibleThemes = activeTheme ? [activeTheme] : themes;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'India Travel Experiences',
    description: 'Curated travel themes for heritage, wellness, Himalayan adventure, wildlife, food, and coastal journeys in India.',
    hasPart: themes.map((theme) => ({
      '@type': 'WebPage',
      name: theme.title,
      url: `https://www.exploring-india.com/experiences/${theme.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title={activeTheme ? `${activeTheme.title} in India | Exploring India` : 'India Travel Experiences: Heritage, Treks, Wildlife & Wellness | Exploring India'}
        description={activeTheme?.description || 'Experience India your way. Explore specialized travel themes covering royal palace stays, Ayurvedic wellness, tiger safaris, and Himalayan expeditions.'}
        path={activeTheme ? `/experiences/${activeTheme.slug}` : '/experiences/'}
        schema={schema}
      />

      <header className="relative overflow-hidden bg-peacock px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Travel by what moves you</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">Travel India by Passion, Not Just Geography</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Choose a theme, discover places that bring it to life, and shape a journey around what you love.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {themes.slice(0, 4).map((theme, index) => (
              <Link key={theme.slug} to={`/experiences/${theme.slug}`} className={`group relative overflow-hidden rounded-2xl ${index === 1 ? 'mt-8' : ''}`}>
                <img src={findImage(theme.imageQuery)} alt={theme.title} className="aspect-[4/3] h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-sm font-semibold">{theme.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <nav aria-label="Experience themes" className="sticky top-[64px] z-30 border-b border-charcoal/10 bg-ivory/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {themes.map((theme) => (
            <Link key={theme.slug} to={`/experiences/${theme.slug}`} aria-current={activeTheme?.slug === theme.slug ? 'page' : undefined} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${activeTheme?.slug === theme.slug ? 'bg-peacock text-white' : 'bg-surface text-charcoal hover:bg-peacock/10'}`}>
              {theme.title}
            </Link>
          ))}
          {activeTheme && <Link to="/experiences" className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-terracotta">All experiences</Link>}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        {!activeTheme && (
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Curated for curious travelers</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">Find your kind of India</h2>
            <p className="mt-4 leading-7 text-charcoal/70">Season and cost notes are planning guidance only. Conditions, access, and prices vary by destination and year.</p>
          </div>
        )}
        <div className="space-y-8">
          {visibleThemes.map((theme, index) => (
            <article key={theme.slug} className={`grid overflow-hidden rounded-3xl bg-surface lg:grid-cols-2 ${index % 2 ? 'lg:[&>a]:order-2' : ''}`}>
              <Link to={`/Search?q=${encodeURIComponent(theme.query)}`} className="group relative min-h-64 overflow-hidden bg-peacock/10">
                {findImage(theme.imageQuery) && <img src={findImage(theme.imageQuery)} alt={theme.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />}
                <span className="absolute bottom-4 left-4 rounded-full bg-ivory/95 px-4 py-2 text-sm font-semibold text-charcoal">{theme.places.join(' · ')}</span>
              </Link>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">{theme.kicker}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal">{theme.title}</h2>
                <p className="mt-4 leading-7 text-charcoal/75">{theme.description}</p>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div><dt className="font-bold text-charcoal">Season guide</dt><dd className="mt-1 text-charcoal/70">{theme.season}</dd></div>
                  <div><dt className="font-bold text-charcoal">Typical budget</dt><dd className="mt-1 text-charcoal/70">{theme.budget}</dd></div>
                </dl>
                <Link to={`/Search?q=${encodeURIComponent(theme.query)}`} className="mt-6 inline-flex font-semibold text-terracotta hover:text-terracotta-dark">Explore related destinations →</Link>
              </div>
            </article>
          ))}
        </div>
        <aside className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-5 text-sm leading-6 text-charcoal/70">
          Budget ranges are rough planning estimates per traveler per day, excluding long-distance travel. Check current local prices before booking.
        </aside>
      </section>
    </main>
  );
}
