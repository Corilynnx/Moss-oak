import styles from '../styles/cartPreview.module.css';
import { useCart } from '../Context/cartContext';
import { Link } from 'react-router-dom';

const CartPreview = () => {
  const { items, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className={styles['cart-preview']}>
      {items.length === 0 ? (
        <div className={styles['cart-empty']}>
          <span className={styles['cart-empty-icon']}>🛋️</span>
          <p className={styles['cart-empty-text']}>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className={styles['cart-preview-items']}>
            {items.slice(0, 3).map(({ product, quantity }) => (
              <div key={product.id} className={styles['cart-item']}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles['cart-item-img']}
                />

                <div className={styles['cart-item-info']}>
                  <h4 className={styles['cart-item-name']}>
                    {product.name}
                  </h4>
                  <p className={styles['cart-item-price']}>
                    ${product.price.toLocaleString()} × {quantity}
                  </p>
                </div>

                <button
                  className={styles['cart-remove-btn']}
                  onClick={() => removeFromCart(product.id)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className={styles['cart-summary-divider']} />

          <div className={styles['cart-preview-footer']}>
            <div className={styles['cart-summary-total']}>
              <span>Total</span>
              <span>${getTotalPrice().toLocaleString()}</span>
            </div>

            <div className={styles['cart-preview-actions']}>
            

              <Link to="/cart">
                <button className={styles['cart-checkout-btn']}>
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPreview;