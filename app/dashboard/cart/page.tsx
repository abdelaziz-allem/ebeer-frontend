"use client";

import { useState, useEffect } from "react";
import { products } from "./data";
import { Product } from "./types";
import ProductCard from "./ProductCard";
import FilterButtons from "./FilterButtons";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "./useCart";
import { Vegan } from "lucide-react";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduce, setSelectedProduce] = useState<string | null>(null);
  const { cartItems, addToCart, removeFromCart, updateQuantity } =
    useCart(filteredProducts);

  useEffect(() => {
    const filtered = selectedProduce
      ? products.filter(
          (product) =>
            product.name.toLowerCase() === selectedProduce.toLowerCase()
        )
      : products;
    setFilteredProducts(filtered);
    console.log("Filtered products:", filtered);
  }, [selectedProduce]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <Vegan size={32} className=" text-emerald-500" />{" "}
        <h1 className="text-4xl font-bold mb-8">IIbso Khudrad</h1>
      </div>
      <FilterButtons
        selectedProduce={selectedProduce}
        setSelectedProduce={setSelectedProduce}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <ShoppingCart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
