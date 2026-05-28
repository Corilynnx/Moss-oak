import { type ReactNode } from 'react';
import { useCheckout } from '../Hooks/useCheckout';
import { CheckoutContext } from '../Context/checkoutContext';
import { useCart } from '../Context/cartContext'; // ✅ from context, not the hook

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const { getTotalPrice } = useCart(); // ✅ reads from shared CartProvider state

  const checkout = useCheckout(getTotalPrice());

  return (
    <CheckoutContext.Provider value={checkout}>
      {children}
    </CheckoutContext.Provider>
  );
}