import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { recentBlogs } from '../context/Content';
import jsonData from '../data.json';

const categories = [
  { label: 'All stories', value: 'all' },
  { label: 'First-Timer Advice', value: 'first-timer-advice' },
  { label: 'Local Food & Chai Guides', value: 'local-food' },
  { label: 'Train Journeys', value: 'train-journeys' },
  { label: 'Cultural Etiquette', value: 'cultural-etiquette' },
  { label: 'Photo Essays', value: 'photo-essays' },
  { label: 'Solo & Safety Tips', value: 'solo-safety' },
];

const editorialArticles = [
  {
    id: 'first-trip-india',
    slug: 'first-trip-india',
    title: 'A Thoughtful First Trip to India: Start with One Region',
    description: 'A practical way to plan your first visit: choose a manageable route, leave room for travel delays, and prepare for regional differences.',
    category: 'first-timer-advice',
    imageQuery: 'India Gate',
    date: '2026-10-10',
    readTime: '6 min read',
    body: [
      'India is a subcontinent of distinct climates, languages, cuisines, and travel rhythms. For a first visit, resist the urge to cover every corner at once. Choose one region and give yourself enough time to experience it without turning every day into a transfer.',
      'Before booking, check seasonal weather, public holidays, attraction opening days, and how long journeys take in practice. Keep a flexible arrival day, confirm your accommodation location, and save offline copies of essential reservations.',
      'A balanced itinerary combines a few headline sights with unstructured time for neighborhoods, food, and rest. Ask local hosts about current transport and etiquette, and adjust your plans if weather or conditions change.',
    ],
    takeaways: ['Choose one region for a short trip', 'Allow buffer time between stops', 'Check local conditions close to departure'],
  },
  {
    id: 'eating-well-india',
    slug: 'eating-well-india',
    title: 'A Curious Traveler’s Guide to Eating Well in India',
    description: 'Explore regional food with confidence: ask clear questions about ingredients, spice, allergies, and drinking water.',
    category: 'local-food',
    imageQuery: 'Delhi',
    date: '2026-10-10',
    readTime: '5 min read',
    body: [
      'Indian food changes dramatically from one region to another. Rather than looking for a single national menu, ask what is seasonal and local where you are. A market breakfast, a simple thali, or a family-run café can offer a more grounded introduction than a long list of must-try dishes.',
      'If you have allergies or dietary requirements, explain them clearly and confirm how a dish is prepared. Spice levels can be adjusted in many places, but ingredients and kitchen practices vary, so ask direct questions.',
      'Choose busy stalls with fresh turnover if you are sampling street food, and use sealed or reliably treated drinking water. Give yourself time to adapt, especially during the first days of a long journey.',
    ],
    takeaways: ['Ask about ingredients and preparation', 'Start gently if you are unused to local spice', 'Use safe drinking water'],
  },
  {
    id: 'indian-rail-planning',
    slug: 'indian-rail-planning',
    title: 'Planning Train Journeys Across India',
    description: 'A clear checklist for checking routes, booking ahead, choosing realistic connections, and preparing for station days.',
    category: 'train-journeys',
    imageQuery: 'Agra Fort',
    date: '2026-10-10',
    readTime: '7 min read',
    body: [
      'Train travel can make long-distance journeys part of the experience, but popular routes and dates can sell out. Check the official booking process and current passenger rules well before departure, especially if you are traveling during holidays.',
      'Compare station locations with your accommodation and build in time for traffic, security, and platform changes. For a connection between separate trains, leave a generous buffer; delays can happen and timetables are not guarantees.',
      'Keep your ticket details accessible offline, verify the train number and coach information on the day, and follow station announcements. If a route is unfamiliar, ask accommodation staff or an official railway help desk for current guidance.',
    ],
    takeaways: ['Book popular journeys early', 'Use generous connection buffers', 'Verify train and platform information on the day'],
  },
  {
    id: 'temple-visit-etiquette',
    slug: 'temple-visit-etiquette',
    title: 'A Respectful Visit to India’s Sacred Places',
    description: 'Simple etiquette to help travelers approach temples and other sacred sites with care and respect.',
    category: 'cultural-etiquette',
    imageQuery: 'Tamil Nadu',
    date: '2026-10-10',
    readTime: '5 min read',
    body: [
      'Places of worship are living spaces, not simply visitor attractions. Before entering, look for local instructions about footwear, clothing, photography, and areas that are restricted to worshippers.',
      'Move quietly, avoid blocking ceremonies, and ask before photographing people. If an offering or donation is requested, take time to understand whether it is optional and how it is handled.',
      'Customs differ by faith, region, and individual site. When uncertain, follow posted guidance or ask a staff member respectfully rather than assuming one rule applies everywhere.',
    ],
    takeaways: ['Follow posted site guidance', 'Ask before taking photographs', 'Dress and behave respectfully'],
  },
  {
    id: 'radhanagar-beach-photo-essay',
    slug: 'radhanagar-beach-photo-essay',
    title: 'Chasing Sunsets at Radhanagar Beach: A Complete Guide',
    description: 'Discover the Andaman shoreline, plan around local conditions, and help protect a beautiful island environment.',
    category: 'photo-essays',
    imageQuery: 'Andaman',
    date: '2026-07-05',
    readTime: '5 min read',
    body: [
      'Radhanagar Beach is known for its broad shoreline and evening light. Give yourself time to enjoy the setting without rushing between viewpoints, and check local swimming and safety advice before entering the water.',
      'Island trips need extra planning: confirm ferry schedules, seasonal access, and any local conservation or photography rules before you travel. Conditions can affect connections, so leave a buffer if you have onward transport.',
      'Take litter with you, respect marked areas, and avoid disturbing wildlife. A quieter visit helps preserve the coastline for the people and ecosystems that depend on it.',
    ],
    takeaways: ['Check sea and ferry conditions', 'Follow local photography and conservation rules', 'Leave the beach as you found it'],
  },
  {
    id: 'solo-travel-safety',
    slug: 'solo-travel-safety',
    title: 'Practical Safety Habits for Solo Travel in India',
    description: 'Prepare thoughtfully, share your plans with someone you trust, and use local advice to make confident travel decisions.',
    category: 'solo-safety',
    imageQuery: 'Kerala',
    date: '2026-10-10',
    readTime: '6 min read',
    body: [
      'Safety is personal and context-specific. Research your route and accommodation, check current travel advice, and ask trusted local contacts about transport options and areas to avoid at particular times.',
      'Share your itinerary and check-in plan with someone you trust. Keep copies of important documents separate from originals, have a charged phone and backup power, and arrange your first transfer before arriving late at night.',
      'Trust your judgment and change plans if a situation feels uncomfortable. Use official or reputable transport where possible, and learn how to reach local emergency services at each stop.',
    ],
    takeaways: ['Share your plans and check-in times', 'Arrange arrival transport in advance', 'Use current local and official guidance'],
  },
];

