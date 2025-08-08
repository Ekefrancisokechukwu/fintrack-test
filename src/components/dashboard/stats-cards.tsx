import { StatCard } from "./stat-card";

export function StatsCards() {
  return (
    <div className="mt-4.5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]  lg:gap-7 gap-4">
      {/* total balnce */}
      <StatCard title="Total Balance" percent={5} value={"$12, 345"} />

      {/* Total Credits */}
      <StatCard title="Total Credits" percent={3} value={"$7,890"} />

      {/* Total Debits */}
      <StatCard title="Total Debits" percent={2} value={"$4,455"} />

      {/* Total Debits */}
      <StatCard title="Transactions" percent={10} value={"150"} />
    </div>
  );
}
