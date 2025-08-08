import { UIIcons } from "../icons";

interface StatCardProps {
  title: string;
  value: string;
  percent: number;
}

export function StatCard({ percent, title, value }: StatCardProps) {
  return (
    <div className="p-7 bg-[#34616f17] rounded-[20px]">
      <div className="flex items-center justify-between">
        <span className="font-bold sm:text-[1.063rem] text-[.8rem]">
          {title}
        </span>
        <button>
          <UIIcons.Ellipsis />
        </button>
      </div>

      <p className="sm:mt-4.5 mt-3 font-bold sm:text-[2.12rem] text-[1.3rem]">
        {value}
      </p>
      <p className="text-[#3E7383] font-medium sm:text-sm text-sm">
        +{percent}%
      </p>
    </div>
  );
}
