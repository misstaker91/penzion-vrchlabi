import React from 'react';
import PriceList from './PriceList';

function PriceContent() {
  const isMobile = window.innerWidth <= 768;
  
  // Pro mobilní zobrazení použijeme kompletně novou strukturu
  if (isMobile) {
    return (
      <div style={{
        padding: '0',
        margin: '0',
        lineHeight: '1',
        fontSize: '0.9rem'
      }}>
        {/* Zima 2024/2025 */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '0.3rem',
          marginBottom: '0.2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            margin: '0 0 0.2rem 0',
            padding: '0',
            color: 'var(--primary)'
          }}>Zima 2024/2025</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '0.1rem',
            margin: '0'
          }}>
            <div style={{fontWeight: 'bold', padding: '0.1rem'}}>Typ ubytování</div>
            <div style={{fontWeight: 'bold', padding: '0.1rem', textAlign: 'right'}}>Cena/noc</div>
            
            <div style={{padding: '0.1rem'}}>Dospělý</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>450 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 12 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>350 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 3 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>Zdarma</div>
          </div>
        </div>
        
        {/* Zima 2024/2025 - Svátky */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '0.3rem',
          marginBottom: '0.2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            margin: '0 0 0.2rem 0',
            padding: '0',
            color: 'var(--primary)'
          }}>Zima 2024/2025 - Svátky</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '0.1rem',
            margin: '0'
          }}>
            <div style={{fontWeight: 'bold', padding: '0.1rem'}}>Typ ubytování</div>
            <div style={{fontWeight: 'bold', padding: '0.1rem', textAlign: 'right'}}>Cena/noc</div>
            
            <div style={{padding: '0.1rem'}}>Dospělý</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>500 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 12 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>400 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 3 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>Zdarma</div>
          </div>
        </div>
        
        {/* Léto 2024 */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '0.3rem',
          marginBottom: '0.2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            margin: '0 0 0.2rem 0',
            padding: '0',
            color: 'var(--primary)'
          }}>Léto 2024</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '0.1rem',
            margin: '0'
          }}>
            <div style={{fontWeight: 'bold', padding: '0.1rem'}}>Typ ubytování</div>
            <div style={{fontWeight: 'bold', padding: '0.1rem', textAlign: 'right'}}>Cena/noc</div>
            
            <div style={{padding: '0.1rem'}}>Dospělý</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>400 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 12 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>300 Kč</div>
            
            <div style={{padding: '0.1rem'}}>Dítě do 3 let</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>Zdarma</div>
          </div>
        </div>
        
        {/* Pokoje */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '0.3rem',
          marginBottom: '0.2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            margin: '0 0 0.2rem 0',
            padding: '0',
            color: 'var(--primary)'
          }}>Pokoje</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '70% 15% 15%',
            gap: '0.1rem',
            margin: '0'
          }}>
            <div style={{fontWeight: 'bold', padding: '0.1rem'}}>Typ pokoje</div>
            <div style={{fontWeight: 'bold', padding: '0.1rem', textAlign: 'right'}}>Zima</div>
            <div style={{fontWeight: 'bold', padding: '0.1rem', textAlign: 'right'}}>Léto</div>
            
            <div style={{padding: '0.1rem'}}>Pokoj se soc. zař. pro 2 osoby</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>600</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>550</div>
            
            <div style={{padding: '0.1rem'}}>Pokoj bez soc. zař. pro 6-8 osob</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>560</div>
            <div style={{padding: '0.1rem', textAlign: 'right'}}>530</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Pro desktop použijeme původní strukturu
  return (
    <div className="price-content">
      <PriceList />
      <PriceList />
      <PriceList />
      <PriceList />
    </div>
  );
}

export default PriceContent; 