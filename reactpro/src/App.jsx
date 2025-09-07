import Home from './pages/Home';
import Our_newfs from './pages/Our_newfs';
import Replacements from './pages/Replacements';
import Photos from './pages/Photos';
import About_us from './pages/About_us';
import FAQ from './pages/FAQ';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

import './App.css'

function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our_newfs" element={<Our_newfs />} />
                <Route path="/replacements" element={<Replacements />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/about_us" element={<About_us />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </Router>   
    </div>
  );
}

export default App;