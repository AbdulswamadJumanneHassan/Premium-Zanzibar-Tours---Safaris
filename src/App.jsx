import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import ScrollUpButton from './components/layout/ScrollUpButton.jsx';
import WhatsAppButton from './components/layout/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollUpButton />
      <WhatsAppButton />
      <div className="min-h-screen bg-white text-charcoal">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
