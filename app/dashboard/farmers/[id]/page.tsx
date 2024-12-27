"use client";

import { useState } from "react";
import { farmer } from "./farmer-data";
import { useShoppingCart } from "./use-shopping-cart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

export default function FarmerProfile() {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice } =
    useShoppingCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (itemId: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [itemId]: Math.max(0, value) }));
  };

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={farmer.imageUrl}
                alt={farmer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-emerald-800">
                  {farmer.name}
                </CardTitle>
                <p className="text-xl text-emerald-600">{farmer.specialty}</p>
              </CardHeader>
              <CardContent>
                <p className="flex items-center  mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  {farmer.location}
                </p>
                <p>{farmer.bio}</p>
              </CardContent>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-emerald-800 mb-6">
          Available Produce
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {farmer.produce.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {item.name}
                </CardTitle>
                <p className="text-emerald-600 font-medium">
                  ${item.price.toFixed(2)} / {item.unit}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`quantity-${item.id}`}>Quantity:</Label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          (quantities[item.id] || 0) - 1
                        )
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      id={`quantity-${item.id}`}
                      type="number"
                      value={quantities[item.id] || 0}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-16 mx-2 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          (quantities[item.id] || 0) + 1
                        )
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => addToCart(item, quantities[item.id] || 0)}
                  disabled={!quantities[item.id]}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <ShoppingCart className="mr-2" />
              Shopping Cart
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center">
                      <span className="mx-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </span>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={cart.length === 0}
            >
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
