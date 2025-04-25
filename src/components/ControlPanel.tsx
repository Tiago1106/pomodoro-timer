import { Square, Play, Pen, Scan, X, Check } from "lucide-react";
import { IconButton } from "./IconButton";

interface ControlPanelProps {
  onPlay?: () => void;
  onPause?: () => void;
  onReset?: () => void;
  onEdit?: () => void;

  onAccept?: () => void;
  onCancel?: () => void;
  isEditing: boolean;
}

export function ControlPanel({ onPlay, onPause, onReset, onEdit, onAccept, onCancel, isEditing }: ControlPanelProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      {!isEditing ? (
        <>
          <IconButton icon={Scan} onClick={onReset} />
          <IconButton icon={Pen} onClick={onEdit} />
          <IconButton icon={Square} iconClassName="text-(--color-red)" onClick={onPause} />
          <IconButton icon={Play} iconClassName="text-(--color-primary)" onClick={onPlay} />
        </>
      ) : (
        <>
          <IconButton icon={X} iconClassName="text-(--color-red)" onClick={onCancel} />
          <IconButton icon={Check} iconClassName="text-(--color-primary)" onClick={onAccept} />
        </>
      )}

    </div>
  );
}