import React from 'react';
import '../styles/pages/Obcerstveni.css';

function Obcerstveni() {
  return (
    <div className="page-container">
      <h1 className="page-title">Občerstvení Na mlatu</h1>
      <p className="page-subtitle">
        historická stodola Na Mlatu nabízí jedinečnou atmosféru, kde si můžete vychutnat občerstvení dle aktuální nabídky. V letních měsících je k dispozici příjemné venkovní posezení.
      </p>
      
      <div className="food-info">
        <div className="food-section">
          <h3>Nabízíme</h3>
          <ul>
            <li>Čepované pivo, víno, káva Lavazza</li>
            <li>Limonáda, zmrzliny</li>
            <li>Polévky dle denní nabídky</li>
            <li>Chuťovky dle aktuální nabídky</li>
            <li>Škvarková pomazánka, utopenec</li>
            <li>Koláče a dezerty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Obcerstveni;