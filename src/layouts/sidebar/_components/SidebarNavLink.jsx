import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-purple-200 text-white",
        isActive && "bg-purple-600",
      )
    }
  >
    {children}
  </NavLink>
);