import { useContext } from 'react';
import { CheckoutContext } from '../Context/checkoutContext';
import { OrderSummary } from './orderSummary';
import { OrderTotal } from './orderTotal';
import styles from '../styles/Review.module.css';


export function ReviewStep() {
  const context = useContext(CheckoutContext);
  if (!context) {
    return null;
  }
  const { shippingAddress: shipping, payment, placeOrder, prevStep, isSubmitting, error } = context;

  return (
    <div>
      <section>
        <p className={styles['shipping-input']}>{shipping.firstName} {shipping.lastName}</p>
        <p className={styles['shipping-input']}>{shipping.addressLine1}{shipping.addressLine2 ? `, ${shipping.addressLine2}` : ''}</p>
        <p className={styles['shipping-input']}>{shipping.city}, {shipping.state} {shipping.postalCode}</p>
      </section>

      <section>
        <h2>Payment</h2>
        <p className={styles['payment-input']}>{payment.method === 'card' ? `Card ending in ${payment.cardNumber?.slice(-4)}` : payment.method}</p>
      </section>

      <OrderSummary />
    
      <OrderTotal />

      {error && <p role="alert">{error}</p>}

      <button type="button" onClick={prevStep} disabled={isSubmitting}>Back</button>
      <button type="button" onClick={placeOrder} disabled={isSubmitting}>
        {isSubmitting ? 'Placing order...' : 'Place order'}
      </button>
    </div>
  );
}