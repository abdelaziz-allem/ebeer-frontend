"use client";

import { useState } from "react";
import { farmers } from "../shopkeeperdata";
import { useFarmerSearch } from "../use-shopkeeper-search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Wheat } from "lucide-react";

export default function FarmerDirectory() {
  const { searchTerm, setSearchTerm, filteredFarmers } =
    useFarmerSearch(farmers);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Farmer Directory
        </h1>
        <div className="mb-8">
          <Label
            htmlFor="search"
            className="text-lg font-medium text-green-700 mb-2 block"
          >
            Search by Farmer ID
          </Label>
          <Input
            id="search"
            type="text"
            placeholder="Enter farmer ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md border-green-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFarmers.map((farmer) => (
            <Card
              key={farmer.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={farmer.imageUrl}
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-green-800">
                  {farmer.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-2">ID: {farmer.id}</p>
                <p className="flex items-center justify-center text-green-700 mb-2">
                  <Wheat className="w-4 h-4 mr-2" />
                  {farmer.specialty}
                </p>
                <p className="flex items-center justify-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {farmer.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
