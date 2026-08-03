import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Control Room', path: '/admin/dashboard', icon: '📊' },
    { label: 'Manage Places', path: '/admin/places', icon: '📍' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Dynamic Navigation Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-30">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <span className="text-2xl">🏰</span>
          <div>
            <h1 className="font-serif font-bold tracking-wide text-amber-400">Explore India</h1>
            <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-widest">Admin Portal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-red-950/40 hover:text-red-400 font-medium rounded-xl transition-all duration-200"
          >
            <span>🚪</span> Exit Session
          </button>
        </div>
      </aside>

      {/* Main Display View Port */}
      <main className="flex-1 pl-64 min-h-screen flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
              AI
            </div>
            <span className="text-sm font-semibold text-slate-700">System Admin</span>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}