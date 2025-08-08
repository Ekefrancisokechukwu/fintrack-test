export function TableStatus({ type }: { type: string }) {
  const color = type === "Debit" ? "#C6381B" : "#087A2E";

  return (
    <div className="flex cursor-default w-max items-center gap-x-2 py-1 px-2  rounded-2xl bg-[#34616f17]">
      <span
        style={{ backgroundColor: color }}
        className="block size-1.5 shrink-0 rounded-full "
      />
      <span className="text-[.94rem] font-medium">{type}</span>
    </div>
  );
}
