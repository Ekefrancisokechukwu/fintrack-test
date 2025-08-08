import { useClickOutside } from "@/hooks/use-clickoutside";
import { ReactNode, useRef, useState } from "react";

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
}

export function Popover({ trigger, content }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  // useClickOutside(popoverRef, () => setOpen(false));

  return (
    <div ref={popoverRef} className="relative">
      <div>{trigger}</div>
      <div className="absolute rounded-lg right-0 bg-default min-w-[7rem] p-4 shadow-md">
        {content}
      </div>
    </div>
  );
}
