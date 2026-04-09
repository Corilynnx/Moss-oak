import { createContext, useContext } from 'react';
import type { useCheckout } from '../Hooks/useCheckout';

export type CheckoutContextValue = ReturnType<typeof useCheckout>;

export const CheckoutContext = createContext<CheckoutContextValue | undefined>(undefined);

export function useCheckoutContext() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckoutContext must be used within a CheckoutProvider');
  }
  return context;
}