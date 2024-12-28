"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createOrder } from "@/lib/db/orderCrud";
import { Produce, userInSessionType } from "@/lib/types/type";
import { ShoppingCartIcon } from "lucide-react";
export interface CartItem extends Produce {
  quantity: number;
}
interface ShoppingCartProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  userInSession: userInSessionType;
}

export default function ShoppingCart({
  cartItems,
  removeFromCart,
  updateQuantity,
  userInSession,
}: ShoppingCartProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed top-4 right-4 rounded-full p-3 bg-emerald-500 hover:emerald-600 text-white">
          <ShoppingCartIcon size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>
                      ${Number(item.price).toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="ml-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t">
                <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
                <Button
                  className="w-full mt-4"
                  onClick={async () => {
                    try {
                      await Promise.all(
                        cartItems.map(async (item) => {
                          const order = await createOrder({
                            userId: userInSession.id,
                            produceId: item.id,
                            quantity: item.quantity,
                          });

                          try {
                            const response = await fetch("/api/send-twilio", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                to: `+252634688444`,
                                body: `You have a new order from ${userInSession.name} for ${order.quantity}kgs of ${order.produce.name}. Please check your order details.`,
                              }),
                            });

                            if (!response.ok) {
                              // Handle unsuccessful response
                              const errorData = await response.json();
                              console.error(
                                "Failed to send Twilio message:",
                                errorData
                              );
                            } else {
                              console.log("Twilio message sent successfully.");
                            }
                          } catch (error) {
                            // Handle network or unexpected errors
                            console.error(
                              "An error occurred while sending the Twilio message:",
                              error
                            );
                          }
                        })
                      );
                    } catch (error) {
                      console.error(
                        "Error processing orders or sending messages:",
                        error
                      );
                    }
                  }}
                >
                  Place Order
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
