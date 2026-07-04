
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './layouts/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
