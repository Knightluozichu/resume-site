const badgeStyles: Record<string, string> = {
  架构: "bg-[rgba(0,212,255,0.08)] text-[var(--color-accent-cyan)]",
  性能: "bg-[rgba(123,97,255,0.08)] text-[var(--color-accent-purple)]",
  自研: "bg-[rgba(52,211,153,0.08)] text-[var(--color-success)]",
  攻关: "bg-[rgba(251,191,36,0.08)] text-[#fbbf24]",
  协议: "bg-[rgba(244,114,182,0.08)] text-[#f472b6]",
};

export default function TechBadge({ label }: { label: string }) {
  const style = badgeStyles[label] || "bg-[rgba(255,255,255,0.06)] text-[var(--color-text-secondary)]";

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[11px] font-mono tracking-wider rounded ${style}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {label}
    </span>
  );
}
