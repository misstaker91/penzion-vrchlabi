import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Konigsmarkovi@penzionvrchlabi.cz</p>
          <p>+420 603 435 819</p>
          <p>+420 737 919 965</p>
          <p>Hořejší Vrchlabí 87, 54302 Vrchlabí</p>
        </div>
        <div className="footer-section">
          <h3>Sledujte nás</h3>
          <a 
            href="https://www.facebook.com/penzion.u.konigsmarku/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Facebook
          </a>
          <a 
            href="https://www.instagram.com/penzion.u.konigsmarku/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;