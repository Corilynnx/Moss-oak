import { CheckoutContext } from '../Context/checkoutContext';
import React, { useContext } from 'react';
import styles from '../styles/shippingForm.module.css';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export function ShippingForm() {
  const context = useContext(CheckoutContext);
  
  if (!context) {
    return <div>Error: CheckoutContext not found</div>;
  }

  const { shippingAddress, updateShipping, nextStep, prevStep } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: ShippingAddress = {
  firstName:   (form.elements.namedItem('firstName')   as HTMLInputElement).value,
  lastName:    (form.elements.namedItem('lastName')    as HTMLInputElement).value,
  addressLine1:(form.elements.namedItem('addressLine1')as HTMLInputElement).value,
  addressLine2:(form.elements.namedItem('addressLine2')as HTMLInputElement).value,
  city:        (form.elements.namedItem('city')        as HTMLInputElement).value,
  state:       (form.elements.namedItem('state')       as HTMLInputElement).value,
  postalCode:  (form.elements.namedItem('postalCode')  as HTMLInputElement).value,
  country:     (form.elements.namedItem('country')     as HTMLInputElement).value,
};
    updateShipping(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" defaultValue={shippingAddress.firstName} placeholder="First name" className={styles['shipping-input']} required />
      <input name="lastName"  defaultValue={shippingAddress.lastName}  placeholder="Last name"  className={styles['shipping-input']} required />
      <input name="addressLine1"   defaultValue={shippingAddress.addressLine1}   placeholder="Address"    className={styles['shipping-input']} required />
      <input name="addressLine2"   defaultValue={shippingAddress.addressLine2}   placeholder="Address 2 (optional)" className={styles['shipping-input']} />
      <input name="city"      defaultValue={shippingAddress.city}      placeholder="City"       className={styles['shipping-input']} required />
      <input name="state"     defaultValue={shippingAddress.state}     placeholder="State"      className={styles['shipping-input']} required />
      <input name="postalCode"       defaultValue={shippingAddress.postalCode}       placeholder="ZIP"        className={styles['shipping-input']} required />
      <input name="country"       defaultValue={shippingAddress.country}       placeholder="Country"        className={styles['shipping-input']} required />
      <button type="submit" className={styles['shipping-button']}>Continue to payment</button>
      <button type="button" onClick={prevStep} className={styles['shipping-button']}>Back</button>
    </form>
  );
}