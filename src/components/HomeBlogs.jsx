import React from 'react';
import { recentBlogs } from '../context/Content';

export default function HomeBlogs() {
  return (
    <section className="w-full max-w-full mx-auto px-20 py-16 bg-amber-50/20">
      
      {/* SECTION HEADER BLOCK WITH TOP-RIGHT VIEW MORE UTILITY */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-zinc-100">
        <div>
          <span className="text-orange-600 font-bold uppercase tracking-wider text-xs block mb-1">
            Traveler Chronicles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 font-serif tracking-tight">
            Latest Stories & Guides
          </h2>
        </div>
        
        {/* Above-Right View More Action Anchor */}
        <a 
          href="/blogs" 
          className="group mt-4 sm:mt-0 flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 self-start sm:self-auto"
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
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-zinc-100"
          >
            
            {/* Blog Cover Image Frame */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-100"
                  />
                  <div>
                    <p className="text-xs font-semibold text-zinc-800">
                      {blog.author.name}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-lg font-bold text-zinc-900 font-serif leading-snug tracking-wide mb-2 hover:text-orange-600 transition-colors line-clamp-2">
                  <a href={`/blog/${blog.id}`}>
                    {blog.title}
                  </a>
                </h3>

                {/* Clamped 2-Line Short Description */}
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                  {blog.description}
                </p>

              </div>

              {/* Direct Card Action Anchor Footer */}
              <div className="pt-2 border-t border-zinc-50 flex items-center justify-between">
                <a 
                  href={`/blog/${blog.id}`} 
                  className="text-xs font-bold text-zinc-800 hover:text-orange-600 tracking-wide uppercase transition-colors"
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