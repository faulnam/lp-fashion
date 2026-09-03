import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { PRODUCTS } from '../data/products';

export default function HomeBento({ setActivePage, onSearchNavigate, onOpenStoreFinder }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const product1 = PRODUCTS.find(p => p.id === 1) || { name: 'Pashmina Silk Shimmer Rose', price: 'Rp 149.000' };
  const product2 = PRODUCTS.find(p => p.id === 2) || { name: 'Abaya Linen Modest Two-Tone', price: 'Rp 389.000' };

  const handleAddToCart = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      addToCart(product);
      addToast(`${product.name} ditambahkan ke keranjang!`, 'cart');
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchNavigate(e.target.value);
    }
  };

  return (
    <main className="hero-bento" id="hero-bento">
      {/* ===== ROW 1 ===== */}
      <div className="bento-row row-1">

        {/* CARD 1: Main Fashion Hero Banner */}
        <div className="bento-card main-hero-card" id="card-hero-main">
          <div className="hero-bg-image" style={{ backgroundImage: "url('assets/hero_main.png')" }}></div>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">Keanggunan & Kenyamanan Berbusana Modest</h1>
            <p className="hero-subtitle">
              Jelajahi koleksi hijab dan busana muslimah pilihan dengan material premium yang sejuk, flowy, dan menawan.
            </p>
            <button 
              type="button"
              className="shop-now-btn" 
              id="btn-shop-now"
              onClick={() => setActivePage('shop')}
            >
              Belanja Sekarang
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Koleksi Hijab & Modest</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Muslimah Percaya</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Serat Alami & Premium</span>
            </div>
          </div>
        </div>

        {/* CARD 2: Promo Hijab Card */}
        <div className="bento-card promo-card" id="card-promo">
          <div className="promo-top-tag">MEGA DISKON HINGGA 50%</div>
          <div className="promo-img-wrapper">
            <img src="assets/promo_armchair.png" alt="Koleksi Hijab Modest" className="promo-img transparent-bg-img" />
          </div>
          <div className="promo-bottom">
            <h2 className="promo-title">Koleksi Hijab & Modest Pilihan</h2>
            <p className="promo-desc">Hemat hingga 20% untuk set pashmina silk & abaya akhir pekan ini.</p>
            <div 
              className="promo-cta" 
              id="btn-promo-cta"
              onClick={() => setActivePage('shop')}
              role="button"
              tabIndex={0}
            >
              <span className="cta-pill-text">Belanja Diskon</span>
              <div className="cta-circle-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Product Showcase Column (2 Stacked Cards) */}
        <div className="bento-column product-column">
          {/* Card 3a */}
          <div className="bento-card product-card" id="card-product-1">
            <div className="product-img-box">
              <img src="assets/lounge_chair.png" alt={product1.name} className="transparent-bg-img" />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h3 className="product-name">{product1.name}</h3>
                <span className="product-price">{product1.price}</span>
              </div>
              <button 
                type="button"
                className="add-btn" 
                aria-label={`Tambah ${product1.name} ke Keranjang`}
                onClick={() => handleAddToCart(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Card 3b */}
          <div className="bento-card product-card" id="card-product-2">
            <div className="product-img-box">
              <img src="assets/sofa_3seater.png" alt={product2.name} className="transparent-bg-img" />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h3 className="product-name">{product2.name}</h3>
                <span className="product-price">{product2.price}</span>
              </div>
              <button 
                type="button"
                className="add-btn" 
                aria-label={`Tambah ${product2.name} ke Keranjang`}
                onClick={() => handleAddToCart(2)}
              >
                +
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ===== ROW 2 ===== */}
      <div className="bento-row row-2">

        {/* CARD 4: Get Inspired Gallery Banner */}
        <div className="bento-card gallery-card" id="card-gallery">
          <div className="gallery-bg-image" style={{ backgroundImage: "url('assets/dining_room.png')" }}></div>
          <div className="gallery-overlay"></div>
          <div className="gallery-content">
            <h2 className="gallery-title">Inspirasi OOTD Hijab</h2>
            <button 
              type="button"
              className="gallery-link-btn" 
              id="link-view-gallery"
              onClick={() => setActivePage('collection')}
            >
              Lihat Galeri Lookbook
            </button>
          </div>
        </div>

        {/* CARD 5: Branding & Testimonials Stack */}
        <div className="bento-column brand-testimonials-column">
          {/* Top Branding Block */}
          <div className="bento-card brand-banner-card" id="card-brand-banner">
            <div className="brand-logo-wrap">
              <div className="logo-mark mark-large">
                <span className="mark-bar bar-1"></span>
                <span className="mark-bar bar-2"></span>
                <span className="mark-bar bar-3"></span>
                <span className="mark-bar bar-4"></span>
              </div>
              <span className="brand-title">FIFA HIJAB</span>
            </div>
            <span className="brand-subtitle">MODEST & ELEGAN.</span>
          </div>

          {/* Bottom Testimonials Row */}
          <div className="testimonials-row">
            {/* Testimonial 1 */}
            <div className="bento-card testimonial-card test-peach" id="card-testimonial-1">
              <div className="test-header">
                <img src="assets/avatar_angelia.png" alt="Nadia Putri" className="avatar" />
                <div className="test-user">
                  <span className="user-name">Nadia Putri</span>
                  <span className="user-rating">★ 4.9</span>
                </div>
              </div>
              <p className="test-text">Bahannya sangat adem & tegak paripurna di dahi! Pashmina silk-nya mewah & bikin look makin anggun.</p>
              <span className="test-date">11 Juni 2025 | 16:35 WIB</span>
            </div>

            {/* Testimonial 2 */}
            <div className="bento-card testimonial-card test-cyan" id="card-testimonial-2">
              <div className="test-header">
                <div className="avatar avatar-dewi">
                  {/* Clean solid SVG Avatar with no gradient */}
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#5E6D60" />
                    <circle cx="18" cy="13.5" r="5" fill="#FFFFFF" />
                    <path d="M8.5 29.5C8.5 24 12.5 21.5 18 21.5C23.5 21.5 27.5 24 27.5 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="test-user">
                  <span className="user-name">Dewi Lestari</span>
                  <span className="user-rating">★ 4.9</span>
                </div>
              </div>
              <p className="test-text">Abaya linen & pashminanya serasi banget. Jahitan super rapi, tidak menerawang, sangat puas!</p>
              <span className="test-date">10 Juni 2025 | 09:20 WIB</span>
            </div>
          </div>
        </div>

        {/* CARD 6 & 7 GROUP: Feature Card Top + Store Finder & Contact Side-by-Side Bottom */}
        <div className="bento-column feature-store-contact-group">

          {/* TOP: Feature Card */}
          <div className="bento-card feature-teal-card" id="card-feature-teal">
            <div className="teal-content">
              <h2 className="teal-title">Padukan Gaya Modest Anda<br />Anggun & Nyaman Seharian</h2>
              <p className="teal-desc">
                Dengan bahan pilihan yang sejuk dan breathable, FIFA Hijab menghadirkan harmoni antara kesantunan dan tren modern
              </p>
              <div className="search-bar" id="hero-search-bar" onClick={() => setActivePage('shop')}>
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A7067" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Cari pashmina, voal, abaya, outer... (Tekan Enter)" 
                  onKeyDown={handleSearchKeyPress}
                  onChange={(e) => onSearchNavigate(e.target.value, false)}
                />
              </div>
            </div>
          </div>

          {/* BOTTOM: Side-by-side Row for Store Finder & Contact Card */}
          <div className="store-contact-row">

            {/* Card 7a: Store Finder */}
            <div 
              className="bento-card store-finder-card" 
              id="card-store-finder"
              onClick={onOpenStoreFinder}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <div className="pin-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="store-title">Temukan Butik<br />Terdekat</h3>
            </div>

            {/* Card 7b: Contact Card */}
            <div className="bento-card contact-card" id="card-contact">
              <div className="contact-top">
                <h3 className="contact-title">Tetap Terhubung</h3>
                <div className="contact-details">
                  <span>(021) 380-8394</span>
                  <span>cs@fifahijab.com</span>
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="social-bar">
                <a href="#facebook" className="social-box" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#instagram" className="social-box" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#twitter" className="social-box" aria-label="X" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a href="#store" className="social-box" aria-label="Store" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
