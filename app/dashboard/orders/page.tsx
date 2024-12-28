import SkeletonDemo from "@/components/SkeletonDemo";
import { Order } from "@/lib/types/type";
import { getOrders } from "@/lib/db/orderCrud";
import OrdersTable from "./orderTable";

const OrderPage = async () => {
  let orders: Order[] | null = null;
  let error: string | null = null;

  try {
    orders = await getOrders();
  } catch (err) {
    console.error("Error fetching roomTypes:", err);
    error = "Failed to load roomTypes. Please try again later.";
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (orders === null) {
    return <SkeletonDemo />;
  }

  return (
    <div className="text-gray-900 dark:text-slate-50">
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrderPage;
