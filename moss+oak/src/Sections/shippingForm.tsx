import { CheckoutContext } from '../Context/checkoutContext';
import React, { useContext } from 'react';

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
      <input name="firstName" defaultValue={shippingAddress.firstName} placeholder="First name" required />
      <input name="lastName"  defaultValue={shippingAddress.lastName}  placeholder="Last name"  required />
      <input name="addressLine1"   defaultValue={shippingAddress.addressLine1}   placeholder="Address"    required />
      <input name="addressLine2"   defaultValue={shippingAddress.addressLine2}   placeholder="Address 2 (optional)" />
      <input name="city"      defaultValue={shippingAddress.city}      placeholder="City"       required />
      <input name="state"     defaultValue={shippingAddress.state}     placeholder="State"      required />
      <input name="postalCode"       defaultValue={shippingAddress.postalCode}       placeholder="ZIP"        required />
      <input name="country"       defaultValue={shippingAddress.country}       placeholder="Country"        required />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Continue to payment</button>
    </form>
  );
}