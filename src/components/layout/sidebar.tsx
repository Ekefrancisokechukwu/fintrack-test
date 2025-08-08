"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navlinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Transactions",
    href: "/transactions",
  },
  {
    name: "Reports",
    href: "/reports",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "sticky   bg-default xl:-ml-0 -ml-[50rem] xl:block hidden  transition-all  duration-300  top-[var(--header-height)] h-[calc(100vh_-_var(--header-height))] pt-7",
        isCollapsed ? "w-[9rem]" : "w-[20rem]"
      )}
    >
      <ul>
        {navlinks.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.name} className="w-full">
              <Link
                href={link.href}
                className={cn(
                  "inline-flex text-[15px] transition duration-200 rounded-2xl py-2 w-full px-4.5 font-medium",
                  active
                    ? "bg-[#38677629] text-[#3A6C7B]"
                    : "bg-transparent hover:bg-neutral-100"
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
