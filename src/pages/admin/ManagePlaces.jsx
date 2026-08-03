import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

export default function ManagePlaces() {
  const [statesList, setStatesList] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);
  
  // Place Form State
  const [formData, setFormData] = useState({
    name: '',
    stateId: '', // Captures the selected State from the dropdown
    category: 'Heritage & Palaces',
    summary: '',
    details: '',
    bestTime: '',
    keyHighlights: '',
    isFallbackDefault: false
  });

  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch the list of states from backend on component mount
  useEffect(() => {
    const fetchStatesForDropdown = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/states');
        if (!response.ok) {
          const data = await response.json();
          setStatesList(data); // Array of state objects containing name and stateCode/id
        } else {
          console.error('Failed to fetch states for dropdown.');
        }
      } catch (err) {
        console.error('Error connecting to backend states API:', err);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStatesForDropdown();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('adminToken'); // JWT token saved during login
      const response = await fetch('http://localhost:5000/api/admin/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          ...formData,
          keyHighlights: formData.keyHighlights.split(',').map((item) => item.trim()).filter(Boolean)
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to add place profile.');
      }

      setStatusMessage({ type: 'success', text: '🏆 Destination added successfully!' });
      
      // Reset Form fields except category
      setFormData({
        name: '',
        stateId: '',
        category: 'Heritage & Palaces',
        summary: '',
        details: '',
        bestTime: '',
        keyHighlights: '',
        isFallbackDefault: false
      });
    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'Error connecting to server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-slate-100">
      <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">Add New Destination / Palace</h2>
      <p className="text-slate-500 text-sm mb-6">Select a state from the dropdown to assign the place location.</p>

      {statusMessage.text && (
        <div className={`mb-6 p-4 text-sm font-semibold rounded-xl border ${
          statusMessage.type === 'success' 
            ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
            : 'bg-red-50 text-red-700 border-red-100'
        }`}>
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleFormSubmission} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Attraction Name Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Destination / Palace Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium"
              placeholder="e.g. Amer Fort"
            />
          </div>

          {/* STATE NAME SELECT DROPDOWN BOX */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select State Name *
            </label>
            <select
              name="stateId"
              required
              value={formData.stateId}
              onChange={handleInputChange}
              disabled={loadingStates}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium cursor-pointer disabled:opacity-50"
            >
              <option value="">
                {loadingStates ? 'Loading states list...' : '-- Select Target State --'}
              </option>
              {statesList.map((state) => (
                <option key={state._id || state.stateCode} value={state.stateCode || state._id}>
                  {state.name} ({state.stateCode})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Select Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium cursor-pointer"
            >
              <option value="Heritage & Palaces">Heritage & Palaces</option>
              <option value="Spiritual/Temples">Spiritual/Temples</option>
              <option value="Nature/Mountains">Nature/Mountains</option>
              <option value="Coastal/Beaches">Coastal/Beaches</option>
              <option value="Wild India">Wild India</option>
            </select>
          </div>

          {/* Optimal Visit Window */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Best Time to Visit *
            </label>
            <input
              type="text"
              name="bestTime"
              required
              value={formData.bestTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium"
              placeholder="e.g. October to March"
            />
          </div>
        </div>

        {/* Summary Preview */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Summary *
          </label>
          <input
            type="text"
            name="summary"
            required
            value={formData.summary}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium"
            placeholder="Short preview hook for card displays."
          />
        </div>

        {/* Deep Narrative Details */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Details *
          </label>
          <textarea
            name="details"
            rows="4"
            required
            value={formData.details}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium"
            placeholder="History, architectural significance, and mythologies..."
          ></textarea>
        </div>

        {/* Key Highlights */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Key Highlights (Comma Separated)
          </label>
          <input
            type="text"
            name="keyHighlights"
            value={formData.keyHighlights}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 font-medium"
            placeholder="Sheesh Mahal, Light Show, Mirror Work"
          />
        </div>

        {/* Resilient Fallback Toggle */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
          <input
            type="checkbox"
            id="isFallbackDefault"
            name="isFallbackDefault"
            checked={formData.isFallbackDefault}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-orange-600 rounded focus:ring-orange-500 cursor-pointer"
          />
          <label htmlFor="isFallbackDefault" className="text-xs font-medium text-slate-700 cursor-pointer">
            <span className="font-bold text-slate-900 block uppercase mb-0.5">Set as Category Fallback Default</span>
            Mark this destination as the state's default fallback if a category has no items.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || loadingStates}
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md disabled:opacity-50"
          >
            {isSubmitting ? 'Saving Destination...' : 'Post Place Data'}
          </button>
        </div>
      </form>
    </div>
    </AdminLayout>
  );
}