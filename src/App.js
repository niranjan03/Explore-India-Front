
import './App.css';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './layouts/footer/Footer';
import AdminLogin from './components/admin/AdminLogin';
import DashboardOverview from './pages/admin/DashboardOverview';
import ManagePlaces from './pages/admin/ManagePlaces';
import Explore, { DestinationCity } from './pages/Explore';
import Experiences from './pages/Experiences';
import Seasons from './pages/Seasons';
import Itineraries from './pages/Itineraries';
import Journal, { JournalArticle } from './pages/Journal';
import PlaceDetails from './pages/PlaceDetails';
import Search from './pages/Search'
import NotFound from './pages/NotFound';
import Credits from './pages/Credits';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import {startAnalytics} from './utils/analytics'



// Simple guard checking for the presence of your admin access token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  // useEffect(() => {
  //   startAnalytics();
  // }, []);

  const {pathname} = useLocation();
  const hiddenPaths = ['/admin/login', '/admin/dashboard', '/admin/places'];
  const shouldHideNavbar = hiddenPaths.includes(pathname);

  return (
    
    <>
    
    {shouldHideNavbar || <Navbar />}
    <Routes>
      {/* Public Routes Go Here */}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/abouts' element={<Navigate to="/about" replace/>} />
      <Route path='/credits' element={<Credits/>} />
      <Route path='/terms' element={<Terms/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route path='/Search' element={<Search />} />
      <Route path='/destinations/' element={<Explore/>}/>
      <Route path='/destinations/:state/:city' element={<DestinationCity/>}/>
      <Route path='/Explore' element={<Navigate to="/destinations/" replace/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
      <Route path='/experiences/:themeName' element={<Experiences/>}/>
      <Route path='/seasons' element={<Seasons/>}/>
      <Route path='/seasons/:month' element={<Seasons/>}/>
      <Route path='/itineraries' element={<Itineraries/>}/>
      <Route path='/itineraries/:routeSlug' element={<Itineraries/>}/>
      <Route path='/journal' element={<Journal/>}/>
      <Route path='/journal/:articleSlug' element={<JournalArticle/>}/>
      <Route path='/blogs' element={<Navigate to="/journal" replace/>}/>
      <Route path='/blog/:articleSlug' element={<JournalArticle/>}/>
      <Route path='/place/:placename' element={<PlaceDetails />} />
      <Route path="*" element={<NotFound />} />


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

export default (App);
