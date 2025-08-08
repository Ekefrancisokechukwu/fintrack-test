import { Status } from "../common";
import { UIIcons } from "../icons";

export function WalletLedger() {
  return (
    <div>
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <button className="flex items-center group">
          <span className="font-bold md:text-[2.09rem] sm:text-[1.5rem] text-[1.2rem]">
            Wallet Ledger
          </span>
          <div className="p-1.5 rounded-lg grid ml-1 group-hover:bg-neutral-100 place-items-center">
            <UIIcons.CaretDown />
          </div>
        </button>
        <Status status="Active" />
      </div>
    </div>
  );
}
