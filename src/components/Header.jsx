import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('white');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHeaderColor(isMenuOpen ? 'white' : 'black');
  };

  // New function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setHeaderColor('white');
  };

  return (
    <>
      <header className={`${headerColor === 'black' ? 'black-header' : ''}`}>
        <div className="topbar-content">
          <Link to="/" className="logo-link">
            <div className="logo">Penzion u Königsmarků</div>
          </Link>
          <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
            <div
              className="hamburger-menu"
              onClick={toggleMenu}
              style={{
                color: isMenuOpen ? 'white' : 'black',
              }}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/ubytovani" onClick={handleLinkClick}>Ubytování</Link>
            </li>
            <li>
              <Link to="/svatby" onClick={handleLinkClick}>Svatby</Link>
            </li>
            <li>
              <Link to="/obcerstveni" onClick={handleLinkClick}>Občerstvení Na mlatu</Link>
            </li>
            <li>
              <Link to="/fotogalerie" onClick={handleLinkClick}>Fotogalerie</Link>
            </li>
            <li>
              <Link to="/cenik" onClick={handleLinkClick}>Ceník</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;