"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Produce } from "@/lib/types/type";

interface ProductCardProps {
  produce: Produce;
  addToCart: (item: CartItem) => void;
}

export interface CartItem extends Produce {
  quantity: number;
}

export default function ProductCard({ produce, addToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...produce, quantity });
    toast({
      title: "Added to cart",
      description: `${quantity} ${produce.name}(s) added to your cart.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{produce.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`/${produce.name}.png`}
          alt={produce.name}
          width={200}
          height={200}
          className="mb-4"
        />
        <p className="text-2xl font-bold">${produce.price}</p>
        <p>Farmer: {produce.farmer.name}</p>
        <p>Rating: 4/5</p>
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
