"use client";

import Link from "next/link";
import { navlinks } from "./sidebar";
import { useSidebar } from "@/store/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UIIcons } from "../icons";

export function SidebarResponsive() {
  const pathname = usePathname();
  const { isCollapsed, toggleIsCollapsed } = useSidebar();

  return (
    <>
      <div
        onClick={toggleIsCollapsed}
        className={cn(
          "fixed xl:hidden block  bg-black/50 backdrop-blur-xs z-[50] w-full h-screen top-0 left-0",
          isCollapsed ? "visible" : "invisible"
        )}
      />
      <aside
        className={cn(
          "max-w-[20rem] xl:hidden block px-3 pt-5 top-0 transition-all duration-300 fixed left-0 z-[60] w-full bg-default h-screen",
          isCollapsed ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleIsCollapsed}
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colorss border border-gray-300"
          >
            <UIIcons.X width={18} height={18} />
          </button>
        </div>
        <ul className="mt-8">
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
    </>
  );
}
