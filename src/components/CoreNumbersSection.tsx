"use client";

import { useNumberCounter, useReveal } from "@/hooks/useReveal";

interface NumberCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function NumberCard({ value, suffix = "", label, delay }: NumberCardProps) {
  const { value: count, ref } = useNumberCounter(value);
  const { ref: cardRef, revealed } = useReveal(0.2);

  return (
    <div
      ref={(node) => {
        (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (ref as React.MutableRefObject<HTMLSpanElement | null>).current =
          node?.querySelector(".number-value") ?? null;
      }}
      className={`glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,212,255,0.15)] hover:shadow-[0_0_40px_rgba(0,212,255,0.06)] ${
        revealed ? "reveal revealed" : "reveal"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="text-[clamp(2.25rem,5vw,3rem)] font-bold tracking-tight mb-1 number-value"
        style={{
          fontFamily: "'Inter', 'JetBrains Mono', sans-serif",
          background: "var(--color-accent-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </div>
      <div className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-[var(--color-text-secondary)] leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function CoreNumbersSection() {
  const numbers = [
    { value: 7, suffix: "年+", label: "引擎开发经验" },
    { value: 50, suffix: "%→10%", label: "面捕模块\nCPU占用降低" },
    { value: 11, suffix: "→30", label: "FPS\nWeb端低端机帧率提升" },
    { value: 1550, suffix: "万+", label: "驱动B站直播年营收（元）" },
    { value: 30, suffix: "%→93%", label: "WebGL\n3D渲染覆盖率" },
    { value: 12, suffix: "项", label: "虚拟技术专利" },
  ];

  return (
    <section id="numbers" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {numbers.map((n, i) => (
            <NumberCard key={i} {...n} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
