"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Produce, User } from "@/lib/types/type";
import { Card, CardContent } from "@/components/ui/card";
import AddProduce from "./AddProduce";

interface ProduceProps {
  produce: Produce[];
  users: User[];
}

const ProducesTable = ({ produce, users }: ProduceProps) => {
  const [search, setSearch] = useState("");

  const currentProduces = produce.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent>
        <div className="flex gap-3 mb-4">
          <Input
            className="w-auto"
            placeholder="Search by room number..."
            value={search}
            onChange={handleInputChange}
          />
          <AddProduce users={users} />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Farmer</TableHead>
              <TableHead>Mobile #</TableHead>
              <TableHead>Produce</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price /kg</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentProduces.map((i) => (
              <TableRow key={i.id}>
                <TableCell>{i.farmer.name}</TableCell>
                <TableCell>{i.farmer.mobileNumber}</TableCell>
                <TableCell>{i.name}</TableCell>
                <TableCell>{i.stock}</TableCell>
                <TableCell>$ {i.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProducesTable;
