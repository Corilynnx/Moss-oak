// useCart.ts
import { useState } from 'react';
import type { CartItem } from '../Types/index';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) =>
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });

  const removeItem = (id: string) =>
    setItems(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id: string, quantity: number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, subtotal };
}