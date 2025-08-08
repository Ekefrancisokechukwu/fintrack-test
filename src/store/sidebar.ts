import { create } from "zustand";

interface SidebarStore {
  isCollapsed: boolean;
  // isOpen: boolean;
  toggleIsCollapsed: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  isCollapsed: false,

  toggleIsCollapsed: () =>
    set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
