
import { useCart } from '../Context/cartContext';
import styles from '../styles/orderSummary.module.css';


export function OrderSummary() {
  const { items, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) return <p>Your cart is empty.</p>;




  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul className={styles['order-summary']}>
      {items.map(({ product, quantity }) => (
        <li key={product.id}>
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} width={52} height={52} />
          )}
          <div className={styles['product-info']}>
            <p>{product.name}</p>
            {product.variant && <p>{product.variant}</p>}
          </div>
          <input
            className={styles['quantity-input']}
            type="number"
            min={1}
            value={quantity}
            onChange={e => updateQuantity(product.id, Number(e.target.value))}
          />
          <p>${(product.price * quantity).toFixed(2)}</p>
          <button className={styles['remove-button']} onClick={() => removeFromCart(product.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}