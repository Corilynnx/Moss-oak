import { createContext, useState, type JSX, type ReactNode } from 'react';
import type { CartContextType, CartItem, Product } from '../Types/index';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

 
  // ✅ changed id: string → number
  function removeFromCart(id: number) {
    return setItems(prev => prev.filter(i => i.product.id !== id));
  }

  // ✅ changed id: string → number
  const updateQuantity = (id: number, quantity: number) =>
    setItems(prev =>
      quantity === 0
        ? prev.filter(i => i.product.id !== id)
        : prev.map(i => i.product.id === id ? { ...i, quantity } : i)
    );

  const clearCart = () => setItems([]);

  // ✅ actually implemented
  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