const articles = [
  ...editorialArticles,
  ...recentBlogs.map((blog) => ({
    id: blog.id,
    slug: blog.id,
    title: blog.title,
    description: blog.description,
    category: blog.category === 'Coastal / Beaches' ? 'photo-essays' : blog.category === 'Spiritual / Temples' ? 'cultural-etiquette' : 'first-timer-advice',
    image: blog.image,
    date: new Date(blog.date).toISOString().slice(0, 10),
    readTime: blog.readTime,
    author: blog.author,
    body: [blog.description, 'Before you set out, check current opening hours, seasonal conditions, and local guidance for the places on your route. Allow time to travel between stops and be considerate of residents and cultural sites.'],
    takeaways: ['Check current local conditions', 'Plan travel time between stops', 'Respect local customs and site guidance'],
  })),
];

function articleImage(article) {
  if (article.image) return article.image;
  const destination = (jsonData.destinations || []).find((item) => `${item.Name || ''} ${item.State || ''}`.toLowerCase().includes(article.imageQuery.toLowerCase()));
  return destination?.images?.[0]?.original || destination?.images?.[0]?.url;
}

function readableDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'BlogPosting'],
    headline: article.title,
    description: article.description,
    datePublished: new Date(`${article.date}T00:00:00`).toISOString(),
    dateModified: new Date(`${article.date}T00:00:00`).toISOString(),
    image: articleImage(article),
    author: article.author
      ? { '@type': 'Person', name: article.author.name }
      : { '@type': 'Organization', name: 'Exploring India Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Exploring India', url: 'https://www.exploring-india.com/' },
    mainEntityOfPage: `https://www.exploring-india.com/journal/${article.slug}`,
  };
}

