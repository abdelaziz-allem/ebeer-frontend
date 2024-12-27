"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopPerformers from "./TopPerformers";

const dummyData = {
  totalTransactions: 1234,
  totalRevenue: 98765,
  activeUsers: 567,
  newConnections: 89,
  trendData: [
    { date: "2023-01", transactions: 800, revenue: 75000 },
    { date: "2023-02", transactions: 900, revenue: 82000 },
    { date: "2023-03", transactions: 1000, revenue: 90000 },
    { date: "2023-04", transactions: 1100, revenue: 95000 },
    { date: "2023-05", transactions: 1234, revenue: 98765 },
  ],
  categoryData: [
    { name: "Vegetables", value: 400 },
    { name: "Fruits", value: 300 },
    { name: "Grains", value: 200 },
    { name: "Dairy", value: 100 },
    { name: "Other", value: 50 },
  ],
  topFarmers: [
    { name: "Green Acres Farm", value: 50000 },
    { name: "Sunny Valley Orchard", value: 45000 },
    { name: "Meadow Brook Dairy", value: 40000 },
    { name: "Golden Grain Fields", value: 35000 },
    { name: "Fresh Picks Garden", value: 30000 },
  ],
  topShops: [
    { name: "Farm Fresh Market", value: 60000 },
    { name: "Nature's Bounty Store", value: 55000 },
    { name: "Green Grocer", value: 50000 },
    { name: "Harvest Home Foods", value: 45000 },
    { name: "The Produce Stand", value: 40000 },
  ],
};

export default function AnalyticsDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800">
          FarmConnect Analytics
        </h1>
        <p className="text-xl text-green-600">Bridging Farmers and Shops</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Transactions",
            value: dummyData.totalTransactions,
            color: "bg-green-100",
          },
          {
            title: "Total Revenue",
            value: `$${dummyData.totalRevenue.toLocaleString()}`,
            color: "bg-blue-100",
          },
          {
            title: "Active Users",
            value: dummyData.activeUsers,
            color: "bg-yellow-100",
          },
          {
            title: "New Connections",
            value: dummyData.newConnections,
            color: "bg-purple-100",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`${item.color} border-none shadow-md`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Farmers and Shops</CardTitle>
          </CardHeader>
          <CardContent>
            <TopPerformers
              farmers={dummyData.topFarmers}
              shops={dummyData.topShops}
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
