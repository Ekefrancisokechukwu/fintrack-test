import { Header, Sidebar, SidebarResponsive } from "@/components/layout";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[84rem] grid xl:grid-cols-[auto_1fr] grid-cols-1 gap-x-12 2xl:px-0 px-3">
        <Sidebar />
        <SidebarResponsive />
        {/* Main content area */}
        <main className="pb-10  pt-7">{children}</main>
      </div>
    </>
  );
}
