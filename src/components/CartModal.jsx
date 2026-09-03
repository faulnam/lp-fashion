import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatRupiah } from '../data/products';

export default function CartModal() {
  const { isCartOpen, setIsCartOpen, cartItems, totalCount, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addToast } = useToast();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    // Nomor WhatsApp Admin FIFA Hijab
    const waNumber = '628123808394';

    // Susun pesan format pemesanan yang rapi
    let message = `Halo Admin *FIFA Hijab*, saya ingin melakukan pemesanan busana / hijab berikut:\n\n`;
    message += `📋 *RINCIAN PESANAN:*\n`;

    cartItems.forEach((item, index) => {
      const itemSubtotal = (item.numericPrice || 0) * (item.quantity || 1);
      message += `${index + 1}. *${item.name}*\n`;
      message += `   - Jumlah: ${item.quantity || 1} pcs\n`;
      message += `   - Harga: ${formatRupiah(itemSubtotal)}\n\n`;
    });

    message += `------------------------------------\n`;
    message += `💰 *TOTAL PEMBAYARAN:* *${formatRupiah(totalPrice)}*\n`;
    message += `🚚 *PENGIRIMAN:* Bebas Biaya Kirim (Gratis)\n\n`;
    message += `Mohon konfirmasi ketersediaan stok & estimasi pengiriman ke alamat saya. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedMessage}`;

    addToast('Mengarahkan ke WhatsApp untuk menyelesaikan pesanan...', 'info');

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h2>Keranjang Belanja</h2>
            <span className="cart-count-tag">{totalCount} Barang</span>
          </div>
          <button 
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Tutup Keranjang"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon">🛒</div>
              <h3>Keranjang Masih Kosong</h3>
              <p>Tambahkan busana muslimah & hijab impian Anda dengan menekan tombol (+) pada katalog produk.</p>
              <button 
                type="button" 
                className="shop-now-btn" 
                style={{ marginTop: '16px' }}
                onClick={() => setIsCartOpen(false)}
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map(item => {
                const itemTotal = (item.numericPrice || 0) * (item.quantity || 1);
                return (
                  <div key={item.id} className="cart-item-row">
                    <div className="cart-item-img">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={item.isCover ? '' : 'transparent-bg-img'} 
                      />
                    </div>
                    <div className="cart-item-info">
                      <span className="cart-item-cat">{item.category || 'Modest Wear'}</span>
                      <h4 className="cart-item-name">{item.name}</h4>
                      <span className="cart-item-price">{formatRupiah(itemTotal)}</span>
                      <div className="cart-qty-controls">
                        <button 
                          type="button" 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Kurangi kuantitas"
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity || 1}</span>
                        <button 
                          type="button" 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Tambah kuantitas"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      type="button"
                      className="cart-item-delete"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Hapus dari keranjang"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-row">
              <span>Subtotal Produk:</span>
              <span className="summary-price">{formatRupiah(totalPrice)}</span>
            </div>
            <div className="cart-summary-row shipping">
              <span>Pengiriman Standar:</span>
              <span className="free-shipping">GRATIS</span>
            </div>
            <div className="cart-total-row">
              <span>Total Pembayaran:</span>
              <span className="total-price">{formatRupiah(totalPrice)}</span>
            </div>
            
            {/* WhatsApp Checkout Button */}
            <button 
              type="button"
              className="checkout-btn wa-checkout-btn"
              onClick={handleWhatsAppCheckout}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.49 13.45 14.32 13.7C14.16 13.95 13.68 14.51 13.54 14.68C13.39 14.84 13.25 14.86 13 14.74C12.75 14.62 11.95 14.36 11 13.51C10.26 12.85 9.75 12.03 9.61 11.78C9.46 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.09 10.84C10.22 10.7 10.26 10.6 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.88 9.77 8.68 9.57 8.19C9.37 7.71 9.17 7.78 9.02 7.77H8.55C8.38 7.77 8.12 7.83 7.9 8.07C7.67 8.32 7.04 8.91 7.04 10.12C7.04 11.33 7.92 12.5 8.04 12.66C8.17 12.82 9.78 15.31 12.24 16.37C12.83 16.62 13.28 16.77 13.64 16.88C14.23 17.07 14.77 17.04 15.2 16.98C15.68 16.91 16.67 16.38 16.88 15.8C17.08 15.21 17.08 14.71 17.02 14.61C16.96 14.51 16.81 14.45 16.56 14.37Z" />
              </svg>
              <span>Checkout via WhatsApp &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
