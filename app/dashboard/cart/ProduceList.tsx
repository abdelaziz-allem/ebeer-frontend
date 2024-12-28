"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "./useCart";
import { Vegan } from "lucide-react";
import { Produce, userInSessionType } from "@/lib/types/type";

interface ProduceListProps {
  produce: Produce[];
  userInSession: userInSessionType;
}

export default function ProduceList({
  produce,
  userInSession,
}: ProduceListProps) {
  const [filteredProducts, setFilteredProducts] = useState<Produce[]>(produce);
  const [selectedProduce, setSelectedProduce] = useState<string | null>(null);
  const { cartItems, addToCart, removeFromCart, updateQuantity } =
    useCart(filteredProducts);

  const handleFilterChange = (filter: string | null) => {
    setSelectedProduce(filter);
  };

  useEffect(() => {
    const filtered = selectedProduce
      ? produce.filter(
          (i) => i.name.toLowerCase() === selectedProduce.toLowerCase()
        )
      : produce;
    setFilteredProducts(filtered);
  }, [selectedProduce]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6 items-center">
        <Vegan size={32} className="text-emerald-500" />
        <h1 className="text-4xl font-bold mb-8">IIbso Khudrad</h1>
      </div>

      <div className="flex gap-4 mb-8">
        {["onion", "cabbage", "carrot", "cucumber", "tomato", "potato"].map(
          (item) => (
            <button
              key={item}
              className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                selectedProduce === item
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-emerald-500 border-emerald-500"
              }`}
              onClick={() => handleFilterChange(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          )
        )}
        <button
          className={`px-4 py-2 border rounded-lg text-sm font-medium ${
            !selectedProduce
              ? "bg-emerald-500 text-white"
              : "bg-white text-emerald-500 border-emerald-500"
          }`}
          onClick={() => handleFilterChange(null)}
        >
          All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            produce={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <ShoppingCart
        userInSession={userInSession}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
