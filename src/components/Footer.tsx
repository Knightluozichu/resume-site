"use client";

import RevealWrapper from "./RevealWrapper";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-[var(--color-border-default)]">
      <div className="mx-auto max-w-6xl text-center">
        <RevealWrapper>
          <h2 className="text-2xl font-semibold mb-8">联系我</h2>

          <div className="space-y-3 text-sm text-[var(--color-text-secondary)] mb-10">
            <p>
              <a
                href="mailto:rainknightpox@gmail.com"
                className="hover:text-[var(--color-accent-cyan)] transition-colors"
              >
                rainknightpox@gmail.com
              </a>
            </p>
            <p>
              <span>13928245451（微信同号）</span>
            </p>
            <p>📍 中国 · 上海</p>
          </div>

          <div className="text-xs text-[var(--color-text-tertiary)]">
            <p>© {new Date().getFullYear()} 罗子初 · resume.luozichu.ink</p>
          </div>
        </RevealWrapper>
      </div>
    </footer>
  );
}
