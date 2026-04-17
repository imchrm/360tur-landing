import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HouseholdWaste from './pages/HouseholdWaste';
import ConstructionWaste from './pages/ConstructionWaste';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bytovoj" element={<HouseholdWaste />} />
              <Route path="/stroitelnyj" element={<ConstructionWaste />} />
              <Route path="/o-kompanii" element={<About />} />
              <Route path="/kontakty" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
