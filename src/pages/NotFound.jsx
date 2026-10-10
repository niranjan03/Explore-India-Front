import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import logo from '../assests/Images/Explore_India.png';

const NotFound = ({
  title = 'This page wandered off the map',
  description = 'The page you’re looking for may have moved, been renamed, or no longer exists. Try a destination search or continue exploring India.',
}) => (
  <main className="flex min-h-[65vh] items-center justify-center bg-ivory px-5 py-16">
    <PageMeta
      title="404 Page Not Found | Exploring India"
      description="This page could not be found. Search India destinations or return to the Exploring India homepage."
      path={null}
      robots="noindex, follow"
    />
    <section className="w-full max-w-2xl rounded-3xl border border-charcoal/5 bg-surface px-6 py-12 text-center shadow-sm md:px-12">
      <img src={logo} alt="Exploring India" className="mx-auto h-28 w-auto object-contain" />
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">404 · Page not found</p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-charcoal md:text-4xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-charcoal/70">{description}</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/destinations/" className="rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition hover:bg-terracotta-dark">
          Explore destinations
        </Link>
        <Link to="/Search" className="rounded-full border border-charcoal/15 bg-white px-6 py-3 font-semibold text-charcoal transition hover:border-terracotta hover:text-terracotta">
          Search places
        </Link>
        <Link to="/" className="rounded-full border border-charcoal/15 px-6 py-3 font-semibold text-charcoal transition hover:border-terracotta hover:text-terracotta">
          Go to homepage
        </Link>
      </div>
      <nav aria-label="Explore more" className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-peacock">
        <Link to="/experiences" className="hover:text-terracotta">Experiences</Link>
        <Link to="/itineraries" className="hover:text-terracotta">Itineraries</Link>
        <Link to="/journal" className="hover:text-terracotta">Travel journal</Link>
      </nav>
    </section>
  </main>
);

export default NotFound;
