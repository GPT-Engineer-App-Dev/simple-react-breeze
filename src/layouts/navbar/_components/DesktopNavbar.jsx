import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-4 rounded-lg">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base text-white"
    >
      <Package2 className="h-6 w-6" />
      <span>Rainbow Inc</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to} className="text-white hover:text-purple-200">
        {item.title}
      </NavItem>
    ))}
  </nav>
);