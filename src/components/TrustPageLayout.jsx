import React, { useEffect, useState } from 'react';

export default function TrustPageLayout({ eyebrow, title, description, lastUpdated, sections, children }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-20% 0px -65% 0px' });

    sectionElements.forEach((element) => observer.observe(element));
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(scrollableHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100)) : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [sections]);

  return (
    <main className="min-h-screen bg-ivory">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-charcoal/10" aria-hidden="true">
        <div className="h-full bg-terracotta transition-[width] duration-150" style={{ width: `${readingProgress}%` }} />
      </div>
      <header className="bg-peacock px-5 py-12 text-center text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-marigold">{eyebrow}</p>}
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-white/80">{description}</p>
          {lastUpdated && (
            <p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[260px_minmax(0,750px)] lg:justify-between">
        <aside className="h-fit lg:sticky lg:top-24" aria-label="On this page">
          <nav className="rounded-2xl border border-charcoal/10 bg-surface p-4">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-charcoal/55">On this page</p>
            <ul className="flex gap-2 overflow-x-auto lg:block lg:space-y-1">
              {sections.map((section, index) => (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${activeSection === section.id ? 'bg-peacock text-white' : 'text-charcoal/75 hover:bg-peacock/10 hover:text-charcoal'}`}
                  >
                    {section.number ? `${section.number}. ` : ''}{section.title}
                    {!section.number && sections.length > 4 && <span className="sr-only">, section {index + 1}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0">
          <div className="space-y-6 text-[15px] leading-7 text-charcoal/80 md:text-base">
            {children}
          </div>
          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 rounded-2xl border border-charcoal/5 bg-surface p-5 md:p-7">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">{section.number ? `${section.number}. ` : ''}{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-charcoal/75 md:text-base">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
