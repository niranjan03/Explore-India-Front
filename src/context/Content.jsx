export const navLinks = [
   { name: "Home", link: "/" },
   { name: "About India", link: "/About" },
   { name: "Palaces Visit", link: "/palaces-visit " },
   { name: "Plan Trip", link: "/plan-trip" },
   { name: "Blogs", link: "/blogs" },
   { name: "Contact Us", link: "/contact" },
];

export const palaces = [
   {
      name: "Heritage & Palaces",
      link: "/heritage-palaces",
   },
   {
      name: "Spiritual/Temples",
      link: "/spiritual-temples",
   },
   {
      name: "Nature/Mountains",
      link: "/nature-mountains",
   },
   {
      name: "Coastal/Beaches",
      link: "/coastal-beaches",
   },
   {
      name: "WildLife/National Parks",
      link: "/wildlife-national-parks",
   }
];


export const travelCategories = [
  {
    id: "cat-heritage",
    title: "Heritage & Palaces",
    description: "Step back in time to explore royal forts, grand mahals, and legendary structures.",
    icon: "🏰",
    // Deep Saffron to Amber gradient
   //  bgStyle: "from-orange-600 via-amber-600 to-amber-700",
   //  badgeColor: "bg-orange-500/30 text-orange-200"
    //
    bgStyle: "from-amber-600 via-orange-600 to-red-700", // Option A
    badgeColor: "bg-amber-500/20 text-amber-200"
  },
  {
    id: "cat-spiritual",
    title: "Spiritual / Temples",
    description: "Discover ancient stone carvings, sacred waters, and peaceful places of worship.",
    icon: "🛕",
    // Rich Marigold to Crimson sunset gradient
   //  bgStyle: "from-amber-500 via-orange-600 to-red-700",
   //  badgeColor: "bg-amber-500/30 text-amber-200"
   bgStyle: "from-yellow-700 via-amber-800 to-stone-900", // Option B
    badgeColor: "bg-amber-600/20 text-amber-300"
  },
  {
    id: "cat-nature",
    title: "Nature / Mountains",
    description: "Journey across snow-capped peaks, winding trails, and green valleys.",
    icon: "🏔️",
    // Deep Emerald to Forest Teal gradient
   //  bgStyle: "from-emerald-700 via-teal-800 to-cyan-900",
   //  badgeColor: "bg-emerald-500/30 text-emerald-200"
   //
   bgStyle: "from-sky-700 via-blue-800 to-slate-950", // Option B
    badgeColor: "bg-sky-400/20 text-sky-200"
  },
  {
    id: "cat-coastal",
    title: "Coastal / Beaches",
    description: "Unwind along pristine shorelines, golden tropical sands, and serene cliffs.",
    icon: "🏖️",
    // Ocean Azure to Deep Blue gradient
   //  bgStyle: "from-sky-500 via-blue-600 to-indigo-900",
   //  badgeColor: "bg-sky-500/30 text-sky-200"
    //
    bgStyle: "from-cyan-500 via-blue-600 to-indigo-950", // Option A
    badgeColor: "bg-cyan-500/20 text-cyan-200"
  },
  {
  id: "cat-wildlife",
  title: "Wildlife India",
  description: "Venture deep into dense reserves to witness exotic species in their habitats.",
  icon: "🐅",
  // African/Indian Safari Twilight Ochre gradient
//   bgStyle: "from-amber-800 via-stone-900 to-zinc-950",
//   badgeColor: "bg-amber-500/30 text-amber-200"
  // Dark Rainforest Blue-Green gradient
  bgStyle: "from-zinc-900 via-teal-950 to-emerald-950",
  badgeColor: "bg-teal-500/30 text-teal-300"
}  
];


export const recentBlogs = [
  {
    id: "blog-01",
    title: "Chasing Sunsets at Radhanagar Beach: A Complete Guide",
    description: "Discover why this hidden gem in the Andaman islands continues to rank as Asia's finest stretch of sand, featuring top travel slots and photography rules.",
    category: "Coastal / Beaches",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    date: "July 05, 2026",
    readTime: "5 min read",
    author: {
      name: "Arjun Mehta",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "blog-02",
    title: "The Architecture and Myths of Madurai Meenakshi Temple",
    description: "An immersive deep dive into the historical stone carvings, monumental gopurams, and vibrant night aarti ceremonies that bring this 2,500-year-old sanctuary to life.",
    category: "Spiritual / Temples",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    date: "June 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "blog-03",
    title: "Surviving the Winter Passes: A Rohtang Adventure",
    description: "Planning a high-altitude trip to the Pir Panjal range? Here is what you need to know about weather windows, entry permits, and skiing safety layouts.",
    category: "Nature / Mountains",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    date: "June 14, 2026",
    readTime: "6 min read",
    author: {
      name: "Kabir Rai",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80"
    }
  }
];