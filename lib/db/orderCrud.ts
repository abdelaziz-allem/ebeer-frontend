"use server";

import { axiosInstance, getAuthHeaders } from "./axiosInstance";
import { CreateOrder, Order, UpdateOrder } from "../types/type";

export async function getOrders(): Promise<Order[]> {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.get("/order", { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}

export const createOrder = async (orderData: CreateOrder): Promise<Order> => {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.post("/order", orderData, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
};

export async function updateOrder(
  orderId: number,
  updatedData: UpdateOrder
): Promise<Order> {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.put(`/order/${orderId}`, updatedData, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    return Promise.reject(new Error("Failed to update order"));
  }
}

export async function deleteOrder(id: number): Promise<void> {
  const headers = getAuthHeaders();
  try {
    await axiosInstance.delete(`/order/${id}`, { headers });
  } catch (error) {
    console.error("Error deleting order:", error);
    throw new Error("Failed to delete order");
  }
}
