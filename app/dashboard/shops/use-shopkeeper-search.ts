import { User } from "@/lib/types/type";
import { useState, useMemo } from "react";

export function useShopKeeperSearch(ShopKeepers: User[]) {
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
