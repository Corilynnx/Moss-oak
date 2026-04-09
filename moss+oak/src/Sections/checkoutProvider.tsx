 import { type ReactNode } from 'react';
import { useCheckout } from '../Hooks/useCheckout';
import { CheckoutContext } from '../Context/checkoutContext';

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const checkout = useCheckout();

  return (
    <CheckoutContext.Provider value={checkout}>
      {children}
    </CheckoutContext.Provider>
  );
}