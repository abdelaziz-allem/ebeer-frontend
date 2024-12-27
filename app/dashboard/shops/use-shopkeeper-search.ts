import { useState, useMemo } from "react";
import { ShopKeeper } from "./shopkeeperdata";

export function useShopKeeperSearch(ShopKeepers: ShopKeeper[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShopKeepers = useMemo(() => {
    return ShopKeepers.filter((ShopKeeper) =>
      ShopKeeper.id.toString().includes(searchTerm.trim())
    );
  }, [ShopKeepers, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredShopKeepers,
  };
}
