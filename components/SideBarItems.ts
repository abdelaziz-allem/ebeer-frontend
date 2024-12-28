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
  Vegan,
  ShoppingCart,
  Leaf,
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
    role: ["Admin", "Farmer"],
  },

  {
    href: "/dashboard/shops",
    icon: Store,
    text: "Tukaan",
    role: ["Admin"],
  },

  {
    href: "/dashboard/produce",
    icon: Leaf,
    text: "Dalag",
    role: ["Admin"],
  },

  {
    href: "/dashboard/cart",
    icon: ShoppingCart,
    text: "Dalbo",
    role: ["Admin", "ShopKeeper"],
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
    role: ["Admin", "Farmer"],
  },

  {
    href: "/dashboard/users",
    icon: Users,
    text: "Users",
    role: ["Admin"],
  },
];

export default sidebarItems;
