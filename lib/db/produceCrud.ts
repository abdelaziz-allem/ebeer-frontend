"use server";

import { axiosInstance, getAuthHeaders } from "./axiosInstance";
import { CreateProduce, Produce, UpdateProduce } from "../types/type";

export async function getProduce(): Promise<Produce[]> {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.get("/produce", { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching produces:", error);
    throw new Error("Failed to fetch produces");
  }
}

export const createProduce = async (
  produceData: CreateProduce
): Promise<Produce> => {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.post("/produce", produceData, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating produce:", error);
    throw new Error("Failed to create produce");
  }
};

export async function updateProduce(
  produceId: number,
  updatedData: UpdateProduce
): Promise<Produce> {
  const headers = getAuthHeaders();
  try {
    const response = await axiosInstance.put(
      `/produce/${produceId}`,
      updatedData,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating produce:", error);
    return Promise.reject(new Error("Failed to update produce"));
  }
}

export async function deleteProduce(id: number): Promise<void> {
  const headers = getAuthHeaders();
  try {
    await axiosInstance.delete(`/produce/${id}`, { headers });
  } catch (error) {
    console.error("Error deleting produce:", error);
    throw new Error("Failed to delete produce");
  }
}
