import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function WishlistDrawer({ setActivePage }) {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (item) => {
    addToCart(item);
    addToast(`${item.name} dipindahkan ke Keranjang! 🛒`, 'cart');
  };

  const handleRemove = (item) => {
    removeFromWishlist(item.id);
    addToast(`${item.name} dihapus dari Favorit`, 'info');
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div className="cart-drawer wishlist-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D76B52" stroke="#D76B52" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2>Favorit Saya</h2>
            <span className="cart-count-tag" style={{ background: 'rgba(215, 107, 82, 0.1)', color: '#D76B52' }}>
              {wishlist.length} Disimpan
            </span>
          </div>
          <button 
            type="button"
            className="cart-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Tutup Favorit"
          >
            ✕
          </button>
        </div>

        {/* Body Content */}
        <div className="cart-drawer-body">
          {wishlist.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon">❤️</div>
              <h3>Belum Ada Produk Favorit</h3>
              <p>Klik ikon hati (❤️) pada katalog furnitur untuk menyimpan barang yang Anda sukai ke daftar ini.</p>
              <button 
                type="button" 
                className="shop-now-btn" 
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setIsWishlistOpen(false);
                  setActivePage('shop');
                }}
              >
                Jelajahi Toko FIFA
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {wishlist.map(item => (
                <div key={item.id} className="cart-item-row wishlist-item-row">
                  <div className="cart-item-img">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={item.isCover ? '' : 'transparent-bg-img'} 
                    />
                  </div>
                  <div className="cart-item-info">
                    <span className="cart-item-cat">{item.category || 'Furnitur'}</span>
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-price">{item.price}</span>
                    <div style={{ marginTop: '6px' }}>
                      <button 
                        type="button"
                        className="btn-add-from-wish"
                        onClick={() => handleMoveToCart(item)}
                      >
                        + Tambah ke Keranjang
                      </button>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                    aria-label="Hapus dari favorit"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="cart-drawer-footer">
            <button 
              type="button"
              className="checkout-btn"
              style={{ background: 'var(--accent-terracotta)' }}
              onClick={() => {
                setIsWishlistOpen(false);
                setActivePage('shop');
              }}
            >
              Lanjut Cari Furnitur Lain &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
