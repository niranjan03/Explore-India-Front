
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './layouts/footer/Footer';
import AdminLogin from './components/admin/AdminLogin';
import DashboardOverview from './pages/admin/DashboardOverview';
import ManagePlaces from './pages/admin/ManagePlaces';

// Simple guard checking for the presence of your admin access token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      {/* Public Routes Go Here */}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />


      {/* Protected Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardOverview />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/places" 
          element={
            <ProtectedRoute>
              <ManagePlaces />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
