import { Produce } from "@/lib/types/type";
import { useState, useEffect } from "react";

export interface CartItem extends Produce {
  quantity: number;
}

export function useCart(filteredProducts: Produce[]) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const updatedCart = cartItems.filter((item) =>
      filteredProducts.some((product) => product.id === item.id)
    );
    setCartItems(updatedCart);
    console.log("Cart updated based on filtered products:", updatedCart);
  }, [filteredProducts]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return { cartItems, addToCart, removeFromCart, updateQuantity };
}
