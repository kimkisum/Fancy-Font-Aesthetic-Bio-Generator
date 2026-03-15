"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onDone: () => void;
}

export default function Toast({ message, visible, onDone }: ToastProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setLeaving(false);
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(onDone, 200);
    }, 1800);
    return () => clearTimeout(timer);
  }, [visible, message, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <div
        className={`
          px-4 py-2.5 rounded-lg
          bg-ed-charcoal text-white text-[13px] font-medium
          ${leaving ? "animate-toast-out" : "animate-toast-in"}
        `}
      >
        {message}
      </div>
    </div>
  );
}
