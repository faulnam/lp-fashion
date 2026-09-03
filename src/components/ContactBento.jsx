import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function ContactBento() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Hijab Segiempat & Pashmina');
  const [notes, setNotes] = useState('');
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      addToast('Harap masukkan nama dan nomor WhatsApp Anda!', 'info');
      return;
    }

    const waNumber = '628123808394';
    let text = `Halo FIFA Hijab, saya ingin konsultasi busana / pemesanan:\n\n`;
    text += `👤 *Nama:* ${name}\n`;
    text += `📱 *No. WhatsApp:* ${phone}\n`;
    text += `🧕 *Kebutuhan:* ${topic}\n`;
    if (notes) {
      text += `📝 *Catatan:* ${notes}\n`;
    }
    text += `\nMohon informasi ketersediaan stok & panduan ukuran. Terima kasih!`;

    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`;
    addToast('Mengarahkan ke WhatsApp CS FIFA Hijab...', 'info');
    window.open(waUrl, '_blank');
  };

  return (
    <main className="hero-bento contact-bento" id="contact-bento">

      {/* ===== BENTO ROW 1: HEADER & CHANNELS ===== */}
      <div className="bento-row row-1" style={{ height: 'auto', minHeight: '230px' }}>

        {/* CARD 1: Main Contact Banner */}
        <div className="bento-card contact-hero-card" style={{ flex: '4.8', padding: '24px 28px' }}>
          <span className="coll-tag">LAYANAN & KONSULTASI</span>
          <h1 className="contact-main-title">Pusat Layanan & Butik Resmi FIFA Hijab</h1>
          <p className="contact-main-subtitle">
            Konsultasikan panduan ukuran abaya, pilihan warna pashmina, atau pemesanan seragam bridesmaid bersama stylist kami.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a 
              href="https://api.whatsapp.com/send?phone=628123808394&text=Halo%20FIFA%20Hijab,%20saya%20ingin%20tanya%20produk." 
              target="_blank" 
              rel="noreferrer" 
              className="wa-pill-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.49 13.45 14.32 13.7C14.16 13.95 13.68 14.51 13.54 14.68C13.39 14.84 13.25 14.86 13 14.74C12.75 14.62 11.95 14.36 11 13.51C10.26 12.85 9.75 12.03 9.61 11.78C9.46 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.09 10.84C10.22 10.7 10.26 10.6 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.88 9.77 8.68 9.57 8.19C9.37 7.71 9.17 7.78 9.02 7.77H8.55C8.38 7.77 8.12 7.83 7.9 8.07C7.67 8.32 7.04 8.91 7.04 10.12C7.04 11.33 7.92 12.5 8.04 12.66C8.17 12.82 9.78 15.31 12.24 16.37C12.83 16.62 13.28 16.77 13.64 16.88C14.23 17.07 14.77 17.04 15.2 16.98C15.68 16.91 16.67 16.38 16.88 15.8C17.08 15.21 17.08 14.71 17.02 14.61C16.96 14.51 16.81 14.45 16.56 14.37Z" />
              </svg>
              <span>Chat WhatsApp Customer Care</span>
            </a>
          </div>
        </div>

        {/* CARD 2: Quick Channels */}
        <div className="bento-card contact-channels-card" style={{ flex: '3.4', padding: '24px 28px' }}>
          <h3 className="channels-title">Kontak Langsung</h3>
          <div className="channels-list">
            <div className="channel-item">
              <div className="channel-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9D5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="channel-text">
                <span className="ch-label">Telepon Butik</span>
                <strong>(021) 380-8394</strong>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9D5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="channel-text">
                <span className="ch-label">Email Resmi</span>
                <strong>cs@fifahijab.com</strong>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9D5C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="channel-text">
                <span className="ch-label">Head Office</span>
                <strong>Kawasan Senopati, Jakarta Selatan</strong>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Operational Hours */}
        <div className="bento-card contact-hours-card" style={{ flex: '2.8', padding: '24px 28px' }}>
          <span className="promo-top-tag">JAM OPERASIONAL</span>
          <div className="hours-box">
            <div className="hours-row">
              <span>Senin - Jumat</span>
              <strong>08:00 - 21:00 WIB</strong>
            </div>
            <div className="hours-row">
              <span>Sabtu - Minggu</span>
              <strong>09:00 - 22:00 WIB</strong>
            </div>
          </div>
          <div className="hours-badge">
            <span className="status-dot"></span>
            <span>CS Online Melayani</span>
          </div>
        </div>

      </div>

      {/* ===== BENTO ROW 2: FORM & SHOWROOMS ===== */}
      <div className="bento-row row-2" style={{ height: 'auto', minHeight: '380px' }}>

        {/* Form Card */}
        <div className="bento-card contact-form-card" style={{ flex: '5.8', padding: '24px 28px' }}>
          <div className="form-card-header">
            <span className="coll-tag" style={{ color: 'var(--accent-terracotta)' }}>FORMULIR KONSULTASI</span>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>
              Konsultasi Busana & Janji Temu Butik
            </h2>
            <p style={{ fontSize: '12.5px', color: '#7A7067', marginTop: '2px' }}>
              Isi formulir berikut untuk terhubung langsung dengan fashion consultant FIFA Hijab.
            </p>
          </div>

          <form className="custom-contact-form" onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="input-name">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="input-name" 
                  placeholder="Contoh: Fatimah Zahra" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-phone">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  id="input-phone" 
                  placeholder="Contoh: 08123456789" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="select-topic">Kebutuhan Busana</label>
              <select 
                id="select-topic" 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="Hijab Segiempat & Pashmina">Hijab Segiempat & Pashmina</option>
                <option value="Abaya & Gamis Syar'i">Abaya & Gamis Syar'i</option>
                <option value="Set OOTD & Outer Modest">Set OOTD & Outer Modest</option>
                <option value="Pemesanan Seragam / Bridesmaid">Pemesanan Seragam / Bridesmaid</option>
                <option value="Konsultasi Mix & Match Busana">Konsultasi Mix & Match Busana</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="input-notes">Catatan Tambahan (Opsional)</label>
              <textarea 
                id="input-notes" 
                rows="3" 
                placeholder="Tuliskan ukuran, preferensi warna, atau kebutuhan busana Anda..." 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="form-submit-wa-btn">
              <span>Kirim via WhatsApp CS &rarr;</span>
            </button>
          </form>
        </div>

        {/* Showrooms Card */}
        <div className="bento-card contact-showrooms-card" style={{ flex: '5.2', padding: '24px 28px' }}>
          <div className="showrooms-header">
            <span className="coll-tag" style={{ color: '#D0ECF2' }}>LOKASI BUTIK</span>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginTop: '2px' }}>
              Butik Resmi & Offline Store
            </h2>
          </div>

          <div className="showrooms-grid-list">
            <div className="showroom-item-box">
              <div className="showroom-top">
                <strong>FIFA Hijab Flagship Butik Senopati</strong>
                <span className="store-status open">Buka</span>
              </div>
              <p>Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan</p>
              <small>09:00 - 21:00 WIB • (021) 789-1029</small>
            </div>

            <div className="showroom-item-box">
              <div className="showroom-top">
                <strong>FIFA Hijab Boutique Bandung</strong>
                <span className="store-status open">Buka</span>
              </div>
              <p>Jl. R.E. Martadinata No. 88, Citarum, Bandung</p>
              <small>10:00 - 22:00 WIB • (022) 420-5512</small>
            </div>

            <div className="showroom-item-box">
              <div className="showroom-top">
                <strong>FIFA Hijab Gallery Surabaya</strong>
                <span className="store-status open">Buka</span>
              </div>
              <p>Pakuwon Mall Level 2 No. 48, Surabaya Barat</p>
              <small>10:00 - 21:30 WIB • (031) 980-2211</small>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
