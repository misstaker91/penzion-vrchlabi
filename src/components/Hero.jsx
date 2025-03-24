import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

// Import obrázků
import uvodka from '../assets/Penzion/uvodka.jpg';
import chata_snih from '../assets/Penzion/chata_snih1.jpg';
import mistnost2 from '../assets/Penzion/mistnost2.jpg';
import pokoj from '../assets/Penzion/pokoj.jpg';
import pokoj2 from '../assets/Penzion/pokoj2.jpg';
import spolecenka_mistnost from '../assets/Penzion/spolecenska_mistnost.jpg';
import jidlo from '../assets/namlatu/jidlo.jpg';
import jidlo2 from '../assets/namlatu/jidlo2.jpg';
import namlatu_vnitrek from '../assets/namlatu/namlatu_vnitrek.jpg';
import namlatu_vnitrek1 from '../assets/namlatu/namlatu_vnitrek1.jpg';
import venkovni from '../assets/namlatu/venkovni.jpg';
import stolecek from '../assets/svatby/stolecek.jpg';
import menu from '../assets/svatby/menu.png';
import obrad from '../assets/svatby/obrad.jpg';
import lepsi_stan from '../assets/svatby/lepsi_stan.png';
import noc from '../assets/svatby/noc.jpg';

// Data pro fotogalerii
const galleryData = {
  penzion: [
    { src: uvodka, alt: 'Penzion photo' },
    { src: chata_snih, alt: 'Penzion winter' },
    { src: mistnost2, alt: 'Penzion room' },
    { src: spolecenka_mistnost, alt: 'shared free time room' },
    { src: pokoj, alt: 'Penzion room' },
    { src: pokoj2, alt: 'Penzion room' },
  ],
  obcerstveni: [
    { src: namlatu_vnitrek, alt: 'Indoor seating' },
    { src: namlatu_vnitrek1, alt: 'Indoor seating' },
    { src: venkovni, alt: 'Outdoor seating' },
    { src: jidlo, alt: 'Food' },
    { src: jidlo2, alt: 'Food' },
  ],
  svatby: [
    { src: stolecek, alt: 'Wedding table' },
    { src: menu, alt: 'Wedding menu' },
    { src: obrad, alt: 'Wedding ceremony' },
    { src: lepsi_stan, alt: 'Wedding room' },
    { src: noc, alt: 'Wedding night' },
  ]
};

// Combine all photos into one array for the lightbox
const allPhotos = [
  ...galleryData.penzion,
  ...galleryData.obcerstveni,
  ...galleryData.svatby
];

// Calculate the global index when clicking a photo
const getGlobalIndex = (sectionName, sectionIndex) => {
  let globalIndex = sectionIndex;
  if (sectionName === 'obcerstveni') {
    globalIndex += galleryData.penzion.length;
  } else if (sectionName === 'svatby') {
    globalIndex += galleryData.penzion.length + galleryData.obcerstveni.length;
  }
  return globalIndex;
};

