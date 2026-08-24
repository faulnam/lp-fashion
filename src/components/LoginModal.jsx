import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function LoginModal({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Silakan lengkapi semua kolom formulir!', 'info');
      return;
    }
    if (isRegister) {
      addToast(`Selamat datang ${name || 'Pengguna'}! Pendaftaran berhasil 🎉`, 'info');
    } else {
      addToast(`Selamat datang kembali di FIFA! ✨`, 'info');
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Tutup"
        >
          ✕
        </button>

        {/* Brand */}
        <div className="auth-brand">
          <div className="logo-mark">
            <span className="mark-bar bar-1"></span>
            <span className="mark-bar bar-2"></span>
            <span className="mark-bar bar-3"></span>
            <span className="mark-bar bar-4"></span>
          </div>
          <span className="logo-text">FIFA</span>
        </div>

        <h3 className="auth-title">
          {isRegister ? 'Buat Akun FIFA Baru' : 'Masuk ke Akun FIFA'}
        </h3>
        <p className="auth-subtitle">
          {isRegister
            ? 'Dapatkan penawaran eksklusif dan kemudahan melacak pesanan furnitur Anda.'
            : 'Akses wishlist favorit dan riwayat belanja furnitur modern Anda.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label htmlFor="auth-name">Nama Lengkap</label>
              <input
                id="auth-name"
                type="text"
                placeholder="Contoh: Nadia Putri"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Alamat Email</label>
            <input
              id="auth-email"
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="auth-password">Kata Sandi</label>
            <input
              id="auth-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            {isRegister ? 'Daftar Sekarang' : 'Masuk ke Akun'}
          </button>
        </form>

        <div className="auth-switch">
          <span>
            {isRegister ? 'Sudah memiliki akun?' : 'Belum memiliki akun FIFA?'}
          </span>{' '}
          <button 
            type="button" 
            className="switch-btn"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Masuk di sini' : 'Daftar sekarang'}
          </button>
        </div>
      </div>
    </div>
  );
}
