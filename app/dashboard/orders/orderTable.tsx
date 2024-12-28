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
import { Order } from "@/lib/types/type";

interface orderTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: orderTableProps) => {
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
                <TableHead className="px-6 py-4 text-left">Price</TableHead>
                <TableHead className="px-6 py-4 text-left">Quantity</TableHead>
                <TableHead className="px-6 py-4 text-left">
                  Total Paid
                </TableHead>
                <TableHead className="px-6 py-4 text-left">Date</TableHead>
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
                      {order.user.mobileNumber}
                    </TableCell>
                    <TableCell className="px-6 py-4 flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-emerald-500" />
                      {order.produce.farmer.name}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Phone className="w-5 h-5 text-blue-500 inline-block mr-2" />
                      {order.produce.farmer.mobileNumber}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge className="bg-emerald-500 text-white">
                        {order.produce.name}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 gap-2">
                      $ {order.produce.price} / kg
                    </TableCell>
                    <TableCell className="px-6 py-4 gap-2">
                      {order.quantity} kg
                    </TableCell>
                    <TableCell className="px-6 py-4 gap-2">
                      $ {order.quantity * +order.produce.price}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <Calendar className="w-5 h-5 text-blue-500 inline-block mr-2" />
                      {formatDate(order.createAt)}
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
