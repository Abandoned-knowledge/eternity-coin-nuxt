import { CategoryIcon, StatisticsIcon, DashboardIcon, ProfileIcon } from "@/shared/icons";

export const menuItems = [
  {
    label: "Dashboard",
    route: "/",
    icon: DashboardIcon,
  },
  {
    label: "Statistics",
    route: "/statistics",
    icon: StatisticsIcon,
  },
  {
    label: "Categories",
    route: "/categories",
    icon: CategoryIcon,
  },
];

export const burgerMenuItems = [
  ...menuItems,
  {
    label: "Profile",
    route: "/profile",
    icon: ProfileIcon,
  },
];
