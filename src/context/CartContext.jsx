import React, { createContext, useContext, useState, useEffect } from 'react';
import { formatRupiah } from '../data/products';

const FIFA_CART_KEY = 'fifa_cart_items_v2';

const DEFAULT_CART = [
  {
    id: 1,
    name: 'Kursi Santai Skandinavia',
    price: 'Rp 4.590.000',
    numericPrice: 4590000,
    quantity: 1,
    image: 'assets/lounge_chair.png',
    category: 'Kursi Santai'
  },
  {
    id: 2,
    name: 'Sofa 3-Dudukan – Cloud Grey',
    price: 'Rp 13.890.000',
    numericPrice: 13890000,
    quantity: 1,
    image: 'assets/sofa_3seater.png',
    category: 'Sofa & Armchair'
  },
  {
    id: 3,
    name: 'Armchair Accent Khaki',
    price: 'Rp 6.190.000',
    numericPrice: 6190000,
    quantity: 1,
    image: 'assets/promo_armchair.png',
    category: 'Sofa & Armchair'
  }
];

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const data = localStorage.getItem(FIFA_CART_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_CART;
    } catch (e) {
      console.error('Failed to read cart from localStorage', e);
      return DEFAULT_CART;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(FIFA_CART_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => String(item.id) === String(product.id));
      if (existing) {
        return prev.map(item =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        const numPrice = typeof product.numericPrice === 'number'
          ? product.numericPrice
          : parseFloat(String(product.price).replace(/[^0-9]/g, '')) || 0;
        return [...prev, { ...product, numericPrice: numPrice, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (String(item.id) === String(productId)) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => String(item.id) !== String(productId)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.numericPrice || 0) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCount,
        totalPrice,
        formattedTotalPrice: formatRupiah(totalPrice),
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
