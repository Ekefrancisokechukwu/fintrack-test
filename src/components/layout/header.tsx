"use client";

import { useSidebar } from "@/store/sidebar";
import { SearchInput } from "../common";
import { BrandIcons, UIIcons } from "../icons";
import User from "./user";

export const Header = () => {
  const { toggleIsCollapsed, isCollapsed } = useSidebar();
  return (
    <header className="bg-default z-50 sticky top-0 w-full">
      <div className=" bg-default 2xl:px-0 px-3 h-[var(--header-height)] flex items-center justify-between  mx-auto max-w-[84rem]">
        <div className="flex items-center sm:gap-x-7 min-[380px]:gap-x-5 gap-x-2.5">
          <button
            onClick={toggleIsCollapsed}
            className="size-[2rem] group rounded-lg transition-all duration-300 inline-flex p-1  hover:bg-neutral-100 items-center justify-center"
          >
            {isCollapsed ? (
              <UIIcons.HamburgerRight />
            ) : (
              <UIIcons.hamburgerMenu className="group-hover:scale-105 transition-transform" />
            )}
          </button>
          <BrandIcons.Logo />
        </div>
        <div className="flex items-center sm:gap-x-7 gap-x-5">
          <div>
            <SearchInput />
          </div>
          {/* Other apps dropdown */}
          <div className="md:flex hidden items-center">
            <button className="inline-flex hover:scale-105 transition-transform active:scale-100 items-center justify-center">
              <UIIcons.AppGrid />
            </button>
          </div>

          {/* Profile */}
          <User />
        </div>
      </div>
    </header>
  );
};
