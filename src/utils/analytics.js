function startAnalytics() {
  const API_URL = 'https://explore-india-server.onrender.com/api/analytics/track';
  let startedAt = Date.now();

  const sendAnalytics = () => {
    const durationMinutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000));

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
        durationMinutes,
        domain: 'www.exploring-india.com'
      })
    }).catch((error) => console.log('Analytics failed:', error));
  };

  window.addEventListener('beforeunload', sendAnalytics);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendAnalytics();
  });
}