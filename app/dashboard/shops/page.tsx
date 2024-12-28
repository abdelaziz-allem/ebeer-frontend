import React from "react";
import { getUsersByRole } from "@/lib/db/userCrud";
import ShopKeeperDirectory from "./ShopKeeperDirectory";

const ShopKeeperPage = async () => {
  const shopkeepers = await getUsersByRole("ShopKeeper");

  if (!shopkeepers) return;

  return (
    <div>
      <ShopKeeperDirectory shopKeepers={shopkeepers} />
    </div>
  );
};

export default ShopKeeperPage;