export function JournalArticle() {
  const { articleSlug } = useParams();
  const article = articles.find((item) => item.slug === articleSlug || item.id === articleSlug);
  if (!article) {
    return <main className="min-h-screen bg-ivory p-10 text-center"><h1 className="font-serif text-3xl font-bold text-charcoal">Story not found</h1><Link to="/journal" className="mt-4 inline-block font-semibold text-terracotta">Browse the journal</Link></main>;
  }

  return (
    <main className="min-h-screen bg-ivory pb-16">
      <PageMeta
        title={`${article.title} | Exploring India Travel Journal`}
        description={article.description}
        path={`/journal/${article.slug}`}
        schema={articleSchema(article)}
      />
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden bg-charcoal">
        {articleImage(article) && <img src={articleImage(article)} alt={article.title} className="h-full w-full object-cover opacity-65" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-5 pb-8 text-white md:px-8 md:pb-12">
          <Link to="/journal" className="text-sm font-semibold text-marigold">← Travel journal</Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-marigold">{categories.find((item) => item.value === article.category)?.label || 'Travel story'}</p>
          <h1 className="mt-2 font-serif text-3xl font-bold md:text-5xl">{article.title}</h1>
        </div>
      </div>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-[minmax(0,1fr)_260px] md:px-8 md:py-14">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-charcoal/80">{article.description}</p>
          {article.body.map((paragraph) => <p key={paragraph} className="mt-6 text-lg leading-[1.8] text-charcoal/80">{paragraph}</p>)}
          <aside className="mt-8 rounded-2xl border-l-4 border-terracotta bg-surface p-6">
            <h2 className="font-serif text-xl font-semibold text-charcoal">Quick takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-charcoal/75">{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
          <p className="mt-8 text-sm leading-6 text-charcoal/60">Travel conditions, opening hours, and local rules can change. Confirm current guidance before your visit.</p>
        </div>
        <aside className="h-fit rounded-2xl bg-surface p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Story details</p>
          <p className="mt-4 font-semibold text-charcoal">{article.author?.name || 'Exploring India Editorial Team'}</p>
          <p className="mt-1 text-sm text-charcoal/60">{article.author ? 'Contributor' : 'Editorial guide'}</p>
          <p className="mt-4 text-sm text-charcoal/60">{readableDate(article.date)} · {article.readTime}</p>
          <Link to="/destinations/" className="mt-6 inline-flex font-semibold text-terracotta hover:text-terracotta-dark">Explore destinations →</Link>
        </aside>
      </article>
    </main>
  );
}

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = useMemo(() => activeCategory === 'all' ? articles : articles.filter((article) => article.category === activeCategory), [activeCategory]);
  const featured = filtered[0] || articles[0];
  const remaining = filtered.slice(1);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Exploring India Travel Journal',
    hasPart: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `https://www.exploring-india.com/journal/${article.slug}`,
      dateModified: new Date(`${article.date}T00:00:00`).toISOString(),
    })),
  };

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title="India Travel Journal: Guides, Local Tips & Firsthand Stories | Exploring India"
        description="Practical travel tips, cultural guides, and real stories from India. Learn how to navigate trains, eat like a local, and travel safely."
        path="/journal/"
        schema={schema}
      />
      <header className="bg-peacock px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Field notes &amp; useful guides</p>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">India Travel Journal</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Practical planning advice, cultural context, and stories to help you travel with curiosity and care.</p>
        </div>
      </header>

      <nav aria-label="Journal categories" className="sticky top-[64px] z-30 border-b border-charcoal/10 bg-ivory/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button key={category.value} type="button" onClick={() => setActiveCategory(category.value)} aria-pressed={activeCategory === category.value} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category.value ? 'bg-peacock text-white' : 'bg-surface text-charcoal hover:bg-peacock/10'}`}>
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {featured && (
          <Link to={`/journal/${featured.slug}`} className="group relative grid min-h-[360px] overflow-hidden rounded-3xl bg-charcoal md:min-h-[460px]">
            {articleImage(featured) && <img src={articleImage(featured)} alt={featured.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.02]" />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative mt-auto max-w-3xl p-6 text-white md:p-10">
              <span className="rounded-full bg-marigold px-3 py-1 text-xs font-bold text-charcoal">Featured story</span>
              <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">{featured.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/80">{featured.description}</p>
              <p className="mt-4 text-sm text-white/70">{featured.author?.name || 'Exploring India Editorial Team'} · {featured.readTime}</p>
            </div>
          </Link>
        )}

        <div className="mb-6 mt-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Read, save, and plan</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">More from the journal</h2>
          </div>
          <span className="text-sm text-charcoal/60">{filtered.length} stories</span>
        </div>
        {remaining.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-2xl border border-charcoal/5 bg-surface transition hover:-translate-y-1 hover:shadow-lg">
                <Link to={`/journal/${article.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-peacock/10">
                    {articleImage(article) && <img src={articleImage(article)} alt={article.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-terracotta">{categories.find((item) => item.value === article.category)?.label}</p>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-charcoal">{article.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-charcoal/70">{article.description}</p>
                    <p className="mt-4 text-xs text-charcoal/55">{article.author?.name || 'Exploring India Editorial Team'} · {article.readTime}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-surface p-6 leading-7 text-charcoal/70">Showing the featured story in this category. Choose “All stories” to browse the full journal.</p>
        )}
      </section>
    </main>
  );
}
