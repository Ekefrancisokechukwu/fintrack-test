interface Status {
  status: WalletStatus;
}

export type WalletStatus = "Active" | "Inactive" | "Suspended" | "Closed";

export function Status({ status }: Status) {
  const statusStyles: Record<WalletStatus, string> = {
    Active: "bg-[#087A2E]",
    Inactive: "bg-[#FFB800]",
    Suspended: "bg-[#C6381B]",
    Closed: "bg-[#8C8C8C]",
  };

  return (
    <div className="flex w-max cursor-default items-center gap-x-2 py-1 px-2  rounded-2xl bg-[#34616f17]">
      <span className=" size-1.5 shrink-0  min-[400px]:block hidden rounded-full bg-[#087A2E]" />
      <span className="sm:text-[.94rem] text-[.7rem] font-medium ">Active</span>
    </div>
  );
}
