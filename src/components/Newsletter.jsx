import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Connects directly to your Express + MongoDB server setup down the line
      const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Namaste! You have successfully subscribed to our travel updates.' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to connect to the server. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-20 py-16 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-stone-900 to-zinc-950 px-8 py-12 md:p-16 shadow-2xl border border-white/5">
        
        {/* Background Ambient Decorative Light Rings */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Core Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Heading & Copy Text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-orange-400 font-bold uppercase tracking-widest text-xs block">
              Join The Expedition
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white font-serif tracking-tight leading-tight">
              Get Rare Travel Itineraries <br />& Hidden Gems Across India
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl leading-relaxed">
              Subscribe to our weekly dispatch. No spam, just curated historical deep-dives, pristine beaches, and mountain guides sent straight to your inbox[cite: 59].
            </p>
          </div>

          {/* Right Block: Input Action Form Form utilities */}
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/5 p-2 rounded-2xl sm:rounded-full border border-white/10 backdrop-blur-md focus-within:border-orange-500/50 transition-all">
                
                {/* Email Input Field */}
                <div className="w-full flex-1 px-4 py-2 sm:py-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full bg-transparent text-white placeholder-zinc-500 font-medium text-sm outline-none border-none focus:ring-0"
                  />
                </div>

                {/* Submit Action Button Button Utilities */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold text-sm rounded-xl sm:rounded-full shadow-lg shadow-orange-950/20 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Dynamic Submition Feedback Alerts */}
              {status.message && (
                <p className={`text-xs font-medium pl-4 ${
                  status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}