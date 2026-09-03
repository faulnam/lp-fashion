import React, { useState, useMemo } from 'react';
import { THEMES, BUNDLE_SETS, LOOKBOOK_CARDS } from '../data/collections';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function CollectionBento({ setActivePage }) {
  const [currentTheme, setCurrentTheme] = useState('Semua Gaya');
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const filteredBundles = useMemo(() => {
    return BUNDLE_SETS.filter(item => {
      if (currentTheme === 'Semua Gaya') return true;
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
          <h1 className="collection-title">Koleksi OOTD Modest FIFA</h1>
          <p className="collection-subtitle">
            Jelajahi paduan gaya busana muslimah & hijab serasi yang dirancang oleh fashion stylist profesional.
          </p>
        </div>

        {/* CARD B: Theme Filter Pills */}
        <div className="bento-card collection-theme-card">
          <h2 className="filter-card-title">Tema Gaya & OOTD</h2>
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
        
        {/* Card 1: Featured Scarf Lookbook */}
        <div className="bento-card main-lookbook-card">
          <div className="lookbook-bg-image" style={{ backgroundImage: "url('assets/dining_room.png')" }}></div>
          <div className="lookbook-overlay"></div>
          <span className="look-badge">Koleksi Unggulan</span>
          <div className="lookbook-content">
            <h2 className="lookbook-title">Koleksi Voal & Silk Earth Series</h2>
            <p className="lookbook-desc">
              Paduan hijab voal ultrafine, silk shawl lembut bernuansa terakota dan olive hangat.
            </p>
            <div className="lookbook-bottom-bar">
              <div className="look-price-group">
                <span className="look-price-label">Paket 1 Set (4 Pcs Scarf)</span>
                <span className="look-price-val">
                  Rp 299.000 <span className="old-price">Rp 380.000</span>
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

        {/* Card 2: Modern Modest Outfit */}
        <div className="bento-card promo-lookbook-card">
          <span className="promo-top-tag">LOOKBOOK BUTIK</span>
          <div className="promo-img-wrapper">
            <img 
              src="assets/promo_armchair.png" 
              alt="Modern Modest Outfit" 
              className="promo-img transparent-bg-img" 
            />
          </div>
          <div className="promo-bottom">
            <h3 className="promo-title">Modern Modest Blazer & Scarf</h3>
            <p className="promo-desc">Kombinasi blazer santai, trouser rapi & pashmina silk shimmer yang memikat.</p>
            <div 
              className="promo-cta"
              onClick={() => setActivePage('shop')}
              role="button"
              tabIndex={0}
            >
              <span className="cta-pill-text">Shop the Look</span>
              <div className="cta-circle-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Compact Series Stack */}
        <div className="bento-column compact-series-column">
          <div className="bento-card compact-subcard">
            <span className="compact-tag">DAILY ESSENTIALS</span>
            <h4 className="compact-title">Set Daily Voal & Inner Ciput</h4>
            <span className="compact-price">Bundel Rp 169.000</span>
          </div>
          <div className="bento-card compact-subcard compact-peach">
            <span className="compact-tag">SIGNATURE SERIES</span>
            <h4 className="compact-title">Soft Blush Silk & Abaya Chic</h4>
            <span className="compact-price">Bundel Rp 499.000</span>
          </div>
        </div>

      </div>

      {/* BENTO ROW 3: BUNDLE SETS CATALOGUE GRID */}
      <div className="collection-bundles-section">
        <h2 className="section-title">Paket Bundel Hemat OOTD Lengkap</h2>
        <div className="shop-products-grid bundle-grid">
          {filteredBundles.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 20px',
              backgroundColor: '#FAF4EE',
              borderRadius: '20px',
              animation: 'fadeIn 0.3s ease'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1F1B18', marginBottom: '8px' }}>
                Koleksi Tema "{currentTheme}" Segera Hadir
              </h3>
              <p style={{ fontSize: '13px', color: '#7A7067' }}>
                Pilih tema gaya lain untuk melihat inspirasi paket OOTD hemat.
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
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#7A7067', marginBottom: '2px' }}>
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
