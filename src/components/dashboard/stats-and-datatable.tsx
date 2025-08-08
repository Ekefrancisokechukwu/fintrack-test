"use client";

import { useState } from "react";
import { StatsCards } from "./stats-cards";
import { TransactionTable } from "./transaction-table";

export function StatsAndDatatable() {
  const [tab, setTab] = useState<"Overview" | "Transactions">("Overview");

  return (
    <div>
      <div className="flex items-center border-b border-gray-200">
        <button className="inline-flex text-[.92rem] text-[#437D8E] relative items-center py-3 px-7 font-medium">
          Overview
          <div className="w-full left-0 h-0.5 bg-[#4B8B9F] absolute top-full " />
        </button>
        <button className="inline-flex text-[.92rem]  relative items-center py-3 px-7 font-medium">
          Transactions
        </button>
      </div>

      {/* stats summary */}
      <div className="mt-8">
        <h1 className="sm:text-xl text-[1.2rem]  font-bold">Summary</h1>
        <StatsCards />
        {/* Transaction Table */}
        <div className="mt-8">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
