import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeBento from './components/HomeBento';
import ShopBento from './components/ShopBento';
import CollectionBento from './components/CollectionBento';
import AboutBento from './components/AboutBento';
import ContactBento from './components/ContactBento';
import WishlistBento from './components/WishlistBento';
import CartModal from './components/CartModal';
import WishlistDrawer from './components/WishlistDrawer';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleSearchNavigate = (query, navigate = true) => {
    setSearchQuery(query);
    if (navigate) {
      setActivePage('shop');
    }
  };

  return (
    <WishlistProvider>
      <CartProvider>
        <ToastProvider>
          {/* Main Canvas Frame Container */}
          <div className="page-canvas">
            {/* 1. NAVBAR */}
            <Navbar
              activePage={activePage}
              setActivePage={setActivePage}
            />

            {/* 2. DEDICATED BENTO PAGES */}
            {activePage === 'home' && (
              <HomeBento
                setActivePage={setActivePage}
                onSearchNavigate={handleSearchNavigate}
                onOpenStoreFinder={() => setActivePage('contact')}
              />
            )}

            {activePage === 'shop' && (
              <ShopBento
                initialSearchQuery={searchQuery}
              />
            )}

            {activePage === 'collection' && (
              <CollectionBento
                setActivePage={setActivePage}
              />
            )}

            {activePage === 'about' && (
              <AboutBento
                setActivePage={setActivePage}
              />
            )}

            {activePage === 'contact' && (
              <ContactBento />
            )}

            {activePage === 'wishlist' && (
              <WishlistBento
                setActivePage={setActivePage}
              />
            )}
          </div>

          {/* Global Drawers */}
          <WishlistDrawer setActivePage={setActivePage} />
          <CartModal />
        </ToastProvider>
      </CartProvider>
    </WishlistProvider>
  );
}
