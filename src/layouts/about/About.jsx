import React from 'react';
import { Link } from 'react-router-dom';
import AboutImages from '../../assests/Images/About.png';

const aboutValues = [
  {
    title: 'Our Mission',
    text: 'To make travel across India authentic, accessible, and unforgettable by bridging iconic bucket-list landmarks with hidden gems.',
  },
  {
    title: 'What We Offer',
    text: 'In-depth destination guides, practical itineraries, rich visual stories, and community-driven travel tips.',
  },
  {
    title: 'Why Us',
    text: 'Honest, actionable travel details designed for travelers, by travelers.',
  },
];

const About = () => (
  <main className="bg-ivory">
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={AboutImages}
          alt="A glimpse of India's landscapes and heritage"
          className="h-72 w-full object-cover md:h-[28rem]"
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">About Exploring India</p>
        <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">The Journey Begins Here</h1>
        <p className="mt-6 text-lg leading-8 text-charcoal/75">
          Welcome to <strong>Exploring India</strong>, your digital companion for discovering the subcontinent beyond the ordinary. Whether you are trekking Himalayan trails, admiring royal palaces, or unwinding on tropical beaches, we are here to help you <strong>explore India</strong> with ease. Let us be your guide as you set out to <strong>explore India</strong> and uncover its most breathtaking wonders.
        </p>
        <Link
          to="/#regions"
          className="mt-8 inline-flex rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition hover:bg-terracotta-dark"
        >
          Start Exploring Today
        </Link>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-16 md:grid-cols-3 md:px-8 md:pb-24">
      {aboutValues.map((value) => (
        <article key={value.title} className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">{value.title}</h2>
          <p className="mt-4 leading-7 text-charcoal/70">{value.text}</p>
        </article>
      ))}
    </section>
  </main>
);

export default About;