function Hero() {
  const [activeSection, setActiveSection] = useState('ubytovani');
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom < 0) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection === 'cenik' && window.innerWidth <= 768) {
      // Najdeme všechny elementy v ceníku
      const priceElements = document.querySelectorAll('.content-section > div > div');
      
      // Nastavíme nulové mezery
      priceElements.forEach(el => {
        el.style.margin = '0';
        el.style.padding = '0';
      });
      
      // Najdeme všechny nadpisy v ceníku
      const headings = document.querySelectorAll('.content-section h3, .content-section h4');
      
      // Nastavíme minimální mezery pro nadpisy
      headings.forEach(heading => {
        heading.style.marginTop = '0.5rem';
        heading.style.marginBottom = '0.2rem';
        heading.style.fontSize = '1rem';
      });
      
      // Najdeme všechny tabulky v ceníku
      const tables = document.querySelectorAll('.content-section table');
      
      // Nastavíme nulové mezery pro tabulky
      tables.forEach(table => {
        table.style.marginTop = '0';
        table.style.marginBottom = '0.2rem';
      });
    }
  }, [activeSection]);

  // Handle navigation button clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
    
    // If it's a regular section, navigate to its route
    if (section !== 'kontakt') {
      navigate(`/${section}`);
    }
    // For kontakt, we stay on the current page and just change the active section
  };

  // Define contact form content separately
  const contactContent = (
    <div className="content-section">
      <div className="content-wrapper">
        <h1 className="main-title">Napište nám</h1>
        <p className="main-description">
          Máte-li jakékoliv dotazy, neváhejte nás kontaktovat.
        </p>
        <ContactForm />
      </div>
    </div>
  );

  const sections = [
    {
      id: 'ubytovani',
      title: 'Ubytování',
      content: (
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="main-title">Užijte si vaši</h1>
            <p className="main-description">
              dovolenou, školu v přírodě, lyžařský kurz, svatbu nebo firemní akci na horách. Kapacita penzionu je až 40 hostů
            </p>
            
            <h2 className="rooms-title">Pokoje</h2>
            <ul className="rooms-list">
              <li className="room-item">2× Apartmán pro 4 osoby s vlastním sociálním zařízením</li>
              <li className="room-item">1× Pokoj pro 2 osoby se společným sociálním zařízením</li>
              <li className="room-item">1× Pokoj pro 3 osoby se společným sociálním zařízením</li>
              <li className="room-item">3× Pokoj pro 4 osoby se společným sociálním zařízením</li>
              <li className="room-item">1× Pokoj pro 6 osob se společným sociálním zařízením</li>
              <li className="room-item">1× Pokoj pro 8 osob se společným sociálním zařízením</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'svatby',
      title: 'Svatby',
      content: (
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="main-title">Svatební obřad</h1>
            <p className="main-description">
              u sjezdovky s výhledem na Strážné. Hostina
              na mlatu, případně v párty stanu. Večerní posezení pod širým nebem, na mlatu, 
              nebo ve chlévě.
            </p>
            
            <h2 className="rooms-title">Nabízíme</h2>
            <ul className="rooms-list">
              <li className="room-item">Prostory penzionu pro svatební obřad i hostinu</li>
              <li className="room-item">Zapůjčení party stanu a pivních setů pro svatební hostinu</li>
              <li className="room-item">Ubytování v pokojích pro cca 40 hostů</li>
              <li className="room-item">Pípa na točené pivo a limonádu, lednice, zapůjčení nádobí pro hostinu</li>
              <li className="room-item">Gril, rožeň na grilování kýty</li>
              <li className="room-item">Dekorace: světýlka, vázičky, slavobrána</li>
              <li className="room-item">Doporučení osvědčených dodavatelů z okolí (dort, vizážistka, catering, obsluha)</li>
            </ul>

            <h2 className="rooms-title">Ceník dle požadavků Svatebčanů</h2>
            <ul className="rooms-list">
              <li className="room-item">Příprava obřadního prostoru: 2.000 Kč</li>
              <li className="room-item">Pronájem mlat + bar: 13.000 Kč</li>
              <li className="room-item">Pronájem párty stanu / akce: 10.000 Kč</li>
              <li className="room-item">Gril (rožeň): 2.000 Kč</li>
              <li className="room-item">Gril (rožeň + 10 kg kýta): 7.000 Kč</li>
              <li className="room-item">Ubytování osoba / noc: 600 Kč</li>
              <li className="room-item">Ubytování při uzavření penzionu min. sazba za noc: 9.600 Kč</li>
              <li className="room-item">Nad 16 osob každá další osoba / noc: 600 Kč</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'obcerstveni',
      title: 'Občerstvení Na mlatu',
      content: (
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="main-title">Občerstvení Na mlatu</h1>
            <p className="main-description">
              Historická stodola Na Mlatu nabízí jedinečnou atmosféru, kde si můžete vychutnat občerstvení dle aktuální nabídky. V letních měsících je k dispozici příjemné venkovní posezení.
            </p>
            
            <h2 className="rooms-title">Nabízíme</h2>
            <ul className="rooms-list">
              <li className="room-item">Čepované pivo, víno, káva Lavazza</li>
              <li className="room-item">Limonáda, zmrzliny</li>
              <li className="room-item">Polévky dle denní nabídky</li>
              <li className="room-item">Chuťovky dle aktuální nabídky</li>
              <li className="room-item">Škvarková pomazánka, utopenec</li>
              <li className="room-item">Koláče a dezerty</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'fotogalerie',
      title: 'Fotogalerie',
      content: (
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="main-title">Fotogalerie</h1>
            
            <div className="gallery-section">
              <h2 className="gallery-title">Penzion</h2>
              <div className="photo-grid">
                {galleryData.penzion.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="photo-item"
                    onClick={() => setIndex(getGlobalIndex('penzion', idx))}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>

            <div className="gallery-section">
              <h2 className="gallery-title">Občerstvení Na Mlatu</h2>
              <div className="photo-grid">
                {galleryData.obcerstveni.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="photo-item"
                    onClick={() => setIndex(getGlobalIndex('obcerstveni', idx))}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>

            <div className="gallery-section">
              <h2 className="gallery-title">Svatby</h2>
              <div className="photo-grid">
                {galleryData.svatby.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="photo-item"
                    onClick={() => setIndex(getGlobalIndex('svatby', idx))}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            <Lightbox
              slides={allPhotos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'cenik',
      title: 'Ceník',
      content: (
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="main-title">Ceník ubytování</h1>
            
            <div className="price-section">
              <div className="price-table-container">
                <h3 className="price-title">Zima 2024/2025 Svátky</h3>
                <div className="table-responsive">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Dospělý | Kč | den</th>
                        <th>Dítě | Kč | den</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Apartmán se soc. zař.</td>
                        <td>620</td>
                        <td>590</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                        <td>590</td>
                        <td>560</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                        <td>560</td>
                        <td>530</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="price-table-container">
                <h3 className="price-title">Zima 2024/2025</h3>
                <div className="table-responsive">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Dospělý | Kč | den</th>
                        <th>Dítě | Kč | den</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Apartmán se soc. zař.</td>
                        <td>600</td>
                        <td>570</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                        <td>570</td>
                        <td>540</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                        <td>540</td>
                        <td>510</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="price-table-container">
                <h3 className="price-title">Léto 2025</h3>
                <div className="table-responsive">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Dospělý | Kč | den</th>
                        <th>Dítě | Kč | den</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Apartmán se soc. zař.</td>
                        <td>570</td>
                        <td>540</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                        <td>540</td>
                        <td>510</td>
                      </tr>
                      <tr>
                        <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                        <td>510</td>
                        <td>480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="additional-info">
                <p className="info-text">Hostům, kteří se u nás ubytují na dobu do 3 nocí včetně účtujeme jednorázový poplatek 100,- kč za zapůjčení ložního prádla.</p>
                
                <h4 className="storno-title">Storno Podmínky</h4>
                <ul className="storno-list">
                  <li className="storno-item">21 dní před nástupem (včetně): poplatek 50 % zálohy</li>
                  <li className="storno-item">15 dní před nástupem (včetně): poplatek 75 % zálohy</li>
                  <li className="storno-item">7 dní před nástupem (včetně): poplatek 100 % zálohy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="page-wrapper">
      <main className="hero">
        <div className="hero__content">
          <h1 style={{ 
            color: 'var(--primary)', 
            fontFamily: 'var(--font-primary)',
            fontWeight: '400'
          }}>
            Penzion U Königsmarků
          </h1>
          <p className="hero__tagline">V Krkonoších, poblíž lyžařského areálu Herlíkovice-Bubákov a turistických tras.</p>
          
          {window.innerWidth <= 768 ? (
            <nav className="hero__nav" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxWidth: '300px', margin: '0 auto 1.5rem' }}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(section.id)}
                  style={{ width: '100%', padding: '0.6rem 0', margin: 0, textAlign: 'center' }}
                >
                  {section.title}
                </button>
              ))}
              <button 
                className="nav-btn"
                onClick={() => handleNavClick('kontakt')}
                style={{ 
                  background: 'var(--accent) !important', 
                  border: '1px solid var(--accent) !important', 
                  color: 'white !important',
                  width: '100%',
                  padding: '0.6rem 0',
                  margin: 0,
                  textAlign: 'center',
                  gridColumn: '1 / span 2',
                  fontWeight: '500',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Napište nám
              </button>
            </nav>
          ) : (
            <nav className="hero__nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.title}
                </button>
              ))}
              {window.innerWidth <= 768 && (
                <button 
                  className="nav-btn"
                  onClick={() => handleNavClick('kontakt')}
                  style={{ 
                    background: 'var(--accent) !important', 
                    border: '1px solid var(--accent) !important', 
                    color: 'white !important',
                    width: '100%',
                    padding: '0.6rem 0',
                    margin: 0,
                    textAlign: 'center',
                    gridColumn: '1 / span 2',
                    fontWeight: '500',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  Napište nám
                </button>
              )}
            </nav>
          )}

          {window.innerWidth > 768 && (
            <button 
              className="reserve-btn"
              onClick={() => handleNavClick('kontakt')}
              style={{ 
                transform: 'none',
                margin: '0 auto',
                display: 'block'
              }}
            >
              Napište nám
            </button>
          )}
        </div>
      </main>

      <section 
        className="content-section" 
        style={{ background: 'white', border: 'none', boxShadow: 'none' }}
      >
        {activeSection === 'kontakt' 
          ? contactContent 
          : sections.find(s => s.id === activeSection)?.content}
      </section>

      <button 
        className="scroll-to-top" 
        id="scrollToTopBtn" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Zpět nahoru"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 4l-8 8h5v8h6v-8h5z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}

export default Hero;