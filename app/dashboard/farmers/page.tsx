import React from "react";
import FarmerDirectory from "./FarmerDirectory";
import { getUsersByRole } from "@/lib/db/userCrud";

const FramerPage = async () => {
  const farmers = await getUsersByRole("Farmer");

  if (!farmers) return;

  return (
    <div>
      <FarmerDirectory farmers={farmers} />
    </div>
  );
};

export default FramerPage;
