import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import TopBar from './client/components/Header/TopBar';
import Navbar from './client/components/Header/Navbar';
import Footer from './client/components/Footer/Footer';

// Page Components
import HomePage from './client/Pages/HomePage';
import AboutPage from './client/Pages/AboutPage';
import ContactPage from './client/Pages/ContactPage';
import BlogPage from './client/Pages/BlogPage';
import FormulationsPage from './client/Pages/FormulationsPage';
import TherapyDetails from './client/Pages/TherapyDetails';
import WhatsAppButton from './client/components/WhatsAppButton';



const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <WhatsAppButton />
      
      <main className="min-h-screen">
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<HomePage />} />

          {/* Define additional routes below as you build the pages */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/formulations" element={<FormulationsPage />} />
          <Route path="/therapy/:id" element={<TherapyDetails />} />
          {/* <Route path="/ozone-therapy" element={<TherapyPage />} /> */}
          
          {/* Fallback for 404 Not Found */}
          <Route path="*" element={<div className="py-20 text-center">Page Under Construction</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;