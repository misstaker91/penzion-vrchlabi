import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import '../styles/pages/Fotogalerie.css';
import uvodka from '../assets/Penzion/uvodka.jpg';
// import chalupa_snih from '../assets/Penzion/chalupa_snih.jpg';
import chata_snih from '../assets/Penzion/chata_snih1.jpg';
// import kuchynka from '../assets/Penzion/kuchynka.jpg';
import mistnost2 from '../assets/Penzion/mistnost2.jpg';
import pokoj from '../assets/Penzion/pokoj.jpg';
import pokoj2 from '../assets/Penzion/pokoj2.jpg';
// import pokoj1 from '../assets/Penzion/pokoj1.jpg';
// import pokoj4 from '../assets/Penzion/pokoj4.jpg';
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


function Fotogalerie() {
  const [index, setIndex] = useState(-1);
  
  



  const galleryData = {
    penzion: [
      {
        src: uvodka,
        alt: 'Penzion photo',
      },

      {
        src: chata_snih,
        alt: 'Penzion winter',
      },
      {
        src: mistnost2,
        alt: 'Penzion room',
      },
      {
        src: spolecenka_mistnost,
        alt: 'shared free time room',
      },
      {
        src: pokoj,
        alt: 'Penzion room',
      },
      {
        src: pokoj2,
        alt: 'Penzion room',
      },

      
      // more images...
    ],
    obcerstveni: [
      {
        src: namlatu_vnitrek,
        alt: 'Indoor seating',
      },
      {
        src: namlatu_vnitrek1,
        alt: 'Indoor seating',
      },
      {
        src: venkovni,
        alt: 'Outdoor seating',
      },
      {
        src: jidlo,
        alt: 'Food',
      },
      {
        src: jidlo2,
        alt: 'Food',
      },
      // images...
    ],
    svatby: [
      {
        src: stolecek,
        alt: 'Wedding table',
      },
      {
        src: menu,
        alt: 'Wedding menu',
      },
      {
        src: obrad,
        alt: 'Wedding ceremony',
      },
      {
        src: lepsi_stan,
        alt: 'Wedding room',
      },
      {
        src: noc,
        alt: 'Wedding night',
      },
      // images...
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

  return (
    <div className="page-container">
      
      
      <div className="gallery-container">
        <section className="gallery-section">
          <h2>Penzion</h2>
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
        </section>

        <section className="gallery-section">
          <h2>Občerstvení Na Mlatu</h2>
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
        </section>

        <section className="gallery-section">
          <h2>Svatby</h2>
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
        </section>
      </div>

      <Lightbox
        slides={allPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Fotogalerie;