"use client";

import Image from "next/image";
import { useState } from "react";
import { Product, CartItem } from "./types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  addToCart: (item: CartItem) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}(s) added to your cart.`,
    });
    console.log("Added to cart:", { ...product, quantity });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="mb-4"
        />
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <p>Farmer: {product.farmer.name}</p>
        <p>Rating: {product.farmer.rating}/5</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-16 px-2 py-1 border rounded"
        />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
