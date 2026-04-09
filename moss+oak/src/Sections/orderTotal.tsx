import { useContext } from 'react';
import { CheckoutContext } from '../Context/checkoutContext';
import { PromoCode } from './promoCode';

export function OrderTotal() {
  const context = useContext(CheckoutContext);
  
  if (!context) {
    return null;
  }
  
  const { subtotal, discount, tax, total } = context;

  return (
    <div>
      <PromoCode />
      <div>
        <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div><span>Shipping</span><span>Free</span></div>
        {discount > 0 && <div><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
        <div><span>Tax</span><span>${tax.toFixed(2)}</span></div>
        <div><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>
    </div>
  );
}