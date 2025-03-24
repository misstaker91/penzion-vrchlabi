import React from 'react';
import '../styles/pages/Svatby.css';

function Svatby() {
  return (
    <div className="page-container">
      <h1 className="page-title">Svatební obřad</h1>
      <p className="page-subtitle">
        u sjezdovky s výhledem na Strážné. Hostina
        na mlatu, případně v párty stanu. Večerní posezení pod širým nebem, na mlatu, 
        nebo ve chlévě.
      </p>
      
      <div className="wedding-info">
        <div className="wedding-section">
          <h3>Nabízíme</h3>
          <ul>
            <li>Prostory penzionu pro svatební obřad i hostinu</li>
            <li>Zapůjčení party stanu a pivních setů pro svatební hostinu</li>
            <li>Ubytování v pokojích pro cca 40 hostů</li>
            <li>Pípa na točené pivo a limonádu, lednice, zapůjčení nádobí pro hostinu</li>
            <li>Gril, rožeň na grilování kýty</li>
            <li>Dekorace: světýlka, vázičky, slavobrána</li>
            <li>Doporučení osvědčených dodavatelů z okolí (dort, vizážistka, catering, obsluha)</li>
          </ul>
        </div>
        
        <div className="wedding-section">
          <h3>Ceník dle požadavků Svatebčanů</h3>
          <div className="wedding-list">
            <div className="wedding-item">Příprava obřadního prostoru: 2.000 Kč</div>
            <div className="wedding-item">Pronájem mlat + bar: 13.000 Kč</div>
            <div className="wedding-item">Pronájem párty stanu / akce: 10.000 Kč</div>
            <div className="wedding-item">Gril (rožeň): 2.000 Kč</div>
            <div className="wedding-item">Gril (rožeň + 10 kg kýta): 7.000 Kč</div>
            <div className="wedding-item">Ubytování osoba / noc: 600 Kč</div>
            <div className="wedding-item">Ubytování při uzavření penzionu min. sazba za noc: 9.600 Kč</div>
            <div className="wedding-item">Nad 16 osob každá další osoba / noc: 600 Kč</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Svatby;