import { Produce, User, userInSessionType } from "@/lib/types/type";
import SkeletonDemo from "@/components/SkeletonDemo";
import { getProduce } from "@/lib/db/produceCrud";
import ProduceList from "./ProduceList";
import { getUserInSession } from "@/lib/userInSession";

const CartPage = async () => {
  let produce: Produce[] | null = null;
  let userInSession: userInSessionType | null = null;
  let error: string | null = null;

  try {
    produce = await getProduce();
    userInSession = getUserInSession();
  } catch (err) {
    console.error("Error fetching produce:", err);
    error = "Failed to load produce. Please try again later.";
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (produce === null || userInSession === null) {
    return <SkeletonDemo />;
  }

  return (
    <div className="text-gray-900 dark:text-slate-50">
      <ProduceList produce={produce} userInSession={userInSession} />
    </div>
  );
};

export default CartPage;
