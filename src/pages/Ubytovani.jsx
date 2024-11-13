import React from 'react';
import '../styles/pages/Ubytovani.css';

function Ubytovani() {
  return (
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
  );
}

export default Ubytovani;