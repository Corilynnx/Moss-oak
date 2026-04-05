import styles from '../styles/Cart.module.css';
import { useCart } from '../Context/cartContext';
import Footer from '../Components/Layout/Footer';

const Cart = () => {
    const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

    if (items.length === 0) {
        return (
            <div className={styles['cart-page']}>
                <div className={styles['cart-header']}>
                    <h1 className={styles['cart-title']}>Your Cart</h1>
                    <p className={styles['cart-subtitle']}>
                        Your cart is currently empty. Head back to the shop to discover our products.
                    </p>
                </div>
                <div className={styles['cart-empty']}>
                    <span className={styles['cart-empty-icon']}>🛋️</span>
                    <p className={styles['cart-empty-text']}>No items yet</p>
                    <a href="/shop" className={styles['cart-shop-link']}>Continue Shopping</a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles['cart-page']}>
            <div className={styles['cart-header']}>
                <h1 className={styles['cart-title']}>Your Cart</h1>
                <p className={styles['cart-subtitle']}>
                    Review your selections before checkout.
                </p>
            </div>

            <div className={styles['cart-layout']}>
                {/* Cart Items */}
                <div className={styles['cart-items']}>
                    {items.map(({ product, quantity }) => (
                        <div key={product.id} className={styles['cart-item']}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles['cart-item-img']}
                            />

                            <div className={styles['cart-item-info']}>
                                <h3 className={styles['cart-item-name']}>{product.name}</h3>
                                <p className={styles['cart-item-category']}>{product.category}</p>
                                <p className={styles['cart-item-price']}>
                                    ${product.price.toLocaleString()}
                                </p>
                            </div>

                            <div className={styles['cart-item-controls']}>
                                <div className={styles['cart-qty']}>
                                    <button
                                        className={styles['cart-qty-btn']}
                                        onClick={() => updateQuantity(product.id, quantity - 1)}
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span className={styles['cart-qty-value']}>{quantity}</span>
                                    <button
                                        className={styles['cart-qty-btn']}
                                        onClick={() => updateQuantity(product.id, quantity + 1)}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>

                                <p className={styles['cart-item-subtotal']}>
                                    ${(product.price * quantity).toLocaleString()}
                                </p>

                                <button
                                    className={styles['cart-remove-btn']}
                                    onClick={() => removeFromCart(product.id)}
                                    aria-label="Remove item"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className={styles['cart-summary']}>
                    <h2 className={styles['cart-summary-title']}>Order Summary</h2>

                    <div className={styles['cart-summary-rows']}>
                        {items.map(({ product, quantity }) => (
                            <div key={product.id} className={styles['cart-summary-row']}>
                                <span>{product.name} × {quantity}</span>
                                <span>${(product.price * quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles['cart-summary-divider']} />

                    <div className={styles['cart-summary-total']}>
                        <span>Total</span>
                        <span>${getTotalPrice().toLocaleString()}</span>
                    </div>

                    <button className={styles['cart-checkout-btn']}>
                        Proceed to Checkout
                    </button>

                    <button
                        className={styles['cart-clear-btn']}
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                </div>
                
            </div>
            <Footer />
           
        </div>
    );
};

export default Cart;