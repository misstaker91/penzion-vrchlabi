import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Náš rodinný penzion</h1>
      <p className="hero-subtitle">
        se nachází v Krkonoších, poblíž lyžařského areálu Herlíkovice-Bubákov a turistických tras.
      </p>
      
      <div className="rectangles-container">
        <Link to="/ubytovani" className="rectangle">
          <span className="rectangle-text">Ubytování</span>
        </Link>
        <Link to="/svatby" className="rectangle">
          <span className="rectangle-text">Svatby</span>
        </Link>
        <Link to="/obcerstveni" className="rectangle">
          <span className="rectangle-text">Občerstvení Na mlatu</span>
        </Link>
        <Link to="/fotogalerie" className="rectangle">
          <span className="rectangle-text">Fotogalerie</span>
        </Link>
        <Link to="/cenik" className="rectangle">
          <span className="rectangle-text">Ceník</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;