import React from 'react';

export default function AboutBento({ setActivePage }) {
  return (
    <main className="hero-bento about-bento" id="about-bento">

      {/* ===== ROW 1: STORY, CRAFT & VALUES ===== */}
      <div className="bento-row row-1">

        {/* CARD 1: Main Story Banner */}
        <div className="bento-card main-hero-card" id="card-about-hero">
          <div className="hero-bg-image" style={{ backgroundImage: "url('assets/hero_main.png')" }}></div>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="coll-tag" style={{ color: '#FCD8CD' }}>TENTANG FIFA FURNITURE</span>
            <h1 className="hero-title">Kenyamanan Sejati untuk Hunian Modern</h1>
            <p className="hero-subtitle">
              Sejak awal berdiri, FIFA berkomitmen menghadirkan furnitur bergaya Skandinavia modern yang memadukan keindahan kayu solid alami, kenyamanan ergonomis, dan daya tahan puluhan tahun.
            </p>
            <button 
              type="button"
              className="shop-now-btn" 
              onClick={() => setActivePage('shop')}
            >
              Lihat Katalog Toko
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Tahun Dedikasi Desain</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Kayu Solid Bersertifikat</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Hunian Terwujud</span>
            </div>
          </div>
        </div>

        {/* CARD 2: Craftsmanship Card */}
        <div className="bento-card promo-card" id="card-about-craft">
          <div className="promo-top-tag">PRESEISI & KUALITAS</div>
          <div className="promo-img-wrapper">
            <img src="assets/promo_armchair.png" alt="Presisi Pengrajin" className="promo-img transparent-bg-img" />
          </div>
          <div className="promo-bottom">
            <h2 className="promo-title">Sentuhan Pengrajin Ahli</h2>
            <p className="promo-desc">Setiap detail kayu dan jahitan dikerjakan tangan dengan standar ketelitian tinggi.</p>
            <div 
              className="promo-cta"
              onClick={() => setActivePage('shop')}
              role="button"
              tabIndex={0}
            >
              <span className="cta-pill-text">Jelajahi Produk</span>
              <div className="cta-circle-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: 2 Stacked Value Cards */}
        <div className="bento-column product-column">
          {/* Card 3a: Sustainable */}
          <div className="bento-card product-card" style={{ padding: '22px 20px', justifyContent: 'center', gap: '8px' }}>
            <span className="compact-tag">RAMAH LINGKUNGAN</span>
            <h3 className="product-name" style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)' }}>
              Sustainable Oak & Teak
            </h3>
            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.45' }}>
              Kayu solid dari perkebunan legal terkelola tanpa merusak ekosistem hutan.
            </p>
          </div>

          {/* Card 3b: Warranty */}
          <div className="bento-card product-card" style={{ background: 'var(--bg-peach-test)', padding: '22px 20px', justifyContent: 'center', gap: '8px' }}>
            <span className="compact-tag" style={{ color: 'var(--accent-terracotta)' }}>JAMINAN MUTU</span>
            <h3 className="product-name" style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)' }}>
              Garansi Resmi 3 Tahun
            </h3>
            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.45' }}>
              Jaminan perlindungan struktur kayu dan busa dengan tim teknisi profesional.
            </p>
          </div>
        </div>

      </div>

      {/* ===== ROW 2: 4 PILLARS & CTA ===== */}
      <div className="bento-row row-2" style={{ height: 'auto', minHeight: '340px' }}>

        {/* CARD 4: 4 Pillars of FIFA */}
        <div className="bento-card" style={{ flex: '6.8', background: 'var(--bg-card-light)', padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="coll-tag" style={{ color: 'var(--accent-terracotta)', marginBottom: '4px' }}>KEUNGGULAN UTAMA</span>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '18px' }}>
            Standar Kualitas Tertinggi di Setiap Furnitur
          </h2>

          <div className="pillars-grid-clean">
            <div className="pillar-clean-box">
              <div className="pillar-svg-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D76B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4>Material Kayu Solid Asli</h4>
                <p>Tanpa partikel MDF murah, kami mengutamakan kekuatan serat kayu asli yang kokoh.</p>
              </div>
            </div>

            <div className="pillar-clean-box">
              <div className="pillar-svg-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D76B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div>
                <h4>Desain Ergonomis & Nyaman</h4>
                <p>Sudut kemiringan sandaran dan bantalan empuk yang menopang postur tubuh dengan sempurna.</p>
              </div>
            </div>

            <div className="pillar-clean-box">
              <div className="pillar-svg-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D76B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h4>Finishing Halus & Tahan Gores</h4>
                <p>Lapisan water-based non-toxic yang ramah keluarga dan menjaga keindahan warna alami kayu.</p>
              </div>
            </div>

            <div className="pillar-clean-box">
              <div className="pillar-svg-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D76B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <h4>Pengiriman Cepat & Aman</h4>
                <p>Pengemasan protektif berlapis dengan layanan pengiriman langsung ke dalam ruangan Anda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 5: Teal CTA Card */}
        <div className="bento-card feature-teal-card" style={{ flex: '5.2', height: 'auto', minHeight: '340px', padding: '32px' }}>
          <div className="teal-content" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <span className="coll-tag" style={{ color: '#D0ECF2' }}>MULAI BELANJA</span>
            <h2 className="teal-title" style={{ fontSize: '26px', textAlign: 'left', marginTop: '4px' }}>
              Wujudkan Suasana Nyaman di Rumah Anda
            </h2>
            <p className="teal-desc" style={{ textAlign: 'left', maxWidth: '100%', fontSize: '13px', margin: '12px 0 24px 0' }}>
              Temukan berbagai inspirasi set sofa, meja makan, dan kursi santai pilihan desainer dengan promo eksklusif akhir pekan.
            </p>
            <button 
              type="button" 
              className="shop-now-btn"
              onClick={() => setActivePage('shop')}
            >
              Jelajahi Koleksi Furnitur &rarr;
            </button>
          </div>
        </div>

      </div>

    </main>
  );
}
