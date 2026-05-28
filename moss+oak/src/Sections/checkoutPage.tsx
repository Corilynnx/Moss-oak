// CheckoutPage.tsx
import { CheckoutProvider } from './checkoutProvider';
import { CheckoutStepper } from './checkoutStepper';
import { OrderSummary } from './orderSummary';
import { OrderTotal } from './orderTotal';
import Footer from '../Components/Layout/Footer';
import styles from '../styles/Checkout.module.css';
import { PromoCode } from './promoCode';

export function CheckoutPage() {
  return (
    <CheckoutProvider>
      <div className={styles['checkout-layout']}>
        <div className={styles['checkout-main']}>
          <h2 className={styles['checkout-title']}>Checkout</h2>
          <CheckoutStepper />
        </div>
        <div className={styles['checkout-sidebar']}>
          <OrderSummary />
          <OrderTotal />
          <PromoCode />
        </div>
      </div>
      <Footer />
    </CheckoutProvider>
  );
}