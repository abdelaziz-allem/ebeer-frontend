"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Wheat } from "lucide-react";
import { useShopKeeperSearch } from "./use-shopkeeper-search";
import { User } from "@/lib/types/type";

export default function ShopKeeperDirectory({
  shopKeepers,
}: {
  shopKeepers: User[];
}) {
  const { searchTerm, setSearchTerm, filteredShopKeepers } =
    useShopKeeperSearch(shopKeepers);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
          Shops Directory
        </h1>
        <div className="mb-8">
          <Label
            htmlFor="search"
            className="text-lg font-medium text-emerald-700 mb-2 block"
          >
            Search by shop ID
          </Label>
          <Input
            id="search"
            type="text"
            placeholder="Enter shop ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredShopKeepers.map((farmer) => (
            <Card
              key={farmer.id}
              className=" shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={"/shop.png"}
                    alt={farmer.name}
                    className="w-full h-full object-cover border-emerald-300 border-2 rounded-full"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-emerald-800">
                  {farmer.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-2">ID: {farmer.id}</p>
                <p className="flex items-center justify-center text-emerald-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {farmer.mobileNumber}
                </p>
                <p className="flex items-center justify-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Hargeisa
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
