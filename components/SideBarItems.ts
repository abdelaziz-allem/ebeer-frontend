import {
  CalendarDays,
  GalleryHorizontal,
  ShieldCheck,
  UserCheck,
  // Users,
  TrendingDown,
  TrendingUp,
  DoorOpen,
  LayoutGrid,
  Store,
  TreeDeciduous,
  Users,
  ListMinus,
  Camera,
} from "lucide-react";
const sidebarItems = [
  {
    href: "/dashboard/overview",
    icon: LayoutGrid,
    text: "Hordhac",
    role: ["Admin"],
  },

  {
    href: "/dashboard/orders",
    icon: ListMinus,
    text: "Dalab",
    role: ["Admin", "Reception", "Housekeeping"],
  },

  {
    href: "/dashboard/shops",
    icon: Store,
    text: "Tukaan",
    role: ["Admin"],
  },

  {
    href: "/dashboard/cart",
    icon: Store,
    text: "Dalbo",
    role: ["Admin"],
  },

  {
    href: "/dashboard/farmers",
    icon: TreeDeciduous,
    text: "Beeroole",
    role: ["Admin"],
  },

  {
    href: "/dashboard/cure",
    icon: Camera,
    text: "Hel cudurka",
    role: ["Admin"],
  },

  {
    href: "/dashboard/users",
    icon: Users,
    text: "Users",
    role: ["Admin"],
  },
];

export default sidebarItems;
