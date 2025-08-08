"use client";

import { useEffect, useRef, useState } from "react";
import { UIIcons } from "../icons";
import { cn } from "@/lib/utils";

export function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex min-w-[2rem] items-center gap-x-0 ">
      <div
        className={cn(
          "w-[20rem]  relative transition-all duration-100 ease-out",
          isOpen ? "w-[20rem] opacity-100" : "w-0 opacity-0"
        )}
      >
        <span className="appearance-none">
          <UIIcons.Search
            width={18}
            className="absolute !stroke-neutral-400 left-2 top-1/2 -translate-y-1/2"
          />
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className={cn(
            "border w-full pr-4 h-8 rounded-lg pl-9  focus:border-gray-300 focus:ring-1 ring-offset-0 ring-neutral-300 transition-all duration-300 outline-0 border-gray-200"
          )}
        />
        <button
          onClick={toggleSearch}
          className="absolute hover:scale-110 transition-transform right-2 top-1/2 -translate-y-1/2"
        >
          <UIIcons.X stroke="#d0cece" width={20} />
        </button>
      </div>

      <button
        onClick={toggleSearch}
        className={cn(
          "size-[2rem] absolute rounded-lg transition-all duration-100 ease-out inline-flex p-1 hover:bg-neutral-100 items-center justify-center",
          isOpen
            ? "-translate-x-[10rem] opacity-0 invisible"
            : "translate-x-0 opacity-100 visible"
        )}
      >
        <UIIcons.Search />
      </button>
    </div>
  );
}
