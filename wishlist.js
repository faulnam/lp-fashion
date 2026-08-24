/* ==========================================================================
   FIFA WISHLIST MANAGER (localStorage & UI Synchronization)
   ========================================================================== */

const FIFA_WISHLIST_KEY = 'fifa_wishlist_items';

// Retrieve wishlist array from localStorage
function getWishlist() {
  const data = localStorage.getItem(FIFA_WISHLIST_KEY);
  return data ? JSON.parse(data) : [
    // Pre-populate with 1 default favorite item for demonstration if empty
  ];
}

// Save wishlist array to localStorage
function saveWishlist(items) {
  localStorage.setItem(FIFA_WISHLIST_KEY, JSON.stringify(items));
  updateWishlistBadge();
}

// Check if a product ID is favorited
function isWishlisted(id) {
  const list = getWishlist();
  return list.some(item => String(item.id) === String(id));
}

// Toggle wishlist status for a product
function toggleWishlist(product) {
  let list = getWishlist();
  const index = list.findIndex(item => String(item.id) === String(product.id));

  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(product);
  }

  saveWishlist(list);
  return index < 0; // returns true if added, false if removed
}

// Update Wishlist Badge in Navbar
function updateWishlistBadge() {
  const list = getWishlist();
  const count = list.length;
  
  document.querySelectorAll('.wishlist-btn-wrapper, .wishlist-btn').forEach(btn => {
    let badge = btn.querySelector('.wish-badge');
    if (!badge && count > 0) {
      badge = document.createElement('span');
      badge.className = 'wish-badge';
      btn.style.position = 'relative';
      btn.appendChild(badge);
    }
    
    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  });
}

// Initialize navbar listeners on load
document.addEventListener('DOMContentLoaded', () => {
  updateWishlistBadge();

  // Convert all wishlist buttons in navbar to links pointing to wishlist.html
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', (e) => {
      // If it's a button, navigate to wishlist.html
      if (btn.tagName === 'BUTTON') {
        window.location.href = 'wishlist.html';
      }
    });
  });
});
