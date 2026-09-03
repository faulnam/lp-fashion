import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Navbar({ activePage, setActivePage }) {
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="navbar" id="navbar">
      {/* Logo */}
      <div 
        className="nav-logo" 
        onClick={() => setActivePage('home')}
        role="button"
        tabIndex={0}
        aria-label="FIFA HIJAB Beranda"
      >
        <div className="logo-mark">
          <span className="mark-bar bar-1"></span>
          <span className="mark-bar bar-2"></span>
          <span className="mark-bar bar-3"></span>
          <span className="mark-bar bar-4"></span>
        </div>
        <span className="logo-text">FIFA HIJAB</span>
      </div>

      {/* Nav Menu */}
      <nav className="nav-menu" id="nav-menu">
        <button 
          type="button"
          className={`nav-link-btn ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => setActivePage('home')}
        >
          Beranda
        </button>
        <button 
          type="button"
          className={`nav-link-btn ${activePage === 'shop' ? 'active' : ''}`}
          onClick={() => setActivePage('shop')}
        >
          Toko
        </button>
        <button 
          type="button"
          className={`nav-link-btn ${activePage === 'collection' ? 'active' : ''}`}
          onClick={() => setActivePage('collection')}
        >
          Koleksi
        </button>
        <button 
          type="button"
          className={`nav-link-btn ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => setActivePage('about')}
        >
          Tentang Kami
        </button>
        <button 
          type="button"
          className={`nav-link-btn ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => setActivePage('contact')}
        >
          Hubungi Kami
        </button>
      </nav>

      {/* Nav Actions */}
      <div className="nav-actions">
        {/* Wishlist Button (Opens Wishlist Drawer) */}
        <div className="wishlist-btn-wrapper" style={{ position: 'relative' }}>
          <button 
            type="button"
            className="icon-btn wishlist-btn" 
            id="wishlist-btn" 
            aria-label="Buka Favorit"
            onClick={() => setIsWishlistOpen(true)}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill={wishlistCount > 0 ? '#D76B52' : 'none'} 
              stroke={wishlistCount > 0 ? '#D76B52' : '#1E293B'} 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="wish-badge">{wishlistCount}</span>
            )}
          </button>
        </div>

        {/* Cart Button (Opens Cart Drawer) */}
        <div className="cart-wrapper">
          <button 
            type="button"
            className="icon-btn cart-btn" 
            id="cart-btn" 
            aria-label="Buka Keranjang"
            onClick={() => setIsCartOpen(true)}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1E293B" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          {totalCount > 0 && (
            <span className="notification-badge">{totalCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}
