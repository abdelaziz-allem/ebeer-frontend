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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Phone,
  Scale,
  Search,
  Tractor,
  User,
  Info,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface orderTableProps {
  userInSession: any; // Replace with appropriate type if needed
}

const orders = [
  {
    id: 1,
    userId: 101,
    farmerId: 201,
    produceId: 1,
    quantity: 5,
    createAt: "2024-12-26T10:00:00Z",
    user: { name: "Nimco Ahmed", phone: "+1234567890" },
    farmer: { name: "Abdi Ali", phone: "+1987654321" },
    produce: { name: "Carrots" },
  },
  {
    id: 2,
    userId: 102,
    farmerId: 202,
    produceId: 1,
    quantity: 10,
    createAt: "2024-12-25T14:30:00Z",
    user: { name: "Jane Smith", phone: "+1234509876" },
    farmer: { name: "Sunny Acres", phone: "+1987601234" },
    produce: { name: "Carrots" },
  },
];

const OrdersTable = ({ userInSession }: orderTableProps) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="w-full shadow-none border-none">
      <CardContent>
        {/* Search */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 " />
            <Input
              className="pl-10 pr-4"
              placeholder="Search by shopkeeper name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full ">
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4 text-left">
                  Shopkeeper
                </TableHead>
                <TableHead className="px-6 py-4 text-left">Phone</TableHead>
                <TableHead className="px-6 py-4 text-left">Farmer</TableHead>
                <TableHead className="px-6 py-4 text-left">
                  Farmer Phone
                </TableHead>
                <TableHead className="px-6 py-4 text-left">Produce</TableHead>
                <TableHead className="px-6 py-4 text-left">Quantity</TableHead>
                <TableHead className="px-6 py-4 text-left">Date</TableHead>
                <TableHead className="px-6 py-4 text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <TableRow
                    key={order.id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <TableCell className="px-6 py-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-emerald-500" />
                      {order.user.name}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Phone className="w-5 h-5 text-blue-500 inline-block mr-2" />
                      {order.user.phone}
                    </TableCell>
                    <TableCell className="px-6 py-4 flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-emerald-500" />
                      {order.farmer.name}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Phone className="w-5 h-5 text-blue-500 inline-block mr-2" />
                      {order.farmer.phone}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge className="bg-emerald-500 text-white">
                        {order.produce.name}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-purple-500" />
                      {order.quantity} kg
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Calendar className="w-5 h-5 text-gray-500 inline-block mr-2" />
                      {formatDate(order.createAt)}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <button className="text-blue-500 hover:underline flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        View
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center py-6 text-gray-500"
                  >
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
