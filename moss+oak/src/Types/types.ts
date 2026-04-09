

export type CheckoutStep = 'shipping' | 'payment' | 'review';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

export interface ShippingAddress {
    lastName: string;
    firstName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface PaymentDetails {
  method: 'card' | 'paypal' | 'shopPay';
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

export interface CheckoutState {
   step: CheckoutStep;
  items: CartItem[];
  shipping: Partial<ShippingAddress>;
  payment: Partial<PaymentDetails>;
  promoCode?: string;
  discount?: number;
}

