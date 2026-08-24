import React, { createContext, useContext, useState, useEffect } from 'react';

const FIFA_WISHLIST_KEY = 'fifa_wishlist_items';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const data = localStorage.getItem(FIFA_WISHLIST_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to parse wishlist from localStorage', e);
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(FIFA_WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const isWishlisted = (id) => {
    return wishlist.some(item => String(item.id) === String(id));
  };

  const toggleWishlist = (product) => {
    let isAdded = false;
    setWishlist(prev => {
      const exists = prev.some(item => String(item.id) === String(product.id));
      if (exists) {
        isAdded = false;
        return prev.filter(item => String(item.id) !== String(product.id));
      } else {
        isAdded = true;
        return [...prev, product];
      }
    });
    return isAdded;
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => String(item.id) !== String(productId)));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
        isWishlistOpen,
        setIsWishlistOpen
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
