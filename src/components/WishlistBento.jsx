import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function WishlistBento({ setActivePage }) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [removingIds, setRemovingIds] = useState(new Set());

  const handleRemove = (product) => {
    setRemovingIds(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      removeFromWishlist(product.id);
      setRemovingIds(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
      addToast(`${product.name} dihapus dari Favorit`, 'info');
    }, 250);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    addToast(`${product.name} ditambahkan ke keranjang!`, 'cart');
  };

  return (
    <main className="hero-bento wishlist-bento" id="wishlist-bento">

      {/* BENTO HEADER */}
      <div className="bento-row wishlist-row-1">
        <div className="bento-card wishlist-banner-card">
          <div className="wishlist-banner-content">
            <div className="wish-title-group">
              <h1 className="wishlist-title">Koleksi Favorit Saya ❤️</h1>
              <span className="wish-count-pill" id="wish-count-pill">
                {wishlist.length} Produk
              </span>
            </div>
            <p className="wishlist-subtitle">
              Koleksi busana muslimah dan hijab favorit yang Anda simpan untuk dibeli nanti.
            </p>
          </div>
          <div className="wishlist-actions">
            <button 
              type="button"
              className="btn-wish-shop"
              onClick={() => setActivePage('shop')}
            >
              Lanjut Belanja &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* WISHLIST PRODUCTS GRID */}
      <div className="shop-products-grid wishlist-grid" id="wishlist-grid">
        {wishlist.length === 0 ? (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '60px 24px',
            background: '#FAF4EE',
            borderRadius: '20px',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>❤️</div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#1F1B18', marginBottom: '8px' }}>
              Belum Ada Produk Favorit
            </h2>
            <p style={{
              fontSize: '13.5px',
              color: '#7A7067',
              marginBottom: '24px',
              maxWidth: '420px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5
            }}>
              Klik ikon hati (❤️) pada produk di Katalog FIFA Hijab untuk menyimpannya di sini.
            </p>
            <button 
              type="button"
              className="shop-now-btn" 
              style={{ display: 'inline-flex' }}
              onClick={() => setActivePage('shop')}
            >
              Jelajahi Katalog Hijab
            </button>
          </div>
        ) : (
          wishlist.map(item => {
            const isRemoving = removingIds.has(item.id);
            return (
              <div 
                key={item.id}
                className="bento-card product-card shop-product-item"
                style={{
                  animation: 'fadeIn 0.3s ease',
                  opacity: isRemoving ? 0 : 1,
                  transform: isRemoving ? 'scale(0.9)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span className={`product-badge ${item.badgeClass || ''}`}>
                  {item.badge || 'Favorit'}
                </span>
                <button 
                  type="button"
                  className="wish-icon-btn active" 
                  aria-label="Hapus Favorit"
                  onClick={() => handleRemove(item)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#D76B52" stroke="#D76B52" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <div className="product-img-box">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={item.isCover ? '' : 'transparent-bg-img'} 
                    style={item.isCover ? { objectFit: 'cover', borderRadius: '12px' } : {}}
                  />
                </div>
                <div className="product-info">
                  <div className="product-text">
                    <div className="product-meta">
                      <span className="rating">★ {item.rating || '4.9'}</span>
                      <span className="dot">•</span>
                      <span className="cat">{item.category || 'Modest Wear'}</span>
                    </div>
                    <h3 className="product-name">{item.name}</h3>
                    <span className="product-price">{item.price}</span>
                  </div>
                  <button 
                    type="button"
                    className="add-btn" 
                    aria-label="Tambah ke Keranjang"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

    </main>
  );
}
