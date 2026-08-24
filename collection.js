/* ==========================================================================
   FIFA COLLECTION LOOKBOOK INTERACTIVE FILTERING SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Lookbook Collections Dataset
  const lookbookCards = [
    {
      id: 'look-1',
      theme: 'Skandinavia',
      title: 'Set Ruang Makan Skandinavia',
      desc: 'Paduan kayu solid alami, kursi upholstered lembut, dan pencahayaan hangat.',
      price: '$749.00',
      oldPrice: '$899.00',
      badge: 'Koleksi Unggulan',
      image: 'assets/dining_room.png',
      isMain: true
    },
    {
      id: 'look-2',
      theme: 'Modern Luxury',
      title: 'Modern Comfort Living',
      desc: 'Kombinasi sofa 3-dudukan & armchair tufted khaki.',
      price: '$1,399.00',
      oldPrice: '$1,599.00',
      badge: 'Seri Ruang Tamu',
      image: 'assets/promo_armchair.png',
      isPromo: true
    },
    {
      id: 'look-3',
      theme: 'Compact Living',
      title: 'Sudut Santai Minimalis',
      price: 'Bundel $399.00',
      badge: 'COMPACT LIVING',
      isCompact: true,
      compactClass: ''
    },
    {
      id: 'look-4',
      theme: 'Japandi Warm',
      title: 'Kamar Tidur Japandi',
      price: 'Bundel $629.00',
      badge: 'APARTMENT SERIES',
      isCompact: true,
      compactClass: 'compact-peach'
    }
  ];

  // Bundle Sets Dataset
  const bundleSets = [
    {
      id: 'b-1',
      theme: 'Modern Luxury',
      name: 'Set Ruang Tamu Complete',
      items: 'Termasuk: Sofa Grey, Meja Kopi, & Sekat Kayu',
      price: '$1,399.00',
      oldPrice: '$1,599.00',
      badge: 'Hemat $200',
      image: 'assets/hero_main.png',
      isCover: true
    },
    {
      id: 'b-2',
      theme: 'Skandinavia',
      name: 'Set Ruang Makan Solid',
      items: 'Termasuk: Meja Kayu Solid + 6 Kursi Upholstered',
      price: '$749.00',
      oldPrice: '$899.00',
      badge: 'Hemat $150',
      image: 'assets/dining_room.png',
      isCover: true
    },
    {
      id: 'b-3',
      theme: 'Compact Living',
      name: 'Set Sudut Reading Corner',
      items: 'Termasuk: Lounge Chair Skandinavia + Side Table',
      price: '$399.00',
      oldPrice: '$449.00',
      badge: 'Hemat $50',
      image: 'assets/lounge_chair.png',
      isCover: false
    },
    {
      id: 'b-4',
      theme: 'Japandi Warm',
      name: 'Set Ruang Tamu Japandi Warm',
      items: 'Termasuk: Armchair Leather Khaki + Side Table Kayu',
      price: '$529.00',
      oldPrice: '$629.00',
      badge: 'Hemat $100',
      image: 'assets/promo_armchair.png',
      isCover: false
    },
    {
      id: 'b-5',
      theme: 'Skandinavia',
      name: 'Set Relax Lounge Skandinavia',
      items: 'Termasuk: Accent Chair Grey + Coffe Cup Table',
      price: '$349.00',
      oldPrice: '$419.00',
      badge: 'Hemat $70',
      image: 'assets/lounge_chair.png',
      isCover: false
    },
    {
      id: 'b-6',
      theme: 'Modern Luxury',
      name: 'Set Sofa Chesterfield Executive',
      items: 'Termasuk: 3-Seater Charcoal Sofa + Side Ottoman',
      price: '$999.00',
      oldPrice: '$1,199.00',
      badge: 'Hemat $200',
      image: 'assets/sofa_3seater.png',
      isCover: false
    }
  ];

  let currentTheme = 'Semua Tema';
  const themePills = document.querySelectorAll('.collection-theme-card .pill-btn');
  const bundleContainer = document.querySelector('.bundle-grid');

  // Filter and render bundles
  function renderBundles() {
    const filtered = bundleSets.filter(item => {
      if (currentTheme === 'Semua Tema') return true;
      return item.theme.toLowerCase() === currentTheme.toLowerCase();
    });

    if (filtered.length === 0) {
      bundleContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #EBF5F9; border-radius: 20px; animation: fadeIn 0.3s ease;">
          <h3 style="font-size: 18px; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Koleksi Tema "${currentTheme}" Segera Hadir</h3>
          <p style="font-size: 13px; color: #64748B;">Pilih tema interior lain untuk melihat inspirasi paket bundel ruangan.</p>
        </div>
      `;
      return;
    }

    bundleContainer.innerHTML = filtered.map(item => `
      <div class="bento-card bundle-card" style="animation: fadeIn 0.35s ease;">
        <span class="product-badge badge-sale">${item.badge}</span>
        <div class="product-img-box">
          <img src="${item.image}" alt="${item.name}" class="${item.isCover ? '' : 'transparent-bg-img'}" ${item.isCover ? 'style="object-fit: cover; border-radius: 14px;"' : ''}>
        </div>
        <div class="bundle-details">
          <div style="font-size: 10.5px; font-weight: 700; color: #64748B; margin-bottom: 2px;">TEMA: ${item.theme.toUpperCase()}</div>
          <h3 class="bundle-name">${item.name}</h3>
          <p class="bundle-items">${item.items}</p>
          <div class="bundle-price-bar">
            <span class="bundle-price">${item.price} <span class="old">${item.oldPrice}</span></span>
            <a href="shop.html" class="btn-bundle-buy">Beli Paket</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Theme Pill Click Handler
  themePills.forEach(pill => {
    pill.addEventListener('click', () => {
      themePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentTheme = pill.textContent.trim();
      renderBundles();
    });
  });

  // Initial Render
  renderBundles();
});
