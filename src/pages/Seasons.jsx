import React, { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const seasonalGuides = {
  winter: {
    label: 'Winter · October–March',
    color: 'text-peacock',
    panel: 'bg-peacock',
    summary: 'Cooler months suit many northern city and heritage routes. The south and coastal regions also offer varied winter journeys.',
    places: ['Rajasthan', 'Agra', 'Kerala', 'Goa'],
  },
  summer: {
    label: 'Summer · April–June',
    color: 'text-green-800',
    panel: 'bg-green-900',
    summary: 'As plains heat up, hill stations and high Himalayan regions can offer cooler alternatives. Check pass access and altitude guidance.',
    places: ['Ladakh', 'Himachal Pradesh', 'Uttarakhand', 'Kashmir'],
  },
  monsoon: {
    label: 'Monsoon · July–September',
    color: 'text-emerald-800',
    panel: 'bg-emerald-900',
    summary: 'Rain transforms the Western Ghats and parts of the south, but can affect roads, trails, and outdoor plans. Build flexibility into your route.',
    places: ['Kerala', 'Meghalaya', 'Karnataka', 'Uttarakhand'],
  },
};

const festivals = [
  { name: 'Holi', month: 'March', note: 'Dates follow the lunar calendar; confirm the year’s schedule before booking.' },
  { name: 'Durga Puja', month: 'October', note: 'Major celebrations take place across West Bengal; dates vary each year.' },
  { name: 'Diwali', month: 'November', note: 'Celebrated widely; travel demand and dates vary by year and region.' },
  { name: 'Pushkar Camel Fair', month: 'November', note: 'The annual fair is usually held around Kartik Purnima; confirm dates for your travel year.' },
  { name: 'Hornbill Festival', month: 'December', note: 'Held in Nagaland; check the official schedule and access information.' },
];

const faqs = [
  {
    question: 'Is it too hot to visit India in May?',
    answer: 'It can be very hot in many plains and cities. Consider hill regions or higher-altitude destinations, check local forecasts, and plan outdoor activities for cooler hours.',
  },
  {
    question: 'Can you visit Goa during the monsoon?',
    answer: 'Yes, but expect heavy rain and rougher sea conditions at times. Some beach activities and seasonal businesses may be limited, so check local conditions and opening dates.',
  },
  {
    question: 'When is the best time to visit India?',
    answer: 'There is no single best month for every region. October to March is a popular window for many routes, while summer and monsoon can suit specific mountain, coastal, and nature trips.',
  },
];

function getSeason(month) {
  const monthIndex = months.indexOf(month);
  if (monthIndex >= 3 && monthIndex <= 5) return 'summer';
  if (monthIndex >= 6 && monthIndex <= 8) return 'monsoon';
  return 'winter';
}

function slugify(month) {
  return month.toLowerCase();
}

export default function Seasons() {
  const { month: monthSlug } = useParams();
  const navigate = useNavigate();
  const routeMonth = months.find((month) => slugify(month) === (monthSlug || '').toLowerCase());
  const month = routeMonth || months[new Date().getMonth()];
  const seasonKey = getSeason(month);
  const season = seasonalGuides[seasonKey];
  const monthFestivals = useMemo(() => festivals.filter((festival) => festival.month === month), [month]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const selectMonth = (selectedMonth) => navigate(`/seasons/${slugify(selectedMonth)}`);

  return (
    <main className="min-h-screen bg-ivory">
      <PageMeta
        title="Best Time to Visit India: Month-by-Month Travel & Weather Guide | Exploring India"
        description="Find the best season to explore India. Comprehensive monthly weather guide, monsoon highlights, festival dates, and seasonal destination picks."
        path={routeMonth ? `/seasons/${slugify(month)}` : '/seasons/'}
        schema={schema}
      />
      <header className="bg-peacock px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">Plan with the seasons</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold md:text-5xl">Best Time to Visit India</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Weather and travel conditions vary widely by region. Choose a month to see a seasonal starting point for your trip.</p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl bg-surface p-5 md:p-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Month-by-month guide</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-charcoal">Where to go in {month}</h2>
            </div>
            <p className="text-sm text-charcoal/60">Select any month</p>
          </div>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Choose a travel month">
            {months.map((option) => (
              <button key={option} type="button" onClick={() => selectMonth(option)} aria-pressed={month === option} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${month === option ? 'bg-peacock text-white' : 'bg-white text-charcoal hover:bg-peacock/10'}`}>
                {option}
              </button>
            ))}
          </div>
          <div className={`mt-6 rounded-2xl p-6 text-white ${season.panel}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">{season.label}</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold">A seasonal starting point for {month}</h3>
            <p className="mt-3 max-w-3xl leading-7 text-white/80">{season.summary}</p>
          </div>
        </div>

        <section className="mt-12" aria-labelledby="month-destinations">
          <div className="mb-5">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${season.color}`}>Curated picks</p>
            <h2 id="month-destinations" className="mt-1 font-serif text-3xl font-semibold text-charcoal">Where to go this month</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {season.places.map((place) => (
              <Link key={place} to={`/Search?q=${encodeURIComponent(place)}`} className="rounded-2xl border border-charcoal/10 bg-white p-5 transition hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">{season.label.split(' · ')[0]}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-charcoal">{place}</h3>
                <span className="mt-4 inline-flex text-sm font-semibold text-peacock">Explore places →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Annual highlights</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal">Festival &amp; Cultural Calendar</h2>
            <p className="mt-3 leading-7 text-charcoal/70">Festival dates can shift each year. Check local calendars and book transport and stays early for popular events.</p>
          </div>
          <div className="space-y-3">
            {monthFestivals.length ? monthFestivals.map((festival) => (
              <article key={festival.name} className="rounded-xl border border-charcoal/10 bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{festival.name}</h3>
                  <span className="rounded-full bg-marigold/20 px-3 py-1 text-xs font-bold text-charcoal">{festival.month}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">{festival.note}</p>
              </article>
            )) : <p className="rounded-xl bg-surface p-5 text-charcoal/70">No featured festival is listed for {month}. Check regional event calendars as dates and celebrations vary by location.</p>}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-semibold text-charcoal">India weather &amp; seasonal travel FAQs</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-charcoal/10 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-charcoal">{faq.question}</summary>
                <p className="mt-3 leading-7 text-charcoal/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
