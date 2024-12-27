"use client";

import { Button } from "@/components/ui/button";
import { products } from "./data";

const produceTypes = Array.from(
  new Set(products.map((product) => product.name))
);

interface FilterButtonsProps {
  selectedProduce: string | null;
  setSelectedProduce: (produce: string | null) => void;
}

export default function FilterButtons({
  selectedProduce,
  setSelectedProduce,
}: FilterButtonsProps) {
  const handleProduceClick = (produce: string) => {
    setSelectedProduce(produce === selectedProduce ? null : produce);
    console.log(
      "Selected produce:",
      produce === selectedProduce ? null : produce
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      <span className="font-bold mr-2">Filter by produce:</span>
      {produceTypes.map((produce) => (
        <Button
          key={produce}
          variant={produce === selectedProduce ? "default" : "outline"}
          onClick={() => handleProduceClick(produce)}
        >
          {produce}
        </Button>
      ))}
    </div>
  );
}
