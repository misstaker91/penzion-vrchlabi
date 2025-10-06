import React from 'react';
import '../styles/pages/Cenik.css';

function Cenik() {
  return (
    <div className="page-container">
      <h1 className="page-title">Ceník ubytování</h1>
      
      <div className="price-info">
        <div className="price-section">
          <div className="price-table-container">
            <h3>Zima 2025/2026 Svátky</h3>
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
                  <td>630</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                  <td>600</td>
                  <td>570</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                  <td>570</td>
                  <td>540</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="price-table-container">
            <h3>Zima 2025/2026</h3>
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
                  <td>610</td>
                  <td>580</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                  <td>580</td>
                  <td>550</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                  <td>550</td>
                  <td>520</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="price-table-container">
            <h3>Léto 2026</h3>
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
                  <td>580</td>
                  <td>550</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 2-4 osoby</td>
                  <td>550</td>
                  <td>520</td>
                </tr>
                <tr>
                  <td>Pokoj bez soc. zař. pro 6-8 osob</td>
                  <td>520</td>
                  <td>490</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="additional-info">
            <p>Hostům, kteří se u nás ubytují na dobu do 3 nocí včetně účtujeme jednorázový poplatek 100,- kč za zapůjčení ložního prádla.</p>
            
            <h4>Storno Podmínky</h4>
            <p>21 dní před nástupem (včetně): poplatek 50 % zálohy</p>
            <p>15 dní před nástupem (včetně): poplatek 75 % zálohy</p>
            <p>7 dní před nástupem (včetně): poplatek 100 % zálohy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cenik;
