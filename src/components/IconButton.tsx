import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  iconClassName?: string;
  onClick?: () => void;
}

export function IconButton({ icon: Icon, iconClassName = "", onClick }: IconButtonProps) {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-(--color-border) hover:bg-(--color-border) cursor-pointer"
    >
      <Icon className={`w-4 h-4 ${iconClassName}`} />
    </div>
  );
}