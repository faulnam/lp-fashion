/* ==========================================================================
   FIFA SHOP INTERACTIVE PAGINATION & FILTERING SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Sample Product Dataset (18 Products)
  const products = [
    { id: 1, name: 'Kursi Santai Skandinavia', category: 'Kursi Santai', price: '$299.00', rating: '4.9', badge: 'Terlaris', badgeClass: '', image: 'assets/lounge_chair.png' },
    { id: 2, name: 'Sofa 3-Dudukan – Cloud Grey', category: 'Sofa & Armchair', price: '$899.00', rating: '4.8', badge: 'Diskon 15%', badgeClass: 'badge-sale', image: 'assets/sofa_3seater.png' },
    { id: 3, name: 'Armchair Accent Khaki', category: 'Sofa & Armchair', price: '$399.00', rating: '4.9', badge: 'Populer', badgeClass: '', image: 'assets/promo_armchair.png' },
    { id: 4, name: 'Set Meja Makan Minimalis', category: 'Meja Makan', price: '$549.00', rating: '4.7', badge: 'Set Meja', badgeClass: '', image: 'assets/dining_room.png', isCover: true },
    { id: 5, name: 'Kursi Modern Velvet', category: 'Kursi Santai', price: '$279.00', rating: '4.9', badge: 'Baru', badgeClass: '', image: 'assets/lounge_chair.png' },
    { id: 6, name: 'Sofa Sudut Premium', category: 'Sofa & Armchair', price: '$949.00', rating: '4.9', badge: 'Diskon 20%', badgeClass: 'badge-sale', image: 'assets/sofa_3seater.png' },
    
    { id: 7, name: 'Meja Kopi Teak Wood', category: 'Meja Makan', price: '$189.00', rating: '4.8', badge: 'Terlaris', badgeClass: '', image: 'assets/dining_room.png', isCover: true },
    { id: 8, name: 'Armchair Leather Vintage', category: 'Sofa & Armchair', price: '$429.00', rating: '4.9', badge: 'Baru', badgeClass: '', image: 'assets/promo_armchair.png' },
    { id: 9, name: 'Sofa Soft Fabric Grey', category: 'Sofa & Armchair', price: '$799.00', rating: '4.7', badge: 'Diskon 10%', badgeClass: 'badge-sale', image: 'assets/sofa_3seater.png' },
    { id: 10, name: 'Lampu Gantung Spherical', category: 'Lampu & Dekorasi', price: '$149.00', rating: '4.8', badge: 'Minimalis', badgeClass: '', image: 'assets/dining_room.png', isCover: true },
    { id: 11, name: 'Kursi Makan Upholstered', category: 'Kursi Santai', price: '$199.00', rating: '4.8', badge: 'Best Seller', badgeClass: '', image: 'assets/lounge_chair.png' },
    { id: 12, name: 'Meja Bundar Side Table', category: 'Meja Makan', price: '$129.00', rating: '4.9', badge: 'Trending', badgeClass: '', image: 'assets/promo_armchair.png' },
    
    { id: 13, name: 'Chesterfield Luxury Sofa', category: 'Sofa & Armchair', price: '$1,199.00', rating: '5.0', badge: 'Premium', badgeClass: 'badge-sale', image: 'assets/sofa_3seater.png' },
    { id: 14, name: 'Lounge Chair Walnut', category: 'Kursi Santai', price: '$349.00', rating: '4.9', badge: 'Terlaris', badgeClass: '', image: 'assets/lounge_chair.png' },
    { id: 15, name: 'Lampu Meja Bedside', category: 'Lampu & Dekorasi', price: '$89.00', rating: '4.7', badge: 'Baru', badgeClass: '', image: 'assets/dining_room.png', isCover: true },
    { id: 16, name: 'Set Kursi Teras Teak', category: 'Kursi Santai', price: '$489.00', rating: '4.8', badge: 'Diskon 15%', badgeClass: 'badge-sale', image: 'assets/promo_armchair.png' },
    { id: 17, name: 'Sofa 2-Seater Compact', category: 'Sofa & Armchair', price: '$649.00', rating: '4.8', badge: 'Hemat Ruang', badgeClass: '', image: 'assets/sofa_3seater.png' },
    { id: 18, name: 'Meja Kerja Industrial', category: 'Meja Makan', price: '$319.00', rating: '4.9', badge: 'Populer', badgeClass: '', image: 'assets/dining_room.png', isCover: true }
  ];

  const itemsPerPage = 6;
  let currentPage = 1;
  let currentCategory = 'Semua';
  let searchQuery = '';

  const productsGrid = document.querySelector('.shop-products-grid');
  const paginationInfo = document.querySelector('.pagination-info');
  const paginationGroup = document.querySelector('.pagination-btn-group');
  const searchInput = document.querySelector('.shop-search-bar input');
  const categoryPills = document.querySelectorAll('.pill-btn');

  // Filter products based on Category & Search Query
  function getFilteredProducts() {
    return products.filter(product => {
      const matchCategory = currentCategory === 'Semua' || product.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }

  // Render Product Cards for current page
  function renderProducts() {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    
    // Adjust current page if out of bounds
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filtered.length);
    const paginatedItems = filtered.slice(startIndex, endIndex);

    // Empty Grid Handling
    if (paginatedItems.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #EBF5F9; border-radius: 20px;">
          <h3 style="font-size: 18px; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Produk Tidak Ditemukan</h3>
          <p style="font-size: 13px; color: #64748B;">Coba kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
        </div>
      `;
      paginationInfo.textContent = 'Menampilkan 0 produk';
      renderPaginationButtons(0);
      return;
    }

    // Render Product Cards
    productsGrid.innerHTML = paginatedItems.map(item => {
      const favorited = isWishlisted(item.id);
      return `
        <div class="bento-card product-card shop-product-item" data-id="${item.id}" style="animation: fadeIn 0.3s ease;">
          <span class="product-badge ${item.badgeClass}">${item.badge}</span>
          <button class="wish-icon-btn ${favorited ? 'active' : ''}" aria-label="Simpan">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${favorited ? '#D76B52' : 'none'}" stroke="${favorited ? '#D76B52' : '#64748B'}" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div class="product-img-box">
            <img src="${item.image}" alt="${item.name}" class="${item.isCover ? '' : 'transparent-bg-img'}" ${item.isCover ? 'style="object-fit: cover; border-radius: 12px;"' : ''}>
          </div>
          <div class="product-info">
            <div class="product-text">
              <div class="product-meta"><span class="rating">⭐ ${item.rating}</span> <span class="dot">•</span> <span class="cat">${item.category}</span></div>
              <h3 class="product-name">${item.name}</h3>
              <span class="product-price">${item.price}</span>
            </div>
            <button class="add-btn" aria-label="Tambah ke Keranjang">+</button>
          </div>
        </div>
      `;
    }).join('');

    attachWishlistListeners(paginatedItems);

    // Update Pagination Info
    paginationInfo.textContent = `Menampilkan ${startIndex + 1}-${endIndex} dari ${filtered.length} produk`;

    // Render Pagination Controls
    renderPaginationButtons(totalPages);
  }

  function attachWishlistListeners(items) {
    document.querySelectorAll('.shop-product-item').forEach(card => {
      const id = card.getAttribute('data-id');
      const wishBtn = card.querySelector('.wish-icon-btn');
      if (!id || !wishBtn) return;
      const productObj = items.find(p => String(p.id) === String(id));
      if (!productObj) return;

      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const added = toggleWishlist(productObj);
        const svg = wishBtn.querySelector('svg');
        if (added) {
          wishBtn.classList.add('active');
          svg.setAttribute('fill', '#D76B52');
          svg.setAttribute('stroke', '#D76B52');
        } else {
          wishBtn.classList.remove('active');
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', '#64748B');
        }
      });
    });
  }

  // Render Pagination Buttons Dynamically
  function renderPaginationButtons(totalPages) {
    if (totalPages <= 1) {
      paginationGroup.innerHTML = '';
      return;
    }

    let buttonsHTML = '';

    // Prev Button
    if (currentPage > 1) {
      buttonsHTML += `<button class="page-next prev-btn">&lt; Sebelum</button>`;
    }

    // Numbered Buttons
    for (let i = 1; i <= totalPages; i++) {
      buttonsHTML += `<button class="page-num ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    // Next Button
    if (currentPage < totalPages) {
      buttonsHTML += `<button class="page-next next-btn">Berikutnya &gt;</button>`;
    }

    paginationGroup.innerHTML = buttonsHTML;

    // Attach Event Listeners to Pagination Buttons
    paginationGroup.querySelectorAll('.page-num').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.getAttribute('data-page'));
        renderProducts();
        scrollToProducts();
      });
    });

    const prevBtn = paginationGroup.querySelector('.prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentPage--;
        renderProducts();
        scrollToProducts();
      });
    }

    const nextBtn = paginationGroup.querySelector('.next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentPage++;
        renderProducts();
        scrollToProducts();
      });
    }
  }

  function scrollToProducts() {
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Category Pill Event Listeners
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.textContent.trim();
      currentPage = 1;
      renderProducts();
    });
  });

  // Search Bar Realtime Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderProducts();
    });
  }

  // Initial Render
  renderProducts();
});
