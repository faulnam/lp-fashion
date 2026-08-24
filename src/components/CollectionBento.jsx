import React, { useState, useMemo } from 'react';
import { THEMES, BUNDLE_SETS, LOOKBOOK_CARDS } from '../data/collections';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function CollectionBento({ setActivePage }) {
  const [currentTheme, setCurrentTheme] = useState('Semua Tema');
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const filteredBundles = useMemo(() => {
    return BUNDLE_SETS.filter(item => {
      if (currentTheme === 'Semua Tema') return true;
      return item.theme.toLowerCase() === currentTheme.toLowerCase();
    });
  }, [currentTheme]);

  const handleBuyBundle = (bundle) => {
    addToCart({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      numericPrice: bundle.numericPrice,
      image: bundle.image,
      category: `Paket ${bundle.theme}`
    });
    addToast(`${bundle.name} ditambahkan ke keranjang!`, 'cart');
  };

  return (
    <main className="hero-bento collection-bento" id="collection-bento">

      {/* BENTO ROW 1: HEADER & THEMES */}
      <div className="bento-row collection-row-1">
        
        {/* CARD A: Collection Hero Banner */}
        <div className="bento-card collection-banner-card">
          <span className="coll-tag">LOOKBOOK & INSPIRASI</span>
          <h1 className="collection-title">Koleksi Tema Interior FIFA</h1>
          <p className="collection-subtitle">
            Jelajahi paduan furnitur siap pakai yang dirancang oleh desainer interior profesional.
          </p>
        </div>

        {/* CARD B: Theme Filter Pills */}
        <div className="bento-card collection-theme-card">
          <h2 className="filter-card-title">Gaya & Tema Interior</h2>
          <div className="category-pills">
            {THEMES.map(theme => (
              <button
                key={theme}
                type="button"
                className={`pill-btn ${currentTheme === theme ? 'active' : ''}`}
                onClick={() => setCurrentTheme(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* BENTO ROW 2: FEATURED LOOKBOOK BENTO CARDS */}
      <div className="bento-row collection-row-2">
        
        {/* Card 1: Featured Dining Lookbook */}
        <div className="bento-card main-lookbook-card">
          <div className="lookbook-bg-image" style={{ backgroundImage: "url('assets/dining_room.png')" }}></div>
          <div className="lookbook-overlay"></div>
          <span className="look-badge">Koleksi Unggulan</span>
          <div className="lookbook-content">
            <h2 className="lookbook-title">Set Ruang Makan Skandinavia</h2>
            <p className="lookbook-desc">
              Paduan kayu solid alami, kursi upholstered lembut, dan pencahayaan hangat.
            </p>
            <div className="lookbook-bottom-bar">
              <div className="look-price-group">
                <span className="look-price-label">Paket 1 Set (4 Barang)</span>
                <span className="look-price-val">
                  Rp 11.590.000 <span className="old-price">Rp 13.990.000</span>
                </span>
              </div>
              <button 
                type="button"
                className="shop-now-btn"
                onClick={() => setActivePage('shop')}
              >
                Shop the Look &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Living Room Comfort Bundle */}
        <div className="bento-card promo-lookbook-card">
          <span className="promo-top-tag">SERI RUANG TAMU</span>
          <div className="promo-img-wrapper">
            <img 
              src="assets/promo_armchair.png" 
              alt="Ruang Tamu Modern Comfort" 
              className="promo-img transparent-bg-img" 
            />
          </div>
          <div className="promo-bottom">
            <h3 className="promo-title">Modern Comfort Living</h3>
            <p className="promo-desc">Kombinasi sofa 3-dudukan & armchair tufted khaki.</p>
            <div 
              className="promo-cta"
              onClick={() => setActivePage('shop')}
              role="button"
              tabIndex={0}
            >
              <span className="cta-pill-text">Shop the Look</span>
              <div className="cta-circle-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Compact Series Stack */}
        <div className="bento-column compact-series-column">
          <div className="bento-card compact-subcard">
            <span className="compact-tag">COMPACT LIVING</span>
            <h4 className="compact-title">Sudut Santai Minimalis</h4>
            <span className="compact-price">Bundel Rp 6.190.000</span>
          </div>
          <div className="bento-card compact-subcard compact-peach">
            <span className="compact-tag">APARTMENT SERIES</span>
            <h4 className="compact-title">Kamar Tidur Japandi</h4>
            <span className="compact-price">Bundel Rp 9.750.000</span>
          </div>
        </div>

      </div>

      {/* BENTO ROW 3: BUNDLE SETS CATALOGUE GRID */}
      <div className="collection-bundles-section">
        <h2 className="section-title">Paket Bundel Ruangan ("Shop the Look")</h2>
        <div className="shop-products-grid bundle-grid">
          {filteredBundles.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 20px',
              backgroundColor: '#EBF5F9',
              borderRadius: '20px',
              animation: 'fadeIn 0.3s ease'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                Koleksi Tema "{currentTheme}" Segera Hadir
              </h3>
              <p style={{ fontSize: '13px', color: '#64748B' }}>
                Pilih tema interior lain untuk melihat inspirasi paket bundel ruangan.
              </p>
            </div>
          ) : (
            filteredBundles.map(bundle => (
              <div 
                key={bundle.id}
                className="bento-card bundle-card"
                style={{ animation: 'fadeIn 0.35s ease' }}
              >
                <span className="product-badge badge-sale">{bundle.badge}</span>
                <div className="product-img-box">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name} 
                    className={bundle.isCover ? '' : 'transparent-bg-img'} 
                    style={bundle.isCover ? { objectFit: 'cover', borderRadius: '14px' } : {}}
                  />
                </div>
                <div className="bundle-details">
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#64748B', marginBottom: '2px' }}>
                    TEMA: {bundle.theme.toUpperCase()}
                  </div>
                  <h3 className="bundle-name">{bundle.name}</h3>
                  <p className="bundle-items">{bundle.items}</p>
                  <div className="bundle-price-bar">
                    <span className="bundle-price">
                      {bundle.price} <span className="old">{bundle.oldPrice}</span>
                    </span>
                    <button 
                      type="button"
                      className="btn-bundle-buy"
                      onClick={() => handleBuyBundle(bundle)}
                    >
                      Beli Paket
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </main>
  );
}
