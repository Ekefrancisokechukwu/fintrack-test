"use client";

import { transactions as initialTransactions } from "@/constants";
import { UIIcons } from "../icons";
import { TableStatus } from "./status";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

// interface DashboardSummary {
//   totalBalance: number;
//   totalCredits: number;
//   totalDebits: number;
//   transactionCount: number;
//   balanceChange: number;
//   creditsChange: number;
//   debitsChange: number;
//   transactionChange: number;
// }

type Transaction = (typeof initialTransactions)[number];
type SortOrder = "asc" | "desc";

export function TransactionTable() {
  const [sortKey, setSortKey] = useState<keyof Transaction>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (key: keyof Transaction) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedTransactions = useMemo(() => {
    return [...initialTransactions].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      // Handle numbers
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      // Handle dates
      if (sortKey === "date") {
        const aDate = new Date(aValue as string).getTime();
        const bDate = new Date(bValue as string).getTime();
        return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
      }

      // Handle text
      return sortOrder === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [sortKey, sortOrder]);

  const headers: { label: string; key: keyof Transaction }[] = [
    { label: "Date", key: "date" },
    { label: "Remark", key: "remark" },
    { label: "Amount", key: "amount" },
    { label: "Currency", key: "currency" },
    { label: "Type", key: "type" },
  ];

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="w-full  border-separate border-spacing-x-4.5">
          <thead>
            <tr>
              {headers.map(({ label, key }) => {
                return (
                  <th
                    key={key}
                    className="border-b  py-1.5 border-[#49656E33] first:w-[30rem]"
                  >
                    <button
                      onClick={() => handleSort(key)}
                      className="text-[#15272Da1] w-full text-[.813rem] flex items-center gap-x-1.5"
                    >
                      {label}
                      <span className="ml-1 text-gray-400 text-xs">
                        <UIIcons.CaretDown
                          fill="#15272Da1"
                          className={cn(
                            "transition-all",
                            sortKey === key && sortOrder === "desc"
                              ? "rotate-180"
                              : ""
                          )}
                        />
                      </span>
                    </button>
                  </th>
                );
              })}

              {/* <th className="border-b py-1.5 border-[#49656E33] ">
                <button className="text-[#15272Da1] text-[.813rem] flex items-center gap-x-1.5">
                  Remark
                  <span className="ml-1 text-gray-400 text-xs">
                    <UIIcons.CaretDown fill="#15272Da1" />
                  </span>
                </button>
              </th>
              <th className="border-b py-1.5 border-[#49656E33] ">
                <button className="text-[#15272Da1] text-[.813rem] flex items-center gap-x-1.5">
                  Amount
                  <span className="ml-1 text-gray-400 text-xs">
                    <UIIcons.CaretDown fill="#15272Da1" />
                  </span>
                </button>
              </th>
              <th className="border-b py-1.5 border-[#49656E33] ">
                <button className="text-[#15272Da1] text-[.813rem] flex items-center gap-x-1.5">
                  Currency
                  <span className="ml-1 text-gray-400 text-xs">
                    <UIIcons.CaretDown fill="#15272Da1" />
                  </span>
                </button>
              </th>
              <th className="border-b py-1.5 border-[#49656E33] ">
                <button className="text-[#15272Da1] text-[.813rem] flex items-center gap-x-1.5">
                  Type
                  <span className="ml-1 text-gray-400 text-xs">
                    <UIIcons.CaretDown fill="#15272Da1" />
                  </span>
                </button>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((tx) => {
              return (
                <tr key={tx.id}>
                  <td className="text-[.938rem] truncate py-4.5 border-b border-[#49656E33]">
                    {tx.date}
                  </td>
                  <td className="text-[.938rem]  sm:whitespace-normal sm:overflow-visible sm:text-ellipsis truncate py-4.5  border-b border-[#49656E33]">
                    {tx.remark}
                  </td>
                  <td className="text-[.938rem] py-4.5 border-b border-[#49656E33]">
                    ${tx.amount}
                  </td>
                  <td className="text-[.938rem] py-4.5 border-b border-[#49656E33]">
                    {tx.currency}
                  </td>
                  <td className="text-[.938rem] py-4.5 border-b border-[#49656E33]">
                    <TableStatus type={tx.type} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
