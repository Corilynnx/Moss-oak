
import { useCart } from '../Context/cartContext';

export function OrderSummary() {
  const { items, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) return <p>Your cart is empty.</p>;




  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {items.map(({ product, quantity }) => (
        <li key={product.id}>
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} width={52} height={52} />
          )}
          <div>
            <p>{product.name}</p>
            {product.variant && <p>{product.variant}</p>}
          </div>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => updateQuantity(product.id, Number(e.target.value))}
          />
          <p>${(product.price * quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}