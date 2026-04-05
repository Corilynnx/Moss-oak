

export interface Product {
 id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isBestSeller?: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    updateQuantity: (id: number, quantity: number) => void; // ✅ number
    removeFromCart: (productId: number) => void;            // ✅ number
    clearCart: () => void;
    getTotalPrice: () => number;
    totalItems: number; // ✅ added totalItems to context
}

