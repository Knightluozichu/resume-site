"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";
import TechBadge from "./TechBadge";
import { experiences, type Experience } from "@/data/experience";

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const showExpand = exp.paragraphs.length > 2;

  const displayParagraphs = expanded ? exp.paragraphs : exp.paragraphs.slice(0, 2);

  return (
    <RevealWrapper>
      <div
        className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 pb-12 last:pb-0"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* 时间线点和线 */}
        <div className="absolute left-0 top-1.5 md:relative md:col-span-2 md:flex md:items-start md:justify-end">
          <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-1">
            <div
              className="w-3 h-3 rounded-full border-2 flex-shrink-0"
              style={{
                borderColor: "var(--color-accent-cyan)",
                background: "var(--color-bg-primary)",
              }}
            />
            <time
              className="text-xs tracking-wider whitespace-nowrap text-[var(--color-text-tertiary)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {exp.period}
            </time>
          </div>
        </div>

        {/* 时间线连接线(仅桌面端) */}
        <div className="hidden md:block absolute md:static md:col-span-1 md:flex md:justify-center md:pt-3">
          <div className="w-px h-full min-h-[60px] bg-[var(--color-border-default)]" />
        </div>
        <div className="absolute left-[5px] top-6 bottom-0 w-px bg-[var(--color-border-default)] md:hidden" />

        {/* 内容卡片 */}
        <div className="md:col-span-8 lg:col-span-8">
          <div className="glass-card rounded-xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.01] hover:border-[rgba(255,255,255,0.12)]">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {exp.company} · {exp.role}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {exp.badges.map((badge) => (
                  <TechBadge key={badge} label={badge} />
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {displayParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {showExpand && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-xs text-[var(--color-accent-cyan)] hover:underline transition-colors"
              >
                {expanded ? "收起" : `展开全部（共${exp.paragraphs.length}条）`}
              </button>
            )}
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <RevealWrapper>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-tight mb-16">
            工作经历
          </h2>
        </RevealWrapper>

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
