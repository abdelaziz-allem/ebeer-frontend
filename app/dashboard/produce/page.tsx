import { Produce, User } from "@/lib/types/type";
import ProduceTable from "./produceTable";
import SkeletonDemo from "@/components/SkeletonDemo";
import { getProduce } from "@/lib/db/produceCrud";
import { getUsersByRole } from "@/lib/db/userCrud";

const GuestsPage = async () => {
  let produce: Produce[] | null = null;
  let users: User[] | null = null;
  let error: string | null = null;

  try {
    produce = await getProduce();
    users = await getUsersByRole("Farmer");
  } catch (err) {
    console.error("Error fetching produce:", err);
    error = "Failed to load produce. Please try again later.";
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (produce === null || users === null) {
    return <SkeletonDemo />;
  }

  return (
    <div className="text-gray-900 dark:text-slate-50">
      <ProduceTable produce={produce} users={users} />
    </div>
  );
};

export default GuestsPage;
