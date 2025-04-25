interface TimerDisplayProps {
  time: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  value: string;
}

export function TimerDisplay({ time, isEditing, onChange, value }: TimerDisplayProps) {
  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="sm:text-9xl text-6xl text-(--color-primary) bg-transparent max-w-full w-full text-center border-none outline-none"
          maxLength={8}
        />
      ) : (
        <span className="sm:text-9xl text-6xl">{time}</span>
      )}
    </>
  );
}