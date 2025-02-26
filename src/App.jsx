import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../src/styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Ubytovani from './pages/Ubytovani';
import Svatby from './pages/Svatby';
import Obcerstveni from './pages/Obcerstveni';
import Fotogalerie from './pages/Fotogalerie';
import Cenik from './pages/Cenik';


function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
       
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/ubytovani" element={<Ubytovani />} />
            <Route path="/svatby" element={<Svatby />} />
            <Route path="/obcerstveni" element={<Obcerstveni />} />
            <Route path="/fotogalerie" element={<Fotogalerie />} />
            <Route path="/cenik" element={<Cenik />} />
          </Routes>
          <Footer />
        
      </Suspense>
    </div>
  );
}

export default App;