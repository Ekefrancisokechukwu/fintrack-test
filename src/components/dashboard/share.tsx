import { UIIcons } from "../icons";

export function Share() {
  return (
    <div className="flex items-center gap-3 ">
      <button className="bg-[#4B8B9F] active:scale-100 transition-transform hover:scale-105  sm:py-2 py-1.5 sm:px-4.5 px-3.5 rounded-2xl sm:text-[15px] text-sm font-medium">
        Share
      </button>

      <div className="min-[400px]:block hidden">
        <button className="sm:p-2 p-1  rounded-2xl border hover:bg-neutral-100 transition-colors border-gray-300">
          <UIIcons.Ellipsis />
        </button>
      </div>
    </div>
  );
}
