"use client";

import { useReveal } from "@/hooks/useReveal";

export default function RevealWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, revealed } = useReveal();

  return (
    <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}
