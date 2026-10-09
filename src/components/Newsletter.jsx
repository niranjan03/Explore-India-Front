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
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-peacock px-8 py-12 shadow-xl md:p-16">
        
        {/* Background Ambient Decorative Light Rings */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl" />

        {/* Core Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Heading & Copy Text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-marigold">
              A note from India
            </span>
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Monthly itineraries &amp; off-beat travel curations
            </h2>
            <p className="max-w-xl text-sm font-light leading-relaxed text-white/75 md:text-base">
              Get thoughtful route ideas, destination stories, and practical inspiration for your next journey.
            </p>
          </div>

          {/* Right Block: Input Action Form Form utilities */}
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-md transition-all focus-within:border-marigold sm:flex-row sm:rounded-full">
                
                {/* Email Input Field */}
                <div className="w-full flex-1 px-4 py-2 sm:py-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/55 focus:ring-0"
                  />
                </div>

                {/* Submit Action Button Button Utilities */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-terracotta px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-terracotta-dark disabled:opacity-50 sm:w-auto sm:rounded-full"
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
                  status.type === 'success' ? 'text-green-200' : 'text-red-200'
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