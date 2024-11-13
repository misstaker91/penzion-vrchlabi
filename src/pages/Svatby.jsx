import React from 'react';
import '../styles/pages/Svatby.css';

function Svatby() {
  return (
    <div className="page-container">
      <h1 className="page-title">Svatební obřad</h1>
      <p className="page-subtitle">
        u sjezdovky s výhledem na Strážné. Hostina
        v party stanu, večerní zábava dle počasí buď pod širým nebem nebo ve společenské místnosti uvnitř
        penzionu.
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
      </div>
    </div>
  );
}

export default Svatby;