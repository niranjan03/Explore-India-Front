import React from 'react';
import { recentBlogs } from '../context/Content';

export default function HomeBlogs() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      
      {/* SECTION HEADER BLOCK WITH TOP-RIGHT VIEW MORE UTILITY */}
      <div className="mb-10 flex flex-col justify-between border-b border-charcoal/10 pb-4 sm:flex-row sm:items-end">
        <div>
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-terracotta">
            Traveler Chronicles
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-charcoal md:text-4xl">
            Latest Stories & Guides
          </h2>
        </div>
        
        {/* Above-Right View More Action Anchor */}
        <a 
          href="/journal"
          className="mt-4 flex items-center gap-2 self-start text-sm font-semibold text-terracotta transition-colors duration-200 hover:text-terracotta-dark sm:mt-0 sm:self-auto"
        >
          <span>View All Articles</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* LATEST 3 BLOGS GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentBlogs.map((blog) => (
          <article 
            key={blog.id} 
            className="flex flex-col overflow-hidden rounded-2xl border border-charcoal/5 bg-surface shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            
            {/* Blog Cover Image Frame */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              {/* Category Badge Asset Overlay */}
              <span className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Content & Metadata Layout Block */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                
                {/* Author Info Row */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={blog.author.avatar} 
                    alt={blog.author.name} 
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-marigold/40"
                  />
                  <div>
                    <p className="text-xs font-semibold text-charcoal">
                      {blog.author.name}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-charcoal/50">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="mb-2 line-clamp-2 font-serif text-lg font-bold leading-snug tracking-wide text-charcoal transition-colors hover:text-terracotta">
                  <a href={`/blog/${blog.id}`}>
                    {blog.title}
                  </a>
                </h3>

                {/* Clamped 2-Line Short Description */}
                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-charcoal/70 md:text-sm">
                  {blog.description}
                </p>

              </div>

              {/* Direct Card Action Anchor Footer */}
              <div className="flex items-center justify-between border-t border-charcoal/5 pt-2">
                <a 
                  href={`/blog/${blog.id}`} 
                  className="text-xs font-bold uppercase tracking-wide text-charcoal transition-colors hover:text-terracotta"
                >
                  Read Full Story
                </a>
              </div>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
}