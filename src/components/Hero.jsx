import React, { useState } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [activeSection, setActiveSection] = useState('ubytovani');

  const sections = [
    {
      id: 'ubytovani',
      title: 'Ubytování',
      content: (
        <div className="section-content">
          <div className="page-container">
            <h1 className="page-title">Užijte si vaši</h1>
            <p className="page-subtitle">
              dovolenou, školu v přírodě, lyžařský kurz, svatbu nebo firemní akci na horách. Kapacita penzionu je až 40 hostů
            </p>
            
            <div className="accommodation-info">
              <div className="room-section">
                <h3>Pokoje</h3>
                <ul>
                  <li>2× Apartmán pro 4 osoby s vlastním sociálním zařízením</li>
                  <li>1× Pokoj pro 2 osoby se společným sociálním zařízením</li>
                  <li>1× Pokoj pro 3 osoby se společným sociálním zařízením</li>
                  <li>3× Pokoj pro 4 osoby se společným sociálním zařízením</li>
                  <li>1× Pokoj pro 6 osob se společným sociálním zařízením</li>
                  <li>1× Pokoj pro 8 osob se společným sociálním zařízením</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'svatby',
      title: 'Svatby',
      content: (
        <div className="section-content">
          <h2>Svatby</h2>
          <p>
            Penzion U Königsmarků je ideálním místem pro vaši svatbu. 
            Nabízíme prostorný sál až pro 80 osob, venkovní terasu s posezením, kompletní catering a ubytování pro svatebčany. 
            Náš svatební koordinátor vám pomůže s plánováním a organizací vašeho velkého dne.
          </p>
        </div>
      )
    },
    {
      id: 'obcerstveni',
      title: 'Občerstvení Na mlatu',
      content: (
        <div className="section-content">
          <h2>Občerstvení Na mlatu</h2>
          <p>
            Nabízíme tradiční českou kuchyni s důrazem na kvalitní suroviny od lokálních dodavatelů. 
            Specializujeme se na domácí krkonošské kyselo, zvěřinové speciality a domácí koláče. 
            K jídlu si můžete vychutnat točené pivo z místního pivovaru.
          </p>
        </div>
      )
    },
    {
      id: 'fotogalerie',
      title: 'Fotogalerie',
      content: (
        <div className="section-content">
          <h2>Fotogalerie</h2>
          {/* Zde budou fotky */}
        </div>
      )
    },
    {
      id: 'cenik',
      title: 'Ceník',
      content: (
        <div className="section-content">
          <h2>Ceník</h2>
          <p>
            Dvoulůžkový pokoj: 1600 Kč/noc<br />
            Třílůžkový pokoj: 2100 Kč/noc<br />
            Rodinný apartmán: 2800 Kč/noc<br />
            Přistýlka: 400 Kč/noc<br />
            <br />
            * Ceny jsou uvedeny za pokoj/noc včetně snídaně
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-wrapper">
      <main className="hero">
        <div className="hero__content">
          <h1>
            {window.innerWidth <= 768 ? (
              <>
                <span className="hero__title-small">Penzion</span>
                <span className="hero__title-large">U&nbsp;KÖNIGSMARKŮ</span>
              </>
            ) : (
              "Penzion U Königsmarků"
            )}
          </h1>
          <p className="hero__tagline">V Krkonoších, poblíž lyžařského areálu Herlíkovice-Bubákov a turistických tras.</p>
          
          <nav className="hero__nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            ))}
            {window.innerWidth <= 768 && (
              <button 
                className="nav-btn"
                onClick={() => setActiveSection('kontakt')}
                style={{ background: 'var(--warm-gold)', border: 'none', color: 'var(--cream)' }}
              >
                Napište nám
              </button>
            )}
          </nav>

          {window.innerWidth > 768 && (
            <button 
              className="reserve-btn"
              onClick={() => setActiveSection('kontakt')}
            >
              Napište nám
            </button>
          )}
        </div>
      </main>

      <section className="content-section">
        {sections.find(s => s.id === activeSection)?.content}
      </section>
    </div>
  );
}

export default Hero;