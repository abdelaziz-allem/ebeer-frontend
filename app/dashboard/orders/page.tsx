import SkeletonDemo from "@/components/SkeletonDemo";
import { userInSessionType } from "@/lib/types/type";
import { getUserInSession } from "@/lib/userInSession";
import OrdersTable from "./orderTable";

const OrderPage = async () => {
  let userInSession: userInSessionType | null = null;
  let error: string | null = null;

  try {
    userInSession = getUserInSession();
  } catch (err) {
    console.error("Error fetching roomTypes:", err);
    error = "Failed to load roomTypes. Please try again later.";
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (userInSession === null) {
    return <SkeletonDemo />;
  }

  return (
    <div className="text-gray-900 dark:text-slate-50">
      <OrdersTable userInSession={userInSession} />
    </div>
  );
};

export default OrderPage;
