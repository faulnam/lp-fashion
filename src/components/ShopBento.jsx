import React, { useState, useMemo, useRef } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ShopBento({ initialSearchQuery = '' }) {
  const [currentCategory, setCurrentCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const gridRef = useRef(null);

  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchCategory =
        currentCategory === 'Semua' ||
        product.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [currentCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));

  // Reset page when category or search changes if out of bounds
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleToggleWishlist = (product, e) => {
    e.stopPropagation();
    const added = toggleWishlist(product);
    addToast(
      added ? `${product.name} disimpan ke Favorit! ❤️` : `${product.name} dihapus dari Favorit`,
      'heart'
    );
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    addToast(`${product.name} ditambahkan ke keranjang!`, 'cart');
  };

  return (
    <main className="hero-bento shop-bento" id="shop-bento">

      {/* ===== BENTO ROW 1: HEADER & FILTERS ===== */}
      <div className="bento-row shop-row-1">
        
        {/* CARD A: Shop Main Banner */}
        <div className="bento-card shop-banner-card">
          <div className="shop-banner-content">
            <h1 className="shop-banner-title">Katalog Furnitur FIFA</h1>
            <p className="shop-banner-subtitle">
              Temukan koleksi furnitur impian dengan keanggunan, kenyamanan, dan kualitas terbaik.
            </p>
            <div className="search-bar shop-search-bar">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input 
                type="text" 
                placeholder="Cari barang atau nama furnitur..." 
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {/* CARD B: Category Filters Card */}
        <div className="bento-card category-filter-card">
          <h2 className="filter-card-title">Kategori Produk</h2>
          <div className="category-pills">
            {CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                className={`pill-btn ${currentCategory === category ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* CARD C: Promo Offer Banner Card */}
        <div className="bento-card shop-promo-card">
          <span className="shop-promo-tag">PROMO SPESIAL</span>
          <h3 className="shop-promo-title">Diskon Akhir Pekan Hingga 20%</h3>
          <span className="shop-promo-code">Kode: <strong>FIFA20</strong></span>
        </div>

      </div>

      {/* ===== BENTO ROW 2: CATALOGUE PRODUCTS GRID ===== */}
      <div className="shop-products-grid" ref={gridRef}>
        {paginatedProducts.length === 0 ? (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '48px 20px',
            backgroundColor: '#EBF5F9',
            borderRadius: '20px',
            animation: 'fadeIn 0.3s ease'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
              Produk Tidak Ditemukan
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B' }}>
              Coba kata kunci pencarian lain atau pilih kategori yang berbeda.
            </p>
          </div>
        ) : (
          paginatedProducts.map(item => {
            const favorited = isWishlisted(item.id);
            return (
              <div 
                key={item.id}
                className="bento-card product-card shop-product-item"
                style={{ animation: 'fadeIn 0.3s ease' }}
              >
                <span className={`product-badge ${item.badgeClass || ''}`}>{item.badge}</span>
                
                {/* Wishlist Button */}
                <button 
                  type="button"
                  className={`wish-icon-btn ${favorited ? 'active' : ''}`} 
                  aria-label="Simpan Favorit"
                  onClick={(e) => handleToggleWishlist(item, e)}
                >
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    fill={favorited ? '#D76B52' : 'none'} 
                    stroke={favorited ? '#D76B52' : '#64748B'} 
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Product Image */}
                <div className="product-img-box">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={item.isCover ? '' : 'transparent-bg-img'} 
                    style={item.isCover ? { objectFit: 'cover', borderRadius: '12px' } : {}}
                  />
                </div>

                {/* Product Info */}
                <div className="product-info">
                  <div className="product-text">
                    <div className="product-meta">
                      <span className="rating">⭐ {item.rating}</span>
                      <span className="dot">•</span>
                      <span className="cat">{item.category}</span>
                    </div>
                    <h3 className="product-name">{item.name}</h3>
                    <span className="product-price">{item.price}</span>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    type="button"
                    className="add-btn" 
                    aria-label="Tambah ke Keranjang"
                    onClick={(e) => handleAddToCart(item, e)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ===== BENTO ROW 3: PAGINATION ===== */}
      <div className="bento-card shop-pagination-card">
        <span className="pagination-info">
          {filteredProducts.length === 0 
            ? 'Menampilkan 0 produk' 
            : `Menampilkan ${startIndex + 1}-${endIndex} dari ${filteredProducts.length} produk`
          }
        </span>
        
        {totalPages > 1 && (
          <div className="pagination-btn-group">
            {validPage > 1 && (
              <button 
                type="button"
                className="page-next prev-btn" 
                onClick={() => handlePageChange(validPage - 1)}
              >
                &lt; Sebelum
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                type="button"
                className={`page-num ${pageNum === validPage ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            ))}

            {validPage < totalPages && (
              <button 
                type="button"
                className="page-next next-btn" 
                onClick={() => handlePageChange(validPage + 1)}
              >
                Berikutnya &gt;
              </button>
            )}
          </div>
        )}
      </div>

    </main>
  );
}
