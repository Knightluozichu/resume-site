import RevealWrapper from "./RevealWrapper";
import { patents, honors, education } from "@/data/patents";

export default function PatentsSection() {
  return (
    <section id="patents" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <RevealWrapper>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-tight mb-6">
            专利与荣誉
          </h2>
        </RevealWrapper>

        <RevealWrapper>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            虚拟技术专利{" "}
            <span className="text-[var(--color-accent-cyan)] font-semibold">
              {patents.length} 项
            </span>
            · 含已公开{" "}
            <span
              className="font-semibold tracking-wide"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              CN121734437A
            </span>
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {patents.map((p) => (
              <span
                key={p}
                className="inline-block px-3 py-1.5 text-xs rounded-lg border transition-colors duration-200 hover:border-[rgba(0,212,255,0.2)] hover:bg-[rgba(0,212,255,0.04)]"
                style={{
                  borderColor: "var(--color-border-default)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-secondary)]">
            {honors.map((h) => (
              <span key={h} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-purple)]" />
                {h}
              </span>
            ))}
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-default)]" />
              {education}
            </span>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
