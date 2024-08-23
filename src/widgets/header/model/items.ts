import { CategoryIcon, AnalyticsIcon, DashboardIcon, ProfileIcon } from "@/shared/icons";

export const menuItems = [
  {
    label: "Dashboard",
    route: "/",
    icon: DashboardIcon,
  },
  {
    label: "Analytics",
    route: "/analytics",
    icon: AnalyticsIcon,
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
