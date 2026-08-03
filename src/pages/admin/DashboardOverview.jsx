import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

export default function DashboardOverview() {
  const [metrics, setMetrics] = useState({ totalStates: 0, totalPlaces: 0, totalReviews: 0 });
  const [pendingReviews, setPendingReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardTelemetry = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const headers = { 'Authorization': token };

        // Concurrent fetching for real-time overview metrics and content queue
        const [metricsRes, queueRes] = await Promise.all([
          fetch('/api/admin/metrics', { headers }),
          fetch('/api/admin/comments?status=pending', { headers })
        ]);

        if (metricsRes.ok && queueRes.ok) {
          const metricsData = await metricsRes.json();
          const queueData = await queueRes.json();
          setMetrics(metricsData);
          setPendingReviews(queueData);
        }
      } catch (err) {
        console.error('Error compiling monitoring telemetry:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardTelemetry();
  }, []);

  const handleReviewAction = async (commentId, action) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/comments/${commentId}`, {
        method: action === 'approve' ? 'PATCH' : 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: action === 'approve' ? JSON.stringify({ status: 'approved' }) : undefined
      });

      if (response.ok) {
        setPendingReviews(prev => prev.filter(item => item._id !== commentId));
        if (action === 'approve') setMetrics(prev => ({ ...prev, totalReviews: prev.totalReviews + 1 }));
      }
    } catch (err) {
      console.error(`Could not execute review moderation pipeline: ${action}`, err);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-slate-800">Control Room Monitoring</h2>
        <p className="text-slate-500 text-sm mt-1">Real-time health analytics and content approval queues.</p>
      </div>

      {/* Numerical Analytical Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Active Monitored States', value: metrics.totalStates, icon: '🗺️', color: 'border-l-emerald-500' },
          { label: 'Total Places Catalogued', value: metrics.totalPlaces, icon: '🏛️', color: 'border-l-orange-500' },
          { label: 'Verified User Reviews', value: metrics.totalReviews, icon: '⭐', color: 'border-l-amber-500' },
        ].map((card, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 ${card.color} flex items-center justify-between`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{card.label}</p>
              <p className="text-3xl font-bold text-slate-800 mt-2">{card.value}</p>
            </div>
            <span className="text-3xl p-3 bg-slate-50 rounded-xl">{card.icon}</span>
          </div>
        ))}
      </div>

      {/* Moderation Pipeline Queue Grid */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <span>🛡️</span> Moderation Queue 
            <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">{pendingReviews.length} Pending</span>
          </h3>
        </div>

        {pendingReviews.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm font-medium">
            ✨ Excellent job! The moderation pipeline queue is clean.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {pendingReviews.map((review) => (
              <div key={review._id} className="p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm text-slate-800">{review.userName || 'Anonymous Traveler'}</span>
                    <span className="text-xs text-amber-500 font-bold">★ {review.rating}/5</span>
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{review.placeName}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">"{review.comment}"</p>
                </div>
                <div className="flex items-center gap-2 self-end lg:self-center">
                  <button
                    onClick={() => handleReviewAction(review._id, 'reject')}
                    className="px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    Reject & Wipe
                  </button>
                  <button
                    onClick={() => handleReviewAction(review._id, 'approve')}
                    className="px-4 py-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/10 transition-all"
                  >
                    Approve Content
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}