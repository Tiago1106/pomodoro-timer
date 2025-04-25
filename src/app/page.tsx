'use client'

import { useEffect, useRef, useState } from "react";

import { TimerDisplay } from "@/components/TimerDisplay";
import { ControlPanel } from "@/components/ControlPanel";

export default function Home() {
  const [time, setTime] = useState("00:00:30");

  const [isEditing, setIsEditing] = useState(false);
  const [editableTime, setEditableTime] = useState("00:00:30");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        const [h, m, s] = prev.split(":").map(Number);
        const total = h * 3600 + m * 60 + s;

        if (total <= 0) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return "00:00:00";
        }

        const next = total - 1;
        const hh = String(Math.floor(next / 3600)).padStart(2, "0");
        const mm = String(Math.floor((next % 3600) / 60)).padStart(2, "0");
        const ss = String(next % 60).padStart(2, "0");
        return `${hh}:${mm}:${ss}`;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime("00:00:30");
  };

  const editTimer = () => {
    setEditableTime(time);
    setIsEditing(true);
  };

  const acceptEdit = () => {
    setTime(editableTime);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const handleChangeTime = (value: string) => {    
    setEditableTime(value);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="font-[family-name:var(--font-orbitron)] flex items-center justify-center h-screen w-full flex-col gap-4 bg-(--color-background)">
      <TimerDisplay time={time} isEditing={isEditing} onChange={handleChangeTime} value={editableTime} />
      <ControlPanel onPlay={startTimer} onPause={pauseTimer} onReset={resetTimer} onEdit={editTimer} onAccept={acceptEdit} onCancel={cancelEdit} isEditing={isEditing} />
    </div>
  );
}
