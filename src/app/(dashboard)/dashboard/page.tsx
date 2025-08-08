import {
  Share,
  UsersAvaters,
  WalletLedger,
  StatsAndDatatable,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <WalletLedger />
        <div>
          <Share />
        </div>
      </div>
      {/* users avater */}
      <div className="mt-7">
        <UsersAvaters />
      </div>

      {/* stats and data table */}
      <div className="mt-7">
        <StatsAndDatatable />
      </div>
    </>
  );
}
