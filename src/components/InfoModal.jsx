import React from 'react';

export default function InfoModal({ modalType, onClose, setActivePage }) {
  if (!modalType) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="custom-popup-card" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="popup-header">
          <div className="popup-header-brand">
            <div className="logo-mark">
              <span className="mark-bar bar-1"></span>
              <span className="mark-bar bar-2"></span>
              <span className="mark-bar bar-3"></span>
              <span className="mark-bar bar-4"></span>
            </div>
            <span className="logo-text">FIFA</span>
          </div>
          <button 
            type="button" 
            className="popup-close-btn" 
            onClick={onClose}
            aria-label="Tutup Popup"
          >
            ✕
          </button>
        </div>

        {/* 1. TENTANG KAMI POPUP */}
        {modalType === 'about' && (
          <div className="popup-body">
            <div className="popup-title-section">
              <span className="popup-tag">TENTANG KAMI</span>
              <h2 className="popup-title">Hunian Elegan dengan Kenyamanan Hakiki</h2>
              <p className="popup-subtitle">
                FIFA menghadirkan paduan estetika Skandinavia modern dan ergonomi terbaik untuk menciptakan kehangatan di setiap ruang hunian Anda.
              </p>
            </div>

            <div className="popup-features-grid">
              <div className="popup-feature-box">
                <div className="feat-icon-circle">🪵</div>
                <div className="feat-text-content">
                  <h4>Material Kayu Pilihan</h4>
                  <p>Kayu jati solid & oak pilihan dengan sertifikasi ramah lingkungan yang tahan lama hingga puluhan tahun.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-icon-circle">✨</div>
                <div className="feat-text-content">
                  <h4>Desain Estetik & Fungsional</h4>
                  <p>Dirancang oleh tim desainer interior profesional yang mengutamakan kenyamanan dan kepraktisan ruangan.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-icon-circle">🛡️</div>
                <div className="feat-text-content">
                  <h4>Garansi Resmi 3 Tahun</h4>
                  <p>Jaminan kualitas struktur dan busa dengan layanan servis & reparasi terpercaya di seluruh Indonesia.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-icon-circle">🚚</div>
                <div className="feat-text-content">
                  <h4>Pengiriman Cepat & Aman</h4>
                  <p>Bebas biaya kirim untuk wilayah Jabodetabek serta kemasan protektif berstandar internasional.</p>
                </div>
              </div>
            </div>

            <div className="popup-footer-actions">
              <button 
                type="button" 
                className="popup-primary-btn"
                onClick={() => {
                  onClose();
                  setActivePage('shop');
                }}
              >
                Jelajahi Katalog Furnitur &rarr;
              </button>
              <button 
                type="button" 
                className="popup-secondary-btn"
                onClick={onClose}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* 2. HUBUNGI KAMI POPUP */}
        {modalType === 'contact' && (
          <div className="popup-body">
            <div className="popup-title-section">
              <span className="popup-tag">HUBUNGI KAMI</span>
              <h2 className="popup-title">Kami Siap Membantu Anda</h2>
              <p className="popup-subtitle">
                Konsultasikan kebutuhan interior, kustomisasi furnitur, atau pertanyaan produk Anda bersama tim FIFA.
              </p>
            </div>

            <div className="popup-contact-list">
              <a 
                href="https://api.whatsapp.com/send?phone=628123808394&text=Halo%20FIFA%20Furniture,%20saya%20ingin%20konsultasi%20produk." 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link wa-link"
              >
                <div className="contact-icon-wrap wa-icon-wrap">
                  💬
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-label-row">
                    <strong>WhatsApp Customer Support</strong>
                    <span className="status-pill active-pill">Online Cepat</span>
                  </div>
                  <span className="contact-value">+62 812-3808-394</span>
                  <small>Respon cepat dalam hitungan menit (08:00 - 21:00 WIB)</small>
                </div>
              </a>

              <div className="contact-card-link">
                <div className="contact-icon-wrap">
                  ✉️
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-label-row">
                    <strong>Email Resmi</strong>
                  </div>
                  <span className="contact-value">fifafurniture@gmail.com</span>
                  <small>Untuk kerjasama, katalog tender, dan inquiry proyek</small>
                </div>
              </div>

              <div className="contact-card-link">
                <div className="contact-icon-wrap">
                  🏢
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-label-row">
                    <strong>Kantor & Showroom Utama</strong>
                  </div>
                  <span className="contact-value">Kawasan Desain Terpadu Senopati, Jakarta Selatan</span>
                  <small>Buka setiap hari: 09:00 - 20:00 WIB</small>
                </div>
              </div>
            </div>

            <div className="popup-footer-actions">
              <a 
                href="https://api.whatsapp.com/send?phone=628123808394&text=Halo%20FIFA%20Furniture,%20saya%20ingin%20konsultasi%20furnitur." 
                target="_blank" 
                rel="noreferrer" 
                className="popup-primary-btn wa-primary-btn"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <span>Chat via WhatsApp Sekarang</span>
              </a>
              <button 
                type="button" 
                className="popup-secondary-btn"
                onClick={onClose}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* 3. TEMUKAN TOKO POPUP */}
        {modalType === 'stores' && (
          <div className="popup-body">
            <div className="popup-title-section">
              <span className="popup-tag">SHOWROOM & TOKO</span>
              <h2 className="popup-title">Kunjungi Galeri FIFA Terdekat</h2>
              <p className="popup-subtitle">
                Rasakan secara langsung kenyamanan material busa premium dan keindahan kayu solid di galeri kami.
              </p>
            </div>

            <div className="popup-stores-grid">
              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>📍 FIFA Flagship Store Senopati</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan</p>
                <div className="store-meta-row">
                  <span>⏰ 09:00 - 21:00 WIB</span>
                  <span>📞 (021) 789-1029</span>
                </div>
              </div>

              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>📍 FIFA Experience Center BSD</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Green Office Park 6, BSD City, Tangerang Selatan</p>
                <div className="store-meta-row">
                  <span>⏰ 10:00 - 22:00 WIB</span>
                  <span>📞 (021) 534-8890</span>
                </div>
              </div>

              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>📍 FIFA Gallery Surabaya</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Pakuwon Mall Level 2 No. 48, Surabaya Barat</p>
                <div className="store-meta-row">
                  <span>⏰ 10:00 - 21:30 WIB</span>
                  <span>📞 (031) 980-2211</span>
                </div>
              </div>
            </div>

            <div className="popup-footer-actions">
              <button 
                type="button" 
                className="popup-primary-btn"
                onClick={() => {
                  onClose();
                  setActivePage('shop');
                }}
              >
                Lihat Produk di Toko &rarr;
              </button>
              <button 
                type="button" 
                className="popup-secondary-btn"
                onClick={onClose}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
