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
            <span className="logo-text">FIFA HIJAB</span>
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
              <h2 className="popup-title">Keanggunan & Kesantunan Berbusana Modest</h2>
              <p className="popup-subtitle">
                FIFA Hijab menghadirkan paduan estetika modern dan material serat alami terbaik untuk memberikan kenyamanan dan rasa percaya diri di setiap kesempatan.
              </p>
            </div>

            <div className="popup-features-grid">
              <div className="popup-feature-box">
                <div className="feat-text-content">
                  <h4>Material Tekstil Pilihan</h4>
                  <p>Voal ultrafine, silk shimmer, dan katun linen berkualitas tinggi yang sejuk dan ramah kulit.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-text-content">
                  <h4>Desain Modest & Elegan</h4>
                  <p>Dirancang oleh fashion designer profesional dengan potongan longgar yang syar'i dan kekinian.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-text-content">
                  <h4>Jaminan Kerapian Butik</h4>
                  <p>Setiap jahitan dan keliman tepi lasercut melalui quality control ketat sebelum sampai ke tangan Anda.</p>
                </div>
              </div>

              <div className="popup-feature-box">
                <div className="feat-text-content">
                  <h4>Pengiriman Cepat & Higienis</h4>
                  <p>Kemasan pouch eksklusif higienis dengan layanan pengiriman cepat ke seluruh wilayah Indonesia.</p>
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
                Jelajahi Katalog Hijab &rarr;
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
                Konsultasikan kebutuhan busana, ukuran abaya, pilihan warna hijab, atau pesanan seragam bersama tim FIFA Hijab.
              </p>
            </div>

            <div className="popup-contact-list">
              <a 
                href="https://api.whatsapp.com/send?phone=628123808394&text=Halo%20FIFA%20Hijab,%20saya%20ingin%20konsultasi%20produk." 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link wa-link"
              >
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
                <div className="contact-info-wrap">
                  <div className="contact-label-row">
                    <strong>Email Resmi</strong>
                  </div>
                  <span className="contact-value">cs@fifahijab.com</span>
                  <small>Untuk reseller, kolaborasi, dan pesanan jumlah besar</small>
                </div>
              </div>

              <div className="contact-card-link">
                <div className="contact-info-wrap">
                  <div className="contact-label-row">
                    <strong>Butik Utama</strong>
                  </div>
                  <span className="contact-value">Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan</span>
                  <small>Buka setiap hari: 09:00 - 21:00 WIB</small>
                </div>
              </div>
            </div>

            <div className="popup-footer-actions">
              <a 
                href="https://api.whatsapp.com/send?phone=628123808394&text=Halo%20FIFA%20Hijab,%20saya%20ingin%20konsultasi%20produk." 
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
              <span className="popup-tag">BUTIK OFFLINE</span>
              <h2 className="popup-title">Kunjungi Butik FIFA Hijab Terdekat</h2>
              <p className="popup-subtitle">
                Rasakan secara langsung kelembutan serat kain dan temukan koleksi hijab terlengkap di butik kami.
              </p>
            </div>

            <div className="popup-stores-grid">
              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>FIFA Hijab Flagship Butik Senopati</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan</p>
                <div className="store-meta-row">
                  <span>09:00 - 21:00 WIB</span>
                  <span>(021) 789-1029</span>
                </div>
              </div>

              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>FIFA Hijab Boutique Bandung</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Jl. R.E. Martadinata No. 88, Citarum, Bandung</p>
                <div className="store-meta-row">
                  <span>10:00 - 22:00 WIB</span>
                  <span>(022) 420-5512</span>
                </div>
              </div>

              <div className="store-location-card">
                <div className="store-location-header">
                  <h4>FIFA Hijab Gallery Surabaya</h4>
                  <span className="status-pill active-pill">Buka Hari Ini</span>
                </div>
                <p className="store-address">Pakuwon Mall Level 2 No. 48, Surabaya Barat</p>
                <div className="store-meta-row">
                  <span>10:00 - 21:30 WIB</span>
                  <span>(031) 980-2211</span>
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
                Lihat Produk di Katalog &rarr;
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
