import { useState } from 'react';
import type { ShippingAddress, PaymentDetails, CheckoutStep } from '../Types/types';

// ✅ Moved outside the hook — stable references, no re-creation on render
const STEPS: CheckoutStep[] = ['shipping', 'payment', 'review'];

const initialShippingAddress: ShippingAddress = {
  firstName: '',
  lastName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',

};

const initialPaymentDetails: PaymentDetails = {
  cardNumber: '',
  expiry: '',
  cvv: '',
  method: 'card',
};

export function useCheckout(subtotal: number = 0) {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>(initialShippingAddress); 
  const [payment, setPayment] = useState<PaymentDetails>(initialPaymentDetails);                   
  const [discount, setDiscount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const nextStep = () =>
    setStep(prev => STEPS[STEPS.indexOf(prev) + 1] ?? prev);

  const prevStep = () =>
    setStep(prev => STEPS[STEPS.indexOf(prev) - 1] ?? prev);

  const goToStep = (s: CheckoutStep) => setStep(s);

  const updateShipping = (data: Partial<ShippingAddress>) =>
    setShippingAddress(prev => ({ ...prev, ...data }));

  const updatePayment = (data: Partial<PaymentDetails>) =>
    setPayment(prev => ({ ...prev, ...data }));

  const applyPromoCode = (code: string) => {
    if (code === 'SAVE10') {
      setDiscount(10);
    } else {
      setError('Invalid promo code');
    }
  };

  const tax = (subtotal - discount) * 0.075;
  const total = subtotal - discount + tax;

  const placeOrder = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Simulate API call
    } catch (e) {
      setError('Something went wrong. Please try again.');
      console.error(e); // ✅ at minimum, log it
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step,
    nextStep,
    prevStep,
    goToStep,
    shippingAddress,
    updateShipping,
    payment,
    updatePayment,
    discount,
    applyPromoCode,
    tax,
    total,
    subtotal,
    isSubmitting,
    error,
    placeOrder,
  };
}