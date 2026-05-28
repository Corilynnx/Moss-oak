import { useContext, useState } from 'react';
import { CheckoutContext } from '../Context/checkoutContext';
import { type PaymentDetails } from '../Types/types';
import styles from '../styles/paymentForm.module.css';

export function PaymentForm() {
  const [method, setMethod] = useState<PaymentDetails['method']>('card');
  const context = useContext(CheckoutContext);
  if (!context) {
    return null;
  }
  const { payment, updatePayment, nextStep, prevStep } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: PaymentDetails = {
      method,
      ...(method === 'card' && {
        cardNumber: (form.elements.namedItem('cardNumber') as HTMLInputElement).value,
        expiry:     (form.elements.namedItem('expiry')     as HTMLInputElement).value,
        cvv:        (form.elements.namedItem('cvv')        as HTMLInputElement).value,
      }),
    };
    updatePayment(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {(['card', 'paypal', 'shopPay'] as const).map(m => (
          <button key={m} type="button" onClick={() => setMethod(m)} className={`${styles['shipping-btn']} ${method === m ? styles['active'] : ''}`}>
            {m}
          </button>
        ))}
      </div>

      {method === 'card' && (
        <>
          <input name="cardNumber" defaultValue={payment.cardNumber} placeholder="Card number" className={styles['shipping-input']} required />
          <input name="expiry"     defaultValue={payment.expiry}     placeholder="MM / YY"     className={styles['shipping-input-m']} required />
          <input name="cvv"        defaultValue={payment.cvv}        placeholder="CVV"          className={styles['shipping-input-m']} required />
        </>
      )}

      {method === 'paypal' && (
        <p>You'll be redirected to PayPal after reviewing your order.</p>
      )}

      {method === 'shopPay' && (
        <p>You'll be redirected to Shop Pay after reviewing your order.</p>
      )}

      <button type="button" onClick={prevStep} className={styles['shipping-button']}>Back</button>
      <button type="submit" className={styles['shipping-button']}>Review order</button>
    </form>
  );
}