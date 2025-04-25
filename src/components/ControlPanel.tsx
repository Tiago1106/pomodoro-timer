import { Square, Play, Pen, X, Check, Maximize, Minimize } from "lucide-react";
import { IconButton } from "./IconButton";

interface ControlPanelProps {
  onPlay?: () => void;
  onPause?: () => void;
  onEdit?: () => void;
  onFullScreen?: () => void;
  isFullScreen?: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
  isEditing: boolean;
  isSeconds: boolean;
}

export function ControlPanel({ onPlay, onPause, onEdit, onFullScreen, onAccept, onCancel, isEditing, isFullScreen, isSeconds }: ControlPanelProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      {!isEditing && !isSeconds && (
        <>
          <IconButton icon={isFullScreen ? Minimize : Maximize} onClick={onFullScreen} />
          <IconButton icon={Pen} onClick={onEdit} />
          <IconButton icon={Square} iconClassName="text-(--color-red)" onClick={onPause} />
          <IconButton icon={Play} iconClassName="text-(--color-primary)" onClick={onPlay} />
        </>
      )}

      {isEditing && (
        <>
          <IconButton icon={X} iconClassName="text-(--color-red)" onClick={onCancel} />
          <IconButton icon={Check} iconClassName="text-(--color-primary)" onClick={onAccept} />
        </>
      )}

    </div>
  );
}