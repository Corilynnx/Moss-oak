import { useContext } from 'react';
import { CheckoutContext } from '../Context/checkoutContext';
import { OrderSummary } from './orderSummary';
import { OrderTotal } from './orderTotal';

export function ReviewStep() {
  const context = useContext(CheckoutContext);
  if (!context) {
    return null;
  }
  const { shippingAddress: shipping, payment, placeOrder, prevStep, isSubmitting, error } = context;

  return (
    <div>
      <section>
        <p>{shipping.firstName} {shipping.lastName}</p>
        <p>{shipping.addressLine1}{shipping.addressLine2 ? `, ${shipping.addressLine2}` : ''}</p>
        <p>{shipping.city}, {shipping.state} {shipping.postalCode}</p>
      </section>

      <section>
        <h2>Payment</h2>
        <p>{payment.method === 'card' ? `Card ending in ${payment.cardNumber?.slice(-4)}` : payment.method}</p>
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